"use strict";

function movement(game){

   return {
      floor: {
         name: "floor",
         move: "left",
         value: 2,
         position: {
            flag: true,
            value: 2
         },
         translate: {
            flag: true,
            value: 2
         }
      },
      sky: {
         name: "sky",
         move: "left",
         value: 2,
         position: {
            flag: true,
            value: 2
         },
         translate: {
            flag: true,
            value: 2
         }
      }
   };

}
