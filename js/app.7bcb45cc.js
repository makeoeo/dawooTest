(function(){"use strict";var t={402:function(t,n,e){var o=e(963),r=e(252);function a(t,n,e,o,a,i){const c=(0,r.up)("Banner"),l=(0,r.up)("HeaderWrap"),s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c,{bannerState:a.BannerState,onBannerClose:i.closeBanner},null,8,["bannerState","onBannerClose"]),(0,r.Wm)(l),(0,r.Wm)(s)],64)}const i=(0,r.Uk)(" coffeekong "),c=(0,r.Uk)(" product "),l=(0,r.Uk)(" service "),s=(0,r.Uk)(" company ");function u(t,n,e,o,a,u){const d=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("h1",null,[(0,r.Wm)(d,{to:"/"},{default:(0,r.w5)((()=>[i])),_:1})]),(0,r._)("nav",null,[(0,r.Wm)(d,{to:"/"},{default:(0,r.w5)((()=>[c])),_:1}),(0,r.Wm)(d,{to:"/service"},{default:(0,r.w5)((()=>[l])),_:1}),(0,r.Wm)(d,{to:"/company"},{default:(0,r.w5)((()=>[s])),_:1})])])}var d={},f=e(744);const p=(0,f.Z)(d,[["render",u],["__scopeId","data-v-0289fed4"]]);var m=p;const v=t=>((0,r.dD)("data-v-73759a44"),t=t(),(0,r.Cn)(),t),h={key:0,class:"banner"},_=v((()=>(0,r._)("h1",null,[(0,r.Uk)(" 지금 커피를 구매하시면 "),(0,r._)("br"),(0,r.Uk)(" 머그컵을 드려요! ")],-1))),g=v((()=>(0,r._)("span",{class:"material-icons cupIcon"}," free_breakfast ",-1)));function w(t,n,e,o,a,i){return e.bannerState?((0,r.wg)(),(0,r.iD)("div",h,[_,g,(0,r._)("span",{class:"material-icons closeBtn",onClick:n[0]||(n[0]=(...t)=>i.closeBtn&&i.closeBtn(...t))}," close ")])):(0,r.kq)("",!0)}var b={props:{bannerState:Boolean},methods:{closeBtn(){this.$emit("bannerClose")}}};const k=(0,f.Z)(b,[["render",w],["__scopeId","data-v-73759a44"]]);var C=k,y={name:"App",data(){return{BannerState:!0}},methods:{closeBanner(){this.BannerState=!1}},components:{HeaderWrap:m,Banner:C}};const O=(0,f.Z)(y,[["render",a]]);var D=O,B=e(119),j=e(577);const W=t=>((0,r.dD)("data-v-3ddd9652"),t=t(),(0,r.Cn)(),t),x={id:"container"},z=W((()=>(0,r._)("h2",null,"coffe list",-1))),S={class:"in_wrap"},M=["onClick"],Z=["onClick","src","alt"];function H(t,n,e,o,a,i){const c=(0,r.up)("Modal");return(0,r.wg)(),(0,r.iD)("div",x,[z,(0,r._)("div",S,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.coffees,((t,n)=>((0,r.wg)(),(0,r.iD)("div",{class:"content",key:n},[(0,r._)("h3",{onClick:t=>i.modalOpen(n)},(0,j.zw)(t.title),9,M),(0,r._)("img",{onClick:t=>i.modalOpen(n),src:t.image,alt:t.id},null,8,Z)])))),128)),(0,r.Wm)(c,{modal:a.modal,coffee:a.coffees,crt:a.crt,onCloseModal:i.modalClose},null,8,["modal","coffee","crt","onCloseModal"])]),(0,r._)("button",{class:"more",onClick:n[0]||(n[0]=(...t)=>i.more&&i.more(...t))},"더보기")])}var I=e(669),U=e.n(I),L=[{id:"0",title:"아메리카노",price:3800,image:"https://joonsol.github.io/data/0.png",text:"아메리카노는 에스프레소 샷 두 개를 추출하여 바로 컵에 붓고, 그 위에 뜨거운 물을 재빠르게 부어 얇은 크레마 층이 형성되는 음료입니다."},{id:"1",title:"카푸치노",price:4500,image:"https://joonsol.github.io/data/1.png",text:"풍부하고 진한 에스프레소에 따뜻한 우유와 벨벳 같은 우유 거품이 1:1 비율로 어우러져 마무리된 커피 음료"},{id:"2",title:"까페라떼",price:4600,image:"https://joonsol.github.io/data/2.png",text:"풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 커피 라떼"},{id:"4",title:"바닐라라떼",price:5100,image:"https://joonsol.github.io/data/3.png",text:"풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 커피 라떼"}];const A={key:0,class:"modal_Container"},Y={class:"modal"},q=["src","alt"];function K(t,n,e,o,a,i){return e.modal?((0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("div",Y,[(0,r._)("h4",null,(0,j.zw)(e.coffee[e.crt].title),1),(0,r._)("img",{src:e.coffee[e.crt].image,alt:e.coffee[e.crt].id},null,8,q),(0,r._)("p",null,(0,j.zw)(e.coffee[e.crt].text),1),(0,r._)("span",{class:"close material-icons",onClick:n[0]||(n[0]=(...t)=>i.mClose&&i.mClose(...t))},"close")])])):(0,r.kq)("",!0)}var P={props:{coffee:Array,crt:Number,modal:Boolean},methods:{mClose(){this.$emit("closeModal")}}};const $=(0,f.Z)(P,[["render",K],["__scopeId","data-v-65a50a1f"]]);var F=$,T={data(){return{coffees:L,modal:!1,crt:0,moreList:0}},methods:{more(){U().get(`https://joonsol.github.io/data/more${this.moreList}.json`).then((t=>{console.log(t.data),this.coffees.push(t.data),this.moreList++,2==this.moreList&&(this.moreList=0)}))},modalOpen(t){this.crt=t,this.modal=!0},modalClose(){this.modal=!1}},components:{Modal:F}};const E=(0,f.Z)(T,[["render",H],["__scopeId","data-v-3ddd9652"]]);var N=E;const Q=t=>((0,r.dD)("data-v-3af20b4c"),t=t(),(0,r.Cn)(),t),G={id:"container"},J=Q((()=>(0,r._)("h2",null," service ",-1))),R={id:"service_wrap"},V=["onClick"],X={key:0},tt={class:"material-icons"},nt={class:"svc_btn"};function et(t,n,e,a,i,c){return(0,r.wg)(),(0,r.iD)("div",G,[J,(0,r._)("div",R,[(0,r._)("nav",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.service,((t,n)=>((0,r.wg)(),(0,r.iD)("a",{href:"#",key:n,onClick:(0,o.iM)((t=>c.tabOpen(n)),["prevent"]),class:(0,j.C_)({On:n==i.crt})},(0,j.zw)(t.title),11,V)))),128))]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.service,((t,n)=>((0,r.wg)(),(0,r.iD)("div",{class:"service_content",key:n},[i.crt==n?((0,r.wg)(),(0,r.iD)("div",X,[(0,r._)("h4",null,(0,j.zw)(t.content),1),(0,r._)("p",null,(0,j.zw)(t.call),1),(0,r._)("span",tt,(0,j.zw)(t.icon),1),(0,r._)("button",nt,(0,j.zw)(t.title)+" 바로가기 ",1)])):(0,r.kq)("",!0)])))),128))])])}var ot=[{id:"0",title:"커피콩문의",content:"질문 또는 건의 사항이 있으신가요? 이용에 불편한 점이 있으신가요? 궁금하신 사항을 문의해주세요. 친절히 답변해 드리겠습니다.",call:"1558-3030",icon:"support_agent"},{id:"1",title:"A/S 신청",content:"자주하는 질문 FAQ 를 안내해 드립니다.",call:"1558-3031",icon:"phone_in_talk"},{id:"3",title:"매장 칭찬하기",content:"매장 이용 시 불편사항, 주문, 배송 문제, 제품 등 궁금하신 사항을 문의해주세요.",call:"1558-3033",icon:"sms"},{id:"4",title:"콜센터",content:"궁금증이 풀리지 않으셨나요? 고객 상담센터로 전화주세요.",call:"1558-3034",icon:"info"}],rt={data(){return{service:ot,crt:0,On:""}},methods:{tabOpen(t){this.crt=t,console.log(this.crt)}}};const at=(0,f.Z)(rt,[["render",et],["__scopeId","data-v-3af20b4c"]]);var it=at;function ct(t,n,e,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null," company ")}var lt={};const st=(0,f.Z)(lt,[["render",ct]]);var ut=st;const dt=[{path:"/",component:N},{path:"/service",component:it},{path:"/company",component:ut}],ft=(0,B.p7)({history:(0,B.PO)(),routes:dt});var pt=ft;(0,o.ri)(D).use(pt).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return t[o](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,a){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],a=t[u][2];for(var c=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[l])}))?o.splice(l--,1):(c=!1,a<i&&(i=a));if(c){t.splice(u--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,r,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,a,i=o[0],c=o[1],l=o[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(l)var u=l(e)}for(n&&n(o);s<i.length;s++)a=i[s],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(u)},o=self["webpackChunkcoffee"]=self["webpackChunkcoffee"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(402)}));o=e.O(o)})();
//# sourceMappingURL=app.7bcb45cc.js.map