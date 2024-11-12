import{$a as u,A as W,Ea as r,Fa as h,Ia as d,K as V,La as y,Lb as _,Ma as j,Na as g,Oa as L,Pa as f,Qa as o,Ra as a,S as B,Sa as l,Ta as H,Tb as K,Ua as S,Ub as Q,Va as p,Vb as X,Wa as s,Wb as Y,Xa as R,Xb as N,Ya as x,Za as q,_a as m,ab as E,bb as T,ja as c,lb as G,mb as J,qa as v,ra as M,t as I,tb as k,ub as F,vb as O}from"./chunk-MCLZ5NFE.js";var z=n=>({disabled:n});function ce(n,C){if(n&1){let e=H();o(0,"div",1),s(1,"Upgrades"),a(),o(2,"div",2)(3,"div"),s(4,"Gold"),a(),o(5,"div",3)(6,"span"),s(7),a(),l(8,"img",4),a()(),o(9,"div",2)(10,"div"),s(11,"Power (2"),l(12,"img",4),s(13,")"),a(),o(14,"div")(15,"button",5),S("click",function(){v(e);let i=p();return M(i.increaseAttribute("power",1,2))}),o(16,"span"),s(17),a(),l(18,"img",6),a(),o(19,"button",5),S("click",function(){v(e);let i=p();return M(i.increaseAttribute("power",10,20))}),l(20,"img",6),o(21,"span"),s(22,"x10"),a()()()(),o(23,"div",2)(24,"div"),s(25,"Shield (4"),l(26,"img",4),s(27,")"),a(),o(28,"div")(29,"button",5),S("click",function(){v(e);let i=p();return M(i.increaseAttribute("shield",1,4))}),o(30,"span"),s(31),a(),l(32,"img",7),a(),o(33,"button",5),S("click",function(){v(e);let i=p();return M(i.increaseAttribute("shield",10,40))}),l(34,"img",7),o(35,"span"),s(36,"x10"),a()()()(),o(37,"div",2)(38,"div"),s(39,"Potion (6"),l(40,"img",4),s(41,")"),a(),o(42,"div")(43,"button",5),S("click",function(){v(e);let i=p();return M(i.usePotion(10,6))}),l(44,"span",8),o(45,"span"),s(46,"x1"),a()(),o(47,"button",5),S("click",function(){v(e);let i=p();return M(i.usePotion(40,24))}),l(48,"span",9),o(49,"span"),s(50,"x4"),a()()()()}if(n&2){let e,t,i,b=p();r(7),x(" ",(e=b.player())==null?null:e.gold," "),r(8),g("ngClass",u(9,z,b.buttonDisabled().power.one)),r(2),R((t=b.player())==null||t.attributes==null?null:t.attributes.powerPoints),r(2),g("ngClass",u(11,z,b.buttonDisabled().power.ten)),r(10),g("ngClass",u(13,z,b.buttonDisabled().shield.one)),r(2),R((i=b.player())==null||i.attributes==null?null:i.attributes.shieldPoints),r(2),g("ngClass",u(15,z,b.buttonDisabled().shield.ten)),r(10),g("ngClass",u(17,z,b.buttonDisabled().potion.basic)),r(4),g("ngClass",u(19,z,b.buttonDisabled().potion.full))}}function de(n,C){n&1&&(o(0,"div",0),s(1,"Waiting for the game to start"),a())}var Z=(()=>{class n{constructor(e){this.store=e,this.gameState=d("start"),this.player=d(void 0),this.buttonDisabled=G(()=>({power:{one:(this.player()?.gold??0)<2,ten:(this.player()?.gold??0)<20},shield:{one:(this.player()?.gold??0)<4,ten:(this.player()?.gold??0)<40},potion:{basic:(this.player()?.gold??0)<6,full:(this.player()?.gold??0)<60}}))}ngOnInit(){this.store.select("game").subscribe(e=>{this.gameState.set(e.state)}),this.store.select("player").subscribe(e=>{this.player.set(e)})}increaseAttribute(e,t,i){this.store.dispatch(K({attribute:e,quantity:t,cost:i}))}usePotion(e,t){this.store.dispatch(Q({heal:e,cost:t}))}static{this.\u0275fac=function(t){return new(t||n)(h(_))}}static{this.\u0275cmp=c({type:n,selectors:[["game-section-attributes"]],standalone:!0,features:[m],decls:2,vars:1,consts:[[1,"state-start"],[1,"panel-title"],[1,"player-attribute"],[1,"gold-coins"],["src","/images/game/items/coin.png",1,"sword"],[3,"click","ngClass"],["src","/images/game/items/sword.png",1,"sword"],["src","/images/game/items/shield.png",1,"shield"],[1,"potion","basic-potion"],[1,"potion","full-potion"]],template:function(t,i){t&1&&y(0,ce,51,21)(1,de,2,0,"div",0),t&2&&f(i.gameState()==="playing"?0:1)},dependencies:[O,k],styles:["[_nghost-%COMP%]{display:flex;position:relative;width:100%;height:20rem;flex-direction:column;padding:1rem;row-gap:1rem;background-color:#0a0a0a;border-radius:1rem}.state-start[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;color:#ccc}.panel-title[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:3rem;background-color:#222;color:#ccc;font-size:1.5rem;border-radius:.6rem}.player-attribute[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;row-gap:1.5rem}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50%;font-size:1.5rem;color:#ccc}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){padding:0;display:flex;flex-direction:row;column-gap:1rem}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2).gold-coins{background-color:#222;padding:.5rem 1rem;border-radius:.6rem;align-items:center;column-gap:.4rem}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2).gold-coins   img[_ngcontent-%COMP%]{width:24px;height:24px}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   button[_ngcontent-%COMP%]{background-color:#222;min-height:32px;padding:.3rem 1rem;font-size:1rem;flex:1;display:flex;justify-content:center;align-items:center;border:2px solid #494949;border-radius:.5rem;column-gap:.6rem;cursor:pointer}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   button[_ngcontent-%COMP%]:hover{background-color:#404040}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   button.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ddd}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   button[_ngcontent-%COMP%]   img.sword[_ngcontent-%COMP%]{width:24px;height:24px}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   button[_ngcontent-%COMP%]   img.shield[_ngcontent-%COMP%]{width:18px;height:18px}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   button[_ngcontent-%COMP%]   .potion[_ngcontent-%COMP%]{width:16px;height:16px;display:block;transform:scale(1.5)}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   button[_ngcontent-%COMP%]   .potion.basic-potion[_ngcontent-%COMP%]{background-image:url(/images/game/items/basic_potion.png);background-size:128px 16px;animation:_ngcontent-%COMP%_potionAnimation .5s steps(8) infinite}.player-attribute[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)   button[_ngcontent-%COMP%]   .potion.full-potion[_ngcontent-%COMP%]{background-image:url(/images/game/items/full_potion.png);background-size:128px 16px;animation:_ngcontent-%COMP%_potionAnimation .5s steps(8) infinite}@keyframes _ngcontent-%COMP%_potionAnimation{0%{background-position:0 0}to{background-position:-128px 0}}"],changeDetection:0})}}return n})();function me(n,C){if(n&1&&(o(0,"div",1),s(1,"Stats"),a(),o(2,"div",2)(3,"div"),s(4,"Health"),a(),o(5,"div"),s(6),E(7,"number"),a()(),o(8,"div",2)(9,"div"),s(10,"Attack"),a(),o(11,"div"),s(12),a()(),o(13,"div",2)(14,"div"),s(15,"Defense"),a(),o(16,"div"),s(17),a()(),o(18,"div",2)(19,"div"),s(20,"Attack Speed"),a(),o(21,"div"),s(22),a()()),n&2){let e,t,i,b,P=p();r(6),q(" ",T(7,5,(e=P.player())==null?null:e.currentHealth,"1.0-0")," / ",(e=P.player())==null?null:e.totalHealth," "),r(6),x(" ",((t=(t=P.player())==null?null:t.attack)!==null&&t!==void 0?t:0)+((t=(t=P.player())==null||t.attributes==null?null:t.attributes.powerPoints)!==null&&t!==void 0?t:0)," "),r(5),x(" ",((i=(i=P.player())==null?null:i.defense)!==null&&i!==void 0?i:0)+((i=(i=P.player())==null||i.attributes==null?null:i.attributes.shieldPoints)!==null&&i!==void 0?i:0)," "),r(5),x("",(b=P.player())==null?null:b.attackSpeed,"x")}}function pe(n,C){n&1&&(o(0,"div",0),s(1,"Waiting for the game to start"),a())}var ee=(()=>{class n{constructor(e){this.store=e,this.gameState=d("start"),this.player=d(void 0)}ngOnInit(){this.store.select("game").subscribe(e=>{this.gameState.set(e.state)}),this.store.select("player").subscribe(e=>{this.player.set(e)})}static{this.\u0275fac=function(t){return new(t||n)(h(_))}}static{this.\u0275cmp=c({type:n,selectors:[["game-section-stats"]],standalone:!0,features:[m],decls:2,vars:1,consts:[[1,"state-start"],[1,"panel-title"],[1,"player-stat"]],template:function(t,i){t&1&&y(0,me,23,8)(1,pe,2,0,"div",0),t&2&&f(i.gameState()==="playing"&&i.player()?0:1)},dependencies:[O,F],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;width:100%;height:20rem;padding:1rem;row-gap:1rem;background-color:#0a0a0a;border-radius:1rem}.state-start[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;color:#ccc}.panel-title[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:3rem;background-color:#222;color:#ccc;font-size:1.5rem;border-radius:.6rem}.player-stat[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;row-gap:1.5rem}.player-stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:65%;font-size:1.5rem;color:#ccc}.player-stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0 1rem}.player-stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){width:35%;background-color:#222;padding:.4rem 1rem;border-radius:.6rem;text-align:right}"],changeDetection:0})}}return n})();var A=n=>({paused:n}),te=(()=>{class n{constructor(e){this.store=e,this.animationPlay=d(!1)}ngOnInit(){this.store.select("player").subscribe(e=>{this.animationPlay.set(e.state==="walk")})}static{this.\u0275fac=function(t){return new(t||n)(h(_))}}static{this.\u0275cmp=c({type:n,selectors:[["screen-background"]],standalone:!0,features:[m],decls:7,vars:21,consts:[[1,"bg-layer-1",3,"ngClass"],[1,"bg-layer-2",3,"ngClass"],[1,"bg-layer-3",3,"ngClass"],[1,"bg-layer-4",3,"ngClass"],[1,"bg-layer-5",3,"ngClass"],[1,"bg-layer-6",3,"ngClass"],[1,"bg-layer-7",3,"ngClass"]],template:function(t,i){t&1&&l(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),t&2&&(g("ngClass",u(7,A,!i.animationPlay())),r(),g("ngClass",u(9,A,!i.animationPlay())),r(),g("ngClass",u(11,A,!i.animationPlay())),r(),g("ngClass",u(13,A,!i.animationPlay())),r(),g("ngClass",u(15,A,!i.animationPlay())),r(),g("ngClass",u(17,A,!i.animationPlay())),r(),g("ngClass",u(19,A,!i.animationPlay())))},dependencies:[O,k],styles:["@keyframes _ngcontent-%COMP%_parallaxBgAnimation{0%{background-position-x:0}to{background-position-x:200%}}[_nghost-%COMP%]{display:flex;position:relative;width:100%;height:100%}div[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;background-position:0 100%;background-size:200% auto;background-repeat:repeat-x}div.paused[_ngcontent-%COMP%]{animation-play-state:paused}.bg-layer-1[_ngcontent-%COMP%]{z-index:1;background-image:url(/images/game/backgrounds/parallax_bg_1.webp);animation:_ngcontent-%COMP%_parallaxBgAnimation 20s linear infinite}.bg-layer-2[_ngcontent-%COMP%]{z-index:2;background-image:url(/images/game/backgrounds/parallax_bg_2.webp);animation:_ngcontent-%COMP%_parallaxBgAnimation 16s linear infinite;background-position:0 220%}.bg-layer-3[_ngcontent-%COMP%]{z-index:3;background-image:url(/images/game/backgrounds/parallax_bg_3.webp);animation:_ngcontent-%COMP%_parallaxBgAnimation 14s linear infinite;background-position:0 130%}.bg-layer-4[_ngcontent-%COMP%]{z-index:4;background-image:url(/images/game/backgrounds/parallax_bg_4.webp);animation:_ngcontent-%COMP%_parallaxBgAnimation 12s linear infinite;background-position:0 180%}.bg-layer-5[_ngcontent-%COMP%]{z-index:5;background-image:url(/images/game/backgrounds/parallax_bg_5.webp);animation:_ngcontent-%COMP%_parallaxBgAnimation 10s linear infinite;background-position:0 70%}.bg-layer-6[_ngcontent-%COMP%]{z-index:6;background-image:url(/images/game/backgrounds/parallax_bg_6.webp);animation:_ngcontent-%COMP%_parallaxBgAnimation 8s linear infinite;background-position:0 -50%}.bg-layer-7[_ngcontent-%COMP%]{z-index:99;background-image:url(/images/game/backgrounds/parallax_bg_7.webp);animation:_ngcontent-%COMP%_parallaxBgAnimation 6s linear infinite;background-position:0 80%}"],changeDetection:0})}}return n})();var ne=(()=>{class n{get playerState(){return`state-${this.player().state}`}constructor(e){this.store=e,this.player=d({totalHealth:100,currentHealth:100,attack:5,defense:2,attackSpeed:1,state:"idle",name:"Player",gold:0,attributes:{powerPoints:0,shieldPoints:0,speedPoints:0}}),this.percentLife=G(()=>{let t=this.player().currentHealth/this.player().totalHealth*100;return t>0&&t<4&&(t=4),`${t}%`})}ngOnInit(){this.store.select("player").subscribe(e=>{this.player.set(e)})}static{this.\u0275fac=function(t){return new(t||n)(h(_))}}static{this.\u0275cmp=c({type:n,selectors:[["screen-player"]],hostVars:1,hostBindings:function(t,i){t&2&&j("player-state",i.playerState)},standalone:!0,features:[m],decls:2,vars:2,consts:[[1,"health-bar-container"],[1,"health-bar"]],template:function(t,i){t&1&&(o(0,"div",0),l(1,"div",1),a()),t&2&&(r(),L("width",i.percentLife()))},styles:["[_nghost-%COMP%]{z-index:8;display:block;width:64px;height:64px;position:absolute;overflow:hidden;bottom:20%;left:20%;transform:scale(2);background-image:url(/images/game/characters/player/player_tileset.png);background-size:832px 1344px}[player-state=state-attack][_nghost-%COMP%]{animation:_ngcontent-%COMP%_attackAnimation 1.5s steps(12) infinite}[player-state=state-idle][_nghost-%COMP%]{animation:_ngcontent-%COMP%_idleAnimation 1s steps(1) infinite}[player-state=state-walk][_nghost-%COMP%]{animation:_ngcontent-%COMP%_walkAnimation 1s steps(9) infinite}[player-state=state-die][_nghost-%COMP%]{animation:_ngcontent-%COMP%_dieAnimation .6s steps(5) forwards}.health-bar-container[_ngcontent-%COMP%]{position:absolute;top:4%;height:6px;left:10%;width:80%;z-index:9;background-color:#333;border-radius:1rem;border:1px solid #000;overflow:hidden}.health-bar-container[_ngcontent-%COMP%]   .health-bar[_ngcontent-%COMP%]{width:100%;height:100%;background:#6b780c;background:linear-gradient(137deg,#6b780c,#56870f 33%,#50c319 63%,#215005)}@keyframes _ngcontent-%COMP%_idleAnimation{0%{background-position:0 128px}to{background-position:-64px 128px}}@keyframes _ngcontent-%COMP%_attackAnimation{0%{background-position:0 128px}to{background-position:-768px 128px}}@keyframes _ngcontent-%COMP%_walkAnimation{0%{background-position:0 640px}to{background-position:-574px 640px}}@keyframes _ngcontent-%COMP%_dieAnimation{0%{background-position:0 64px;bottom:20%}to{background-position:-324px 64px;bottom:9%}}"],changeDetection:0})}}return n})();var ie=(()=>{class n{get enemyState(){return this.enemy()?`state-${this.enemy().state}`:"state-idle"}constructor(e){this.store=e,this.enemy=d(void 0),this.percentLife=G(()=>{if(!this.enemy())return"0%";let t=this.enemy().currentHealth/this.enemy().totalHealth*100;return t>0&&t<4&&(t=4),`${t}%`})}ngOnInit(){this.store.select("enemy").subscribe(e=>{this.enemy.set(e)})}static{this.\u0275fac=function(t){return new(t||n)(h(_))}}static{this.\u0275cmp=c({type:n,selectors:[["screen-enemy"]],hostVars:1,hostBindings:function(t,i){t&2&&j("enemy-state",i.enemyState)},standalone:!0,features:[m],decls:2,vars:2,consts:[[1,"health-bar-container"],[1,"health-bar"]],template:function(t,i){t&1&&(o(0,"div",0),l(1,"div",1),a()),t&2&&(r(),L("width",i.percentLife()))},styles:["[_nghost-%COMP%]{z-index:8;display:block;width:64px;height:64px;position:absolute;overflow:hidden;bottom:20%;right:20%;transform:scale(2.2);background-image:url(/images/game/characters/enemy/enemy_tileset.png);background-size:832px 1344px;background-position:0 256px;animation:_ngcontent-%COMP%_appearAnimation 1s linear forwards}[enemy-state=state-attack][_nghost-%COMP%]{animation:_ngcontent-%COMP%_attackAnimation 1.5s steps(12) infinite}[enemy-state=state-die][_nghost-%COMP%]{animation:_ngcontent-%COMP%_dieAnimation .6s steps(5) forwards}@keyframes _ngcontent-%COMP%_appearAnimation{0%{right:-10%}to{right:20%}}@keyframes _ngcontent-%COMP%_attackAnimation{0%{background-position:0 256px}to{background-position:-768px 256px}}@keyframes _ngcontent-%COMP%_dieAnimation{0%{background-position:0 64px;bottom:20%}to{background-position:-324px 64px;bottom:9%}}.health-bar-container[_ngcontent-%COMP%]{position:absolute;top:4%;height:6px;left:15%;width:70%;z-index:9;background-color:#333;border-radius:1rem;border:1px solid #000;overflow:hidden}.health-bar-container[_ngcontent-%COMP%]   .health-bar[_ngcontent-%COMP%]{width:100%;height:100%;background:#d98b14;background:linear-gradient(137deg,#d98b14,#c65a1b 33%,#c32d19 63%,#500505)}"],changeDetection:0})}}return n})();var oe=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=c({type:n,selectors:[["screen-to-right-arrow"]],standalone:!0,features:[m],decls:1,vars:0,consts:[["src","/images/game/items/arrow_to_right.webp","alt","arrow",1,"arrow"]],template:function(t,i){t&1&&l(0,"img",0)},styles:["[_nghost-%COMP%]{z-index:8;display:block;width:64px;height:64px;position:absolute;overflow:hidden;bottom:11%;left:27%;transform:scale(2);animation:_ngcontent-%COMP%_toRightAnimation 1.5s linear infinite;visibility:hidden;animation-delay:.5s}@keyframes _ngcontent-%COMP%_toRightAnimation{0%{visibility:hidden}39%{visibility:hidden}40%{left:27%;visibility:visible;border:0}60%{left:73%;visibility:visible}61%{visibility:hidden}}"],changeDetection:0})}}return n})();var ae=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=c({type:n,selectors:[["screen-to-left-arrow"]],standalone:!0,features:[m],decls:1,vars:0,consts:[["src","/images/game/items/arrow_to_left.webp","alt","arrow",1,"arrow"]],template:function(t,i){t&1&&l(0,"img",0)},styles:["[_nghost-%COMP%]{z-index:8;display:block;width:64px;height:64px;position:absolute;overflow:hidden;bottom:11%;right:27%;transform:scale(2);animation:_ngcontent-%COMP%_toLeftAnimation 1.5s linear infinite;visibility:hidden;animation-delay:.5s}@keyframes _ngcontent-%COMP%_toLeftAnimation{0%{visibility:hidden}42%{visibility:hidden}43%{right:27%;visibility:visible}56%{visibility:visible}57%{visibility:hidden}60%{right:73%}}"],changeDetection:0})}}return n})();var ge=n=>({"is-heal":n});function ue(n,C){if(n&1&&(o(0,"div",0),s(1),E(2,"number"),a()),n&2){let e=p();g("ngClass",u(5,ge,e.isHeal())),r(),x(" ",T(2,2,e.lastDamage(),"1.0-0"),`
`)}}var re=(()=>{class n{constructor(e){this.store=e,this.lastDamage=d(void 0),this.isHeal=d(!1)}ngOnInit(){this.store.select("player").pipe(V((e,t)=>e.currentHealth===t.currentHealth),B(),I(([e,t])=>e.currentHealth-t.currentHealth)).subscribe(e=>{e<0?this.isHeal.set(!0):this.isHeal.set(!1),this.lastDamage.set(Math.abs(e)),setTimeout(()=>{this.lastDamage.set(void 0)},500)})}static{this.\u0275fac=function(t){return new(t||n)(h(_))}}static{this.\u0275cmp=c({type:n,selectors:[["screen-player-damage"]],standalone:!0,features:[m],decls:1,vars:1,consts:[[1,"damage-element",3,"ngClass"]],template:function(t,i){t&1&&y(0,ue,3,7,"div",0),t&2&&f(i.lastDamage()?0:-1)},dependencies:[O,k,F],styles:["[_nghost-%COMP%]{position:absolute;left:22%;bottom:35%;z-index:50}.damage-element[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:#960909;position:relative;animation:_ngcontent-%COMP%_toUpAnimation .45s linear forwards;bottom:5rem;text-shadow:2px 0 #dda5a5,-2px 0 #dda5a5,0 2px #dda5a5,0 -2px #dda5a5,1px 1px #dda5a5,-1px -1px #dda5a5,1px -1px #dda5a5,-1px 1px #dda5a5}.damage-element.is-heal[_ngcontent-%COMP%]{color:#3a9609;text-shadow:2px 0 #b9dda5,-2px 0 #b9dda5,0 2px #b9dda5,0 -2px #b9dda5,1px 1px #b9dda5,-1px -1px #b9dda5,1px -1px #b9dda5,-1px 1px #b9dda5}@keyframes _ngcontent-%COMP%_toUpAnimation{0%{bottom:0}30%{bottom:5rem}40%{opacity:1}to{opacity:0}}"],changeDetection:0})}}return n})();var he=n=>({"is-heal":n});function _e(n,C){if(n&1&&(o(0,"div",0),s(1),E(2,"number"),a()),n&2){let e=p();g("ngClass",u(5,he,e.isHeal())),r(),x(" ",T(2,2,e.lastDamage(),"1.0-0"),`
`)}}var se=(()=>{class n{constructor(e){this.store=e,this.lastDamage=d(void 0),this.isHeal=d(!1)}ngOnInit(){this.store.select("enemy").pipe(W(e=>e!==void 0),V((e,t)=>!!(e&&t&&e.currentHealth===t.currentHealth)),B(),I(([e,t])=>(e?.currentHealth??0)-(t?.currentHealth??0))).subscribe(e=>{e<0?this.isHeal.set(!0):this.isHeal.set(!1),this.lastDamage.set(Math.abs(e)),setTimeout(()=>{this.lastDamage.set(void 0)},500)})}static{this.\u0275fac=function(t){return new(t||n)(h(_))}}static{this.\u0275cmp=c({type:n,selectors:[["screen-enemy-damage"]],standalone:!0,features:[m],decls:1,vars:1,consts:[[1,"damage-element",3,"ngClass"]],template:function(t,i){t&1&&y(0,_e,3,7,"div",0),t&2&&f(i.lastDamage()?0:-1)},dependencies:[O,k,F],styles:["[_nghost-%COMP%]{position:absolute;right:22%;bottom:35%;z-index:50}.damage-element[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:#960909;position:relative;animation:_ngcontent-%COMP%_toUpAnimation .45s linear forwards;bottom:5rem;text-shadow:2px 0 #dda5a5,-2px 0 #dda5a5,0 2px #dda5a5,0 -2px #dda5a5,1px 1px #dda5a5,-1px -1px #dda5a5,1px -1px #dda5a5,-1px 1px #dda5a5}.damage-element.is-heal[_ngcontent-%COMP%]{color:#3a9609;text-shadow:2px 0 #b9dda5,-2px 0 #b9dda5,0 2px #b9dda5,0 -2px #b9dda5,1px 1px #b9dda5,-1px -1px #b9dda5,1px -1px #b9dda5,-1px 1px #b9dda5}@keyframes _ngcontent-%COMP%_toUpAnimation{0%{bottom:0}30%{bottom:5rem}40%{opacity:1}to{opacity:0}}"],changeDetection:0})}}return n})();function fe(n,C){n&1&&l(0,"screen-player")(1,"screen-player-damage")}function be(n,C){n&1&&l(0,"screen-to-right-arrow")}function Ce(n,C){if(n&1&&y(0,be,1,0,"screen-to-right-arrow"),n&2){let e,t=p();f(((e=t.player())==null?null:e.state)==="attack"?0:-1)}}function ye(n,C){n&1&&l(0,"screen-to-left-arrow")}function xe(n,C){if(n&1&&(l(0,"screen-enemy")(1,"screen-enemy-damage"),y(2,ye,1,0,"screen-to-left-arrow")),n&2){let e,t=p();r(2),f(((e=t.enemy())==null?null:e.state)==="attack"?2:-1)}}function Pe(n,C){if(n&1){let e=H();o(0,"div",0)(1,"button",2),S("click",function(){v(e);let i=p();return M(i.startGame())}),s(2,"Start Game"),a()()}}function ve(n,C){if(n&1){let e=H();o(0,"div",1)(1,"h1"),s(2,"Game Over"),a(),o(3,"h2"),s(4),a(),o(5,"button",3),S("click",function(){v(e);let i=p();return M(i.tryAgain())}),s(6,"Try again"),a()()}if(n&2){let e,t=p();r(4),x("Score: ",(e=t.game())==null?null:e.stage,"")}}var le=(()=>{class n{constructor(e){this.store=e,this.game=d(void 0),this.player=d(void 0),this.enemy=d(void 0),J(()=>{console.log(this.enemy())})}ngOnInit(){this.store.select("game").subscribe(e=>{this.game.set(e)}),this.store.select("player").subscribe(e=>{this.player.set(e)}),this.store.select("enemy").subscribe(e=>{this.enemy.set(e)})}startGame(){this.store.dispatch(N({state:"playing"})),setTimeout(()=>{this.store.dispatch(Y())},1e3)}tryAgain(){this.store.dispatch(N({state:"start"}))}static{this.\u0275fac=function(t){return new(t||n)(h(_))}}static{this.\u0275cmp=c({type:n,selectors:[["game-section-screen"]],standalone:!0,features:[m],decls:6,vars:5,consts:[[1,"button-start-container"],[1,"button-end-container"],[1,"button-start",3,"click"],[1,"button-end",3,"click"]],template:function(t,i){if(t&1&&(l(0,"screen-background"),y(1,fe,2,0)(2,Ce,1,1)(3,xe,3,1)(4,Pe,3,0,"div",0)(5,ve,7,1,"div",1)),t&2){let b,P,$;r(),f(i.player()?1:-1),r(),f(i.enemy()?2:-1),r(),f(i.enemy()&&((b=i.game())==null?null:b.state)==="playing"?3:-1),r(),f(((P=i.game())==null?null:P.state)==="start"?4:-1),r(),f((($=i.game())==null?null:$.state)==="end"?5:-1)}},dependencies:[te,ne,ie,oe,ae,re,se],styles:["[_nghost-%COMP%]{display:flex;position:relative;width:100%;height:400px;background-color:#0a0a0a;overflow:hidden;border-radius:.8rem}.button-start-container[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#000c;z-index:100;display:flex;justify-content:center;align-items:center}.button-start-container[_ngcontent-%COMP%]   .button-start[_ngcontent-%COMP%]{z-index:101;border:2px solid #333;padding:1rem 2rem;border-radius:1rem;background-color:#3e7306;font-size:2rem;color:#eee;cursor:pointer}.button-start-container[_ngcontent-%COMP%]   .button-start[_ngcontent-%COMP%]:hover{background-color:#559d09;color:#fff}.button-end-container[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#000c;z-index:100;display:flex;justify-content:center;align-items:center;flex-direction:column}.button-end-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .button-end-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff}.button-end-container[_ngcontent-%COMP%]   .button-end[_ngcontent-%COMP%]{z-index:101;border:2px solid #333;padding:1rem 2rem;border-radius:1rem;background-color:#3e7306;font-size:2rem;color:#eee;cursor:pointer}.button-end-container[_ngcontent-%COMP%]   .button-end[_ngcontent-%COMP%]:hover{background-color:#9d9b09;color:#fff}"],changeDetection:0})}}return n})();var At=(()=>{class n{constructor(e){this.store=e,this.store.dispatch(X())}static{this.\u0275fac=function(t){return new(t||n)(h(_))}}static{this.\u0275cmp=c({type:n,selectors:[["app-game-page"]],standalone:!0,features:[m],decls:7,vars:0,consts:[[1,"section-screen"],[1,"section-character"],[1,"section-stats"],[1,"section-attribues"]],template:function(t,i){t&1&&(o(0,"section",0),l(1,"game-section-screen"),a(),o(2,"section",1)(3,"div",2),l(4,"game-section-stats"),a(),o(5,"div",3),l(6,"game-section-attributes"),a()())},dependencies:[Z,ee,le],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;row-gap:2rem}.section-screen[_ngcontent-%COMP%]{width:100%}.section-character[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;column-gap:2rem}.section-character[_ngcontent-%COMP%]   .section-attribues[_ngcontent-%COMP%], .section-character[_ngcontent-%COMP%]   .section-stats[_ngcontent-%COMP%]{width:50%}"],changeDetection:0})}}return n})();export{At as GamePageComponent};
