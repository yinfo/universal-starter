!function(e,n){for(var t in n)e[t]=n[t]}(exports,function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}({"+x1j":function(e,n,t){"use strict";var o=t("OQ0P"),r=t("Q4XH"),l=o.\u0275crt({encapsulation:2,styles:[],data:{}});function u(e){return o.\u0275vid(0,[(e()(),o.\u0275eld(0,0,null,null,1,"h3",[],null,null,null,null,null)),(e()(),o.\u0275ted(1,null,["",""])),(e()(),o.\u0275eld(2,0,null,null,1,"button",[],null,[[null,"click"]],function(e,n,t){var o=!0;return"click"===n&&(o=!1!==e.component.increase(t)&&o),o},null,null)),(e()(),o.\u0275ted(-1,null,["clickBtn"]))],null,function(e,n){e(n,1,0,n.component.message)})}function a(e){return o.\u0275vid(0,[(e()(),o.\u0275eld(0,0,null,null,1,"app-home",[],null,null,null,u,l)),o.\u0275did(1,114688,null,0,r.HomeComponent,[],null,null)],function(e,n){e(n,1,0)},null)}n.RenderType_HomeComponent=l,n.View_HomeComponent_0=u,n.View_HomeComponent_Host_0=a,n.HomeComponentNgFactory=o.\u0275ccf("app-home",r.HomeComponent,a,{},{},[])},0:function(e,n,t){e.exports=t("or6l")},"02xY":function(e,n){e.exports=require("@angular/forms")},"600m":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AppServerModule=function(){}},"61WG":function(e,n){e.exports=require("@angular/material/core")},"8wGh":function(e,n){e.exports=require("@angular/animations/browser")},"9K8V":function(e,n){e.exports=require("@nguniversal/module-map-ngfactory-loader")},"9XLd":function(e,n){e.exports=require("@nguniversal/common")},"9p8R":function(e,n){e.exports=require("@angular/flex-layout")},A7Ap:function(e,n){e.exports=require("@angular/router")},ASwt:function(e,n){e.exports=require("@angular/platform-server")},GPw0:function(e,n,t){"use strict";var o=t("OQ0P"),r=t("fl8I"),l=t("A7Ap");n.LazyModuleNgFactory=o.\u0275cmf(r.LazyModule,[],function(e){return o.\u0275mod([o.\u0275mpd(512,o.ComponentFactoryResolver,o.\u0275CodegenComponentFactoryResolver,[[8,[d]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o.\u0275mpd(512,l.RouterModule,l.RouterModule,[[2,l.\u0275a],[2,l.Router]]),o.\u0275mpd(512,r.LazyModule,r.LazyModule,[]),o.\u0275mpd(1024,l.ROUTES,function(){return[[{path:"",component:r.LazyComponent,pathMatch:"full"}]]},[])])});var u=o.\u0275crt({encapsulation:2,styles:[],data:{}});function a(e){return o.\u0275vid(0,[(e()(),o.\u0275eld(0,0,null,null,1,"h3",[],null,null,null,null,null)),(e()(),o.\u0275ted(1,null,["",""])),(e()(),o.\u0275ted(-1,null,["\n  "])),(e()(),o.\u0275eld(3,0,null,null,1,"button",[],null,[[null,"click"]],function(e,n,t){var o=!0;return"click"===n&&(o=!1!==e.component.increase(t)&&o),o},null,null)),(e()(),o.\u0275ted(-1,null,["clickBtn"])),(e()(),o.\u0275ted(-1,null,["\n  "]))],null,function(e,n){e(n,1,0,n.component.message)})}function i(e){return o.\u0275vid(0,[(e()(),o.\u0275eld(0,0,null,null,1,"app-lazy-view",[],null,null,null,a,u)),o.\u0275did(1,49152,null,0,r.LazyComponent,[],null,null)],null,null)}n.RenderType_LazyComponent=u,n.View_LazyComponent_0=a,n.View_LazyComponent_Host_0=i;var d=o.\u0275ccf("app-lazy-view",r.LazyComponent,i,{},{},[]);n.LazyComponentNgFactory=d},"Hq/i":function(e,n){e.exports=require("@angular/platform-browser/animations")},Iksp:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AppModule=function(){}},Ir0Z:function(e,n){e.exports=require("@angular/common/http")},LvpR:function(e,n,t){"use strict";n.styles=["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}mat-sidenav[_ngcontent-%COMP%]{width:320px}.content[_ngcontent-%COMP%]{padding:12px}mat-icon.avatar[_ngcontent-%COMP%]{overflow:hidden;width:64px;height:64px;border-radius:50%;margin:12px}.fab-bottom-right[_ngcontent-%COMP%]{position:fixed;right:16px;bottom:16px}.mat-list-item-content[_ngcontent-%COMP%]{height:auto!important}"]},MnMZ:function(e,n){e.exports=require("@angular/material/button")},OQ0P:function(e,n){e.exports=require("@angular/core")},Q4XH:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.HomeComponent=function(){function e(){this.message="0",this.count=0}return e.prototype.ngOnInit=function(){this.message="Hello 13"},e.prototype.increase=function(e){this.count++,this.message="HomeComponent"+this.count,console.log(this.count)},e}()},Ub9p:function(e,n,t){"use strict";var o=t("OQ0P"),r=t("600m"),l=t("YWx4"),u=t("+x1j"),a=t("hQx7"),i=t("yv0u"),d=t("wp5R"),p=t("ASwt"),m=t("8wGh"),c=t("Hq/i"),s=t("9XLd"),M=t("Ir0Z"),f=t("02xY"),R=t("l0JX"),y=t("vM6b"),A=t("aNNv"),C=t("l0GU"),g=t("9p8R"),O=t("A7Ap"),N=t("f9NF"),E=t("9K8V"),_=t("Q4XH"),T=t("61WG"),I=t("MnMZ"),v=t("Iksp");n.AppServerModuleNgFactory=o.\u0275cmf(r.AppServerModule,[l.AppComponent],function(e){return o.\u0275mod([o.\u0275mpd(512,o.ComponentFactoryResolver,o.\u0275CodegenComponentFactoryResolver,[[8,[u.HomeComponentNgFactory,a.AppComponentNgFactory]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o.\u0275mpd(5120,o.LOCALE_ID,o.\u0275q,[[3,o.LOCALE_ID]]),o.\u0275mpd(4608,i.NgLocalization,i.NgLocaleLocalization,[o.LOCALE_ID,[2,i.\u0275a]]),o.\u0275mpd(5120,o.IterableDiffers,o.\u0275n,[]),o.\u0275mpd(5120,o.KeyValueDiffers,o.\u0275o,[]),o.\u0275mpd(4608,d.DomSanitizer,d.\u0275e,[i.DOCUMENT]),o.\u0275mpd(6144,o.Sanitizer,null,[d.DomSanitizer]),o.\u0275mpd(4608,d.HAMMER_GESTURE_CONFIG,d.HammerGestureConfig,[]),o.\u0275mpd(5120,d.EVENT_MANAGER_PLUGINS,function(e,n,t,o,r){return[new d.\u0275DomEventsPlugin(e,n),new d.\u0275KeyEventsPlugin(t),new d.\u0275HammerGesturesPlugin(o,r)]},[i.DOCUMENT,o.NgZone,i.DOCUMENT,i.DOCUMENT,d.HAMMER_GESTURE_CONFIG]),o.\u0275mpd(4608,d.EventManager,d.EventManager,[d.EVENT_MANAGER_PLUGINS,o.NgZone]),o.\u0275mpd(135680,d.\u0275DomSharedStylesHost,d.\u0275DomSharedStylesHost,[i.DOCUMENT]),o.\u0275mpd(4608,d.\u0275DomRendererFactory2,d.\u0275DomRendererFactory2,[d.EventManager,d.\u0275DomSharedStylesHost]),o.\u0275mpd(4608,p.\u0275c,p.\u0275c,[d.DOCUMENT,[2,d.\u0275TRANSITION_ID]]),o.\u0275mpd(6144,d.\u0275SharedStylesHost,null,[p.\u0275c]),o.\u0275mpd(4608,p.\u0275ServerRendererFactory2,p.\u0275ServerRendererFactory2,[o.NgZone,d.DOCUMENT,d.\u0275SharedStylesHost]),o.\u0275mpd(4608,m.AnimationDriver,m.\u0275NoopAnimationDriver,[]),o.\u0275mpd(5120,m.\u0275AnimationStyleNormalizer,c.\u0275d,[]),o.\u0275mpd(4608,m.\u0275AnimationEngine,c.\u0275b,[m.AnimationDriver,m.\u0275AnimationStyleNormalizer]),o.\u0275mpd(5120,o.RendererFactory2,p.\u0275a,[p.\u0275ServerRendererFactory2,m.\u0275AnimationEngine,o.NgZone]),o.\u0275mpd(4352,o.Testability,null,[]),o.\u0275mpd(4608,d.Meta,d.Meta,[i.DOCUMENT]),o.\u0275mpd(4608,d.Title,d.Title,[i.DOCUMENT]),o.\u0275mpd(4608,d.TransferState,d.TransferState,[]),o.\u0275mpd(4608,s.\u0275a,s.\u0275a,[o.ApplicationRef,d.TransferState]),o.\u0275mpd(4608,M.HttpXsrfTokenExtractor,M.\u0275h,[i.DOCUMENT,o.PLATFORM_ID,M.\u0275f]),o.\u0275mpd(4608,M.\u0275i,M.\u0275i,[M.HttpXsrfTokenExtractor,M.\u0275g]),o.\u0275mpd(5120,M.HTTP_INTERCEPTORS,function(e,n){return[e,n]},[s.\u0275a,M.\u0275i]),o.\u0275mpd(4608,f.\u0275i,f.\u0275i,[]),o.\u0275mpd(4608,M.XhrFactory,p.\u0275d,[]),o.\u0275mpd(4608,M.HttpXhrBackend,M.HttpXhrBackend,[M.XhrFactory]),o.\u0275mpd(6144,M.HttpBackend,null,[M.HttpXhrBackend]),o.\u0275mpd(5120,M.HttpHandler,p.\u0275g,[M.HttpBackend,[2,M.HTTP_INTERCEPTORS]]),o.\u0275mpd(4608,M.HttpClient,M.HttpClient,[M.HttpHandler]),o.\u0275mpd(4608,M.\u0275e,M.\u0275e,[]),o.\u0275mpd(4608,R.AnimationBuilder,c.\u0275BrowserAnimationBuilder,[o.RendererFactory2,d.DOCUMENT]),o.\u0275mpd(6144,y.DIR_DOCUMENT,null,[i.DOCUMENT]),o.\u0275mpd(4608,y.Directionality,y.Directionality,[[2,y.DIR_DOCUMENT]]),o.\u0275mpd(4608,A.Platform,A.Platform,[]),o.\u0275mpd(4608,C.InteractivityChecker,C.InteractivityChecker,[A.Platform]),o.\u0275mpd(4608,C.FocusTrapFactory,C.FocusTrapFactory,[C.InteractivityChecker,o.NgZone,i.DOCUMENT]),o.\u0275mpd(136192,C.AriaDescriber,C.ARIA_DESCRIBER_PROVIDER_FACTORY,[[3,C.AriaDescriber],i.DOCUMENT]),o.\u0275mpd(5120,C.LiveAnnouncer,C.LIVE_ANNOUNCER_PROVIDER_FACTORY,[[3,C.LiveAnnouncer],[2,C.LIVE_ANNOUNCER_ELEMENT_TOKEN],i.DOCUMENT]),o.\u0275mpd(5120,C.FocusMonitor,C.FOCUS_MONITOR_PROVIDER_FACTORY,[[3,C.FocusMonitor],o.NgZone,A.Platform]),o.\u0275mpd(5120,g.BREAKPOINTS,g.DEFAULT_BREAKPOINTS_PROVIDER_FACTORY,[]),o.\u0275mpd(4608,g.BreakPointRegistry,g.BreakPointRegistry,[g.BREAKPOINTS]),o.\u0275mpd(4608,g.MatchMedia,g.MatchMedia,[o.NgZone,i.DOCUMENT]),o.\u0275mpd(5120,g.MediaMonitor,g.MEDIA_MONITOR_PROVIDER_FACTORY,[[3,g.MediaMonitor],g.BreakPointRegistry,g.MatchMedia]),o.\u0275mpd(5120,g.ObservableMedia,g.OBSERVABLE_MEDIA_PROVIDER_FACTORY,[[3,g.ObservableMedia],g.MatchMedia,g.BreakPointRegistry]),o.\u0275mpd(5120,O.ActivatedRoute,O.\u0275f,[O.Router]),o.\u0275mpd(4608,O.NoPreloading,O.NoPreloading,[]),o.\u0275mpd(6144,O.PreloadingStrategy,null,[O.NoPreloading]),o.\u0275mpd(135680,O.RouterPreloader,O.RouterPreloader,[O.Router,o.NgModuleFactoryLoader,o.Compiler,o.Injector,O.PreloadingStrategy]),o.\u0275mpd(4608,O.PreloadAllModules,O.PreloadAllModules,[]),o.\u0275mpd(5120,O.ROUTER_INITIALIZER,O.\u0275i,[O.\u0275g]),o.\u0275mpd(5120,o.APP_BOOTSTRAP_LISTENER,function(e){return[e]},[O.ROUTER_INITIALIZER]),o.\u0275mpd(4608,N.BrowserXhr,p.\u0275d,[]),o.\u0275mpd(4608,N.ResponseOptions,N.BaseResponseOptions,[]),o.\u0275mpd(4608,N.XSRFStrategy,p.\u0275e,[]),o.\u0275mpd(4608,N.XHRBackend,N.XHRBackend,[N.BrowserXhr,N.ResponseOptions,N.XSRFStrategy]),o.\u0275mpd(4608,N.RequestOptions,N.BaseRequestOptions,[]),o.\u0275mpd(5120,N.Http,p.\u0275f,[N.XHRBackend,N.RequestOptions]),o.\u0275mpd(5120,p.BEFORE_APP_SERIALIZED,function(e,n,t){return[p.\u0275b(e,n,t)]},[d.DOCUMENT,o.APP_ID,d.TransferState]),o.\u0275mpd(512,i.CommonModule,i.CommonModule,[]),o.\u0275mpd(1024,o.ErrorHandler,d.\u0275a,[]),o.\u0275mpd(1024,o.NgProbeToken,function(){return[O.\u0275b()]},[]),o.\u0275mpd(256,o.APP_ID,"my-app",[]),o.\u0275mpd(2048,d.\u0275TRANSITION_ID,null,[o.APP_ID]),o.\u0275mpd(512,O.\u0275g,O.\u0275g,[o.Injector]),o.\u0275mpd(1024,o.APP_INITIALIZER,function(e,n,t,o,r){return[d.\u0275h(e),d.\u0275f(n,t,o),O.\u0275h(r)]},[[2,o.NgProbeToken],d.\u0275TRANSITION_ID,i.DOCUMENT,o.Injector,O.\u0275g]),o.\u0275mpd(512,o.ApplicationInitStatus,o.ApplicationInitStatus,[[2,o.APP_INITIALIZER]]),o.\u0275mpd(131584,o.ApplicationRef,o.ApplicationRef,[o.NgZone,o.\u0275Console,o.Injector,o.ErrorHandler,o.ComponentFactoryResolver,o.ApplicationInitStatus]),o.\u0275mpd(512,o.ApplicationModule,o.ApplicationModule,[o.ApplicationRef]),o.\u0275mpd(512,d.BrowserModule,d.BrowserModule,[[3,d.BrowserModule]]),o.\u0275mpd(1024,O.\u0275a,O.\u0275d,[[3,O.Router]]),o.\u0275mpd(512,O.UrlSerializer,O.DefaultUrlSerializer,[]),o.\u0275mpd(512,O.ChildrenOutletContexts,O.ChildrenOutletContexts,[]),o.\u0275mpd(256,O.ROUTER_CONFIGURATION,{},[]),o.\u0275mpd(1024,i.LocationStrategy,O.\u0275c,[i.PlatformLocation,[2,i.APP_BASE_HREF],O.ROUTER_CONFIGURATION]),o.\u0275mpd(512,i.Location,i.Location,[i.LocationStrategy]),o.\u0275mpd(512,o.Compiler,o.Compiler,[]),o.\u0275mpd(512,o.NgModuleFactoryLoader,E.ModuleMapNgFactoryLoader,[o.Compiler,E.MODULE_MAP]),o.\u0275mpd(1024,O.ROUTES,function(){return[[{path:"",component:_.HomeComponent,pathMatch:"full"},{path:"lazy",loadChildren:"./lazy/lazy.module#LazyModule"},{path:"lazy/nested",loadChildren:"./lazy/lazy.module#LazyModule"}]]},[]),o.\u0275mpd(1024,O.Router,O.\u0275e,[o.ApplicationRef,O.UrlSerializer,O.ChildrenOutletContexts,i.Location,o.Injector,o.NgModuleFactoryLoader,o.Compiler,O.ROUTES,O.ROUTER_CONFIGURATION,[2,O.UrlHandlingStrategy],[2,O.RouteReuseStrategy]]),o.\u0275mpd(512,O.RouterModule,O.RouterModule,[[2,O.\u0275a],[2,O.Router]]),o.\u0275mpd(512,d.BrowserTransferStateModule,d.BrowserTransferStateModule,[]),o.\u0275mpd(512,s.TransferHttpCacheModule,s.TransferHttpCacheModule,[]),o.\u0275mpd(512,f.\u0275ba,f.\u0275ba,[]),o.\u0275mpd(512,f.FormsModule,f.FormsModule,[]),o.\u0275mpd(512,M.HttpClientXsrfModule,M.HttpClientXsrfModule,[]),o.\u0275mpd(512,M.HttpClientModule,M.HttpClientModule,[]),o.\u0275mpd(512,c.BrowserAnimationsModule,c.BrowserAnimationsModule,[]),o.\u0275mpd(512,y.BidiModule,y.BidiModule,[]),o.\u0275mpd(256,T.MATERIAL_SANITY_CHECKS,!0,[]),o.\u0275mpd(512,T.MatCommonModule,T.MatCommonModule,[[2,T.MATERIAL_SANITY_CHECKS]]),o.\u0275mpd(512,A.PlatformModule,A.PlatformModule,[]),o.\u0275mpd(512,T.MatRippleModule,T.MatRippleModule,[]),o.\u0275mpd(512,C.A11yModule,C.A11yModule,[]),o.\u0275mpd(512,I.MatButtonModule,I.MatButtonModule,[]),o.\u0275mpd(512,g.MediaQueriesModule,g.MediaQueriesModule,[]),o.\u0275mpd(512,g.FlexLayoutModule,g.FlexLayoutModule,[]),o.\u0275mpd(512,v.AppModule,v.AppModule,[]),o.\u0275mpd(512,N.HttpModule,N.HttpModule,[]),o.\u0275mpd(512,c.NoopAnimationsModule,c.NoopAnimationsModule,[]),o.\u0275mpd(512,p.ServerModule,p.ServerModule,[]),o.\u0275mpd(512,E.ModuleMapLoaderModule,E.ModuleMapLoaderModule,[]),o.\u0275mpd(512,p.ServerTransferStateModule,p.ServerTransferStateModule,[]),o.\u0275mpd(512,r.AppServerModule,r.AppServerModule,[]),o.\u0275mpd(256,M.\u0275f,"XSRF-TOKEN",[]),o.\u0275mpd(256,M.\u0275g,"X-XSRF-TOKEN",[])])})},YWx4:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AppComponent=function(){this.users=[{name:"Lia Lugo",avatar:"svg-11",details:"I love cheese, ...",isAdmin:!0,isCool:!1},{name:"George Duke",avatar:"svg-12",details:"Zombie ipsum ...",isAdmin:!1,isCool:!0}]}},aNNv:function(e,n){e.exports=require("@angular/cdk/platform")},f9NF:function(e,n){e.exports=require("@angular/http")},fl8I:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.LazyComponent=function(){function e(){this.message="0",this.count=0}return e.prototype.increase=function(e){this.count++,this.message="LazyComponent"+this.count,console.log(this.message)},e}(),n.LazyModule=function(){}},hQx7:function(e,n,t){"use strict";var o=t("LvpR"),r=t("OQ0P"),l=t("YWx4"),u=r.\u0275crt({encapsulation:0,styles:[o.styles],data:{}});function a(e){return r.\u0275vid(0,[(e()(),r.\u0275eld(0,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),r.\u0275ted(-1,null,["\u0410 \u0442\u0430\u043a? 3"])),(e()(),r.\u0275ted(-1,null,["\n"])),(e()(),r.\u0275ted(-1,null,["\n\n    "])),(e()(),r.\u0275ted(-1,null,["\n        "])),(e()(),r.\u0275ted(-1,null,["\n            "])),(e()(),r.\u0275ted(-1,null,["\n        "])),(e()(),r.\u0275ted(-1,null,["\n    "])),(e()(),r.\u0275ted(-1,null,["\n\n    "])),(e()(),r.\u0275ted(-1,null,["\n        "])),(e()(),r.\u0275ted(-1,null,["\n            "])),(e()(),r.\u0275ted(-1,null,["\n                "])),(e()(),r.\u0275ted(-1,null,["\n                    "])),(e()(),r.\u0275ted(-1,null,["\n                        "])),(e()(),r.\u0275ted(-1,null,["\n                            "])),(e()(),r.\u0275ted(-1,null,["\n                        "])),(e()(),r.\u0275ted(-1,null,["\n                    "])),(e()(),r.\u0275ted(-1,null,["\n                "])),(e()(),r.\u0275ted(-1,null,["\n                "])),(e()(),r.\u0275ted(-1,null,["\n                    "])),(e()(),r.\u0275ted(-1,null,["\n                "])),(e()(),r.\u0275ted(-1,null,["\n            "])),(e()(),r.\u0275ted(-1,null,["\n        "])),(e()(),r.\u0275ted(-1,null,["\n\n\n        "])),(e()(),r.\u0275ted(-1,null,["\n            "])),(e()(),r.\u0275ted(-1,null,["\n        "])),(e()(),r.\u0275ted(-1,null,["\n    "])),(e()(),r.\u0275ted(-1,null,["\n\n"]))],null,null)}function i(e){return r.\u0275vid(0,[(e()(),r.\u0275eld(0,0,null,null,1,"app-root",[],null,null,null,a,u)),r.\u0275did(1,49152,null,0,l.AppComponent,[],null,null)],null,null)}n.RenderType_AppComponent=u,n.View_AppComponent_0=a,n.View_AppComponent_Host_0=i,n.AppComponentNgFactory=r.\u0275ccf("app-root",l.AppComponent,i,{},{},[])},l0GU:function(e,n){e.exports=require("@angular/cdk/a11y")},l0JX:function(e,n){e.exports=require("@angular/animations")},or6l:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("Ub9p");n.AppServerModuleNgFactory=o.AppServerModuleNgFactory;var r=t("GPw0"),l=t("600m");n.AppServerModule=l.AppServerModule,n.LAZY_MODULE_MAP={"./lazy/lazy.module#LazyModule":r.LazyModuleNgFactory}},vM6b:function(e,n){e.exports=require("@angular/cdk/bidi")},wp5R:function(e,n){e.exports=require("@angular/platform-browser")},yv0u:function(e,n){e.exports=require("@angular/common")}}));