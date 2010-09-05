
tdl.provide('lootgrab.editor')

lootgrab.editor = (function() {

 var editorHTML = '' +
'<div id="editor">' +
'<div id="toolbar">toolbar</div>' +
'<div id="level">' +
'<canvas class="gamelayer" id="gamelayer1" width="512" height="384"></canvas>' +
'<canvas class="gamelayer" id="gamelayer2" width="512" height="384"></canvas>' +
'<canvas class="gamelayer" id="gamelayer3" width="512" height="384"></canvas>' +
'<div class="gamelayer" id="selector" style="width: 512px; height: 384px">' +
'<canvas id="cellCursor" width="32" height="32"></canvas>' +
'</div>' +
'</div>' +
'<div id="tiles">' +
 '<canvas id="currentTile" width="32" height="32"></canvas>' +
 '<div id="tileListContainer">' +
  '<canvas id="tileList" width="230" height="352"></canvas>' +
  '<canvas id="tileCursor" width="32" height="32"></canvas>' +
  '<div id="tileSelect"></div>' +
  '<div id="tileScrollbar"></div>' +
 '</div>' +
'</div>' +
'</div>';

 var world;
 var gfx;

 // The element that is the cursor in the world.
 var cellCursor;

 // The 2d context for the cell cursor.
 var cellCursorCtx;

 // The element that is the cursor in the tile list.
 var tileCursor;

 // The tile the user will draw with.
 var currentTile;

 function setup(_world) {
   world = _world;
 };

 function computeTileCoords(e, elem) {
   var tileWidth = world.tileVisualWidth(gfx.tileCtx);
   var tileHeight = world.tileVisualHeight(gfx.tileCtx);

   var off = $(elem).offset();
   var x = Math.floor((e.pageX - off.left) / tileWidth);
   var y = Math.floor((e.pageY - off.top) / tileHeight);
   return {x: x, y: y, tileWidth: tileWidth, tileHeight: tileHeight};
 }

 // show the tile cursor
 function tileMouseenter() {
   $(tileCursor).show();
 }

 // hide the tile cursor
 function tileMouseleave() {
   $(tileCursor).hide();
 }

 // select the tile under the tile cusor
 function tileClick() {
   var pos = computeTileCoords(e, this);
   tdl.log("select tile:", pos.x, pos.y);
 }

 // move the tile cursor in the tile list
 function tileMousemove(e) {
   var pos = computeTileCoords(e, this);
   tileCursor.style.left = pos.x * pos.tileWidth;
   tileCursor.style.top = pos.y * pos.tileHeight;
   tileCursor.style.width = pos.tileWidth.toString() + "px";
   tileCursor.style.height = pos.tileHeight.toString() + "px";
 };

 // show the cell cursor
 function cellMouseenter() {
   $(cellCursor).show();
 }

 // hide the cell cursor
 function cellMouseleave() {
   $(cellCursor).hide();
 }

 // move the cursor in the level.
 function cellMousemove(e) {
   var pos = computeTileCoords(e, this);
   cellCursor.style.left = pos.x * pos.tileWidth;
   cellCursor.style.top = pos.y * pos.tileHeight;
   cellCursor.style.width = pos.tileWidth.toString() + "px";
   cellCursor.style.height = pos.tileHeight.toString() + "px";
 }

 function cellMousedown(e) {
 }

 function init(element) {
   var editor = $('<div></div>').html(editorHTML);
   var canvases = editor.find('CANVAS');

   element.appendChild(editor.get()[0]);

   // setup level/world stuff.
   editor.find("#selector")
       .mousemove(cellMousemove)
       .mouseenter(cellMouseenter)
       .mouseleave(cellMouseleave)
       .mousedown(cellMousedown);
   cellCursor = editor.find("#cellCursor").get()[0];
   $(cellCursor).hide();
   cellCursorCtx = cellCursor.getContext("2d");

   cellCursorCtx.globalAlpha = 0.3;
   cellCursorCtx.fillStyle = "rgb(0,255,0)";
   cellCursorCtx.fillRect(0, 0, 32, 32);

   // setup tile list stuff.
   editor.find("#tileSelect")
       .mousemove(tileMousemove)
       .mouseenter(tileMouseenter)
       .mouseleave(tileMouseleave)
       .click(tileClick);
   tileCursor = editor.find("#tileCursor").get()[0];
   $(tileCursor).hide();

   var ctx = tileCursor.getContext("2d");
   ctx.fillStyle = "rgb(255,255,0)";
   ctx.fillRect(0, 0, 32, 2);
   ctx.fillRect(0, 0, 2, 32);
   ctx.fillRect(30, 0, 2, 32);
   ctx.fillRect(0, 30, 32, 2);

   gfx = {
     tileCtx: canvases.get()[0].getContext("2d"),
     entityCtx: canvases.get()[1].getContext("2d"),
     effectCtx: canvases.get()[2].getContext("2d")
   };

   return {
     setup: setup,
     gfx: gfx
   };
 }

// function init(editorButtonId) {
//   var editor = $('<div></div>')
//     .html(editorHTML)
//     .dialog({
//       autoOpen: false,
//       title: 'Basic Dialog',
//       modal: true,
//     });
//  $("#" + editorButtonId).click(function(){
//     editor.dialog('open');
//     return false;
//   });
// }

 return {
   init: init,


   end: null
 };
})();
