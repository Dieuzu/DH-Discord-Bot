exports.gidDM = async function (command, message, args, client, speedy, krizzi ) {
    //
    if (command === "dm") {
      if (!message.member.roles.cache.some(r=>["𝙭𝟲𝟰","i am Krizzi", "KrizziForce", "Krizzi", "Admin"].includes(r.name)) && message.author.id !== speedy && message.author.id !== krizzi)
              return message.reply("Sorry, you don't have permissions to use this!");
      let sentmsg = 0
      const firstparam = args.splice(0, 1);
          const sayMessage = args.join(" ");
          message.delete().catch(O_o=>{});
      let targetnum = firstparam[0].replace(/[^0-9]/g, '');
      if(!targetnum) return message.reply("Who are you trying to reach? 🤨");
      client.users.cache.map( user => {
        //console.log(user); this was for test
        if (user.id === targetnum) {
          user.send(sayMessage);
          sentmsg = 1
        }
      });
      if (!sentmsg) return message.reply("This person is not reachable. 😥");
    }

};