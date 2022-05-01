exports.cusRP = async function (command, message, args, console, supress, speedy, krizzi) {
    //
      //======================
      if (command === "harem") { // Code complete
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => { });
        if (message.author.id == speedy) {const msg = await  message.channel.send(`${message.author} ***is thinking of his harem!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/460196950709370900/740547376795615314/b56213cf6dd48a46c2aa3e935b1ca6631b704f6b_hq.gif"}}})
        supress(msg) 
        return};
      }
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
      if (command === "ded") { // Code complete
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => { });
        if (message.author.id == speedy) {const msg = await  message.channel.send(`${message.author} ***thinks God is dead...***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/822814413660225566/ShrillMedicalGnu-size_restricted.gif"}}})
        supress(msg) 
        return};
      }
      if (command === "on") { // Code complete
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => { });
        console.log(`# ${message.author.username} singing Oh No!"`);
        const msg = await message.channel.send(`${message.author} is singing along to the song:  https://www.youtube.com/watch?v=fXLicO0CRvk`,)
        supress(msg)
      }
      if (command === "hh") { // Code complete
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => { });
        console.log(`# ${message.author.username} singing Hamood Habibi Hamood!"`);
        const msg = await message.channel.send(`${message.author} is singing along to the song:  https://www.youtube.com/watch?v=lIuDzlQwluY`,)
        supress(msg)
      }
  
};