"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[1070],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,p=d["".concat(u,".").concat(f)]||d[f]||h[f]||a;return r?o.createElement(p,i(i({ref:t},c),{},{components:r})):o.createElement(p,i({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return i}});var o=r(7294),n=r(6010),a={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,r=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return k}});var o=r(7462),n=r(7294),a=r(6010),i=r(2466),s=r(6775),u=r(1980),l=r(7392),c=r(12);function d(e){return function(e){var t,r;return null!=(t=null==(r=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function h(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:d(r);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,r=void 0!==t&&t,o=e.groupId,a=(0,s.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,o=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:r,groupId:o});return[(0,u._X)(i),(0,n.useCallback)((function(e){if(i){var t=new URLSearchParams(a.location.search);t.set(i,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[i,a])]}function y(e){var t,r,o,a,i=e.defaultValue,s=e.queryString,u=void 0!==s&&s,l=e.groupId,d=h(e),y=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:i,tabValues:d})})),m=y[0],g=y[1],v=p({queryString:u,groupId:l}),b=v[0],w=v[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),r=(0,c.Nk)(t),o=r[0],a=r[1],[o,(0,n.useCallback)((function(e){t&&a.set(e)}),[t,a])]),S=k[0],O=k[1],I=function(){var e=null!=b?b:S;return f({value:e,tabValues:d})?e:null}();return(0,n.useLayoutEffect)((function(){I&&g(I)}),[I]),{selectedValue:m,selectValue:(0,n.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),O(e)}),[w,O,d]),tabValues:d}}var m=r(2389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,r=e.block,s=e.selectedValue,u=e.selectValue,l=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,r=c.indexOf(t),o=l[r].value;o!==s&&(d(t),u(o))},f=function(e){var t,r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var o,n=c.indexOf(e.currentTarget)+1;r=null!=(o=c[n])?o:c[0];break;case"ArrowLeft":var a,i=c.indexOf(e.currentTarget)-1;r=null!=(a=c[i])?a:c[c.length-1]}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},l.map((function(e){var t=e.value,r=e.label,i=e.attributes;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:h},i,{className:(0,a.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=r?r:t)})))}function b(e){var t=e.lazy,r=e.children,o=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var i=a.find((function(e){return e.props.value===o}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})})))}function w(e){var t=y(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",g.tabList)},n.createElement(v,(0,o.Z)({},e,t)),n.createElement(b,(0,o.Z)({},e,t)))}function k(e){var t=(0,m.Z)();return n.createElement(w,(0,o.Z)({key:String(t)},e))}},3920:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return f}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=r(4866),s=r(5162),u=["components"],l={title:"Hosting Your Pycord Bot"},c="Hosting Your Pycord Bot",d={unversionedId:"getting-started/hosting-your-bot",id:"getting-started/hosting-your-bot",title:"Hosting Your Pycord Bot",description:"If you're completely new to this, you might have thought something along the lines of \"Yay! I got my",source:"@site/docs/getting-started/hosting-your-bot.mdx",sourceDirName:"getting-started",slug:"/getting-started/hosting-your-bot",permalink:"/getting-started/hosting-your-bot",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/getting-started/hosting-your-bot.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1682460619,formattedLastUpdatedAt:"Apr 25, 2023",frontMatter:{title:"Hosting Your Pycord Bot"},sidebar:"defaultSidebar",previous:{title:"Creating Your First Bot",permalink:"/getting-started/creating-your-first-bot"},next:{title:"More Features",permalink:"/getting-started/more-features"}},h={},f=[{value:"Can I get a Clear Explanation?",id:"can-i-get-a-clear-explanation",level:2},{value:"What is a Host?",id:"what-is-a-host",level:2},{value:"How to Host Your Bot",id:"how-to-host-your-bot",level:2}],p={toc:f},y="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,u);return(0,a.kt)(y,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hosting-your-pycord-bot"},"Hosting Your Pycord Bot"),(0,a.kt)("p",null,'If you\'re completely new to this, you might have thought something along the lines of "Yay! I got my\nbot working," after following our ',(0,a.kt)("a",{parentName:"p",href:"creating-your-first-bot"},"Creating your First Bot")," guide, only\nto close your IDE or shut down your computer to find your bot offline."),(0,a.kt)("p",null,"The reason for this is that programs have to be hosted somewhere, meaning some machine somewhere has\nto constantly run your bot. There are tons of hosting services that can help you host your bot for\nlittle to no cost."),(0,a.kt)("h2",{id:"can-i-get-a-clear-explanation"},"Can I get a Clear Explanation?"),(0,a.kt)("p",null,'Sure thing. When you run your bot, it first makes a connection to Discord\'s API. Once that\'s done,\nPycord sends "heartbeats" to Discord. "heartbeats" are small packets sent at a set interval telling\nDiscord that your bot is indeed still alive. If Discord doesn\'t receive a heartbeat after a certain\namount of time, your bot is pronounced dead and buried in the graveyard (not really). It is, though,\ntaken offline and its connection with Discord is terminated. '),(0,a.kt)("p",null,"Once you close the terminal that you've run your program on, the program is no longer running, and\nthe bot stops sending heartbeats and can no longer process commands. This is why you have to constantly\nkeep the process running."),(0,a.kt)("p",null,"This goes for all programs, in a different nature. If the code isn't compiled/built/assembled/interpreted,\nit can't be running."),(0,a.kt)("h2",{id:"what-is-a-host"},"What is a Host?"),(0,a.kt)("p",null,"A host is a server or container for running code offered by a ",(0,a.kt)("strong",{parentName:"p"},"hosting provider.")," There are a lot\nof hosting providers, such as bigger ones like Amazon Web Services (AWS) and Google Cloud, and smaller\nones like GalaxyGate and DigitalOcean."),(0,a.kt)("p",null,"There are three types of hosts."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"hosttype-shared",label:"Shared Hosting",mdxType:"TabItem"},"Shared hosting is a type of hosting where multiple people share one VPS. Getting a spot on a shared host is usually cheap, sometimes even free. Shared hosts do not give you a lot of resources, from less than a gigabyte of RAM (usually 512MB on free hosts) and half of a CPU with very little storage. Shared hosting is usually used for website hosting and is not recommended for hosting a Discord bot."),(0,a.kt)(s.Z,{value:"hosttype-vps",label:"VPS",default:!0,mdxType:"TabItem"},"A virtual private server (VPS) is a virtual computer (virtual machine) that is rented out to customers. Most people use a VPS for hosting their projects such as Discord bots. You can get anywhere from less than a gigabyte of RAM and a less powerful CPU to just under one hundred gigabytes of RAM, a (or multiple) powerful CPU(s), and a fair amount of storage. A VPS is the best choice for most users and can be fairly cheap."),(0,a.kt)(s.Z,{value:"hosttype-dedicated",label:"Dedicated",mdxType:"TabItem"},"A dedicated host is a physical computer. You can buy these yourself or rent one from a hosting provider. Dedicated hosts are often very expensive, but are also very powerful, having a few hundred gigabytes of RAM and a few very powerful CPUs, along with a good amount of storage. Dedicated hosts are usually used for very large projects and are overkill for something like a Discord bot.")),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Make sure you choose a hosting provider you trust. If you need, you can ask around in communities\nor even ",(0,a.kt)("a",{parentName:"p",href:"https://pycord.dev/discord"},"Pycord's official support server")," for trusted hosts. Just make\nsure the hosting provider you're looking at has good reviews on public forums. Googling along the\nlines of \"","[host]"," review\" should do the trick. A provider you don't trust can compromise your token.")),(0,a.kt)("p",null,"Most hosting providers rent their services to you for a monthly or yearly fee. These can be anywhere\nfrom a few dollars to hundreds or thousands of dollars."),(0,a.kt)("h2",{id:"how-to-host-your-bot"},"How to Host Your Bot"),(0,a.kt)("p",null,"Once you rent or buy a VPS, you can get to work. Most hosting providers allow you to choose from a\nwide range of operating systems, most allow you to choose one but some allow you to choose\nmultiple. Once that's ready, you have to SSH into the system. We won't get into SSH here, but you can\nread ",(0,a.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys"},"this article from DigitalOcean"),'.\nYou can also use VNC, which is remote desktop software. If you are using an OS that does not have a\nGUI, and is only a command line (a "server" OS), such as Ubuntu Server or most Linux Server Operating Servers, you will most\nlikely use SSH. If you are using an OS that has a GUI, such as Windows Server, you will most likely use VNC.'),(0,a.kt)("p",null,"Once you've decided on your operating system, you'll want to set it up and install Python. Once that's\ndone, you can copy your bot's files to your remote system, install the required packages, and run\nthe bot. "),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If you are using SSH to run the file, your bot will not stay running. This is because the file is\nonly told to run during your session. You can use a command like ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Nohup"},"nohup"),"\nto make sure your file stays running after you disconnect.")),(0,a.kt)("p",null,"Now your bot is hosted, but that doesn't mean it can't go offline. If your bot encounters an error,\nit can often go offline or stop its process. For this, make sure you have proper error handling.\nAlso be sure to pay attention to your hosting provider's updates or news, as they usually notify\nusers of when they plan on doing maintenance to their servers, making their services unavailable for\na short time."),(0,a.kt)("admonition",{title:"Related Topics",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"creating-your-first-bot"},"Creating Your First Bot")))))}m.isMDXComponent=!0}}]);