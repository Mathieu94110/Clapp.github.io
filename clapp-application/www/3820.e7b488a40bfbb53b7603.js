(self.webpackChunkclapp_application=self.webpackChunkclapp_application||[]).push([[3820],{3820:(n,t,e)=>{"use strict";e.r(t),e.d(t,{RecipePageModule:()=>h});var o=e(8583),i=e(665),c=e(8945),l=e(7338),r=e(7709),g=e(639),a=e(6075),s=e(4274);function d(n,t){if(1&n){const n=g.EpF();g.TgZ(0,"ion-grid",6),g.TgZ(1,"ion-row",7),g.TgZ(2,"ion-col",8),g._uU(3," Titre "),g.qZA(),g.TgZ(4,"ion-col",8),g._uU(5,"Id"),g.qZA(),g.qZA(),g.TgZ(6,"ion-item",9),g.TgZ(7,"ion-row",10),g.TgZ(8,"ion-col",11),g.TgZ(9,"ion-text"),g._uU(10),g.qZA(),g.qZA(),g.TgZ(11,"ion-col",11),g.TgZ(12,"ion-text"),g._uU(13),g.qZA(),g.qZA(),g.TgZ(14,"ion-col",12),g._UZ(15,"img",13),g.qZA(),g.TgZ(16,"ion-col",12),g.TgZ(17,"ion-button",14),g.NdJ("click",function(){const t=g.CHM(n).$implicit;return g.oxw(2).goToRecipeDetailsPage(t.id)}),g._uU(18,"Voir la recette"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()}if(2&n){const n=t.$implicit;g.xp6(10),g.Oqu(n.title),g.xp6(3),g.Oqu(n.id),g.xp6(2),g.Q6J("src",n.image,g.LSH)}}function p(n,t){if(1&n&&(g.ynx(0),g.YNc(1,d,19,3,"ion-grid",5),g.BQk()),2&n){const n=g.oxw();g.xp6(1),g.Q6J("ngForOf",n.recipes)}}function m(n,t){if(1&n&&(g.TgZ(0,"div",15),g._uU(1),g.ALo(2,"json"),g.qZA()),2&n){const n=g.oxw();g.xp6(1),g.Oqu(g.lcZ(2,1,n.recipes))}}const u=function(n){return{"description-text-container":n}},_=[{path:"",component:(()=>{class n{constructor(n,t,e){this.apiServices=n,this.route=t,this.nav=e,this.selectedData=[],this.searchTerm$=new r.xQ,this.navigationExtras={state:this.selectedData},this.apiServices.search(this.searchTerm$).subscribe(n=>{this.recipes=n.results,console.log(this.recipes)})}ngAfterContentInit(){this.getScreenWidth=window.innerWidth,this.getScreenHeight=window.innerHeight}onWindowResize(){this.getScreenWidth=window.innerWidth,this.getScreenHeight=window.innerHeight}search(n){this.searchTerm$.next(n)}goToRecipeDetailsPage(n){this.route.navigate(["recipe-details",n])}}return n.\u0275fac=function(t){return new(t||n)(g.Y36(a.c),g.Y36(l.F0),g.Y36(c.SH))},n.\u0275cmp=g.Xpm({type:n,selectors:[["app-recipe"]],hostBindings:function(n,t){1&n&&g.NdJ("resize",function(n){return t.onWindowResize(n)},!1,g.Jf7)},decls:11,vars:6,consts:[[3,"ngClass"],[1,"ion-text-uppercase"],["placeholder","Rechercher",3,"ionChange"],[4,"ngIf","ngIfElse"],["mobileScreen",""],["class","desktop-screen-items",4,"ngFor","ngForOf"],[1,"desktop-screen-items"],[1,"list-label-keys-margin","ion-padding","ion-margin"],["size","3",1,"list-label","ion-text-uppercase","ion-text-center"],["lines","none",1,"ion-padding"],[2,"width","100%","display","flex","align-items","center","justify-content","center"],["size","3",1,"list-label","ion-text-center"],["size","3",1,"ion-text-center"],["width","160px","height","160px",3,"src"],[3,"click"],[2,"width","500px","height","600px"]],template:function(n,t){if(1&n&&(g._UZ(0,"app-mobile-menu"),g.TgZ(1,"ion-content"),g.TgZ(2,"ion-toolbar",0),g.TgZ(3,"ion-title",1),g._uU(4,"Chercher une recette"),g.qZA(),g.TgZ(5,"ion-text",0),g._uU(6," Retrouvez-ici tous les recettes. Vous pouvez ensuite acc\xe9der aux d\xe9tails, pour trouver tout ce dont vous avez besoin pour r\xe9ussir vos pr\xe9parations "),g.qZA(),g.qZA(),g.TgZ(7,"ion-searchbar",2),g.NdJ("ionChange",function(n){return t.search(n)}),g.qZA(),g.YNc(8,p,2,1,"ng-container",3),g.YNc(9,m,3,3,"ng-template",null,4,g.W1O),g.qZA()),2&n){const n=g.MAs(10);g.xp6(2),g.Q6J("ngClass",t.getScreenWidth>=767?"page-title":"mobile-page-title"),g.xp6(3),g.Q6J("ngClass",g.VKq(4,u,t.getScreenWidth>=767)),g.xp6(3),g.Q6J("ngIf",t.getScreenWidth>=767)("ngIfElse",n)}},directives:[s.f,c.W2,c.sr,o.mk,c.wd,c.yW,c.VI,c.j9,o.O5,o.sg,c.jY,c.Nd,c.wI,c.Ie,c.YG],pipes:[o.Ts],styles:["@media screen and (min-width: 767px){ion-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{inline-size:476px;overflow-wrap:break-word;margin:144px 4% 0}ion-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-size:36px;line-height:30px}ion-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:14px;line-height:17px}ion-content[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{width:92%;padding:19px 0;--icon-color:var(--ion-color-primary);margin:0 4%}ion-content[_ngcontent-%COMP%]   ion-grid.desktop-screen-items[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;margin:0 4% 40px}ion-content[_ngcontent-%COMP%]   ion-grid.desktop-screen-items[_ngcontent-%COMP%]   .list-label[_ngcontent-%COMP%]{font-family:Lato-Bold;font-size:14px}ion-content[_ngcontent-%COMP%]   ion-grid.desktop-screen-items[_ngcontent-%COMP%]   .list-label-normal[_ngcontent-%COMP%]{font-family:Lato-Regular;font-size:14px}ion-content[_ngcontent-%COMP%]   .align-state-icon[_ngcontent-%COMP%]{text-align:center}}@media screen and (max-width: 766px){ion-header[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{margin:51px 28px 101px 29px;width:calc(100% - 57px)}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{margin-bottom:10px;font-size:21px;line-height:25px}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:14px}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .searchbar-input-container.sc-ion-searchbar-md[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-searchbar.sc-ion-searchbar-md-h.sc-ion-searchbar-md-s.md.searchbar-left-aligned.hydrated[_ngcontent-%COMP%]{height:67px!important;width:319px!important}ion-list[_ngcontent-%COMP%]{padding:0}}@media (min-width: 767px) and (max-width: 1057px){ion-grid.desktop-screen-items[_ngcontent-%COMP%]{padding-left:0;padding-right:0}}@media (min-width: 1058px){ion-grid.desktop-screen-items[_ngcontent-%COMP%]{padding:36px 32px}}ion-content[_ngcontent-%COMP%]{--ion-background-color:var(--ion-color-secondary)}ion-content[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-family:Lato-Black;padding:0;vertical-align:top}ion-content[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-family:Lato-Regular;color:#000}ion-content[_ngcontent-%COMP%]   .color-medium[_ngcontent-%COMP%]{color:var(--ion-color-medium)}ion-grid.default-mobile-items[_ngcontent-%COMP%]{padding:0 23px;margin:0 28px 10px;height:109px;width:319px;background-color:#fff;border-radius:15px}ion-grid.default-mobile-items[_ngcontent-%COMP%]   .vertical-center[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}ion-grid.default-mobile-items[_ngcontent-%COMP%]   .mobile-location-row[_ngcontent-%COMP%]{align-items:flex-start}ion-grid.default-mobile-items[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0}ion-grid.default-mobile-items[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .mobile-location-row[_ngcontent-%COMP%], ion-grid.default-mobile-items[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .mobile-serial-row[_ngcontent-%COMP%]{height:54.5px}ion-grid.default-mobile-items[_ngcontent-%COMP%]   .lato-regular[_ngcontent-%COMP%]{font-family:Lato-Regular}ion-grid.default-mobile-items[_ngcontent-%COMP%]   .lato-bold[_ngcontent-%COMP%]{font-family:Lato-Bold}ion-grid.default-mobile-items[_ngcontent-%COMP%]   .lato-black[_ngcontent-%COMP%]{font-family:Lato-Black}ion-grid.default-mobile-items[_ngcontent-%COMP%]   .location-labels[_ngcontent-%COMP%]{padding:0;font-size:14px;max-width:215px;overflow-wrap:break-word;white-space:normal;line-height:16.8px;line-height:100%}ion-grid.default-mobile-items[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%], ion-grid.default-mobile-items[_ngcontent-%COMP%]   .state-icon[_ngcontent-%COMP%]{width:20px;height:20px}ion-grid.default-mobile-items[_ngcontent-%COMP%]   .state-icon[_ngcontent-%COMP%]{align-self:end}ion-grid.full-mobile-items[_ngcontent-%COMP%]{width:319px;padding:0 23px;margin:0 28px 10px;background-color:#fff;border-radius:15px}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .vertical-center[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .mobile-location-row[_ngcontent-%COMP%], ion-grid.full-mobile-items[_ngcontent-%COMP%]   .mobile-serial-row[_ngcontent-%COMP%]{height:52.5px}ion-grid.full-mobile-items[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .lato-bold[_ngcontent-%COMP%]{font-family:Lato-Bold}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .lato-black[_ngcontent-%COMP%]{font-family:Lato-Black}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .location-labels[_ngcontent-%COMP%]{padding:0;font-size:14px;max-width:215px;overflow-wrap:break-word;line-height:16,8px;white-space:normal}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .state-icon[_ngcontent-%COMP%]{display:none}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]{height:113px;background-color:#fff;border-radius:0 0 15px 0;padding:0}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .mobile-sub-item-row[_ngcontent-%COMP%]{width:100%;height:56.5px;display:flex;justify-content:space-between}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .mobile-sub-item-row[_ngcontent-%COMP%]   .lato-bold[_ngcontent-%COMP%]{font-family:Lato-Bold}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .mobile-sub-item-row[_ngcontent-%COMP%]   .lato-regular[_ngcontent-%COMP%]{font-family:Lato-Regular}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .mobile-sub-item-row[_ngcontent-%COMP%]   .mobile-place-label-key[_ngcontent-%COMP%]{font-style:bold;font-size:11px;line-height:13px;line-height:100%;letter-spacing:.33px}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .mobile-sub-item-row[_ngcontent-%COMP%]   .mobile-electrodes-label-key[_ngcontent-%COMP%]{max-width:125px;overflow-wrap:break-word;white-space:normal;font-style:bold;font-size:11px;line-height:11px;line-height:83%;letter-spacing:.33px}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .mobile-sub-item-row[_ngcontent-%COMP%]   .mobile-place-label-value[_ngcontent-%COMP%]{max-width:121px;overflow-wrap:break-word;white-space:normal;font-size:14px;line-height:17px;line-height:100%;text-align:right}ion-grid.full-mobile-items[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .mobile-place-row[_ngcontent-%COMP%]{align-items:center}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=g.oAB({type:n}),n.\u0275inj=g.cJS({imports:[[l.Bz.forChild(_)],l.Bz]}),n})();var f=e(5902);let h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=g.oAB({type:n}),n.\u0275inj=g.cJS({imports:[[o.ez,i.u5,c.Pc,C,f.n]]}),n})()}}]);