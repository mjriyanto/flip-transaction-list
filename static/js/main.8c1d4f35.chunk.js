(this["webpackJsonpflip-transaction-list"]=this["webpackJsonpflip-transaction-list"]||[]).push([[0],{34:function(n,e,t){},46:function(n,e,t){},70:function(n,e,t){},71:function(n,e,t){"use strict";t.r(e);var a,c,r,i,s,o,d,l,u=t(0),b=t.n(u),f=t(18),j=t.n(f),p=(t(46),t(14)),x=t(17),h=t(3),m=t(16),O=t(35),g=t(36),v=t(19),k=t(10),N="HANDLE_STATE_TRANSACTION_LIST",_="FETCH_TRANSACTION_LIST",T="FETCH_TRANSACTION_LIST_SUCCESS",w="FETCH_TRANSACTION_LIST_FAILURE",y="FILTER_BY_VALUE",S="SORT_DATA_LIST",C=function(n){var e=n.toString(),t=e.length%3,a=e.substr(0,t),c=e.substr(t).match(/\d{3}/g);if(c)return a+((t?".":"")+c.join("."))},A=function(n){var e=n.toString().split(" ")[0],t=parseInt(e.split("-")[0]),a=parseInt(e.split("-")[1]-1),c=parseInt(e.split("-")[2]);return"".concat(c.toString()," ").concat(["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][a].toString()," ").concat(t.toString())},z=function(n){var e=0;return n.map((function(n){return e+=n.amount})),e},I=function(n,e){return n.sort((function(n,t){return n[e]>t[e]?1:t[e]>n[e]?-1:0}))},E=function(n,e){return n.sort((function(n,t){return n[e]>t[e]?-1:t[e]>n[e]?1:0}))},L={loading:!1,transactions:[],filteredTransactions:[],error:"",search:""},D=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N:return Object(k.a)(Object(k.a)({},n),{},Object(v.a)({},e.field,e.value));case _:return Object(k.a)(Object(k.a)({},n),{},{loading:!0});case T:return Object(k.a)(Object(k.a)({},n),{},{loading:!1,transactions:e.payload,filteredTransactions:e.payload,error:""});case w:return Object(k.a)(Object(k.a)({},n),{},{transactions:[],filteredTransactions:[],error:e.payload});case y:var t=e.value.toLowerCase(),a=n.transactions.filter((function(n){return n.beneficiary_name.toLowerCase().includes(t)||n.beneficiary_bank.toLowerCase().includes(t)||n.sender_bank.toLowerCase().includes(t)}));return Object(k.a)(Object(k.a)({},n),{},{filteredTransactions:a});case S:var c="asc"===e.value?I(n.filteredTransactions,"beneficiary_name"):"desc"===e.value?E(n.filteredTransactions,"beneficiary_name"):"dateAsc"===e.value?I(n.filteredTransactions,"created_at"):E(n.filteredTransactions,"created_at");return Object(k.a)(Object(k.a)({},n),{},{filteredTransactions:c});default:return n}},F=Object(m.combineReducers)({transaction:D}),R=Object(m.createStore)(F,Object(O.composeWithDevTools)(Object(m.applyMiddleware)(g.a))),U=t(37),B=t.n(U),P=function(){return{type:_}},H=function(n){return{type:T,payload:n}},J=function(n){return{type:w,payload:n}},K=t(4),M=t(5),q=t(1),W=M.a.div(a||(a=Object(K.a)(["\n  width: 100%;\n  border: 1px solid #e0e0e0;\n  i {\n    position: absolute;\n  }\n  .icon {\n    color: #e0e0e0;\n    min-width: 30px;\n    padding: 10px;\n  }\n  .input-field {\n    border: none;\n    color: #9e9e9e;\n    font-size: 14px;\n    padding: 10px 40px;\n    width: 100%;\n    &:focus {\n      outline: none;\n    }\n    @media screen and (max-width: 480px) {\n      font-size: 12px;\n    }\n  }\n"]))),Z=function(n){var e=n.onChange,t=n.state;return Object(q.jsxs)(W,{children:[Object(q.jsx)("i",{className:"fa fa-search icon"}),Object(q.jsx)("input",{type:"text",value:t.search,className:"input-field",placeholder:"Cari nama atau bank",onChange:function(n){return e("search",n.target.value)}})]})},V=M.a.div(c||(c=Object(K.a)(["\n  position: relative;\n  display: inline-block;\n  .dropbtn {\n    background-color: #fff;\n    border: 1px solid #e0e0e0;\n    color: #000000;\n    cursor: pointer;\n    font-size: 13px;\n    font-weight: 600;\n    text-transform: uppercase;\n    padding: 10px;\n    .arrow {\n      color: #fd6542;\n    }\n    @media screen and (max-width: 480px) {\n      font-size: 12px;\n    }\n  }\n  .dropdown-content {\n    background-color: #fff;\n    display: none;\n    font-size: 13px;\n    min-width: 160px;\n    position: absolute;\n    z-index: 1;\n    a {\n      color: #000;\n      padding: 10px;\n      text-decoration: none;\n      display: block;\n      &:hover {\n        background-color: rgba(253, 101, 66, 0.1);\n      }\n    }\n    @media screen and (max-width: 480px) {\n      font-size: 12px;\n    }\n  }\n  &:hover {\n    .dropdown-content {\n      display: block;\n    }\n    .dropbtn {\n      background-color: #fff;\n    }\n  }\n"]))),Y=function(n){var e=n.onSelect;return Object(q.jsxs)(V,{children:[Object(q.jsxs)("button",{className:"dropbtn",children:["Urutkan\u2003",Object(q.jsx)("span",{className:"arrow",children:"\u2965"})]}),Object(q.jsxs)("div",{className:"dropdown-content",children:[Object(q.jsx)("a",{href:"#",onClick:function(){return e("asc")},children:"Nama A-Z"}),Object(q.jsx)("a",{href:"#",onClick:function(){return e("desc")},children:"Nama Z-A"}),Object(q.jsx)("a",{href:"#",onClick:function(){return e("dateAsc")},children:"Tanggal terbaru"}),Object(q.jsx)("a",{href:"#",onClick:function(){return e("dateDesc")},children:"Tanggal terlama"})]})]})},G=M.a.div(r||(r=Object(K.a)(["\n  background-color: #fff;\n  border: none;\n  border-left: ",";\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 15px;\n  line-height: 1.8em;\n  margin-bottom: 15px;\n  padding: 10px 25px;\n  width: 100%;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  .flex-list-container {\n    display: flex;\n    .content {\n      width: 75%;\n      .bank {\n        font-weight: 600;\n        .sender {\n          text-transform: ",";\n        }\n        .benef {\n          text-transform: ",";\n        }\n      }\n      .name {\n        text-transform: uppercase;\n      }\n    }\n    .status {\n      width: 25%;\n      align-self: center;\n      text-align: center;\n      .tag {\n        background-color: ",";\n        border: ",";\n        border-radius: 5px;\n        color: ",";\n        font-size: 12px;\n        padding: 0 3px;\n\n        @media screen and (min-width: 480px) {\n          font-size: 14px;\n          width: 80%;\n        }\n      }\n    }\n  }\n\n  @media screen and (max-width: 480px) {\n    padding: 10px 15px;\n    font-size: 13px;\n  }\n"])),(function(n){return n.success?"4px solid #56b586":"4px solid #fd6542"}),(function(n){return n.upsender?"uppercase":"capitalize"}),(function(n){return n.upbenef?"uppercase":"capitalize"}),(function(n){return n.success?"#56b586":"#fff"}),(function(n){return n.success?"1px solid #56b586":"1px solid #fd6542"}),(function(n){return n.success?"#fff":"#222"})),Q=function(n){var e=n.id,t=n.sender_bank,a=n.benef_bank,c=n.receiver,r=n.status,i=n.amount,s=n.date,o=n.onDetail;return e?Object(q.jsx)(G,{success:"SUCCESS"===r,upsender:t.length<6,upbenef:a.length<6,onClick:function(){return o(e)},children:Object(q.jsxs)("div",{className:"flex-list-container",children:[Object(q.jsxs)("div",{className:"content",children:[Object(q.jsxs)("p",{className:"bank",children:[Object(q.jsx)("span",{className:"sender",children:t}),"\xa0 \u2192 \xa0",Object(q.jsx)("span",{className:"benef",children:a})]}),Object(q.jsx)("p",{className:"name",children:c}),Object(q.jsxs)("p",{className:"nominal",children:["Rp".concat(i)," \xa0\u2022\xa0"," ",Object(q.jsx)("span",{className:"date",children:s})]})]}),Object(q.jsx)("div",{className:"status",children:Object(q.jsx)("div",{className:"tag",children:"SUCCESS"===r?"Berhasil":"Pengecekan"})})]})}):null},X=t.p+"static/media/flip.8702b644.png",$=M.a.div(i||(i=Object(K.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  img {\n    width: 100px;\n  }\n"]))),nn=function(){return Object(q.jsx)($,{children:Object(q.jsx)("img",{src:X,alt:"flip"})})},en=(t(34),function(){var n=Object(p.c)((function(n){return n.transaction})),e=Object(p.b)(),t=Object(h.f)(),a=function(n){t.push("transaction/".concat(n))};return Object(u.useEffect)((function(){e((function(n){n(P()),B.a.get("https://nextar.flip.id/frontend-test").then((function(e){var t=Object.keys(e.data).map((function(n){return e.data[n]}));n(H(t))})).catch((function(e){n(J(e.message))}))}))}),[]),Object(q.jsx)(q.Fragment,{children:n&&!n.loading?Object(q.jsxs)("div",{children:[Object(q.jsxs)("div",{children:[Object(q.jsx)("p",{className:"header",children:"Daftar Transaksi"}),Object(q.jsx)("p",{className:"subheader",children:"Halo kak!"}),Object(q.jsxs)("p",{className:"text",children:["Kamu telah melakukan transaksi sebesar"," ",Object(q.jsx)("span",{className:"currency",children:"Rp".concat(z(n.filteredTransactions)?C(z(n.filteredTransactions)):0)})," ","sejak menggunakan Flip."]})]}),Object(q.jsxs)("div",{className:"flex-search-container",children:[Object(q.jsx)("div",{className:"search",children:Object(q.jsx)(Z,{onChange:function(n,t){e(function(n,e){return{type:N,field:n,value:e}}(n,t)),e(function(n){return{type:y,value:n}}(t))},state:n})}),Object(q.jsx)("div",{className:"filter",children:Object(q.jsx)(Y,{onSelect:function(n){e(function(n){return{type:S,value:n}}(n))}})})]}),n.filteredTransactions&&n.filteredTransactions.map((function(n){return Object(q.jsx)(Q,{id:n.id,sender_bank:n.sender_bank,benef_bank:n.beneficiary_bank,receiver:n.beneficiary_name,status:n.status,onDetail:a,amount:C(n.amount),date:A(n.completed_at),success:!0},n.id)}))]}):Object(q.jsx)(nn,{})})}),tn=t(41),an=M.a.div(s||(s=Object(K.a)(["\n  background-color: #fff;\n  border-radius: 2px;\n  margin-bottom: 15px;\n  padding: 15px;\n  line-height: 1.5em;\n\n  .flex-header-container {\n    display: flex;\n    .id {\n      align-self: center;\n      width: 75%;\n      p {\n        font-weight: 600;\n      }\n    }\n    .status {\n      width: 25%;\n      align-self: center;\n      text-align: center;\n      .tag {\n        background-color: ",";\n        border: ",";\n        border-radius: 5px;\n        color: ",";\n        font-size: 12px;\n        padding: 0 3px;\n\n        @media screen and (min-width: 480px) {\n          font-size: 14px;\n          width: 80%;\n        }\n      }\n    }\n  }\n\n  @media screen and (min-width: 480px) {\n    line-height: 1.8em;\n  }\n"])),(function(n){return n.success?"#56b586":"#fff"}),(function(n){return n.success?"1px solid #56b586":"1px solid #fd6542"}),(function(n){return n.success?"#fff":"#222"})),cn=function(n){var e=n.id,t=n.status;return Object(q.jsx)(an,{success:"SUCCESS"===t,children:Object(q.jsxs)("div",{className:"flex-header-container",children:[Object(q.jsx)("div",{className:"id",children:Object(q.jsx)("p",{children:"ID TRANSAKSI: #".concat(e)})}),Object(q.jsx)("div",{className:"status",children:Object(q.jsx)("div",{className:"tag",children:"SUCCESS"===t?"Berhasil":"Pengecekan"})})]})})},rn=M.a.div(o||(o=Object(K.a)(["\n  background-color: #fff;\n  border-radius: 2px;\n  line-height: 1.5em;\n  margin-bottom: 20px;\n  padding: 15px;\n\n  .flex-header-container {\n    display: flex;\n    .icon {\n      display: none;\n\n      @media screen and (min-width: 480px) {\n        display: inline-block;\n        width: 15%;\n        padding: 10px;\n        text-align: center;\n\n        i {\n          font-size: 3em;\n          color: #fd6542;\n        }\n      }\n    }\n    .detail {\n      font-size: 13px;\n      width: 85%;\n      padding: 10px;\n      .section {\n        margin-bottom: 20px;\n        line-height: 1.6em;\n        .title {\n          font-weight: 600;\n          text-transform: uppercase;\n        }\n        .sender {\n          text-transform: ",";\n        }\n        .beneficiary {\n          text-transform: ",";\n        }\n        .remark {\n          text-transform: capitalize;\n        }\n      }\n      @media screen and (min-width: 480px) {\n        width: 100%;\n        font-size: 15px;\n      }\n    }\n  }\n"])),(function(n){return n.upsender?"uppercase":"capitalize"}),(function(n){return n.upbenef?"uppercase":"capitalize"})),sn=function(n){var e=n.sender_bank,t=n.beneficiary_bank,a=n.account_number,c=n.beneficiary_name,r=n.amount,i=n.unique_code,s=n.remark,o=n.created_at;return Object(q.jsx)(rn,{upsender:e.length<6,upbenef:t.length<6,children:Object(q.jsxs)("div",{className:"flex-header-container",children:[Object(q.jsx)("div",{className:"icon",children:Object(q.jsx)("i",{className:"fa fa-inbox"})}),Object(q.jsxs)("div",{className:"detail",children:[Object(q.jsxs)("div",{className:"section",children:[Object(q.jsx)("p",{className:"title",children:"Pengirim"}),Object(q.jsx)("p",{className:"sender",children:e})]}),Object(q.jsxs)("div",{className:"section",children:[Object(q.jsx)("p",{className:"title",children:"Penerima"}),Object(q.jsx)("p",{className:"beneficiary",children:t}),Object(q.jsx)("p",{children:a}),Object(q.jsx)("p",{children:c})]}),Object(q.jsxs)("div",{className:"section",children:[Object(q.jsx)("p",{className:"title",children:"Nominal"}),Object(q.jsx)("p",{children:"Rp".concat(r)}),Object(q.jsxs)("p",{children:[Object(q.jsx)("b",{children:"Kode Unik : "}),i]})]}),Object(q.jsxs)("div",{className:"section",children:[Object(q.jsx)("p",{className:"title",children:"Catatan"}),Object(q.jsx)("p",{className:"remark",children:s})]}),Object(q.jsxs)("div",{className:"section",children:[Object(q.jsx)("p",{className:"title",children:"Waktu Dibuat"}),Object(q.jsx)("p",{children:o})]})]})]})})},on=M.a.button(d||(d=Object(K.a)(["\n  background: none;\n  border: 1px solid #fd6542;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #fd6542;\n  padding: 8px 15px;\n\n  &:hover {\n    background: #fd6542;\n    color: #fff;\n  }\n"]))),dn=function(n){var e=n.getBack;return Object(q.jsx)(on,{onClick:function(){return e()},children:"Kembali"})},ln=function(){var n=Object(p.c)((function(n){return n.transaction})),e=Object(h.f)(),t=Object(u.useState)(),a=Object(tn.a)(t,2),c=a[0],r=a[1],i=Object(h.g)().id,s=function(){e.push("/")};return Object(u.useEffect)((function(){n.transactions.length>0?r(n.transactions.filter((function(n){return n.id===i}))):s()}),[]),Object(q.jsx)(q.Fragment,{children:c&&Object(q.jsxs)("div",{children:[Object(q.jsx)("p",{className:"header",children:"Detail Transaksi"}),Object(q.jsx)(cn,{id:c[0].id,status:c[0].status}),Object(q.jsx)(sn,{sender_bank:c[0].sender_bank,beneficiary_bank:c[0].beneficiary_bank,account_number:c[0].account_number,beneficiary_name:c[0].beneficiary_name,amount:C(c[0].amount),unique_code:c[0].unique_code,remark:c[0].remark,created_at:A(c[0].created_at)}),Object(q.jsx)(dn,{getBack:s})]})})},un=function(){var n=Object(h.f)();return Object(q.jsxs)("div",{children:[Object(q.jsx)("p",{children:"Page not found."}),Object(q.jsx)("br",{}),Object(q.jsx)("br",{}),Object(q.jsx)("p",{style:{textDecoration:"underline",cursor:"pointer"},onClick:function(){return n.push("/")},children:"Back to Homepage"})]})},bn=M.a.div(l||(l=Object(K.a)(["\n  padding: 30px 25px;\n"])));t(70);var fn=function(){return Object(q.jsx)(p.a,{store:R,children:Object(q.jsx)(x.a,{children:Object(q.jsx)(bn,{children:Object(q.jsxs)(h.c,{children:[Object(q.jsx)(h.a,{exact:!0,path:"/",component:en}),Object(q.jsx)(h.a,{exact:!0,path:"/transaction/:id",component:ln}),Object(q.jsx)(h.a,{component:un})]})})})})},jn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,72)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),a(n),c(n),r(n),i(n)}))};j.a.render(Object(q.jsx)(b.a.StrictMode,{children:Object(q.jsx)(fn,{})}),document.getElementById("root")),jn()}},[[71,1,2]]]);
//# sourceMappingURL=main.8c1d4f35.chunk.js.map