export const configs: {
   canvas: {
      id: string;
      context: "2d";
   },
   engine: {
      gravity: number;
      ground: {
         y: number;
      }
   }
} = {
   canvas: {
      id: "game",
      context: "2d"
   },
   engine: {
      gravity: 0.5,
      ground: {
         y: 0
      }
   }
};
