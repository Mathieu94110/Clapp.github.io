(self.webpackChunkclapp_application=self.webpackChunkclapp_application||[]).push([[4412],{4412:(i,t,e)=>{"use strict";e.r(t),e.d(t,{WinesPageModule:()=>O});var n=e(8583),o=e(665),r=e(8945),s=e(7338),c=e(639),a=e(4274),p=e(219),d=e(6075);const l=["swiper"],m=function(i){return{height:i}};p.ZP.use([p.tl,p.eZ]);let g=(()=>{class i{constructor(i,t){this.formBuilder=i,this.spoonacularService=t,this.recommandationData=new c.vpe,this.descriptionData=new c.vpe,this.associationData=new c.vpe,this.isSubmitted=!1,this.isDescriptionListItemOpened=!1,this.isAssociationListItemOpened=!1,this.isRecommandationListItemOpened=!1,this.touchAllowed=!1,this.shownList=null}ngOnInit(){this.wineRecommandationForm=this.formBuilder.group({wine:["",[o.kI.required,o.kI.minLength(2)]],quantity:["",[o.kI.required,o.kI.pattern(/^-?(0|[1-9]\d*)?$/)]],minRating:["",[o.kI.required,o.kI.pattern(/[0-9]{0,1}/)]],maxPrice:["",[o.kI.required,o.kI.pattern(/^-?(0|[1-9]\d*)?$/)]]}),this.wineDescriptionForm=this.formBuilder.group({wineDescription:["",[o.kI.required,o.kI.minLength(2)]]}),this.wineAssociateForm=this.formBuilder.group({dish:["",[o.kI.required,o.kI.minLength(2)]],maxPricetoAssociate:["",[o.kI.required,o.kI.pattern(/^-?(0|[1-9]\d*)?$/)]]})}ngAfterContentChecked(){this.swiper&&this.swiper.updateSwiper({})}swiperSlideChanged(i){console.log("changed ",i)}next(){this.swiper.swiperRef.slideNext(500)}prev(){this.swiper.swiperRef.slidePrev(500)}ToggleTouch(){this.touchAllowed=this.touchAllowed,this.swiper.swiperRef.allowTouchMove=this.touchAllowed}formRecommandationClicked(){this.isRecommandationListItemOpened=!this.isRecommandationListItemOpened}formDescriptionClicked(){this.isDescriptionListItemOpened=!this.isDescriptionListItemOpened}formAssociationClicked(){this.isAssociationListItemOpened=!this.isAssociationListItemOpened}submitRecommandationForm(){if(this.isSubmitted=!0,!this.wineRecommandationForm.valid)return console.log("Il manque des valeurs !"),!1;{const i=this.wineRecommandationForm.get("wine").value,t=this.wineRecommandationForm.get("quantity").value,e=this.wineRecommandationForm.get("maxPrice").value,n=this.wineRecommandationForm.get("minRating").value;this.spoonacularService.getWineRecommandation(i,t,e,n).subscribe(i=>{console.log(i),this.recommandationData.emit(i)}),this.isRecommandationListItemOpened=!this.isRecommandationListItemOpened}}submitDescriptionForm(){if(this.isSubmitted=!0,!this.wineDescriptionForm.valid)return console.log("Il manque des valeurs !"),!1;{const i=this.wineDescriptionForm.get("wineDescription").value;this.spoonacularService.getWineDescription(i).subscribe(i=>{this.descriptionData.emit(i)}),this.isDescriptionListItemOpened=!this.isDescriptionListItemOpened}}submitAssociateForm(){if(this.isSubmitted=!0,!this.wineAssociateForm.valid)return console.log("Il manque des valeurs !"),!1;{const i=this.wineAssociateForm.get("dish").value,t=this.wineAssociateForm.get("maxPricetoAssociate").value;this.spoonacularService.getWinePairing(i,t).subscribe(i=>{this.associationData.emit(i)}),this.isAssociationListItemOpened=!this.isAssociationListItemOpened}}ngAfterContentInit(){this.getScreenWidth=window.innerWidth,this.getScreenHeight=window.innerHeight}onWindowResize(){this.getScreenWidth=window.innerWidth,this.getScreenHeight=window.innerHeight}toggleList(i){this.shownList=this.isListExpanded(i)?null:i}isListExpanded(i){return this.shownList===i}}return i.\u0275fac=function(t){return new(t||i)(c.Y36(o.qu),c.Y36(d.c))},i.\u0275cmp=c.Xpm({type:i,selectors:[["app-accordion"]],viewQuery:function(i,t){if(1&i&&c.Gf(l,5),2&i){let i;c.iGM(i=c.CRH())&&(t.swiper=i.first)}},hostBindings:function(i,t){1&i&&c.NdJ("resize",function(i){return t.onWindowResize(i)},!1,c.Jf7)},outputs:{recommandationData:"recommandationData",descriptionData:"descriptionData",associationData:"associationData"},decls:57,vars:9,consts:[[1,"ion-no-padding",3,"ngStyle"],[1,"content-wrapper",2,"overflow-y","hidden"],[1,"accordion-container",2,"width","calc(100% / 3)","display","flex","justify-content","center","position","relative","height","60px",3,"ngClass"],[2,"display","flex","flex-direction","column","justify-content","center","width","100%","text-align","center"],[1,"arrow",2,"position","absolute","right","20px",3,"click"],["novalidate","",1,"content",2,"position","absolute","width","100%","top","60px","height","auto",3,"formGroup","ngSubmit"],["lines","full"],["position","floating",2,"padding-left","10px"],["formControlName","wine","type","text","required",""],["formControlName","quantity","type","text","required",""],["formControlName","minRating","type","text","required",""],["formControlName","maxPrice","type","text","required",""],[2,"background-color","white"],["type","submit","color","danger","expand","block",1,"form-buttons"],["formControlName","wineDescription","type","text","required",""],["type","text","formControlName","dish","required",""],["type","text","formControlName","maxPricetoAssociate","required",""]],template:function(i,t){1&i&&(c.TgZ(0,"ion-content",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"h1",3),c._uU(4," Recommandations "),c.TgZ(5,"div",4),c.NdJ("click",function(){return t.formRecommandationClicked()}),c.qZA(),c.qZA(),c.TgZ(6,"form",5),c.NdJ("ngSubmit",function(){return t.submitRecommandationForm()}),c.TgZ(7,"ion-item",6),c.TgZ(8,"ion-label",7),c._uU(9,"Vin"),c.qZA(),c._UZ(10,"ion-input",8),c.qZA(),c.TgZ(11,"ion-item",6),c.TgZ(12,"ion-label",7),c._uU(13,"Quantit\xe9"),c.qZA(),c._UZ(14,"ion-input",9),c.qZA(),c.TgZ(15,"ion-item",6),c.TgZ(16,"ion-label",7),c._uU(17,"Note minimale"),c.qZA(),c._UZ(18,"ion-input",10),c.qZA(),c.TgZ(19,"ion-item",6),c.TgZ(20,"ion-label",7),c._uU(21,"Prix maximum"),c.qZA(),c._UZ(22,"ion-input",11),c.qZA(),c.TgZ(23,"ion-row"),c.TgZ(24,"ion-col",12),c.TgZ(25,"ion-button",13),c._uU(26,"Submit"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(27,"div",2),c.TgZ(28,"h1",3),c._uU(29," Description "),c.TgZ(30,"div",4),c.NdJ("click",function(){return t.formDescriptionClicked()}),c.qZA(),c.qZA(),c.TgZ(31,"form",5),c.NdJ("ngSubmit",function(){return t.submitDescriptionForm()}),c.TgZ(32,"ion-item",6),c.TgZ(33,"ion-label",7),c._uU(34,"Vin"),c.qZA(),c._UZ(35,"ion-input",14),c.qZA(),c.TgZ(36,"ion-row"),c.TgZ(37,"ion-col",12),c.TgZ(38,"ion-button",13),c._uU(39,"Submit"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(40,"div",2),c.TgZ(41,"h1",3),c._uU(42," Association "),c.TgZ(43,"div",4),c.NdJ("click",function(){return t.formAssociationClicked()}),c.qZA(),c.qZA(),c.TgZ(44,"form",5),c.NdJ("ngSubmit",function(){return t.submitAssociateForm()}),c.TgZ(45,"ion-item",6),c.TgZ(46,"ion-label",7),c._uU(47,"Plat"),c.qZA(),c._UZ(48,"ion-input",15),c.qZA(),c.TgZ(49,"ion-item",6),c.TgZ(50,"ion-label",7),c._uU(51,"Prix maximum"),c.qZA(),c._UZ(52,"ion-input",16),c.qZA(),c.TgZ(53,"ion-row"),c.TgZ(54,"ion-col",12),c.TgZ(55,"ion-button",13),c._uU(56,"Submit"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&i&&(c.Q6J("ngStyle",c.VKq(7,m,t.isRecommandationListItemOpened||t.isDescriptionListItemOpened||t.isAssociationListItemOpened?"100%":"60px")),c.xp6(2),c.Q6J("ngClass",t.isRecommandationListItemOpened?"open":""),c.xp6(4),c.Q6J("formGroup",t.wineRecommandationForm),c.xp6(21),c.Q6J("ngClass",t.isDescriptionListItemOpened?"open":""),c.xp6(4),c.Q6J("formGroup",t.wineDescriptionForm),c.xp6(9),c.Q6J("ngClass",t.isAssociationListItemOpened?"open":""),c.xp6(4),c.Q6J("formGroup",t.wineAssociateForm))},directives:[r.W2,n.PC,n.mk,o._Y,o.JL,o.sg,r.Ie,r.Q$,r.pK,r.j9,o.JJ,o.u,o.Q7,r.Nd,r.wI,r.YG],styles:['.content-wrapper{height:100%;width:100%;display:flex}.content-wrapper .accordion-container,.content-wrapper .accordion-container .arrow,.content-wrapper .accordion-container .arrow:after,.content-wrapper .accordion-container .arrow:before,.content-wrapper .accordion-container .content{transition:all .4s ease-in-out}.content-wrapper .accordion-container .arrow{position:absolute;top:50%}.content-wrapper .accordion-container .arrow,.content-wrapper .accordion-container .arrow:after,.content-wrapper .accordion-container .arrow:before{border-radius:25px}.content-wrapper .accordion-container .arrow:before{content:" ";width:15px;height:4px;left:50%;margin-left:-8px;background-color:#000;position:absolute;transform:rotate(45deg)}.content-wrapper .accordion-container .arrow:after{content:" ";width:15px;height:4px;background-color:#000;position:absolute;right:-15px;transform:rotate(-45deg)}.content-wrapper .accordion-container.open .arrow:before{transform:rotate(-45deg)}.content-wrapper .accordion-container.open .arrow:after{transform:rotate(45deg)}.content-wrapper .accordion-container h1{font-size:1rem;position:relative;display:block;margin:0;padding-right:28px}.content-wrapper .accordion-container p{font-size:.9rem;color:#464545}.content-wrapper .accordion-container{display:block;cursor:pointer;position:relative;background:#fff;padding:0 10px}.content-wrapper .accordion-container.open{cursor:default}.content-wrapper .accordion-container:hover{background:var(--ion-color-primary)}.content-wrapper .accordion-container.open:hover{background:#fff}.content-wrapper .accordion-container .content{opacity:0}.content-wrapper .accordion-container.open .content{display:block;opacity:1}.content-wrapper ion-item{--background:#fff}.swiper{width:100%;height:100%}.swiper-slide{text-align:center;font-size:18px;background:#fff;display:flex;justify-content:center;align-items:center}.swiper-slide img{display:block;width:100%;height:100%;object-fit:cover}.form-buttons{height:36px}@media screen and (max-width: 767px){.content-wrapper .accordion-container h1{font-size:10px;padding-right:14px}.form-buttons{height:24px}}'],encapsulation:2}),i})();var u=e(7360);const h=["swiper"];function w(i,t){if(1&i&&(c.TgZ(0,"ion-card",9),c.TgZ(1,"div",10),c._UZ(2,"img",11),c.qZA(),c.TgZ(3,"ion-card-header"),c.TgZ(4,"ion-card-subtitle"),c._uU(5),c.qZA(),c.TgZ(6,"ion-card-title"),c._uU(7),c.qZA(),c.qZA(),c.TgZ(8,"ion-card-content"),c.TgZ(9,"p",12),c._uU(10),c.qZA(),c.TgZ(11,"ion-item",13),c.TgZ(12,"ion-label"),c._uU(13," D\xe9tails "),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&i){const i=c.oxw().$implicit,t=c.oxw(2);c.xp6(2),c.Q6J("src",i.imageUrl,c.LSH),c.xp6(3),c.hij("",t.round(i.score)," / 10"),c.xp6(2),c.Oqu(i.title),c.xp6(3),c.Oqu(i.description),c.xp6(1),c.s9C("href",i.link)}}function f(i,t){1&i&&c.YNc(0,w,14,5,"ng-template",8)}function Z(i,t){if(1&i){const i=c.EpF();c.TgZ(0,"div",0),c.TgZ(1,"swiper",2,3),c.NdJ("slideChange",function(t){return c.CHM(i),c.oxw().swiperSlideChanged(t)}),c.YNc(3,f,1,0,void 0,4),c.qZA(),c.TgZ(4,"ion-row"),c.TgZ(5,"ion-button",5),c.NdJ("click",function(){return c.CHM(i),c.oxw().prev()}),c._UZ(6,"ion-icon",6),c.qZA(),c.TgZ(7,"ion-button",5),c.NdJ("click",function(){return c.CHM(i),c.oxw().next()}),c._UZ(8,"ion-icon",7),c.qZA(),c.qZA(),c.qZA()}if(2&i){const i=c.oxw();c.Q6J("ngClass",i.getScreenWidth>=767?"desktop-accordion-list":"mobile-accordion-list"),c.xp6(1),c.Q6J("slidesPerView",1)("spaceBetween",50)("virtual",!0)("pagination",!0)("allowTouchMove",!1),c.xp6(2),c.Q6J("ngForOf",i.recommandation.recommendedWines)}}p.ZP.use([p.tl,p.eZ]);let x=(()=>{class i{constructor(i,t){this.formBuilder=i,this.cdr=t,this.isSubmitted=!1,this.isRecommandationListItemOpened=!1,this.isDescriptionListItemOpened=!1,this.isWineToAssociateListItemOpened=!1,this.isLoading=!1,t.detach(),setInterval(()=>{this.cdr.detectChanges()},2e3)}ngOnInit(){this.cdr.detach(),this.cdr.detectChanges(),this.cdr.markForCheck()}ngAfterContentChecked(){this.swiper&&this.swiper.updateSwiper({})}swiperSlideChanged(i){this.cdr.detach(),this.cdr.detectChanges(),console.log("changed ",i)}next(){this.swiper.swiperRef.slideNext(500)}prev(){this.swiper.swiperRef.slidePrev(500)}wineRecommandationToggleAccordion(){this.isRecommandationListItemOpened=!this.isRecommandationListItemOpened}wineDescriptionToggleAccordion(){this.isDescriptionListItemOpened=!this.isDescriptionListItemOpened}formAssociationClicked(){this.isWineToAssociateListItemOpened=!this.isWineToAssociateListItemOpened}round(i){return Math.round(100*i)/10}ngAfterContentInit(){this.getScreenWidth=window.innerWidth,this.getScreenHeight=window.innerHeight}onWindowResize(){this.getScreenWidth=window.innerWidth,this.getScreenHeight=window.innerHeight}}return i.\u0275fac=function(t){return new(t||i)(c.Y36(o.qu),c.Y36(c.sBO))},i.\u0275cmp=c.Xpm({type:i,selectors:[["app-carrousel"]],viewQuery:function(i,t){if(1&i&&c.Gf(h,5),2&i){let i;c.iGM(i=c.CRH())&&(t.swiper=i.first)}},hostBindings:function(i,t){1&i&&c.NdJ("resize",function(i){return t.onWindowResize(i)},!1,c.Jf7)},inputs:{recommandation:"recommandation"},decls:2,vars:2,consts:[[3,"ngClass"],[3,"ngClass",4,"ngIf"],[1,"swiper",3,"slidesPerView","spaceBetween","virtual","pagination","allowTouchMove","slideChange"],["swiper",""],[4,"ngFor","ngForOf"],["expand","full",3,"click"],["name","arrow-back-circle-outline"],["name","arrow-forward-circle-outline"],["swiperSlide",""],[1,"ion-text-center",2,"width","300px"],[1,"ion-justify-content-center","ion-text-center","ion-align-items-center"],[1,"ion-margin-auto",2,"height","140px","width","auto","margin","auto",3,"src"],[1,"item-description"],["target","_blank","color","primary","lines","none",1,"ion-text-center",3,"href"]],template:function(i,t){1&i&&(c.TgZ(0,"ion-content",0),c.YNc(1,Z,9,7,"div",1),c.qZA()),2&i&&(c.Q6J("ngClass",t.getScreenWidth>=767?"ion-padding":"ion-no-padding"),c.xp6(1),c.Q6J("ngIf",t.recommandation))},directives:[r.W2,n.mk,n.O5,u.nF,n.sg,r.Nd,r.YG,r.gu,u.YC,r.PM,r.Zi,r.tO,r.gZ,r.FN,r.Ie,r.Q$],styles:[".swiper{width:100%;height:500px}.swiper-slide{text-align:center;font-size:18px;background:#fff;display:flex;justify-content:center;align-items:center}.swiper-slide img{display:block;object-fit:cover}.swiper-slide img,ion-content{width:100%;height:100%}ion-row{display:flex;justify-content:center}ion-text{height:100px;--offset-top:0!important}p.item-description{height:80px;overflow-y:scroll;margin-bottom:10px}.desktop-accordion-list{height:100%;display:flex;flex-direction:column;justify-content:center}.mobile-accordion-list{height:600px}"],encapsulation:2,changeDetection:0}),i})();function A(i,t){if(1&i&&(c.TgZ(0,"div"),c.TgZ(1,"p"),c.TgZ(2,"ion-text",1),c.TgZ(3,"h3"),c.TgZ(4,"span"),c._uU(5,"Description :"),c.qZA(),c._uU(6),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&i){const i=c.oxw();c.xp6(6),c.hij(" ",i.description.wineDescription,"")}}let q=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=c.Xpm({type:i,selectors:[["app-wines-description"]],inputs:{description:"description"},decls:2,vars:1,consts:[[4,"ngIf"],["color","primary"]],template:function(i,t){1&i&&(c.TgZ(0,"ion-content"),c.YNc(1,A,7,1,"div",0),c.qZA()),2&i&&(c.xp6(1),c.Q6J("ngIf",t.description))},directives:[r.W2,n.O5,r.yW],styles:[""]}),i})();function T(i,t){if(1&i&&(c.TgZ(0,"div"),c.TgZ(1,"ion-item",6),c._UZ(2,"ion-icon",7),c.TgZ(3,"ion-label"),c._uU(4),c.qZA(),c.qZA(),c.qZA()),2&i){const i=t.$implicit;c.xp6(4),c.Oqu(i)}}function b(i,t){if(1&i&&(c.TgZ(0,"div"),c.TgZ(1,"ion-card",1),c.TgZ(2,"div",2),c._UZ(3,"img",3),c.qZA(),c.TgZ(4,"ion-card-header"),c.TgZ(5,"ion-card-subtitle"),c._uU(6),c.qZA(),c.YNc(7,T,5,1,"div",4),c.qZA(),c.TgZ(8,"ion-card-content"),c.TgZ(9,"ion-item"),c.TgZ(10,"ion-label"),c._uU(11,"Id\xe9es d'associations: "),c.qZA(),c._uU(12),c.qZA(),c.TgZ(13,"ion-item"),c.TgZ(14,"ion-label"),c._uU(15,"Suggestion: "),c.qZA(),c._uU(16),c.qZA(),c.TgZ(17,"ion-item"),c.TgZ(18,"ion-label"),c._uU(19,"Prix: "),c.qZA(),c._uU(20),c.qZA(),c.TgZ(21,"ion-item",5),c.TgZ(22,"ion-label"),c._uU(23," D\xe9tails "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&i){const i=c.oxw();c.xp6(3),c.Q6J("src",i.association.productMatches.imageUrl,c.LSH),c.xp6(3),c.hij("Score de la suggestion :",i.round(i.association.productMatches.score)," / 10"),c.xp6(1),c.Q6J("ngForOf",i.association.pairedWines),c.xp6(5),c.hij(" ",i.association.pairingText," "),c.xp6(4),c.hij(" ",i.association.productMatches.title," "),c.xp6(4),c.hij(" ",i.association.productMatches.price," "),c.xp6(1),c.s9C("href",i.association.productMatches.link)}}let v=(()=>{class i{constructor(){}ngOnInit(){}round(i){return Math.round(100*i)/10}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=c.Xpm({type:i,selectors:[["app-wines-association"]],inputs:{association:"association"},decls:2,vars:1,consts:[[4,"ngIf"],[1,"ion-text-center",2,"width","80%","margin","50px auto 0px auto"],[1,"ion-justify-content-center","ion-text-center","ion-align-items-center"],[1,"ion-margin-auto",2,"height","140px","width","auto","margin","auto",3,"src"],[4,"ngFor","ngForOf"],["target","_blank","color","primary","lines","none",1,"ion-text-center",3,"href"],["href","#"],["name","wine","slot","start"]],template:function(i,t){1&i&&(c.TgZ(0,"ion-content"),c.YNc(1,b,24,7,"div",0),c.qZA()),2&i&&(c.xp6(1),c.Q6J("ngIf",t.association))},directives:[r.W2,n.O5,r.PM,r.Zi,r.tO,n.sg,r.FN,r.Ie,r.Q$,r.gu],styles:["ion-content[_ngcontent-%COMP%]{width:100%;height:100%}ion-row[_ngcontent-%COMP%]{display:flex;justify-content:center}ion-text[_ngcontent-%COMP%]{height:100px;--offset-top:0!important}p.item-description[_ngcontent-%COMP%]{height:80px;overflow-y:scroll;margin-bottom:10px}.desktop-accordion-list[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:center}.mobile-accordion-list[_ngcontent-%COMP%]{height:600px}"]}),i})();function y(i,t){if(1&i&&(c.TgZ(0,"div",4),c._UZ(1,"app-carrousel",5),c.qZA()),2&i){const i=c.oxw();c.Q6J("ngClass",i.getScreenWidth>=767?"carrousel-container":"mobile-carrousel-container"),c.xp6(1),c.Q6J("recommandation",i.currentRecommandation)}}function D(i,t){if(1&i&&(c.TgZ(0,"div",6),c._UZ(1,"app-wines-description",7),c.qZA()),2&i){const i=c.oxw();c.xp6(1),c.Q6J("description",i.currentDescription)}}function I(i,t){if(1&i&&(c.TgZ(0,"div",4),c._UZ(1,"app-wines-association",8),c.qZA()),2&i){const i=c.oxw();c.Q6J("ngClass",i.getScreenWidth>=767?"carrousel-container":"mobile-carrousel-container"),c.xp6(1),c.Q6J("association",i.currentAssociation)}}const C=[{path:"",component:(()=>{class i{constructor(){this.currentRecommandation=[],this.currentDescription={},this.currentAssociation=[],this.isRecommandationDisplay=!1,this.isDescriptionDisplay=!1,this.isAssociationDisplay=!1}ngAfterContentInit(){this.getScreenWidth=window.innerWidth,this.getScreenHeight=window.innerHeight}onWindowResize(){this.getScreenWidth=window.innerWidth,this.getScreenHeight=window.innerHeight}setRecommandation(i){this.currentRecommandation=i,this.isRecommandationDisplay=!0,this.isDescriptionDisplay=!1,this.isAssociationDisplay=!1}setDescription(i){this.currentDescription=i,console.log(this.currentDescription),this.isDescriptionDisplay=!0,this.isRecommandationDisplay=!1,this.isAssociationDisplay=!1}setAssociation(i){this.currentAssociation=i,this.isAssociationDisplay=!0,this.isRecommandationDisplay=!1,this.isDescriptionDisplay=!1}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=c.Xpm({type:i,selectors:[["app-wines"]],hostBindings:function(i,t){1&i&&c.NdJ("resize",function(i){return t.onWindowResize(i)},!1,c.Jf7)},decls:6,vars:3,consts:[[1,"wine-container"],[3,"recommandationData","descriptionData","associationData"],[3,"ngClass",4,"ngIf"],["class","description-container",4,"ngIf"],[3,"ngClass"],[3,"recommandation"],[1,"description-container"],[3,"description"],[3,"association"]],template:function(i,t){1&i&&(c._UZ(0,"app-mobile-menu"),c.TgZ(1,"ion-content",0),c.TgZ(2,"app-accordion",1),c.NdJ("recommandationData",function(i){return t.setRecommandation(i)})("descriptionData",function(i){return t.setDescription(i)})("associationData",function(i){return t.setAssociation(i)}),c.qZA(),c.YNc(3,y,2,2,"div",2),c.YNc(4,D,2,1,"div",3),c.YNc(5,I,2,2,"div",2),c.qZA()),2&i&&(c.xp6(3),c.Q6J("ngIf",t.isRecommandationDisplay),c.xp6(1),c.Q6J("ngIf",t.isDescriptionDisplay),c.xp6(1),c.Q6J("ngIf",t.isAssociationDisplay))},directives:[a.f,r.W2,g,n.O5,n.mk,x,q,v],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:var(--ion-color-secondary)}.wine-container[_ngcontent-%COMP%]{width:100%;height:100%}.mobile-wine-container[_ngcontent-%COMP%]{width:100%;height:100%;padding:0}main.inner-scroll.scroll-y[_ngcontent-%COMP%]{padding:0}.wine-form-container[_ngcontent-%COMP%]{width:100%;height:100%;text-align:center;align-items:center;justify-content:center}.ion-padding[_ngcontent-%COMP%]{padding:0}.carrousel-container[_ngcontent-%COMP%]{height:calc(100% - 60px)}.mobile-carrousel-container[_ngcontent-%COMP%]{height:calc(100% - 127px)}.description-container[_ngcontent-%COMP%]{width:100%;height:300px;text-align:center;line-height:300px}"]}),i})()}];let k=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=c.oAB({type:i}),i.\u0275inj=c.cJS({imports:[[s.Bz.forChild(C)],s.Bz]}),i})();var _=e(5902);let O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=c.oAB({type:i}),i.\u0275inj=c.cJS({imports:[[n.ez,o.u5,r.Pc,k,u.kz,o.UX,_.n]]}),i})()}}]);