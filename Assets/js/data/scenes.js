"use strict";

function scenes(game){

   return {
      layer_1: {
         name: "layer_1",
         draw: {
            pattern: true,
            fillRect: true,
            image: false,
            static: {
               1: "Assets/img/bg/Layer_0010_1.png"
            }
         },
         position:{
            x: 0,
            y: 0,
            width: game._canvas.width(),
            height: 793
         },
         translate: {
            flag: true,
            x: 0,
            y: game._canvas.height() - 793
         }
      },
      layer_2: {
         name: "layer_2",
         draw: {
            pattern: true,
            fillRect: true,
            image: false,
            static: {
               1: "Assets/img/bg/Layer_0009_2.png"
            }
         },
         position:{
            x: 0,
            y: 0,
            width: game._canvas.width(),
            height: 793
         },
         translate: {
            flag: true,
            x: 0,
            y: game._canvas.height() - 793
         }
      },
      layer_3: {
         name: "layer_3",
         draw: {
            pattern: true,
            fillRect: true,
            image: false,
            static: {
               1: "Assets/img/bg/Layer_0008_3.png"
            }
         },
         position:{
            x: 0,
            y: 0,
            width: game._canvas.width(),
            height: 793
         },
         translate: {
            flag: true,
            x: 0,
            y: game._canvas.height() - 793
         }
      },
      layer_4: {
         name: "layer_4",
         draw: {
            pattern: true,
            fillRect: true,
            image: false,
            static: {
               1: "Assets/img/bg/Layer_0007_Lights.png"
            }
         },
         position:{
            x: 0,
            y: 0,
            width: game._canvas.width(),
            height: 793
         },
         translate: {
            flag: true,
            x: 0,
            y: game._canvas.height() - 793
         }
      },
      layer_5: {
         name: "layer_5",
         draw: {
            pattern: true,
            fillRect: true,
            image: false,
            static: {
               1: "Assets/img/bg/Layer_0006_4.png"
            }
         },
         position:{
            x: 0,
            y: 0,
            width: game._canvas.width(),
            height: 793
         },
         translate: {
            flag: true,
            x: 0,
            y: game._canvas.height() - 793
         }
      },
      layer_6: {
         name: "layer_6",
         draw: {
            pattern: true,
            fillRect: true,
            image: false,
            static: {
               1: "Assets/img/bg/Layer_0005_5.png"
            }
         },
         position:{
            x: 0,
            y: 0,
            width: game._canvas.width(),
            height: 793
         },
         translate: {
            flag: true,
            x: 0,
            y: game._canvas.height() - 793
         }
      },
      layer_7: {
         name: "layer_7",
         draw: {
            pattern: true,
            fillRect: true,
            image: false,
            static: {
               1: "Assets/img/bg/Layer_0004_Lights.png"
            }
         },
         position:{
            x: 0,
            y: 0,
            width: game._canvas.width(),
            height: 793
         },
         translate: {
            flag: true,
            x: 0,
            y: game._canvas.height() - 793
         }
      },
      layer_8: {
         name: "layer_8",
         draw: {
            pattern: true,
            fillRect: true,
            image: false,
            static: {
               1: "Assets/img/bg/Layer_0003_6.png"
            }
         },
         position:{
            x: 0,
            y: 0,
            width: game._canvas.width(),
            height: 793
         },
         translate: {
            flag: true,
            x: 0,
            y: game._canvas.height() - 793
         }
      },
      layer_9: {
         name: "layer_9",
         draw: {
            pattern: true,
            fillRect: true,
            image: false,
            static: {
               1: "Assets/img/bg/Layer_0002_7.png"
            }
         },
         position:{
            x: 0,
            y: 0,
            width: game._canvas.width(),
            height: 793
         },
         translate: {
            flag: true,
            x: 0,
            y: game._canvas.height() - 793
         }
      },
      layer_10: {
         name: "layer_10",
         draw: {
            pattern: true,
            fillRect: true,
            image: false,
            static: {
               1: "Assets/img/bg/Layer_0001_8.png"
            }
         },
         position:{
            x: 0,
            y: 0,
            width: game._canvas.width(),
            height: 793
         },
         translate: {
            flag: true,
            x: 0,
            y: game._canvas.height() - 793
         }
      },
      layer_11: {
         name: "layer_11",
         draw: {
            pattern: true,
            fillRect: true,
            image: false,
            static: {
               1: "Assets/img/bg/Layer_0000_9.png"
            }
         },
         position:{
            x: 0,
            y: 0,
            width: game._canvas.width(),
            height: 793
         },
         translate: {
            flag: true,
            x: 0,
            y: game._canvas.height() - 793
         }
      }
   };

}
