"use strict";

const configs =
{
   canvas: {
      id: "game",
      context: "2d"
   },
   engine: {
      gravity: 0.5,
      ground: {
         y: 0
      }
   },
   scenes: {
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
            width: 0,
            height: 0,
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
            width: 0,
            height: 0,
         },
         translate: {
            flag: true,
            x: 0,
            y: 0
         }
      },
   }
};
