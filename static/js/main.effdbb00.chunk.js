(this.webpackJsonpfinder=this.webpackJsonpfinder||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/loadin2.34eb35ca.gif"},function(e,t,a){e.exports=a.p+"static/media/gear.0af8f612.gif"},function(e,t,a){e.exports=a.p+"static/media/Nodata.4bc099bd.jpg"},,,,function(e,t,a){e.exports=a.p+"static/media/noimg.543042e1.png"},,,,,,function(e,t,a){e.exports=a(53)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(24),c=a.n(s),r=(a(32),a(6)),l=a(1),i=(a(33),a(34),a(9)),m=a(10),d=a(13),u=a(12),h=(a(35),a(26)),v=(a(36),function(e){var t=Object(n.useState)(""),s=Object(h.a)(t,2),c=s[0],r=s[1];return o.a.createElement("div",{className:"clip"},o.a.createElement("img",{src:function(){var t="https://image.tmdb.org/t/p/w185"+e.poster;return fetch(t).then((function(t){t.ok&&r("https://image.tmdb.org/t/p/original"+e.poster)})).catch((function(e){r("")})),c}()?"https://image.tmdb.org/t/p/w185"+e.poster:a(21),alt:"poster",className:"img",onClick:function(t){e.when(e.id)}}),o.a.createElement("p",null,e.Name))}),p=a(11),f=a.n(p),g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).InputChange=function(e){s.setState({currentSearch:e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1)})},s.OnSearch=function(){document.getElementsByClassName("search")[0].innerHTML="";var e=s.state.currentSearch;if(0!==e.length){var t="https://api.themoviedb.org/3/search/person?api_key=4b7adfd71821a32644eb8175d4a485eb&query="+e;s.setState({ListOfMovies:[]}),s.Ondata(),document.getElementsByClassName("loading")[0].style.display="block",fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t.results.sort((function(e,t){return parseFloat(t.popularity)-parseFloat(e.popularity)}))),0!=t.results.length?(s.Ondata(),document.getElementsByClassName("search")[0].innerHTML='<h2>Search Results For " '.concat(e.charAt(0).toUpperCase()+e.slice(1),' "</h2>'),s.setState({ListOfMovies:t.results})):s.OnNodata(),document.getElementsByClassName("loading")[0].style.display="none"})),s.setState({currentSearch:""})}else alert("Please Enter any Movie Name")},s.Ondata=function(){document.getElementsByClassName("nodata-img")[0].style.display="none"},s.OnNodata=function(){document.getElementsByClassName("nodata-img")[0].style.display="block",document.getElementsByClassName("search")[0].innerHTML=""},s.OnSearchEnter=function(e){"Enter"==e.key&&s.OnSearch()},s.showMovie=function(e){fetch("https://api.themoviedb.org/3/movie/"+e+"/external_ids?api_key=4b7adfd71821a32644eb8175d4a485eb").then((function(e){return e.json()})).then((function(e){console.log(e),s.setState({imdb:e.imdb_id})})),document.getElementsByClassName("Modal2")[0].innerHTML=" <img src=".concat(a(15),"  />"),s.openModal();var t="https://api.themoviedb.org/3/movie/"+e+"?api_key=4b7adfd71821a32644eb8175d4a485eb";console.log(t),fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.genres.map((function(e){return e.name}));document.getElementsByClassName("Modal2")[0].innerHTML="<div>\n        <img src=".concat("https://image.tmdb.org/t/p/w185"+e.poster_path,' alt="poster"/></div>\n        <h3> OverView      :      ').concat(e.overview?e.overview:"No-data","</h3>\n        <h3> Title      :     ").concat(e.title?e.title:"No-data","</h3>    \n        <h3> Budget      :      ").concat(e.budget?e.budget:"No-data","</h3>\n        <h3> Genres      :      ").concat(t,"</h3>\n        <h3>Revenue      :     ").concat(e.revenue?e.revenue:"No-data","</h3>\n        <a href='https://www.imdb.com/title/").concat(s.state.imdb,'\' target="blank">More Details</a>\n        ')}))},s.render=function(){return o.a.createElement("div",{className:"root"},o.a.createElement("div",{className:"root-child-1"},o.a.createElement("h2",{className:"title"},"Movie Finder"),o.a.createElement("input",{onChange:s.InputChange,value:s.state.currentSearch,type:"text",placeholder:"Enter Cast/Crew Name",onKeyPress:s.OnSearchEnter}),o.a.createElement("button",{onClick:s.OnSearch,className:"btn-grad"},"Search")),o.a.createElement("div",{className:"loading"},o.a.createElement("img",{src:a(16)})),o.a.createElement(f.a,{visible:s.state.visible,effect:"fadeInLeft",onClickAway:function(){return s.closeModal()}},o.a.createElement("div",{className:"Modal2"})),o.a.createElement("div",{className:"search"}),o.a.createElement("div",null,o.a.createElement("img",{src:a(17),alt:"nodata",className:"nodata-img"}),o.a.createElement("div",{className:"actor"},s.state.ListOfMovies.map((function(e){return o.a.createElement("div",{className:"divisions"},o.a.createElement("h4",{className:"headings"},"Name \xa0 : \xa0",e.name),o.a.createElement("h4",{className:"headings"},"Known For\xa0 :\xa0 ",e.known_for_department),o.a.createElement("img",{style:{width:200,height:300},src:e.profile_path?"https://image.tmdb.org/t/p/w185"+e.profile_path:"",alt:"profile pic"}),o.a.createElement("div",{className:"results"},e.known_for.map((function(e){return o.a.createElement(v,{id:e.id,poster:e.poster_path,Name:e.title,when:s.showMovie})}))))})))))},s.state={currentSearch:"",ListOfMovies:[],visible:!1,imdb:""},s}return Object(m.a)(n,[{key:"openModal",value:function(){this.setState({visible:!0})}},{key:"closeModal",value:function(){this.setState({visible:!1})}}]),n}(o.a.Component),E=(a(42),a(22),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).InputChange=function(e){s.setState({currentSearch:e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1)})},s.OnSearch=function(){document.getElementsByClassName("search")[0].innerHTML="";var e=s.state.currentSearch;if(0!==e.length){var t="https://api.themoviedb.org/3/search/movie?api_key=4b7adfd71821a32644eb8175d4a485eb&query="+e;s.setState({ListOfMovies:[]}),s.Ondata(),document.getElementsByClassName("loading")[0].style.display="block",fetch(t).then((function(e){return e.json()})).then((function(t){var a=t.results.filter((function(e){return null!==e.poster_path}));console.log(a),0!=a.length?(s.Ondata(),document.getElementsByClassName("search")[0].innerHTML='<h2>Search Results For " '.concat(e.charAt(0).toUpperCase()+e.slice(1),' "</h2>'),s.setState({ListOfMovies:a}),0==s.state.PopupCount&&(s.setState({PopupCount:1}),document.getElementsByClassName("Popup")[0].style.display="flex",setTimeout((function(){document.getElementsByClassName("Popup")[0].style.display="none"}),4e3))):s.OnNodata(),document.getElementsByClassName("loading")[0].style.display="none"})),s.setState({currentSearch:""})}else alert("Please Enter any Movie Name")},s.Ondata=function(){document.getElementsByClassName("nodata-img")[0].style.display="none"},s.OnNodata=function(){document.getElementsByClassName("nodata-img")[0].style.display="block",document.getElementsByClassName("search")[0].innerHTML=""},s.OnSearchEnter=function(e){"Enter"==e.key&&s.OnSearch()},s.remove=function(){document.getElementsByClassName("Popup")[0].style.display="none"},s.showMovie=function(e){fetch("https://api.themoviedb.org/3/movie/"+e+"/external_ids?api_key=4b7adfd71821a32644eb8175d4a485eb").then((function(e){return e.json()})).then((function(e){console.log(e),s.setState({imdb:e.imdb_id})})),document.getElementsByClassName("Modal2")[0].innerHTML=" <img src=".concat(a(15),"  />"),s.openModal(),fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=4b7adfd71821a32644eb8175d4a485eb").then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.genres.map((function(e){return e.name}));document.getElementsByClassName("Modal2")[0].innerHTML="<div>\n        <img src=".concat("https://image.tmdb.org/t/p/w185"+e.poster_path,' alt="poster"/></div>\n        <h3> OverView      :      ').concat(e.overview?e.overview:"No-data","</h3>\n        <h3> Title      :     ").concat(e.title?e.title:"No-data","</h3>    \n        <h3> Budget      :      ").concat(e.budget?e.budget:"No-data","</h3>\n        <h3> Genres      :      ").concat(t,"</h3>\n        <h3>Revenue      :     ").concat(e.revenue?e.revenue:"No-data","</h3>\n        <a href='https://www.imdb.com/title/").concat(s.state.imdb,'\' target="blank">More Details</a>\n        ')}))},s.render=function(){return o.a.createElement("div",{className:"parent"},o.a.createElement("div",{className:"Popup"},o.a.createElement("div",{className:"maybe"},"\xa0\xa0\xa0\xa0",o.a.createElement("p",null," ProTip..!"),o.a.createElement("div",{className:"i-par"},o.a.createElement("i",{onClick:s.remove,className:"fa fa-remove"}))),o.a.createElement("p",null," ","CLick On Movie Images",o.a.createElement("br",null)," To get More Info"," ")),o.a.createElement("div",{className:"root"},o.a.createElement("div",{className:"root-child-1"},o.a.createElement("h2",{className:"title"},"Movie Finder"),o.a.createElement("input",{onChange:s.InputChange,value:s.state.currentSearch,type:"text",placeholder:"Enter Movie Name",onKeyPress:s.OnSearchEnter}),o.a.createElement("button",{onClick:s.OnSearch,className:"btn-grad"},"Search")),o.a.createElement("div",{className:"loading"},o.a.createElement("img",{src:a(16)})),o.a.createElement(f.a,{visible:s.state.visible,effect:"fadeInLeft",onClickAway:function(){return s.closeModal()}},o.a.createElement("div",{className:"Modal2"})),o.a.createElement("div",{className:"search"}),o.a.createElement("div",{className:"results"},o.a.createElement("img",{src:a(17),alt:"nodata",className:"nodata-img"}),s.state.ListOfMovies.map((function(e){return o.a.createElement(v,{id:e.id,poster:e.poster_path,Name:e.title,when:s.showMovie})})))))},s.state={currentSearch:"",ListOfMovies:[],visible:!1,imdb:"",PopupCount:0},s}return Object(m.a)(n,[{key:"openModal",value:function(){this.setState({visible:!0})}},{key:"closeModal",value:function(){this.setState({visible:!1})}}]),n}(o.a.Component));a(43);var b=Object(l.f)((function(e){return o.a.createElement("div",{className:"navigation"},o.a.createElement("nav",{class:"navbar sticky-top navbar-expand-lg navbar-dark "},o.a.createElement("div",{class:"container"},o.a.createElement(r.b,{class:"navbar-brand",to:"/Movie-Finder"},"Movie Finder"),o.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{class:"navbar-toggler-icon"})),o.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},o.a.createElement("ul",{class:"navbar-nav ml-auto"},o.a.createElement("li",{class:"nav-item  ".concat("/Movie-Finder"===e.location.pathname?"active":"")},o.a.createElement(r.b,{class:"nav-link",activeClassName:"active",to:"/Movie-Finder"},"Movie")),o.a.createElement("li",{class:"nav-item  ".concat("/actor"===e.location.pathname?"active":"")},o.a.createElement(r.b,{class:"nav-link",activeClassName:"active",to:"/actor"},"Actor")),o.a.createElement("li",{class:"nav-item  ".concat("/trending"===e.location.pathname?"active":"")},o.a.createElement(r.b,{class:"nav-link",activeClassName:"active",to:"/trending"},"Trending")))))))}));a(49),a(50);var N=function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("footer",{class:"bottom"},o.a.createElement("div",{class:"cont"},o.a.createElement("p",{className:"p",style:{color:"whitesmoke"}},"Made\xa0With\xa0",o.a.createElement("i",{class:"fa fa-heart"}),"\xa0 By"," ",o.a.createElement("span",null,o.a.createElement("a",{href:"https://saicharan67.github.io/PortFolio"},"Charan"))," "))))},y=(a(51),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).OnSearch=function(){document.getElementsByClassName("search")[0].innerHTML="";var e=s.state.currentSearch_time,t=s.state.currentSearch_show;if(0!==e.length){var a="https://api.themoviedb.org/3/trending/"+t+"/"+e+"?api_key=4b7adfd71821a32644eb8175d4a485eb";console.log(a),s.setState({ListOfMovies:[],ListOfPersons:[]}),s.Ondata(),document.getElementsByClassName("loading")[0].style.display="block",fetch(a).then((function(e){return e.json()})).then((function(e){console.log(e),0!=e.results.length?(s.Ondata(),"person"==t?s.setState({ListOfPersons:e.results}):s.setState({ListOfMovies:e.results})):s.OnNodata(),document.getElementsByClassName("loading")[0].style.display="none"}))}else alert("Please Enter any Movie Name")},s.Ondata=function(){document.getElementsByClassName("nodata-img")[0].style.display="none"},s.OnNodata=function(){document.getElementsByClassName("nodata-img")[0].style.display="block",document.getElementsByClassName("search")[0].innerHTML=""},s.onTimechange=function(e){s.setState({currentSearch_time:e.target.value})},s.onShowchange=function(e){s.setState({currentSearch_show:e.target.value})},s.showMovie=function(e){fetch("https://api.themoviedb.org/3/movie/"+e+"/external_ids?api_key=4b7adfd71821a32644eb8175d4a485eb").then((function(e){return e.json()})).then((function(e){console.log(e),s.setState({imdb:e.imdb_id})})),document.getElementsByClassName("Modal2")[0].innerHTML=" <img src=".concat(a(15),"  />"),s.openModal();var t="https://api.themoviedb.org/3/movie/"+e+"?api_key=4b7adfd71821a32644eb8175d4a485eb";console.log(t),fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.genres.map((function(e){return e.name}));document.getElementsByClassName("Modal2")[0].innerHTML="<div>\n        <img src=".concat(e.poster_path?"https://image.tmdb.org/t/p/w185"+e.poster_path:a(21),' alt="poster" /></div>\n        <h3> OverView      :      ').concat(e.overview?e.overview:"No-data","</h3>\n        <h3> Title      :     ").concat(e.title?e.title:"No-data","</h3>    \n        <h3> Budget      :      ").concat(e.budget?e.budget:"No-data","</h3>\n        <h3> Genres      :      ").concat(t,"</h3>\n        <h3>Revenue      :     ").concat(e.revenue?e.revenue:"No-data","</h3>\n        <a href='https://www.imdb.com/title/").concat(s.state.imdb,'\' target="blank">More Details</a>\n        ')}))},s.render=function(){return o.a.createElement("div",{className:"root"},o.a.createElement("div",{className:"root-child-1"},o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},o.a.createElement("select",{onChange:s.onTimechange,value:s.state.currentSearch_time},o.a.createElement("option",{value:"",disabled:!0},"Choose Time"),o.a.createElement("option",{value:"day"},"Day"),o.a.createElement("option",{value:"week"},"Week")),o.a.createElement("select",{onChange:s.onShowchange,value:s.state.currentSearch_show},o.a.createElement("option",{value:"",disabled:!0},"Choose Show"),o.a.createElement("option",{value:"all"},"All"),o.a.createElement("option",{value:"tv"},"Tv"),o.a.createElement("option",{value:"movie"},"Movie"),o.a.createElement("option",{value:"person"},"Person"))),o.a.createElement("button",{onClick:s.OnSearch,className:"btn-grad"},"Search")),o.a.createElement("div",{className:"loading"},o.a.createElement("img",{src:a(16)})),o.a.createElement(f.a,{visible:s.state.visible,effect:"fadeInLeft",onClickAway:function(){return s.closeModal()}},o.a.createElement("div",{className:"Modal2"})),o.a.createElement("div",{className:"search"}),o.a.createElement("div",null,o.a.createElement("img",{src:a(17),alt:"nodata",className:"nodata-img"}),o.a.createElement("div",{className:"actor"},s.state.ListOfPersons.map((function(e){return o.a.createElement("div",{className:"divisions"},o.a.createElement("h3",{className:"heading"},"Name:",e.name," Known_For:",e.known_for_department),o.a.createElement("img",{style:{width:200,height:300},src:e.profile_path?"https://image.tmdb.org/t/p/w185"+e.profile_path:"",alt:"profile pic"}),o.a.createElement("div",{className:"results"},e.known_for.map((function(e){return o.a.createElement(v,{id:e.id,poster:e.poster_path,Name:e.title,when:s.showMovie})}))))}))),o.a.createElement("div",{className:"results"},s.state.ListOfMovies.map((function(e){return o.a.createElement(v,{id:e.id,poster:e.poster_path,Name:e.title,when:s.showMovie})})))))},s.state={currentSearch_time:"",currentSearch_show:"",ListOfMovies:[],ListOfPersons:[],visible:!1,imdb:""},s}return Object(m.a)(n,[{key:"openModal",value:function(){this.setState({visible:!0})}},{key:"closeModal",value:function(){this.setState({visible:!1})}}]),n}(o.a.Component));var M=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(r.a,null,o.a.createElement(b,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/Movie-Finder",exact:!0,component:function(){return o.a.createElement(E,null)}}),o.a.createElement(l.a,{path:"/Movie-Finder",exact:!0,component:function(){return o.a.createElement(E,null)}}),o.a.createElement(l.a,{path:"/actor",exact:!0,component:function(){return o.a.createElement(g,null)}}),o.a.createElement(l.a,{path:"/Trending",exact:!0,component:function(){return o.a.createElement(y,null)}})),o.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(52);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.effdbb00.chunk.js.map