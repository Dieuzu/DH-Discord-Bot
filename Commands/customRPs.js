exports.cusRP = async function (command, message, args, console, supress, speedy, krizzi) {
    //
      //======================
      if (command === "lag") { // Code complete
          const sayMessage = args.join(" ");
          message.delete().catch(O_o => { });
          if (message.author.id == speedy) return message.channel.send(``, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/816561861549883392/unknown.png"}}}).then(msg => msg.delete({timeout: 180000})); // Set 3 mins
      }
      if (command === "welcome") {  // Code complete
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => { });

        let member = message.mentions.members.first();
        if (!member) {const msg = await  message.channel.send(`***Welcome!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/808010592312098887/fg.gif"}}})
        supress(msg) 
        return};
        const msg = await  message.channel.send(`${message.author} ***Welcomed*** ${sayMessage}***!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/808010592312098887/fg.gif"}}})
        supress(msg) 
        return;
      }
};