tdl.provide("tiles");

var getEntityDefs = function() {
  return {
    // Actors
    "actorHero"           : { type : "Hero",      sprite : "spriteHero",            speed : .025 },
    "actorSkeleton"       : { type : "Skeleton",  sprite : "spriteSkeletonWarrior", speed : .015 },
    "actorFlameSkull"     : { type : "FSkull",    sprite : "spriteFlamingSkull",    speed : .01, speed2 : .04 },
    "actorGrimReaper"     : { type : "GrimReaper",  sprite : "spriteGrimReaper",    speed : .025 },
    "actorKey"            : { type : "Key",       sprite : "spriteKey",             loot : true },
    "actorShield"         : { type : "Shield",    sprite : "spriteShield",          loot : true },
    "actorFire"           : { type : "Fire",      sprite : "spriteFire",            loot : true },
    "actorWand"           : { type : "Wand",      sprite : "spriteWand",            loot : true },
    "actorCross"          : { type : "Cross",     sprite : "spriteCross",           loot : true },
    "actorSword"          : { type : "Sword",     sprite : "spriteSword",           loot : true },
    "actorMeat"           : { type : "Meat",      sprite : "spriteMeat",            loot : true },
    "actorGoldChest"      : { type : "GoldChest", sprite : "spriteGoldChest",       loot : true },
    "actorGoldBars"       : { type : "GoldBars",  sprite : "spriteGoldBars",        loot : true },
    "actorGoldBars"       : { type : "GoldBars",  sprite : "spriteGoldBars",        loot : true },
    "actorSkull"          : { type : "Skull",     sprite : "spriteSkull",           loot : true },
    "actorGrate"          : { type : "Grate",     sprite : "spriteGrate",           loot : true },
    "actorCircle"         : { type : "Circle",    sprite : "spriteCircle",          loot : true },
    "actorExit"           : { type : "Exit",      sprite : "spriteStairsUp",        loot : true },
    "actorDoor"           : { type : "Door",      sprite : "spriteDoor",            loot : false },

    // Level pieces
    "cellFloorA"          : { type: "Cell", sprite: "spriteFloorA"         , passable : true },
    "cellFloorB"          : { type: "Cell", sprite: "spriteFloorB"         , passable : true },
    "cellFloorC"          : { type: "Cell", sprite: "spriteFloorC"         , passable : true },
    "cellFloorRug"        : { type: "Cell", sprite: "spriteFloorRug"       , passable : true },
    "cellFloorRug2"       : { type: "Cell", sprite: "spriteFloorRug2"      , passable : true },
    "cellFloorRug3"       : { type: "Cell", sprite: "spriteFloorRug3"      , passable : true },
    "cellFloorRug4"       : { type: "Cell", sprite: "spriteFloorRug4"      , passable : true },
    "cellHole"            : { type: "Cell", sprite: "spriteHole"           , passable : true },
    "cellStairsDown"      : { type: "Cell", sprite: "spriteStairsDown"     , passable : true },
    "cellStairsUp"        : { type: "Cell", sprite: "spriteStairsUp"       , passable : true },
    "cellTrapdoorClosed"  : { type: "Cell", sprite: "spriteTrapdoorClosed" , passable : true },
    "cellTrapdoorOpen"    : { type: "Cell", sprite: "spriteTrapdoorOpen"   , passable : true },
    "cellWallH"           : { type: "Cell", sprite: "spriteWallH"          , passable : false },
    "cellWallHCrumbled"   : { type: "Cell", sprite: "spriteWallHCrumbled"  , passable : false },
    "cellWallHTorch"      : { type: "Cell", sprite: "spriteWallHTorch"     , passable : false },
    "cellWallV"           : { type: "Cell", sprite: "spriteWallV"          , passable : false },
    "cellWater"           : { type: "Cell", sprite: "spriteWater"          , passable : true },
    "cellLava"            : { type: "Cell", sprite: "spriteLava"           , passable : true },

    // Sprite Definitions --------------------------------
   
    "tileset_env" : {
      type : "tileset",
      image: "images/lofi_environment_a_4x.png",
      tile_width: 32,
      tile_height: 32,
    },
    "spriteWallH"           : { type : "Sprite", tileset : "tileset_env", start_x:  0, start_y: 0, frames: 1 },
    "spriteWallHTorch"      : { type : "Sprite", tileset : "tileset_env", start_x:  1, start_y: 0, frames: 2 },
    "spriteWallHCrumbled"   : { type : "Sprite", tileset : "tileset_env", start_x:  3, start_y: 0, frames: 1 },
    "spriteWallV"           : { type : "Sprite", tileset : "tileset_env", start_x:  4, start_y: 0, frames: 1 },
    "spriteFloorA"          : { type : "Sprite", tileset : "tileset_env", start_x:  5, start_y: 0, frames: 1 },
    "spriteFloorB"          : { type : "Sprite", tileset : "tileset_env", start_x:  6, start_y: 0, frames: 1 },
    "spriteStairsUp"        : { type : "Sprite", tileset : "tileset_env", start_x:  7, start_y: 0, frames: 1 },
    "spriteStairsDown"      : { type : "Sprite", tileset : "tileset_env", start_x:  8, start_y: 0, frames: 1 },
    "spriteHole"            : { type : "Sprite", tileset : "tileset_env", start_x:  9, start_y: 0, frames: 1 },
    "spriteTrapdoorClosed"  : { type : "Sprite", tileset : "tileset_env", start_x: 10, start_y: 0, frames: 1 },
    "spriteTrapdoorOpen"    : { type : "Sprite", tileset : "tileset_env", start_x: 11, start_y: 0, frames: 1 },
    "spriteFloorC"          : { type : "Sprite", tileset : "tileset_env", start_x: 12, start_y: 0, frames: 1 },
    "spriteFloorRug"        : { type : "Sprite", tileset : "tileset_env", start_x: 13, start_y: 0, frames: 1 },
    "spriteFloorRug2"       : { type : "Sprite", tileset : "tileset_env", start_x: 13, start_y: 1, frames: 1 },
    "spriteFloorRug3"       : { type : "Sprite", tileset : "tileset_env", start_x: 13, start_y: 2, frames: 1 },
    "spriteFloorRug4"       : { type : "Sprite", tileset : "tileset_env", start_x: 13, start_y: 3, frames: 1 },
    "spriteWater"           : { type : "Sprite", tileset : "tileset_env", start_x:  2, start_y: 7, frames: 2 },
    "spriteLava"            : { type : "Sprite", tileset : "tileset_env", start_x:  3, start_y: 8, frames: 2 },
    "spriteDoor"            : { type : "Sprite", tileset : "tileset_env", start_x:  1, start_y:12, frames: 1 },
    "spriteCancel"          : { type : "Sprite", tileset : "tileset_env", start_x: 15, start_y:15, frames: 1 },


    "tileset_char" : {
      type : "tileset",
      image: "images/lofi_char_a_4x.png",
      tile_width: 32,
      tile_height: 32,
    },
    "spriteHero"            : { type : "Sprite", tileset : "tileset_char", start_x: 12, start_y: 30, frames: 2 },
    "spriteSkeleton"        : { type : "Sprite", tileset : "tileset_char", start_x:  0, start_y:  6, frames: 1 },
    "spriteSkeletonWarrior" : { type : "Sprite", tileset : "tileset_char", start_x:  1, start_y:  6, frames: 2 },
    "spriteBat"             : { type : "Sprite", tileset : "tileset_char", start_x: 15, start_y: 12, frames: 1 },
    "spriteFlamingSkull"    : { type : "Sprite", tileset : "tileset_char", start_x:  5, start_y:  6, frames: 2 },
    "spriteMummy"           : { type : "Sprite", tileset : "tileset_char", start_x: 10, start_y:  6, frames: 1 },
    "spriteMummyKing"       : { type : "Sprite", tileset : "tileset_char", start_x: 11, start_y:  6, frames: 1 },
    "spriteGrimReaper"      : { type : "Sprite", tileset : "tileset_char", start_x: 13, start_y:  6, frames: 2 },


    "tileset_obj" : {
      type : "tileset",
      image: "images/lofi_obj_a_4x.png",
      tile_width: 32,
      tile_height: 32,
    },
    "spriteKey"       : { type : "Sprite", tileset : "tileset_obj", start_x:  2, start_y:  2, frames: 1 },
    "spriteShield"    : { type : "Sprite", tileset : "tileset_obj", start_x:  4, start_y:  3, frames: 1 },
    "spriteFire"      : { type : "Sprite", tileset : "tileset_obj", start_x:  9, start_y:  6, frames: 2 },
    "spriteWand"      : { type : "Sprite", tileset : "tileset_obj", start_x: 14, start_y:  3, frames: 1 },
    "spriteCross"     : { type : "Sprite", tileset : "tileset_obj", start_x:  4, start_y:  1, frames: 1 },
    "spriteSword"     : { type : "Sprite", tileset : "tileset_obj", start_x:  6, start_y:  3, frames: 1 },
    "spriteMeat"      : { type : "Sprite", tileset : "tileset_obj", start_x: 13, start_y:  1, frames: 1 },
    "spriteGoldChest" : { type : "Sprite", tileset : "tileset_obj", start_x:  0, start_y:  0, frames: 1 },

    "tileset_features" : {
      type : "tileset",
      image: "images/lofi_dungeon_features_a_4x.png",
      tile_width: 32,
      tile_height: 32,
    },
    "spriteGoldBars" : { type : "Sprite", tileset : "tileset_features", start_x: 12, start_y:  1, frames: 1 },
    "spriteSkull"    : { type : "Sprite", tileset : "tileset_features", start_x:  0, start_y:  6, frames: 1 },
    "spriteGrate"    : { type : "Sprite", tileset : "tileset_features", start_x:  0, start_y:  1, frames: 1 },
    "spriteCircle"   : { type : "Sprite", tileset : "tileset_features", start_x: 12, start_y:  3, frames: 1 },
  };
}
