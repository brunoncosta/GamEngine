export class Canvas
{

   protected _$game: any;
   protected _context: any;

   public constructor(configs: any){
      this._$game   = document.getElementById(configs.canvas.id);
      this._context = this._$game.getContext(configs.canvas.context);
   }

   public context(): object{
      return this._context;
   }

   public width(set: number | null = null): number{
      return set != null ? this._$game.width = set : this._$game.width;
   }

   public height(set: number | null = null): number{
      return set != null ? this._$game.height = set : this._$game.height;
   }

   public init(): void{
      this._$game.width  = window.innerWidth;
      this._$game.height = window.innerHeight;
   }

}
