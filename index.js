!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("@angular/core"),require("@angular/material"),require("@angular/common")):"function"==typeof define&&define.amd?define("page-block",["exports","@angular/core","@angular/material","@angular/common"],o):o((e=e||self)["page-block"]={},e.ng.core,e.ng.material,e.ng.common)}(this,(function(e,o,t,r){"use strict";var n=function(){function e(){}return e.prototype.ipb=function(e){this.pb=e},e.prototype.blockPage=function(o){var t=this;try{return this.pb?(o=e.getOptions(o),this.pb.s(o),o.timeout&&setTimeout((function(){return t.unblockPage()}),o.timeout),!0):(console.error("No custom-page-block element found"),!1)}catch(e){return console.error(e),!1}},e.prototype.unblockPage=function(){try{return this.pb.h(),!0}catch(e){return console.error(e),!1}},e.getOptions=function(e){return e||(e={}),e.fillColor=e.fillColor||"#fff",e.fillOpacity=e.fillOpacity||.5,e.color=e.color||"primary",e},e.decorators=[{type:o.Injectable,args:[{providedIn:"root"}]}],e.ctorParameters=function(){return[]},e.ngInjectableDef=o.ɵɵdefineInjectable({factory:function(){return new e},token:e,providedIn:"root"}),e}();var i=function(){function e(e,o){this.cdRef=e,this.pbs=o,this.sl=!1,this.options={}}return e.prototype.ngOnInit=function(){this.pbs.ipb(this)},e.prototype.s=function(e){this.options=e,this.sl=!0,this.cdRef.detectChanges()},e.prototype.h=function(){this.sl=!1,this.cdRef.detectChanges()},e.decorators=[{type:o.Component,args:[{selector:"mat-page-block",template:'<div [style.background-color]="options.fillColor" [style.opacity]="options.fillOpacity" *ngIf="sl"></div>\r\n<mat-progress-bar [color]="options.color" *ngIf="sl" mode="indeterminate"></mat-progress-bar>\r\n<h1 *ngIf="sl">{{options.text}}</h1>\r\n',styles:['div{position:fixed;top:0;bottom:0;left:0;right:0}mat-progress-bar{position:fixed;top:0;left:0;right:0}h1{position:fixed;top:50%;text-align:center;left:0;right:0;transform:translateY(-50%);font-family:"Helvetica Neue",Helvetica,sans-serif;font-weight:400;font-size:24px;letter-spacing:.04rem;white-space:pre;-webkit-background-clip:text;text-transform:uppercase;-webkit-text-fill-color:transparent;background-image:repeating-linear-gradient(to right,#f44336,#9c27b0,#3f51b5,#03a9f4,#009688,#8bc34a,#ffeb3b,#ff9800);background-size:750% auto;background-position:0 100%;-webkit-animation:20s linear infinite forwards gradient;animation:20s linear infinite forwards gradient}@-webkit-keyframes gradient{0%{background-position:0 0}100%{background-position:-750% 0}}@keyframes gradient{0%{background-position:0 0}100%{background-position:-750% 0}}']}]}],e.ctorParameters=function(){return[{type:o.ChangeDetectorRef},{type:n}]},e}();var a=function(){function e(){}return e.decorators=[{type:o.NgModule,args:[{declarations:[i],imports:[t.MatProgressBarModule,r.CommonModule],exports:[i],providers:[n]}]}],e}();e.PageBlockComponent=i,e.PageBlockModule=a,e.PageBlockService=n,Object.defineProperty(e,"__esModule",{value:!0})}));