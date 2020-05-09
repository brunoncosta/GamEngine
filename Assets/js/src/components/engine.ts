export class Engine
{

   protected _configs: any;

   protected _gravity!: number;
   protected _gravitySpeed!: number;
   protected _ground: any;

   public constructor(configs: any){
      this._configs = configs;
   }

   public init(): void{
      this._gravity      = this._configs.engine.gravity;
      this._gravitySpeed = 0;
      this._ground = {
         default: this._configs.engine.ground.y,
         y: this._configs.engine.ground.y
      };
   }

   public groundDefault(set: number | null = null){
      return set != null ? this._ground.default = set : this._ground.default;
   }

   public ground(set: string | null = null){
      if(set === "default"){
         return this._ground.y = this.groundDefault();
      }
      return set != null ? this._ground.y = set : this._ground.y;
   }

   public gravity(y: number){

      if(this.ground() <= y){
         this._gravitySpeed = 0
         return this.ground();
      }

      this._gravitySpeed += this._gravity;
      return y += this._gravitySpeed;
   }



}
