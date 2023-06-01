"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[7612],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),s=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},l=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),l=r,f=p["".concat(i,".").concat(l)]||p[l]||d[l]||a;return t?o.createElement(f,m(m({ref:n},u),{},{components:t})):o.createElement(f,m({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,m=new Array(a);m[0]=l;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:r,m[1]=c;for(var s=2;s<a;s++)m[s]=t[s];return o.createElement.apply(null,m)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},4196:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),m=["components"],c={title:"Command Groups"},i=void 0,s={unversionedId:"extensions/commands/groups",id:"extensions/commands/groups",title:"Command Groups",description:"Command groups are a way to create subcommands for your commands. For example, !afk set or `!afk",source:"@site/docs/extensions/commands/groups.mdx",sourceDirName:"extensions/commands",slug:"/extensions/commands/groups",permalink:"/extensions/commands/groups",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/extensions/commands/groups.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1685616480,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{title:"Command Groups"},sidebar:"defaultSidebar",previous:{title:"Commands",permalink:"/category/commands"},next:{title:"Help Command",permalink:"/extensions/commands/help-command"}},u={},p=[{value:"Syntax",id:"syntax",level:2}],d={toc:p},l="wrapper";function f(e){var n=e.components,t=(0,r.Z)(e,m);return(0,a.kt)(l,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Command groups are a way to create subcommands for your commands. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"!afk set")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"!afk\nremove"),"."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"Creating a command group is very simple."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Command Groups Example"',title:'"Command',Groups:!0,'Example"':!0},"import discord\nfrom discord.ext import commands\n\nbot = commands.Bot(command_prefix='!')\n\n@bot.group()\nasync def afk():\n    pass\n\n@afk.command()\nasync def set():\n    ...\n\n@afk.command()\nasync def remove():\n    ...\n\n# Another command group\n\n@bot.group(invoke_without_command=True) # Indicates if the group callback should begin parsing and invocation only if no subcommand was found.\nasync def math(ctx):\n    await ctx.send('Subcommand not found')\n\n@math.command()\nasync def add(ctx, a: int, b: int):\n    ...\n\n@math.command()\nasync def subtract(ctx, a: int, b: int):\n    ...\n")),(0,a.kt)("p",null,"To create a command group, the command's decorator must be ",(0,a.kt)("inlineCode",{parentName:"p"},"@bot.group"),". Once you have a command with\nthat decorator, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"@function.command()"),", such as ",(0,a.kt)("inlineCode",{parentName:"p"},"@math.command()"),". Now, you have subcommand\ngroups!"),(0,a.kt)("admonition",{title:"Related Topics",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/extensions/commands/prefixed-commands"},"Prefixed Commands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../popular-topics/cogs"},"Cogs")))))}f.isMDXComponent=!0}}]);