import{$b as b,Fa as p,Na as d,Oa as k,Pa as x,Qa as v,Ra as a,S as s,Sa as o,Ta as _,U as f,Xb as h,Za as c,_b as S,ab as g,fa as u,gb as r,hb as I,ib as m,jb as D,ob as y,ra as C,ta as n}from"./chunk-3RXNJAN6.js";function T(e,i){if(e&1&&(a(0,"div"),r(1),o()),e&2){let t=c().$implicit,l=c(2);n(),D("",t,". ",l.cocktail["strIngredient"+t],"")}}function w(e,i){if(e&1&&p(0,T,2,2,"div"),e&2){let t=i.$implicit,l=c(2);d(l.cocktail["strIngredient"+t]!=null?0:-1)}}function F(e,i){if(e&1&&(a(0,"h1"),r(1),o(),a(2,"div"),_(3,"img",0),a(4,"div"),r(5),o(),a(6,"div"),r(7),o(),a(8,"div"),r(9,"Ingredients:"),o(),x(10,w,1,1,null,null,k),o()),e&2){let t=c();n(),I(t.cocktail.strDrink),n(2),g("src",t.cocktail.strDrinkThumb,C),n(2),m("Glass: ",t.cocktail.strGlass,""),n(2),m("Instructions: ",t.cocktail.strInstructions,""),n(3),v(t.ingredients)}}var E=class e{i;cocktail;ingredients=[];dataHttpService=s(b);destroyRef=s(u);ngOnInit(){for(let t=1;t<16;t++)this.ingredients.push(t);let i=new h().set("i",this.i);this.dataHttpService.getDetailsCocktail(i).pipe(S(this.destroyRef)).subscribe(t=>{this.cocktail=t.drinks[0]})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-cocktail-details"]],inputs:{i:"i"},standalone:!0,features:[y],decls:1,vars:1,consts:[["width","300","height","300",3,"src"]],template:function(t,l){t&1&&p(0,F,12,4),t&2&&d(l.cocktail?0:-1)}})};export{E as CocktailDetailsComponent};