(function(g){var window=this;'use strict';var GYa=function(a,b){a.Ia("onAutonavCoundownStarted",b)},A2=function(a,b,c){g.N(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.wf(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.oC&&(b.lengthText?(e=b.lengthText||null,f=b.Mr||null):b.lengthSeconds&&(e=g.ZG(b.lengthSeconds),f=g.ZG(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.kC(d).type;var l=b instanceof g.oC?b.isLivePlayback:null,m=b instanceof g.oC?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,t=[],u=[];n&&t.push(n);p&&(t.push(p),u.push(p));q&&u.push(q);c={title:b.title,author:n,author_and_views:t.join(" \u2022 "),aria_label:b.ariaLabel||
g.KE("Regarder $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.cm(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:u.join(" \u2022 "),autoplayAlternativeHeader:b.Ko};b instanceof g.nC&&(c.playlist_length=b.playlistLength);a.update(c)},B2=function(a){var b=a.S(),c=b.j;
g.U.call(this,{F:"a",L:"ytp-autonav-suggestion-card",T:{href:"{{url}}",target:c?b.J:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},R:[{F:"div",Ba:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],T:{style:"{{background}}"},R:[{F:"div",T:{"aria-label":"{{timestamp}}"},Ba:["ytp-autonav-timestamp"],X:"{{duration}}"},{F:"div",Ba:["ytp-autonav-live-stamp"],X:"En direct"},
{F:"div",Ba:["ytp-autonav-upcoming-stamp"],X:"\u00c0 venir"},{F:"div",L:"ytp-autonav-list-overlay",R:[{F:"div",L:"ytp-autonav-mix-text",X:"Mix"},{F:"div",L:"ytp-autonav-mix-icon"}]}]},{F:"div",Ba:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],X:"{{title}}"},{F:"div",Ba:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],X:"{{author}}"},{F:"div",Ba:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],X:"{{views_and_publish_time}}"}]});this.G=a;this.suggestion=
null;this.j=c;this.Ka("click",this.onClick);this.Ka("keypress",this.onKeyPress)},D2=function(a,b){b=void 0===b?!1:b;
g.U.call(this,{F:"div",L:"ytp-autonav-endscreen-countdown-container"});var c=this;this.D=b;this.cancelCommand=void 0;this.u=0;b=a.S();var d=b.j;this.G=a;this.suggestion=null;this.onVideoDataChange("newdata",this.G.getVideoData());this.N(a,"videodatachange",this.onVideoDataChange);var e=["ytp-autonav-endscreen-upnext-thumbnail"];b.K("web_rounded_thumbnails")&&e.push("rounded-thumbnail");this.j=new g.U({F:"div",L:"ytp-autonav-endscreen-upnext-container",T:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}",
"data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},R:[{F:"div",L:"ytp-autonav-endscreen-upnext-header"},{F:"div",L:"ytp-autonav-endscreen-upnext-alternative-header",X:"{{autoplayAlternativeHeader}}"},{F:"a",L:"ytp-autonav-endscreen-link-container",T:{href:"{{url}}",target:d?b.J:""},R:[{F:"div",Ba:e,T:{style:"{{background}}"},R:[{F:"div",T:{"aria-label":"{{timestamp}}"},Ba:["ytp-autonav-timestamp"],X:"{{duration}}"},{F:"div",Ba:["ytp-autonav-live-stamp"],
X:"En direct"},{F:"div",Ba:["ytp-autonav-upcoming-stamp"],X:"\u00c0 venir"}]},{F:"div",L:"ytp-autonav-endscreen-video-info",R:[{F:"div",L:"ytp-autonav-endscreen-premium-badge"},{F:"div",L:"ytp-autonav-endscreen-upnext-title",X:"{{title}}"},{F:"div",L:"ytp-autonav-endscreen-upnext-author",X:"{{author}}"},{F:"div",L:"ytp-autonav-view-and-date",X:"{{views_and_publish_time}}"},{F:"div",L:"ytp-autonav-author-and-view",X:"{{author_and_views}}"}]}]}]});g.J(this,this.j);this.j.ra(this.element);d||this.N(this.j.va("ytp-autonav-endscreen-link-container"),
"click",this.FL);this.G.yb(this.element,this,115127);this.G.yb(this.j.va("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.U({F:"div",L:"ytp-autonav-overlay"});g.J(this,this.overlay);this.overlay.ra(this.element);this.B=new g.U({F:"div",L:"ytp-autonav-endscreen-button-container"});g.J(this,this.B);this.B.ra(this.element);this.cancelButton=new g.U({F:"button",Ba:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":
""],T:{"aria-label":"Annuler la lecture automatique"},X:"Annuler"});g.J(this,this.cancelButton);this.cancelButton.ra(this.B.element);this.cancelButton.Ka("click",this.GU,this);this.G.yb(this.cancelButton.element,this,115129);this.playButton=new g.U({F:"a",Ba:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],T:{href:"{{url}}",role:"button","aria-label":"Lire la vid\u00e9o suivante"},X:"Regarder"});
g.J(this,this.playButton);this.playButton.ra(this.B.element);this.playButton.Ka("click",this.FL,this);this.G.yb(this.playButton.element,this,115130);this.C=new g.K(function(){C2(c)},500);
g.J(this,this.C);this.EL();this.N(a,"autonavvisibility",this.EL)},G2=function(a){var b=a.G.Ej(!0,a.G.isFullscreen());
g.N(a.element,"ytp-autonav-endscreen-small-mode",a.gg(b));g.N(a.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.tD);g.N(a.G.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.G.Ne());g.N(a.G.getRootNode(),"countdown-running",a.Yi());g.N(a.element,"ytp-player-content",a.G.Ne());g.Ek(a.overlay.element,{width:b.width+"px"});if(!a.Yi()){a.G.Ne()?E2(a,Math.round(F2(a)/1E3)):E2(a);b=!!a.suggestion&&!!a.suggestion.Ko;var c=a.G.Ne()||!b;g.N(a.element,"ytp-autonav-endscreen-upnext-alternative-header-only",
!c&&b);g.N(a.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.$F(a.B,a.G.Ne())}},C2=function(a){var b=F2(a),c=Math,d=c.min;
var e=a.u?Date.now()-a.u:0;c=d.call(c,e,b);E2(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Yi()?a.select(!0):a.Yi()&&a.C.start()},F2=function(a){if(a.G.isFullscreen()){var b;
a=null==(b=a.G.getVideoData())?void 0:b.Tw;return-1===a||void 0===a?8E3:a}return 0<=a.G.bp()?a.G.bp():g.Kz(a.G.S().experiments,"autoplay_time")||1E4},E2=function(a,b){b=void 0===b?-1:b;
a=a.j.va("ytp-autonav-endscreen-upnext-header");g.gg(a);if(0<=b){b=String(b);var c="Prochaine vid\u00e9o dans $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Prochaine vid\u00e9o dans $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.fg("Prochaine vid\u00e9o dans $SECONDS".slice(0,d)));var e=g.eg("span");g.un(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.lg(e,b);a.appendChild(e);a.appendChild(g.fg("Prochaine vid\u00e9o dans $SECONDS".slice(d+c.length)));return}}g.lg(a,"\u00c0 suivre")},
H2=function(a,b){g.U.call(this,{F:"div",
Ba:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},I2=function(a){g.U.call(this,{F:"div",
Ba:["ytp-upnext","ytp-player-content"],T:{"aria-label":"{{aria_label}}"},R:[{F:"div",L:"ytp-cued-thumbnail-overlay-image",T:{style:"{{background}}"}},{F:"span",L:"ytp-upnext-top",R:[{F:"span",L:"ytp-upnext-header",X:"\u00c0 suivre"},{F:"span",L:"ytp-upnext-title",X:"{{title}}"},{F:"span",L:"ytp-upnext-author",X:"{{author}}"}]},{F:"a",L:"ytp-upnext-autoplay-icon",T:{role:"button",href:"{{url}}","aria-label":"Lire la vid\u00e9o suivante"},R:[{F:"svg",T:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},R:[{F:"circle",L:"ytp-svg-autoplay-circle",T:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{F:"circle",L:"ytp-svg-autoplay-ring",T:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{F:"path",L:"ytp-svg-fill",T:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{F:"span",L:"ytp-upnext-bottom",R:[{F:"span",L:"ytp-upnext-cancel"},{F:"span",L:"ytp-upnext-paused",
X:"La lecture automatique est d\u00e9sactiv\u00e9e"}]}]});this.api=a;this.cancelButton=null;this.D=this.va("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.K(this.TA,5E3,this);this.u=0;var b=this.va("ytp-upnext-cancel");this.cancelButton=new g.U({F:"button",Ba:["ytp-upnext-cancel-button","ytp-button"],T:{tabindex:"0","aria-label":"Annuler la lecture automatique"},X:"Annuler"});g.J(this,this.cancelButton);this.cancelButton.Ka("click",this.HU,this);this.cancelButton.ra(b);
this.cancelButton&&this.api.yb(this.cancelButton.element,this,115129);g.J(this,this.C);this.api.yb(this.element,this,18788);b=this.va("ytp-upnext-autoplay-icon");this.N(b,"click",this.IU);this.api.yb(b,this,115130);this.GL();this.N(a,"autonavvisibility",this.GL);this.N(a,"mdxnowautoplaying",this.sZ);this.N(a,"mdxautoplaycanceled",this.tZ);g.N(this.element,"ytp-upnext-mobile",this.api.S().isMobile)},HYa=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.Tw;return-1===a||void 0===a?8E3:a}return 0<=a.api.bp()?a.api.bp():g.Kz(a.api.S().experiments,"autoplay_time")||1E4},J2=function(a,b){b=HYa(a,b);
var c=Math,d=c.min;var e=(0,g.Q)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Yi()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Yi()&&a.j.start()},K2=function(a){H2.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.U({F:"div",L:"ytp-suggestion-panel",R:[{F:"div",Ba:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],X:"Plus de vid\u00e9os"}]});this.J=new g.U({F:"div",L:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.I=!1;this.u=new D2(this.player);g.J(this,this.u);this.u.ra(this.element);a.getVideoData().kd?this.j=this.u:(this.j=new I2(a),g.nI(this.player,this.j.element,4),g.J(this,this.j));this.overlay=new g.U({F:"div",
L:"ytp-autonav-overlay-cancelled-state"});g.J(this,this.overlay);this.overlay.ra(this.element);this.C=new g.Qy(this);g.J(this,this.C);g.J(this,this.table);this.table.ra(this.element);this.table.show();g.J(this,this.J);this.J.ra(this.table.element);this.hide()},L2=function(a){var b=a.Ne();
b!==a.D&&(a.D=b,a.player.W("autonavvisibility"),a.D?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},M2=function(a){H2.call(this,a,"subscribecard-endscreen");
this.j=new g.U({F:"div",L:"ytp-subscribe-card",R:[{F:"img",L:"ytp-author-image",T:{src:"{{profilePicture}}"}},{F:"div",L:"ytp-subscribe-card-right",R:[{F:"div",L:"ytp-author-name",X:"{{author}}"},{F:"div",L:"html5-subscribe-button-container"}]}]});g.J(this,this.j);this.j.ra(this.element);var b=a.getVideoData();this.subscribeButton=new g.IJ("S'abonner",null,"Se d\u00e9sabonner",null,!0,!1,b.fk,b.subscribed,"trailer-endscreen",null,null,a);g.J(this,this.subscribeButton);this.subscribeButton.ra(this.j.va("html5-subscribe-button-container"));
this.N(a,"videodatachange",this.Ea);this.Ea();this.hide()},N2=function(a){var b=a.S(),c=g.Uy||g.BA?{style:"will-change: opacity"}:void 0,d=b.j,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.U.call(this,{F:"a",Ba:e,T:{href:"{{url}}",target:d?b.J:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},R:[{F:"div",L:"ytp-videowall-still-image",T:{style:"{{background}}"}},{F:"span",L:"ytp-videowall-still-info",R:[{F:"span",L:"ytp-videowall-still-info-bg",R:[{F:"span",L:"ytp-videowall-still-info-content",T:c,R:[{F:"span",L:"ytp-videowall-still-info-title",X:"{{title}}"},{F:"span",
L:"ytp-videowall-still-info-author",X:"{{author_and_views}}"},{F:"span",L:"ytp-videowall-still-info-live",X:"En direct"},{F:"span",L:"ytp-videowall-still-info-duration",X:"{{duration}}"}]}]}]},{F:"span",Ba:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],R:[{F:"span",L:"ytp-videowall-still-listlabel-icon"},"Playlist",{F:"span",L:"ytp-videowall-still-listlabel-length",R:[" (",{F:"span",X:"{{playlist_length}}"},")"]}]},{F:"span",Ba:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
R:[{F:"span",L:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{F:"span",L:"ytp-videowall-still-listlabel-length",X:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.Qy(this);g.J(this,this.j);this.Ka("click",this.onClick);this.Ka("keypress",this.onKeyPress);this.j.N(a,"videodatachange",this.onVideoDataChange);a.Vh(this.element,this);this.onVideoDataChange()},O2=function(a){H2.call(this,a,"videowall-endscreen");
var b=this;this.G=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.J=!1;this.P=null;this.u=new g.Qy(this);g.J(this,this.u);this.U=a.K("web_rounded_thumbnails");this.I=new g.K(function(){g.wn(b.element,"ytp-show-tiles")},0);
g.J(this,this.I);var c=new g.U({F:"button",Ba:["ytp-button","ytp-endscreen-previous"],T:{"aria-label":"Pr\u00e9c\u00e9dente"},R:[g.eG()]});g.J(this,c);c.ra(this.element);c.Ka("click",this.MU,this);this.table=new g.XF({F:"div",L:"ytp-endscreen-content"});g.J(this,this.table);this.table.ra(this.element);c=new g.U({F:"button",Ba:["ytp-button","ytp-endscreen-next"],T:{"aria-label":"Suivante"},R:[g.fG()]});g.J(this,c);c.ra(this.element);c.Ka("click",this.LU,this);a.getVideoData().kd?this.j=new D2(a,!0):
this.j=new I2(a);g.J(this,this.j);g.nI(this.player,this.j.element,4);this.hide()},P2=function(a){return g.oI(a.player)&&a.bx()&&!a.C},Q2=function(a){var b=a.Ne();
b!==a.J&&(a.J=b,a.player.W("autonavvisibility"))},R2=function(a,b){b=void 0===b?null:b;
g.U.call(this,{F:"button",Ba:["ytp-watch-again","ytp-button"],T:{title:"Regarder \u00e0 nouveau sur YouTube"},X:"Regarder \u00e0 nouveau sur YouTube"});this.G=a;this.Ka("click",this.onClick);b&&g.ae(this,g.DJ(b.Zb(),this.element))},S2=function(a){H2.call(this,a,"watch-again-on-youtube-endscreen");
this.hide();this.j=new R2(a);g.J(this,this.j);this.j.ra(this.element)},T2=function(a){g.DI.call(this,a);
var b=this;this.endScreen=null;this.j=this.u=this.B=!1;this.listeners=new g.Qy(this);g.J(this,this.listeners);this.env=a.S();var c;(null==(c=g.dI(a))?0:c.vy())?this.endScreen=new S2(a):IYa(a)?(this.B=!0,JYa(this),this.j?this.endScreen=new K2(a):this.endScreen=new O2(this.player)):this.env.Se?this.endScreen=new M2(this.player):this.endScreen=new H2(this.player);g.J(this,this.endScreen);g.nI(this.player,this.endScreen.element,4);KYa(this);this.listeners.N(a,"videodatachange",this.onVideoDataChange,
this);this.listeners.N(a,g.hv("endscreen"),function(d){b.onCueRangeEnter(d)});
this.listeners.N(a,g.iv("endscreen"),function(d){b.onCueRangeExit(d)})},JYa=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.di&&a.u===b.kd)return!1;a.j=b.di;a.u=b.kd;return!0},IYa=function(a){a=a.S();
return!a.C&&a.Gc&&!a.Se},KYa=function(a){a.player.sf("endscreen");
var b=a.player.getVideoData();b=new g.fv(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.fv(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.Sd([b,c])};
g.sJ.prototype.Az=g.ca(30,function(a){this.zI!==a&&(this.zI=a,this.Hm())});
g.gI.prototype.bp=g.ca(4,function(){return this.app.bp()});
g.CS.prototype.bp=g.ca(3,function(){return this.getVideoData().tP});g.w(B2,g.U);B2.prototype.select=function(){(this.G.il(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Ax||void 0)||this.G.K("web_player_endscreen_double_log_fix_killswitch"))&&this.G.qb(this.element)};
B2.prototype.onClick=function(a){g.bJ(a,this.G,this.j,this.suggestion.sessionData||void 0)&&this.select()};
B2.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Ts(a)||(this.select(),g.Ss(a))}};g.w(D2,g.U);g.k=D2.prototype;g.k.yA=function(a){this.suggestion!==a&&(this.suggestion=a,A2(this.j,a),this.playButton.updateValue("url",this.suggestion.cm()),G2(this))};
g.k.Yi=function(){return 0<this.u};
g.k.Nv=function(){this.Yi()||(this.u=Date.now(),C2(this),GYa(this.G,F2(this)),g.N(this.G.getRootNode(),"countdown-running",this.Yi()))};
g.k.gs=function(){this.jo();C2(this);var a=this.j.va("ytp-autonav-endscreen-upnext-header");a&&g.lg(a,"\u00c0 suivre")};
g.k.jo=function(){this.Yi()&&(this.C.stop(),this.u=0)};
g.k.select=function(a){this.G.nextVideo(!1,void 0===a?!1:a);this.jo()};
g.k.FL=function(a){g.bJ(a,this.G)&&(a.currentTarget===this.playButton.element?this.G.qb(this.playButton.element):a.currentTarget===this.j.va("ytp-autonav-endscreen-link-container")&&(a=this.j.va("ytp-autonav-endscreen-link-container"),this.G.Va(a,!0),this.G.qb(a)),this.select())};
g.k.GU=function(){this.G.qb(this.cancelButton.element);g.iI(this.G,!0);this.cancelCommand&&this.G.Ia("innertubeCommand",this.cancelCommand)};
g.k.onVideoDataChange=function(a,b){var c;this.cancelCommand=null==(c=b.g2)?void 0:c.command};
g.k.EL=function(){var a=this.G.Ne();this.D&&this.ob!==a&&g.$F(this,a);G2(this);this.G.Va(this.element,a);this.G.Va(this.cancelButton.element,a);this.G.Va(this.j.va("ytp-autonav-endscreen-link-container"),a);this.G.Va(this.playButton.element,a)};
g.k.gg=function(a){return 400>a.width||459>a.height};g.w(H2,g.U);g.k=H2.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.bx=function(){return!1};
g.k.Ne=function(){return!1};
g.k.EO=function(){return!1};g.w(I2,g.U);g.k=I2.prototype;g.k.TA=function(){this.notification&&(this.C.stop(),this.pc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.k.yA=function(a){this.suggestion=a;A2(this,a,"hqdefault.jpg")};
g.k.GL=function(){g.$F(this,this.api.Ne());this.api.Va(this.element,this.api.Ne());this.api.Va(this.va("ytp-upnext-autoplay-icon"),this.api.Ne());this.cancelButton&&this.api.Va(this.cancelButton.element,this.api.Ne())};
g.k.BZ=function(){window.focus();this.TA()};
g.k.Nv=function(a){var b=this;this.Yi()||(g.gt("a11y-announce","\u00c0 suivre "+this.suggestion.title),this.u=(0,g.Q)(),this.j=new g.K(function(){J2(b,a)},25),J2(this,a),GYa(this.api,HYa(this,a)));
g.yn(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.U.prototype.hide.call(this)};
g.k.Yi=function(){return!!this.j};
g.k.gs=function(){this.jo();this.u=(0,g.Q)();J2(this);g.wn(this.element,"ytp-upnext-autoplay-paused")};
g.k.jo=function(){this.Yi()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.S().K("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.TA(),this.notification=new Notification("\u00c0 suivre",{body:this.suggestion.title,icon:this.suggestion.wf()}),this.B=this.N(this.notification,"click",this.BZ),this.C.start())}this.jo();this.api.nextVideo(!1,a)};
g.k.IU=function(a){!g.kg(this.cancelButton.element,g.Os(a))&&g.bJ(a,this.api)&&(this.api.Ne()&&this.api.qb(this.va("ytp-upnext-autoplay-icon")),this.select())};
g.k.HU=function(){this.api.Ne()&&this.cancelButton&&this.api.qb(this.cancelButton.element);g.iI(this.api,!0)};
g.k.sZ=function(a){this.api.getPresentingPlayerType();this.show();this.Nv(a)};
g.k.tZ=function(){this.api.getPresentingPlayerType();this.jo();this.hide()};
g.k.Y=function(){this.jo();this.TA();g.U.prototype.Y.call(this)};g.w(K2,H2);g.k=K2.prototype;g.k.create=function(){H2.prototype.create.call(this);this.C.N(this.player,"appresize",this.Hw);this.C.N(this.player,"onVideoAreaChange",this.Hw);this.C.N(this.player,"videodatachange",this.onVideoDataChange);this.C.N(this.player,"autonavchange",this.HL);this.C.N(this.player,"autonavcancel",this.JU);this.onVideoDataChange()};
g.k.show=function(){H2.prototype.show.call(this);(this.I||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.iI(this.player,!1);g.oI(this.player)&&this.bx()&&!this.B?(L2(this),2===this.videoData.autonavState?this.player.S().K("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Nv():3===this.videoData.autonavState&&this.j.gs()):(g.iI(this.player,!0),L2(this));this.Hw()};
g.k.hide=function(){H2.prototype.hide.call(this);this.j.gs();L2(this)};
g.k.Hw=function(){var a=this.player.Ej(!0,this.player.isFullscreen());L2(this);G2(this.u);g.N(this.element,"ytp-autonav-cancelled-small-mode",this.gg(a));g.N(this.element,"ytp-autonav-cancelled-tiny-mode",this.aC(a));g.N(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Ek(this.overlay.element,{width:a.width+"px"});if(!this.D){a=g.r(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.r(b.value);b=c.next().value;c=c.next().value;g.N(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){var b=g.DD(this.videoData);b&&(this.j.yA(b),this.j!==this.u&&this.u.yA(b));for(b=0;b<LYa.length;++b){var c=LYa[b];if(a&&a[c]){this.videos[b]=new B2(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,A2(d,c));g.J(this,this.videos[b]);this.videos[b].ra(this.J.element)}}}this.Hw()}};
g.k.HL=function(a){1===a?(this.I=!1,this.B=this.videoData.clientPlaybackNonce,this.j.jo(),this.ob&&this.Hw()):(this.I=!0,this.Ne()&&(2===a?this.j.Nv():3===a&&this.j.gs()))};
g.k.JU=function(a){a?this.HL(1):(this.B=null,this.I=!1)};
g.k.bx=function(){return 1!==this.videoData.autonavState};
g.k.gg=function(a){return(910>a.width||459>a.height)&&!this.aC(a)&&!(400>=a.width||360>=a.height)};
g.k.aC=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Ne=function(){return this.ob&&g.oI(this.player)&&this.bx()&&!this.B};
var LYa=[1,3,2,4];g.w(M2,H2);M2.prototype.Ea=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.fk;var b=this.subscribeButton;a.subscribed?b.u():b.B()};g.w(N2,g.U);N2.prototype.select=function(){(this.api.il(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Ax||void 0)||this.api.K("web_player_endscreen_double_log_fix_killswitch"))&&this.api.qb(this.element)};
N2.prototype.onClick=function(a){g.bJ(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
N2.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Ts(a)||(this.select(),g.Ss(a))}};
N2.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.S();this.u=a.D?!1:b.j};g.w(O2,H2);g.k=O2.prototype;g.k.create=function(){H2.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Rm();this.u.N(this.player,"appresize",this.Rm);this.u.N(this.player,"onVideoAreaChange",this.Rm);this.u.N(this.player,"videodatachange",this.onVideoDataChange);this.u.N(this.player,"autonavchange",this.LE);this.u.N(this.player,"autonavcancel",this.KU);a=this.videoData.autonavState;a!==this.P&&this.LE(a);this.u.N(this.element,"transitionend",this.O_)};
g.k.destroy=function(){g.Rt(this.u);g.$d(this.stills);this.stills=[];H2.prototype.destroy.call(this);g.yn(this.element,"ytp-show-tiles");this.I.stop();this.P=this.videoData.autonavState};
g.k.bx=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){H2.prototype.show.call(this);g.yn(this.element,"ytp-show-tiles");this.player.S().isMobile?g.qn(this.I):this.I.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.iI(this.player,!1);P2(this)?(Q2(this),2===this.videoData.autonavState?this.player.S().K("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Nv():3===this.videoData.autonavState&&this.j.gs()):(g.iI(this.player,!0),Q2(this))};
g.k.hide=function(){H2.prototype.hide.call(this);this.j.gs();Q2(this)};
g.k.O_=function(a){g.Os(a)===this.element&&this.Rm()};
g.k.Rm=function(){if(this.videoData&&this.videoData.suggestions&&this.videoData.suggestions.length){g.wn(this.element,"ytp-endscreen-paginate");var a=this.G.Ej(!0,this.G.isFullscreen()),b=g.dI(this.G);b&&(b=b.Ef()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.videoData.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,q=e/2,t=b<=f-2&&n>=q*m,u=e<=h-2&&n>=p*m;if((p+
1)/q*d/c>c/(p/(q+1)*d)&&u)n-=p*m,e+=2;else if(t)n-=q*m,b+=2;else if(u)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Ok(a,m,n);g.Ek(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.j.yA(g.DD(this.videoData));this.j instanceof D2&&G2(this.j);g.N(this.element,"ytp-endscreen-takeover",P2(this));Q2(this);m+=4;n+=4;for(f=c=0;f<
b;f++)for(h=0;h<e;h++)if(p=c,t=0,d&&f>=b-2&&h>=e-2?t=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(t=2):t=2),p=g.vf(p+this.B,l),0!==t){q=this.stills[c];q||(q=new N2(this.player),this.stills[c]=q,a.appendChild(q.element));u=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+t)/e)-u-4,z=Math.floor(m*(f+t)/b)-x-4;g.Kk(q.element,x,u);g.Ok(q.element,z,y);g.Ek(q.element,"transitionDelay",(h+f)/20+"s");g.N(q.element,"ytp-videowall-still-mini",1===t);g.N(q.element,"ytp-videowall-still-large",2<t);
this.U&&(t=Math.max(z,y),g.N(q.element,"ytp-videowall-still-round-large",256<=t),g.N(q.element,"ytp-videowall-still-round-medium",96<t&&256>t),g.N(q.element,"ytp-videowall-still-round-small",96>=t));p=this.videoData.suggestions[p];q.suggestion!==p&&(q.suggestion=p,t=q.api.S(),u=g.vn(q.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",A2(q,p,u),g.DA(t)&&(u=p.cm(),x={},t.ea&&g.TH(x,t.loaderUrl),u=g.lh(u,g.SH(x,"emb_rel_end")),q.updateValue("url",u)),(p=(p=p.sessionData)&&p.itct)&&
q.api.Uk(q.element,p));c++}g.N(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.ig(e.element),g.Zd(e);this.stills.length=c}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.Rm())};
g.k.LU=function(){this.B+=this.stills.length;this.Rm()};
g.k.MU=function(){this.B-=this.stills.length;this.Rm()};
g.k.EO=function(){return this.j.Yi()};
g.k.LE=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.j.jo(),this.ob&&this.Rm()):(this.D=!0,this.ob&&P2(this)&&(2===a?this.j.Nv():3===a&&this.j.gs()))};
g.k.KU=function(a){if(a){for(a=0;a<this.stills.length;a++)this.G.Va(this.stills[a].element,!0);this.LE(1)}else this.C=null,this.D=!1;this.Rm()};
g.k.Ne=function(){return this.ob&&P2(this)};g.w(R2,g.U);R2.prototype.onClick=function(a){var b=this.G.getVideoUrl(!0,!1,!1,!0),c=this.G.S();if(g.DA(c)||c.isMusic()){var d={};c.ea&&g.DA(c)&&g.TH(d,c.loaderUrl);b=g.lh(b,g.SH(d,"emb_ytp_watch_again"))}g.cJ(b,this.G,a);this.G.qb(this.element)};g.w(S2,H2);S2.prototype.show=function(){if(3!==this.player.getPlayerState()){H2.prototype.show.call(this);var a;null==(a=g.dI(this.player))||a.Az(!0)}};
S2.prototype.hide=function(){H2.prototype.hide.call(this);var a;null==(a=g.dI(this.player))||a.Az(!1)};g.w(T2,g.DI);g.k=T2.prototype;g.k.Gs=function(){var a;if(null==(a=g.dI(this.player))?0:a.vy())return!0;a=this.player.getVideoData();var b=!!(a&&a.suggestions&&a.suggestions.length);b=!IYa(this.player)||b;var c=a.gf||a.u.isMusic(),d=this.player.Gx();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Ne=function(){return this.endScreen.Ne()};
g.k.qX=function(){return this.Ne()?this.endScreen.EO():!1};
g.k.Y=function(){this.player.sf("endscreen");g.DI.prototype.Y.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.gP;if(b&&b.videoId){var c=this.player.fb().Pd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].videoId&&!a.UL?a=!1:(this.player.il(b.videoId,void 0,void 0,!0,!0,b),c&&c.iC("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.DI.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.DI.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Gs()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){KYa(this);this.B&&JYa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new K2(this.player):this.endScreen=new O2(this.player),g.J(this,this.endScreen),g.nI(this.player,this.endScreen.element,4))};g.CI("endscreen",T2);})(_yt_player);
