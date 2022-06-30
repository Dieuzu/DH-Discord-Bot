exports.admin = async function (command, args, message, speedy, krizzi, console) {//
    if(command === "wipe") { // Add proper roles here dunt be monkey speedy
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{});
        if (!message.member.roles.cache.some(r=>["💻Admin", "i am Krizzi", "KrizziForce", "Krizzi", "Admin"].includes(r.name)) && message.author.id !== speedy && message.author.id !== krizzi)
          return message.reply("***Sorry, you don't have permissions to use this!***");
        const deleteCount = parseInt(args[0], 10);
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return message.reply("***Please provide a number between 2 and 100 for the number of messages to delete***");
        const fetched = await message.channel.messages.fetch({limit: deleteCount});
        message.channel.bulkDelete(fetched).catch(error => message.reply(`***Couldn't delete messages because of: ${error}***`));
    }

    if (command === "getid") {
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{});
      let member = message.mentions.members.first();
      if(!member) return message.reply("Please mention a valid member.")
      console.log(sayMessage)
      message.author.send(`\`\`\`${sayMessage}\`\`\``)
    }

    if (command === "say") { // Add proper roles here dunt be monkey speedy
      if (!message.member.roles.cache.some(r=>["💻Admin", "i am Krizzi", "KrizziForce", "Krizzi", "Admin"].includes(r.name)) && message.author.id !== speedy && message.author.id !== krizzi)
        return message.reply("***Sorry, you don't have permissions to use this!***");
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      message.channel.send(sayMessage);
      console.log(`# ${message.author.username} used the bot to say : ${sayMessage} `);
    }
};