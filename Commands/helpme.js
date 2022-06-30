exports.helpMe = async function (command, message, args, speedy) {//
    if (command === "helpme") { // Help Me Command
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
        /* ----- uncomment later
        message.author.send(`Heya ${message.author}!`, {
          "embed": {"title": "List of Commands", "description": "List of Commands to use the '𝙂𝙞𝙙𝙚𝙤𝙣 (𝙄𝙄𝙏-𝟮𝟭)' Bot! Enjoy!", "color": 16758784,"timestamp": message.createdAt, "image": {
              "url": "https://cdn.discordapp.com/attachments/832805651309789194/832833919920504882/FINAL.gif" // <===image Link here
            },
            "fields": [
              {"name": "!helpme",       "value": "You already know how this works!"},
              {"name": "!version",      "value": "Find out what Version i am!"},
              {"name": "!hug",          "value": "hug someone and show them they matter"},
              {"name": "!slap",         "value": "Slap somone today!"},
              {"name": "!kiss",         "value": "this should be obvious right ?"},
              {"name": "!kill",         "value": "WATCH THIS"},
              {"name": "!ping",         "value": "Pong? Wtf"},
              {"name": "!getid",        "value": "!getid @somone to get their id"},
              {"name": "!chill",        "value": "Gives the [😊Chill] Role"},
              {"name": "!gamer",        "value": "Gives the [🎮Gamer] Role"},
              {"name": "!valorant",     "value": "Gives the [𝗩𝗔𝗟𝗢𝗥𝗔𝗡𝗧] Role"},
              {"name": "!league",       "value": "Gives the [𝗟𝗢𝗟] Role"},
              {"name": "!osu",          "value": "Gives the [𝗢𝗦𝗨] Role"},
              {"name": "!paimon",       "value": "Gives the [𝗚𝗲𝗻𝘀𝗵𝗶𝗻 𝗜𝗺𝗽𝗮𝗰𝘁] Role"},
              {"name": "!overwatch",    "value": "Gives the [𝗢𝘃𝗲𝗿𝘄𝗮𝘁𝗰𝗵] Role"},
              {"name": "!apex",         "value": "Gives the [𝗔𝗽𝗲𝘅 𝗟𝗲𝗴𝗲𝗻𝗱𝘀] Role"},
              {"name": "!spellbreak",   "value": "Gives the [𝗦𝗽𝗲𝗹𝗹𝗯𝗿𝗲𝗮𝗸] Role"},
              {"name": "!minecraft",    "value": "Gives the [𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁] Role"},
              {"name": "!on",           "value": "oh no , no no no no"},
              {"name": "!salt",         "value": "Salty ?"},
            ]
          } 
        });

        if (message.author.id == speedy)  
          message.author.send(`You are Special ${message.author}! So here u go..`, {
            "embed": {"title": "A List of Commands Exclusive To You", "color": 16758784, "timestamp": message.createdAt, "image": {
                "url": "https://cdn.discordapp.com/attachments/832805651309789194/832833729072332870/embar.png" // <===image Link here
              },
              "fields": [
                {"name": "!say",        "value": "Make the bot say stuff!"},
                {"name": "!status",     "value": "Online/Idle/Invisible/Dnd"},
                {"name": "!stream",     "value": "Sets bot on streamer mode"},
                {"name": "!playing",    "value": "Sets bot on playing mode"},
                {"name": "!watching",   "value": "Sets bot on watching mode"},
                {"name": "!listening",  "value": "Sets bot on listening mode"},
                {"name": "!wipe",       "value": "mass deletes msgs (ex. !wipe 20)"},
                {"name": "!harem",      "value": "Oh boy! you are in trouble!"},
              ]
            }
        }); */
    }
};