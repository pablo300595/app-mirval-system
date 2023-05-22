"use strict";(self.webpackChunkapp_mirval_system=self.webpackChunkapp_mirval_system||[]).push([[778],{5778:(y,m,a)=>{a.r(m),a.d(m,{HomeModule:()=>_});var r=a(6895),s=a(583),t=a(4650),u=a(8613);function d(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",4),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.goToLoginPage())}),t._uU(1,"Login"),t.qZA()}}function p(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",4),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.goToRegisterPage())}),t._uU(1,"Register"),t.qZA()}}let f=(()=>{class e{constructor(n,i){this.router=n,this.userService=i,this.user$=this.userService.getCurrentUser()}goToLoginPage(){this.router.navigateByUrl("/auth/login")}goToRegisterPage(){this.router.navigateByUrl("/auth/register")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.F0),t.Y36(u.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home-page"]],decls:13,vars:6,consts:[[1,"home-container"],[1,"code-text"],[1,"code-text-mobile"],["type","button","class","clean-btn",3,"click",4,"ngIf"],["type","button",1,"clean-btn",3,"click"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Welcome to Mirval Systems"),t.qZA(),t.TgZ(3,"span",1),t._uU(4," Unleashing Possibilities, One Line of Code at a Time "),t.qZA(),t.TgZ(5,"span",2),t._uU(6," Unleashing Possibilities, "),t.qZA(),t.TgZ(7,"span",2),t._uU(8," One Line of Code at a Time "),t.qZA(),t.YNc(9,d,2,0,"button",3),t.ALo(10,"async"),t.YNc(11,p,2,0,"button",3),t.ALo(12,"async"),t.qZA()),2&n){let c,l;t.xp6(9),t.Q6J("ngIf",!(null!=(c=t.lcZ(10,2,i.user$))&&null!=c.currentUser&&c.currentUser.email)),t.xp6(2),t.Q6J("ngIf",!(null!=(l=t.lcZ(12,4,i.user$))&&null!=l.currentUser&&l.currentUser.email))}},dependencies:[r.O5,r.Ov],styles:[".home-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%;height:100%;overflow:scroll;color:#fff;font-family:monospace;font-size:2em}.home-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:90%;height:40%;list-style-type:none;margin-block-start:0em;margin-block-end:0em;margin-inline-start:0px;margin-inline-end:0px;padding-inline-start:0px;text-align:center}.home-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap;border-right:4px solid;width:52ch;animation:_ngcontent-%COMP%_typing 2s steps(52),blink .5s infinite step-end alternate;overflow:hidden;margin-bottom:2em}.home-container[_ngcontent-%COMP%]   .code-text-mobile[_ngcontent-%COMP%]{display:none}.home-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:2em}@keyframes _ngcontent-%COMP%_typing{0%{width:0}}@keyframes _ngcontent-%COMP%_blink{50%{border-color:transparent}}@media screen and (max-width: 767px){.home-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center}span[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:50%;height:2%;font-size:.6em}.code-text[_ngcontent-%COMP%]{display:none;animation:_ngcontent-%COMP%_typing 2s steps(25),blink .5s infinite step-end alternate}.code-text-mobile[_ngcontent-%COMP%]{display:flex;max-width:60%;animation:_ngcontent-%COMP%_typing 2s steps(26),blink .5s infinite step-end alternate}}"]}),e})();var g=a(6729);const h=[{path:"",children:[{path:"",component:f},{path:"about",component:(()=>{class e{constructor(){this.aboutImage=g.Jg}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-about-page"]],decls:10,vars:2,consts:[[1,"about-container"],[3,"src","alt"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"h1"),t._uU(3,"About Us"),t.qZA(),t.TgZ(4,"p"),t._uU(5," Introducing Mirval Systems, a cutting-edge startup company revolutionizing the software development industry. With a keen eye for detail, Mirval Systems is dedicated to developing software systems that go beyond the competition. We understand the frustration customers face when essential features are overlooked or neglected, and we're here to bridge that gap. "),t.qZA(),t.TgZ(6,"p"),t._uU(7," At Mirval Systems, professionalism and client satisfaction are at the core of our values. We prioritize open communication, working closely with our clients to understand their objectives and deliver exceptional results. Our team of talented developers is passionate about pushing the boundaries of software development, bringing innovative ideas to life, and driving success for our clients. "),t.qZA(),t.TgZ(8,"p"),t._uU(9," Join us on this exciting journey as we reshape the software landscape, one detail at a time. Experience the difference with Mirval Systems, where our commitment to excellence sets us apart. "),t.qZA()()),2&n&&(t.xp6(1),t.s9C("src",i.aboutImage.url,t.LSH),t.s9C("alt",i.aboutImage.name))},styles:[".about-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%;height:100%;background-color:none;color:#fff;font-family:Gill Sans;overflow:scroll}.about-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30em;height:30em;margin-top:8em}.about-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:50%;height:10%;font-size:3em;margin-top:1em}.about-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:50%;height:6em;list-style-type:none;margin-block-start:0em;margin-block-end:0em;margin-inline-start:0px;margin-inline-end:0px;padding-inline-start:0px;background-color:#066666d2;box-shadow:0 .1em .1em #d93f3fcc;border-radius:1em;font-size:1.4em;margin-top:2em;margin-bottom:2em;line-height:1.5;padding:1em}@media screen and (max-width: 767px){.about-container[_ngcontent-%COMP%]{align-items:space-around;display:flex;flex-direction:column;justify-content:flex-start}.about-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20em;height:20em}.about-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:90%;height:40%}.about-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:90%;height:60%;padding:.5em;margin-top:3em;margin-bottom:3em}}"]}),e})()},{path:"contact",component:(()=>{class e{constructor(){this.contactImage=g.f3}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contact-page"]],decls:8,vars:2,consts:[[1,"contact-container"],[3,"src","alt"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"h1"),t._uU(3,"Contact Us"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Or come and have a coffe with us to "),t.TgZ(6,"strong"),t._uU(7,"support@mirval.net"),t.qZA()()()),2&n&&(t.xp6(1),t.s9C("src",i.contactImage.url,t.LSH),t.s9C("alt",i.contactImage.name))},styles:[".contact-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;width:100%;height:100%;background-color:none;color:#fff;font-family:Gill Sans;overflow:scroll}.contact-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40em;height:30em;margin-top:8em}.contact-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:50%;height:10%;font-size:3em;margin-top:1em}.contact-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center;width:50%;height:3em;list-style-type:none;margin-block-start:0em;margin-block-end:0em;margin-inline-start:0px;margin-inline-end:0px;padding-inline-start:0px;background-color:#066666d2;box-shadow:0 .1em .1em #d93f3fcc;border-radius:1em;font-size:1.4em;margin-top:1em;margin-bottom:1em;line-height:1.5;padding:1em}@media screen and (max-width: 767px){.contact-container[_ngcontent-%COMP%]{align-items:space-around;display:flex;flex-direction:column;justify-content:flex-start}.contact-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:22em;height:20em}.contact-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:90%;height:40%}.contact-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:90%;height:40%;padding:.5em}}"]}),e})()},{path:"**",redirectTo:""}]}];let C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(h),s.Bz]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.ez,C]}),e})()}}]);