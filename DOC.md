## Configuration

### configs.js

```json
const configs =
{
   canvas: {
      id: string,
      context: string
   },
   engine: {
      gravity: float,
      ground: {
         y: float
      }
   }
};
```

### scenes.js
```javascript
function scenes(game){

   return {
      name: {
         name: string,
         draw: {
            pattern: boolean,
            fillRect: boolean,
            image: boolean,
            static: {
               1: string
            }
         },
         position:{
            x: float,
            y: float,
            width: float,
            height: float,
         },
         translate: {
            flag: boolean,
            x: float,
            y: float
         },
         collision: {
            flag: boolean,
            top: boolean,
            right: boolean,
            bottom: boolean,
            left: boolean
         }
      }
   };

}
```

### movement.js
```javascript
function movement(game){

   return {
      name: {
         name: string,
         move: left right top bottom,
         position: {
            flag: boolean,
            value: float
         },
         translate: {
            flag: boolean,
            value: float
         }
      }
   };

}
```

### main.js
```javascript
const game = new Game();

// Load Configs
game.load("configs", configs);

// Game Init
game.init();

const _scenes = scenes(game);

// "Pre"Load Images
game.load("images", object);

// Load all the Data
game.load("data", _scenes);

const _movement = movement(game);

// Set Movement
game.set("movement", _movement);

// Start the Dame
game.start();
```
