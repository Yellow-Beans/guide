"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[1824],{8624:function(e,t,n){n.d(t,{v:function(){return i}});var a=n(7294),o=n(7674),i=Object.assign({},o.TW,{profiles:{bob:{author:"BobDotCom",avatar:"/img/bob.png",roleColor:"#2cd6f7"},robocord:{author:"Robocord",avatar:"/img/robocord.png",roleColor:"#9b59b6",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});t.Z=function(e){var t=e.options,n=void 0===t?i:t,l=e.children;return a.createElement(o.qs.Provider,{value:n},a.createElement(o.dZ,null,l))}},5793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),l=n(7674),r=n(8624),d=["components"],s={title:"More Features",description:"More features to make your bot cool and snazzy."},m=void 0,u={unversionedId:"getting-started/more-features",id:"getting-started/more-features",title:"More Features",description:"More features to make your bot cool and snazzy.",source:"@site/docs/getting-started/more-features.mdx",sourceDirName:"getting-started",slug:"/getting-started/more-features",permalink:"/getting-started/more-features",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/getting-started/more-features.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1682460619,formattedLastUpdatedAt:"Apr 25, 2023",frontMatter:{title:"More Features",description:"More features to make your bot cool and snazzy."},sidebar:"defaultSidebar",previous:{title:"Hosting Your Pycord Bot",permalink:"/getting-started/hosting-your-bot"},next:{title:"Rules and Common Practices",permalink:"/getting-started/rules-and-common-practices"}},p={},c=[{value:"Events",id:"events",level:2},{value:"Event Handlers",id:"event-handlers",level:3},{value:"Waiting for User Response",id:"waiting-for-user-response",level:3},{value:"Styling Messages",id:"styling-messages",level:2},{value:"Embeds",id:"embeds",level:3},{value:"Markdown",id:"markdown",level:3},{value:"Text Markdown",id:"text-markdown",level:4},{value:"Code Markdown",id:"code-markdown",level:4},{value:"Quote Markdown",id:"quote-markdown",level:4},{value:"Spoiler Markdown",id:"spoiler-markdown",level:4},{value:"Link Markdown",id:"link-markdown",level:4},{value:"Embed Markdown",id:"embed-markdown",level:4}],h={toc:c},k="wrapper";function b(e){var t=e.components,n=(0,o.Z)(e,d);return(0,i.kt)(k,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So, you just created your first Pycord bot! Now, let's add some more features to it. This will include adding event handlers, waiting for user response, styling the messages, and more."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"event-handlers"},"Event Handlers"),(0,i.kt)("p",null,"Events in Discord are a way to listen for certain actions. For example, if you want to know when a user joins your server, so you could send a welcome message, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_member_join")," event."),(0,i.kt)("p",null,'First, you need to ask Discord to send you events. This is done via "Intents". Read up the ',(0,i.kt)("a",{parentName:"p",href:"../Popular-Topics/intents"},"Intents")," page for more information."),(0,i.kt)("p",null,"Once you understand what intents are, you can enable the events you need, or just use the default ones with ",(0,i.kt)("inlineCode",{parentName:"p"},"discord.Intents.all()"),"."),(0,i.kt)("p",null,"Now that that's done, let's add an event handler for when a user joins the server. We will use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.on_member_join"},(0,i.kt)("inlineCode",{parentName:"a"},"on_member_join")," event"),". We will send a private message to the user welcoming them to the server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@bot.event\nasync def on_member_join(member):\n    await member.send(\n        f'Welcome to the server, {member.mention}! Enjoy your stay here.'\n    )\n")),(0,i.kt)("p",null,"We use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.Bot.event"},(0,i.kt)("inlineCode",{parentName:"a"},"discord.Bot.event")," decorator")," to add the event handler. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"on_member_join")," event is called when a user joins the server. The ",(0,i.kt)("inlineCode",{parentName:"p"},"member")," parameter is the user that joined. Different events have different names and parameters. You can find all of them ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.Intents"},"here"),"."),(0,i.kt)("p",null,"So, that's how you add event handlers!"),(0,i.kt)("h3",{id:"waiting-for-user-response"},"Waiting for User Response"),(0,i.kt)("p",null,"Let's say you want to create a Guess-the-Number game (where the user has to guess a number between 1-10). You need to send a message to a user and wait for them to respond. You can do this with the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api/clients.html#discord.Bot.wait_for"},(0,i.kt)("inlineCode",{parentName:"a"},"wait_for"))," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@bot.command()\nasync def gtn(ctx):\n    \"\"\"A Slash Command to play a Guess-the-Number game.\"\"\"\n\n    await ctx.respond('Guess a number between 1 and 10.')\n    guess = await bot.wait_for('message', check=lambda message: message.author == ctx.author)\n\n    if int(guess.content) == 5:\n        await ctx.send('You guessed it!')\n    else:\n        await ctx.send('Nope, try again.')\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wait_for")," takes one argument, which is the event type. The event type is the name of the event you want to wait for. In this case, it's ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),". It could also be ",(0,i.kt)("inlineCode",{parentName:"p"},"reaction")," to wait for a reaction to be added."),(0,i.kt)("p",null,"We pass a keyword argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"wait_for")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"check"),". The function may look complicated if you're a beginner. We pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"lambda")," function, which simplifies the code a bit."),(0,i.kt)("p",null,"The lambda function takes one parameter, ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),". When Pycord receives a message, it passes it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"check")," function. If the function returns ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", the message is returned. If the function returns ",(0,i.kt)("inlineCode",{parentName:"p"},"False"),", the message is ignored and the bot waits for another message."),(0,i.kt)("p",null,"Here, we check if the message is from the user that sent the command. We simply use ",(0,i.kt)("inlineCode",{parentName:"p"},"message.author == ctx.author"),". This will check if the author of the message was the person who invoked the command."),(0,i.kt)("h2",{id:"styling-messages"},"Styling Messages"),(0,i.kt)("h3",{id:"embeds"},"Embeds"),(0,i.kt)("p",null,"Embeds are a Discord feature that allows applications to format their messages in cool embedded format,\nenabling your bot to lay out messages with a lot of text into neat fields."),(0,i.kt)(r.Z,{mdxType:"DiscordComponent"},(0,i.kt)(l.kK,{author:"Guide Bot",avatar:"red",bot:!0,mdxType:"DiscordMessage"},(0,i.kt)(l._h,{embedTitle:"Pycord Guide",url:"https://guide.pycord.dev",authorIcon:"/img/logo.png",authorName:"Pycord Team",authorUrl:"https://github.com/Pycord-Development/guide",thumbnail:"/img/logo.png",borderColor:"#5865F2",timestamp:"01/09/2021",footerIcon:"/img/logo.png",image:"/img/banner-v3.png",mdxType:"DiscordEmbed"},"The Pycord Guide is a detailed guide that explains how to use Pycord and all of its features.",(0,i.kt)(l.Rb,{slot:"fields",mdxType:"DiscordEmbedFields"},(0,i.kt)(l.wY,{fieldTitle:"Getting Started",mdxType:"DiscordEmbedField"},"The ",(0,i.kt)("a",{href:"/category/getting-started"},"Getting Started section")," explains how you can get a brand new bot created and running from scratch."),(0,i.kt)(l.wY,{fieldTitle:"Interactions",inline:"true",mdxType:"DiscordEmbedField"},(0,i.kt)("a",{href:"/interactions"},"Interactions")," with Pycord"),(0,i.kt)(l.wY,{fieldTitle:"Extensions",inline:"true",mdxType:"DiscordEmbedField"},"Pycord's various ",(0,i.kt)("a",{href:"/category/extensions"},"Extensions")),(0,i.kt)(l.wY,{fieldTitle:"Popular Topics",inline:"true",mdxType:"DiscordEmbedField"},(0,i.kt)("a",{href:"/category/popular-topics"},"Other Popular Topics")),(0,i.kt)(l.wY,{fieldTitle:"And More!",mdxType:"DiscordEmbedField"},"We have so much more! Just explore, and you will find everything you need. If you want another page added, open an issue on the ",(0,i.kt)("a",{href:"https://github.com/Pycord-Development/guide"},"GitHub"),".")),(0,i.kt)("span",{slot:"footer"},"Created with \ud83d\udc96 by the Pycord Team & Contributors")))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Creating embeds is simple! Just create an instance of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api/data_classes.html#discord.Embed"},(0,i.kt)("inlineCode",{parentName:"a"},"discord.Embed"))," and edit it to your liking. Once you're done, send it!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import discord\n\nbot = discord.Bot()\n\n@bot.command()\nasync def hello(ctx):\n    embed = discord.Embed(\n        title="My Amazing Embed",\n        description="Embeds are super easy, barely an inconvenience.",\n        color=discord.Colour.blurple(), # Pycord provides a class with default colors you can choose from\n    )\n    embed.add_field(name="A Normal Field", value="A really nice field with some information. **The description as well as the fields support markdown!**")\n\n    embed.add_field(name="Inline Field 1", value="Inline Field 1", inline=True)\n    embed.add_field(name="Inline Field 2", value="Inline Field 2", inline=True)\n    embed.add_field(name="Inline Field 3", value="Inline Field 3", inline=True)\n \n    embed.set_footer(text="Footer! No markdown here.") # footers can have icons too\n    embed.set_author(name="Pycord Team", icon_url="https://example.com/link-to-my-image.png")\n    embed.set_thumbnail(url="https://example.com/link-to-my-thumbnail.png")\n    embed.set_image(url="https://example.com/link-to-my-banner.png")\n \n    await ctx.respond("Hello! Here\'s a cool embed.", embed=embed) # Send the embed with some text\n \nbot.run("TOKEN")\n')),(0,i.kt)(r.Z,{mdxType:"DiscordComponent"},(0,i.kt)(l.kK,{author:"Guide Bot",avatar:"red",bot:!0,mdxType:"DiscordMessage"},(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(l.un,{author:"Guide Man",avatar:"green",command:!0,mdxType:"DiscordInteraction"},"hello")),"Hello! Here's a cool embed.",(0,i.kt)(l._h,{embedTitle:"My Amazing Embed",authorIcon:"/img/logo.png",authorName:"Pycord Team",authorUrl:"https://github.com/Pycord-Development/guide",thumbnail:"/img/logo.png",borderColor:"#5865F2",footerIcon:"/img/logo.png",image:"/img/banner-v3.png",mdxType:"DiscordEmbed"},"Embeds are super easy, barely an inconvenience.",(0,i.kt)(l.Rb,{slot:"fields",mdxType:"DiscordEmbedFields"},(0,i.kt)(l.wY,{fieldTitle:"A Normal Field",mdxType:"DiscordEmbedField"},"A really nice field with some information. ",(0,i.kt)("strong",null,"The description as well as the fields support markdown!")),(0,i.kt)(l.wY,{fieldTitle:"Inline Field 1",inline:"true",mdxType:"DiscordEmbedField"},"Inline Field 1"),(0,i.kt)(l.wY,{fieldTitle:"Inline Field 2",inline:"true",mdxType:"DiscordEmbedField"},"Inline Field 2"),(0,i.kt)(l.wY,{fieldTitle:"Inline Field 3",inline:"true",mdxType:"DiscordEmbedField"},"Inline Field 3")),(0,i.kt)("span",{slot:"footer"},"Footer! No markdown here.")))),(0,i.kt)("br",null),(0,i.kt)("p",null,"This simple command sends replies to a ",(0,i.kt)("a",{parentName:"p",href:"../interactions/application-commands/slash-commands"},"slash command")," with an embed.\nLet's break it down:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'embed = discord.Embed(\n        title="My Amazing Embed",\n        description="Embeds are super easy, barely an inconvenience.",\n        color=discord.Colour.blurple(),\n    )\n')),(0,i.kt)("p",null,"This command creates an embed. We use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api/data_classes.html#discord.Embed"},(0,i.kt)("inlineCode",{parentName:"a"},"Embed")),'\nclass to create an embed object with the title "My Amazing Embed", the description "Embeds are super easy, barely an inconvenience.", and the color ',(0,i.kt)("inlineCode",{parentName:"p"},"blurple"),", Discord's main theme color."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api/data_classes.html#discord.Colour"},"discord.Colour")," is a class full of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/functions.html#classmethod"},"classmethods"),"\nthat return color values. While the official, documented name of this is ",(0,i.kt)("inlineCode",{parentName:"p"},"discord.Colour"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"discord.Color"),"\nworks as well. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'embed.add_field(title="A Normal Field", value="A really nice field with some information. **The description as well as the fields support markdown!**")\nembed.add_field(title="Inline Field 1", value="Inline Field 1", inline=True)\nembed.add_field(title="Inline Field 2", value="Inline Field 2", inline=True)\nembed.add_field(title="Inline Field 3", value="Inline Field 3", inline=True)\n')),(0,i.kt)("p",null,"This small section shows off embed fields. You can add fields to embeds with the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api/data_classes.html#discord.Embed.add_field"},(0,i.kt)("inlineCode",{parentName:"a"},"add_field")," method"),"\nof the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api/data_classes.html#discord.Embed"},(0,i.kt)("inlineCode",{parentName:"a"},"discord.Embed"))," class. These consist of three\nkeyword arguments: ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"inline"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," are both required arguments, which inline defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"False")," if it's not defined. The ",(0,i.kt)("inlineCode",{parentName:"p"},"inline")," argument specifies whether space will be divided among the inline fields. There could be a mix of fields where inline has different values too."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'embed.set_footer(text="Footer! No markdown here.") # footers can have icons too\nembed.set_author(name="Pycord Team", icon_url="https://example.com/link-to-my-image.png")\nembed.set_thumbnail(url="https://example.com/link-to-my-thumbnail.png")\nembed.set_image(url="https://example.com/link-to-my-banner.png")\n')),(0,i.kt)("p",null,"In this section, we're adding unique items to the embed. These items are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Footer - With the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.pycord.dev/en/stable/api/data_classes.html#discord.Embed.set_footer"},(0,i.kt)("inlineCode",{parentName:"a"},"set_footer()")),"\nmethod, you can set a small footer that holds a message. This has ",(0,i.kt)("inlineCode",{parentName:"li"},"text")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"icon_url")," kwargs."),(0,i.kt)("li",{parentName:"ul"},"Author - With the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.pycord.dev/en/stable/api/data_classes.html#discord.Embed.set_author"},(0,i.kt)("inlineCode",{parentName:"a"},"set_author")),"\nmethod, you can set an author for the embed. This is a small text field at the top of the embed. This\nincludes ",(0,i.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"url")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"icon_url")," kwargs."),(0,i.kt)("li",{parentName:"ul"},"Thumbnail - With the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.pycord.dev/en/stable/api/data_classes.html#discord.Embed.set_thumbnail"},(0,i.kt)("inlineCode",{parentName:"a"},"set_thumbnail")),"\nmethod, you can set a small image to reside at the top-right of the embed. This has a single ",(0,i.kt)("inlineCode",{parentName:"li"},"url")," kwarg."),(0,i.kt)("li",{parentName:"ul"},"Image - With the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.pycord.dev/en/stable/api/data_classes.html#discord.Embed.set_image"},(0,i.kt)("inlineCode",{parentName:"a"},"set_image")),"\nmethod, you can set an image to sit at the bottom of an embed. This has a single ",(0,i.kt)("inlineCode",{parentName:"li"},"url")," kwarg.\n")),(0,i.kt)("p",null,"There are a lot more methods and attributes you can use to configure embeds. Here, we just covered the basics. Also, remember that all of these values are not necessary in an embed. An embed may only contain a few of these. For example, only a description, a title and a description, and so on."),(0,i.kt)("h3",{id:"markdown"},"Markdown"),(0,i.kt)("p",null,"Markdown is a type of markup language that's limited in terms of formatting yet simple. Discord allows\nfor a watered-down version of markdown to be in their messages."),(0,i.kt)("h4",{id:"text-markdown"},"Text Markdown"),(0,i.kt)("p",null,"Text formatting can be used in messages and in most embed parts,\nas explained in the dedicated section below."),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"*italics*"),(0,i.kt)("td",null,"__*underlined italics*__")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"**bold**"),(0,i.kt)("td",null,"__**underlined bold**__")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"***bold italics***"),(0,i.kt)("td",null,"__***underlined bold italics***__")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"__underlined__"),(0,i.kt)("td",null,"~~strikethrough~~"))),(0,i.kt)("h4",{id:"code-markdown"},"Code Markdown"),(0,i.kt)("p",null,"To create a single-line code block without syntax highlight, wrap the text between single backticks.\nThis code block will only add a dark background to the text."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'`print("Hello world!")`\n')),(0,i.kt)("p",null,"To create a multi-line code block without syntax highlight, wrap the text between triple backticks\non first and last line. This type of code block will encase the code inside a box."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```\nmessage = "Hello world!"\nprint(message)\n```\n')),(0,i.kt)("p",null,'To create a multi-line block with syntax highlight, add the name of the language you are using right after\nthe triple backticks on the first line. For example, for Python you can write either "python" or "py".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```python\nmessage = "Hello world!"\nprint(message)\n```\n')),(0,i.kt)("p",null,"If you want to use syntax highlight for a single line of code, you still have to format it\nlike a multi-line block but the code must be on a separate line than the triple backticks."),(0,i.kt)("h4",{id:"quote-markdown"},"Quote Markdown"),(0,i.kt)("p",null,"To create a single-line quote block, start the line with ",(0,i.kt)("inlineCode",{parentName:"p"},">")," followed by a space."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> This is a single-line quote.\n")),(0,i.kt)("p",null,"To create a multi-line quote block, write ",(0,i.kt)("inlineCode",{parentName:"p"},">>>")," followed by a space. All text\nfrom that point onwards will be included in that quote block."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},">>> This is a\nmulti-line quote.\n")),(0,i.kt)("h4",{id:"spoiler-markdown"},"Spoiler Markdown"),(0,i.kt)("p",null,"To hide a spoiler, encase the text between double pipes. The users\nwill have to click on it before being able to see the text contained in it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"||spoiler||\n")),(0,i.kt)("h4",{id:"link-markdown"},"Link Markdown"),(0,i.kt)("p",null,"Link formatting only works in embeds and messages sent through webhooks,\nby using the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[Pycord](https://pycord.dev/)\n")),(0,i.kt)("p",null,"Inside the supported elements that have just been mentioned,\nthe example above will look like this: ",(0,i.kt)("a",{parentName:"p",href:"https://pycord.dev/"},(0,i.kt)("inlineCode",{parentName:"a"},"Pycord"))),(0,i.kt)("p",null,"Outside them, the link will still be clickable but the formatting will be ignored,\ntherefore the example above will look similarly to this: ",(0,i.kt)("inlineCode",{parentName:"p"},"[Pycord](https://pycord.dev/)")),(0,i.kt)("h4",{id:"embed-markdown"},"Embed Markdown"),(0,i.kt)("p",null,"Adding markdown to your embeds or messages will give your bot the sparkle it needs,\nhowever, markdown is limited inside embeds. Use the following table as a reference\nand keep in mind that embed title and filed names will always show in ",(0,i.kt)("strong",{parentName:"p"},"bold"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Part"),(0,i.kt)("th",null,"Text"),(0,i.kt)("th",null,"Link"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Embed Author"),(0,i.kt)("td",null,"No"),(0,i.kt)("td",null,"No")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Embed Title"),(0,i.kt)("td",null,"Yes"),(0,i.kt)("td",null,"No")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Embed Description"),(0,i.kt)("td",null,"Yes"),(0,i.kt)("td",null,"Yes")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Field Name"),(0,i.kt)("td",null,"Yes"),(0,i.kt)("td",null,"No")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Field Value"),(0,i.kt)("td",null,"Yes"),(0,i.kt)("td",null,"Yes")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Embed Footer"),(0,i.kt)("td",null,"No"),(0,i.kt)("td",null,"No")))))}b.isMDXComponent=!0}}]);