exports.botStatus = async function (command, message, args, client, console, speedy, krizzi) {
    /*working code but sends error msgs  check later
    */

    //bot status commands
    if (command === "status") { // Code complete
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      if (message.author.id == speedy) {client.user.setStatus(sayMessage) 
        console.log(`${message.author.username} changed Status to "${sayMessage}"`);
      }
      else {message.channel.send(`You do not have permission to do this ${message.author}!`)}
    }
    
    if (command === "stream") { // Code complete
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      if (message.author.id == speedy) {client.user.setActivity(sayMessage, { type: 'STREAMING', url: "https://www.twitch.tv/softkhor" });
        console.log(`# ${message.author.username} started streaming Namiko's Twitch "${sayMessage}"`);
      }
      else {message.channel.send(`You do not have permission to do this ${message.author}!`)}
    } 

    if (command === "playing") { // Code complete
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{});
      if (message.author.id == speedy) {client.user.setActivity(sayMessage)
        console.log(`# ${message.author.username} made the bot start "Playing ${sayMessage}"`);
      }
      else {message.channel.send(`You do not have permission to do this ${message.author}!`)}
    }

    if (command === "watching") { // Code complete
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      if (message.author.id == speedy) {client.user.setActivity(sayMessage, { type: 'WATCHING', url: "https://www.twitch.tv/looryina" });
        console.log(`# ${message.author.username} made the bot start "Watching ${sayMessage}"`);
      }
      else {message.channel.send(`You do not have permission to do this ${message.author}!`)}
    } 

    if (command === "listening") { // Code complete
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      if (message.author.id == speedy) {client.user.setActivity(sayMessage, { type: 'LISTENING', url: "https://www.twitch.tv/looryina" });
        console.log(`# ${message.author.username} made the bot start "Listening to ${sayMessage}"`);
      }
      else {message.channel.send(`You do not have permission to do this ${message.author}!`)}
    }

    //bot Stats commands
    //
    if (command === "ping") {
      const m = await message.channel.send("***Pinging....*** <:jettwoah:827228922843889726>");
      m.edit(`***Pong! Latency is*** ${m.createdTimestamp - message.createdTimestamp}***ms. API Latency is ***${Math.round(client.ws.ping)}***ms*** <:jettheart:832945041920098304>`);
    }



};