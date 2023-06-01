"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[892],{8624:function(e,t,n){n.d(t,{v:function(){return s}});var o=n(7294),a=n(7674),s=Object.assign({},a.TW,{profiles:{bob:{author:"BobDotCom",avatar:"/img/bob.png",roleColor:"#2cd6f7"},robocord:{author:"Robocord",avatar:"/img/robocord.png",roleColor:"#9b59b6",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});t.Z=function(e){var t=e.options,n=void 0===t?s:t,r=e.children;return o.createElement(a.qs.Provider,{value:n},o.createElement(a.dZ,null,r))}},68:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=n(7462),a=n(3366),s=(n(7294),n(3905)),r=n(7674),i=n(8624),m=["components"],c={title:"Context Menus",description:"Learn all about Context Menus (User Commands & Message Commands) and how to implement them into your Discord Bot with Pycord!"},d=void 0,l={unversionedId:"interactions/application-commands/context-menus",id:"interactions/application-commands/context-menus",title:"Context Menus",description:"Learn all about Context Menus (User Commands & Message Commands) and how to implement them into your Discord Bot with Pycord!",source:"@site/docs/interactions/application-commands/context-menus.mdx",sourceDirName:"interactions/application-commands",slug:"/interactions/application-commands/context-menus",permalink:"/interactions/application-commands/context-menus",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/interactions/application-commands/context-menus.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1685616480,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{title:"Context Menus",description:"Learn all about Context Menus (User Commands & Message Commands) and how to implement them into your Discord Bot with Pycord!"},sidebar:"defaultSidebar",previous:{title:"Application Commands",permalink:"/category/application-commands"},next:{title:"Localizations",permalink:"/interactions/application-commands/localizations"}},u={},p=[{value:"User Commands",id:"user-commands",level:2},{value:"Message Commands",id:"message-commands",level:2}],g={toc:p},h="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,m);return(0,s.kt)(h,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'When you right-click a message, you may see an option called "Apps". Hover over it, and you can see\ncommands a bot can run with that message. These are called message commands.'),(0,s.kt)("p",null,'When you right-click a user in the user list, you can once again see an option called "Apps".\nHover over it, and you can see commands a bot can run with that message. These are called user commands.'),(0,s.kt)("p",null,"Together, these two are called Context Menus or Context Menu Commands. These commands work very much like normal commands, except they take a member or message."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"A bot can have up to 5 global Context Menus of each type.")),(0,s.kt)("h2",{id:"user-commands"},"User Commands"),(0,s.kt)("p",null,"Creating a user command is very simple."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'@bot.user_command(name="Account Creation Date", guild_ids=[...])  # create a user command for the supplied guilds\nasync def account_creation_date(ctx, member: discord.Member):  # user commands return the member\n    await ctx.respond(f"{member.name}\'s account was created on {member.created_at}")\n')),(0,s.kt)(i.Z,{mdxType:"DiscordComponent"},(0,s.kt)(r.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,s.kt)("div",{slot:"interactions"},(0,s.kt)(r.un,{profile:"bob",contextMenu:!0,mdxType:"DiscordInteraction"},"Account Creation Date")),i.v.profiles.bob.author,"'s account was created on 2020-01-01")),(0,s.kt)("h2",{id:"message-commands"},"Message Commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'@bot.message_command(name="Get Message ID")  # creates a global message command. use guild_ids=[] to create guild-specific commands.\nasync def get_message_id(ctx, message: discord.Message):  # message commands return the message\n    await ctx.respond(f"Message ID: `{message.id}`")\n')),(0,s.kt)(i.Z,{mdxType:"DiscordComponent"},(0,s.kt)(r.kK,{profile:"bob",mdxType:"DiscordMessage"},"Do. Or do not. There is no try."),(0,s.kt)(r.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,s.kt)("div",{slot:"interactions"},(0,s.kt)(r.un,{author:"Other Guide Man",avatar:"green",contextMenu:!0,mdxType:"DiscordInteraction"},"Get Message ID")),"Message ID: ",(0,s.kt)("code",null,"930650407917748286"))),(0,s.kt)("br",null),(0,s.kt)("admonition",{title:"Related Topics",type:"info"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./slash-commands"},"Slash Commands")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../interactions"},"Interactions Index")))))}k.isMDXComponent=!0}}]);