tdl.provide('world')

//////////////////////////////////////////////////
function Cell(world,def,x,y) {
  this.world = world;
  this.x_ = x;
  this.y_ = y;
  this.setType(def);
}

Cell.prototype.setType = function(def) {
  this.ground_ent = this.world.newEntity(def.sprite)
  if(this.ground_ent === undefined)
    throw "Cell.setType() could instantiate a ground_ent by using:" + def.sprite
  this.passable = 'passable' in def ? def.passable : true;
}

Cell.prototype.draw = function(ctx, x, y, w, h) {
  this.ground_ent.draw(ctx,x,y,w,h);
}


///////////////////////////////////////////////////////////////////////////

function World(entityDefs, level) {
  this.width = level.width;
  this.height = level.height;
  this.hero = null;
  this.game = null;

  // entity defs are demand-initalized so that
  // entity defs can reference other entity defs during load
  this._entity_defs = entityDefs;

  // init the cell grid
  this.cells = []
  var i = 0;
  for(var i = 0; i < level.cells.length; ++i) {
    var cellType = level.cells[i]
    cx = i % this.width
    cy = Math.floor(i / this.width);
    var cell = new Cell(this, this.getDef(cellType), cx, cy)
    this.cells.push(cell)
  }

  this.actors = [];
  for(var actorID in level.actors) {
    instanceDef = level.actors[actorID];
    var a = this.newEntity(instanceDef.actor_def);
    a.init(instanceDef);

    this.actors.push(a);
  }
}


World.prototype.newEntity = function(entDefID) {
  def = this.getDef(entDefID);
  if(def === undefined)
    throw "World.newEntity() could not instantiate from entDefID: " + entDefID;

  var e = eval("new "+def.type+"(this, def)");
  return e;
}

World.prototype.getDef = function(entDefID) {
  if(this._entity_defs[entDefID] === undefined)
    tdl.log("World.getDef(" + entDefID + ") is returning 'undefined'!")
  return this._entity_defs[entDefID];
}

/**
 *
 * @param x {Number}
 * @param y {Number}
 * @return {Cell}
 */
World.prototype.cellAt = function(x,y) {
  idx = Math.floor(y) * this.width + Math.floor(x);
  return this.cells[idx];
}

World.prototype.defAt = function(x, y) {
  return this.getDef(this.cellAt(x, y).id);
}

// Convenience function for whether or not a given cell is not passable.
World.prototype.isBlocking = function(x, y) {
  var cell = this.cellAt(x, y);
  return cell ? !cell.passable : false;
}

// Convenience function for whether or not a given cell has something the
// player wants to run towards.
World.prototype.isDesirable = function(x, y) {
  return false;
}

World.prototype.draw_dbg = function (ctx) {
  cell_width = this.tileVisualWidth();
  cell_height = tile.tileVisualHeight();
  for(var i = 0; i < this.cells.length; ++i) {
    var cell =this.cells[i];
    ctx.strokeStyle = "rgb(255,255,0)";
    ctx.strokeRect(cell_width * cell.x_,
                   cell_height * cell.y_,
                   cell_width, cell_height);
  }
}

World.prototype.actors = [];

World.prototype.tileVisualWidth = function(ctx) {
  return 32; //ctx.canvas.clientWidth / this.width;
};

World.prototype.tileVisualHeight = function(ctx) {
  return 32; //ctx.canvas.clientHeight / this.width;
};

/**
 * Sets a hero
 */
World.prototype.setHero = function(actor) {
  this.hero = actor;
}

/**
 * Find an actor
 */
World.prototype.findActorIndex = function(x,y,a_radius) {
  var a_position = new Vec2(x,y);
  for (var j = 0; j < this.actors.length; ++j) {
    var b = this.actors[j];
    var minContact = a_radius + b.radius;
    if (a_position.sub(b.position).len() < minContact) {
      return j;
    }
  }
  return undefined;
};

/**
 * Gets the possible typs of actions within the editor
 */
World.prototype.getEditorActions = function() {
  var that = this;
  var actions = []

  // Delete actor actions
  actions.push({
    type: "click",
    sprite: this.newEntity("spriteCancel"),
    apply: function(x,y) {
      var actorIdx = that.findActorIndex(x,y,0.5);
      if(actor) {
        // remove actor...
        delete that.actors.splice(actorIdx,1);
      }
    }
  });
  
  // Cell setting...
  for(var defName in this._entity_defs) {
    (function() {
      var def = that._entity_defs[defName];
      if(def.type == "Cell"){
        actions.push({
          type: "paint",
          sprite: that.newEntity(def.sprite),
          apply: function(x,y) {
            that.cellAt(x,y).setType(def);
          }
        });
      }
    })();
  }
  
  // Add actor actions
  // TODO
  return actions;
}

