"use strict";

function scenes(game){

   return {
      sky: {
         name: "sky",
         draw: {
            pattern: true,
            fillRect: true,
            image: false,
            static: {
               1: "Assets/img/bg/sky.png"
            }
         },
         position:{
            x: 0,
            y: 0,
            width: game._canvas.width(),
            height: game._canvas.height()
         },
         translate: {
            flag: true,
            x: 0,
            y: 0
         }
      },
      floor: {
         name: "floor",
         draw: {
            pattern: true,
            fillRect: true,
            image: false,
            static: {
               1: "Assets/img/bg/floor.png"
            }
         },
         position:{
            x: 0,
            y: 0,
            width: game._canvas.width(),
            height: 64
         },
         translate: {
            flag: true,
            x: 0,
            y: game._canvas.height() - 64
         }
      }
   };

}
