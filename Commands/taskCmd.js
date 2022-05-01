exports.taskCmd = async function (command, message, console, args, Discord, taskLog) {
  //
  if (command === "task") {
    message.delete().catch(O_o=>{});
    let task = args.join(" ");

    embed = new Discord.MessageEmbed()
    embed.setColor('RANDOM')
    embed.setTitle(`Task has been added!`)
    embed.setDescription(`> \`\`\`${task}\`\`\` `)

    message.channel.send(embed).then(function (tmsg) {
      tmsg.react('✋').then(() => tmsg.react('✅').then(() => taskLog[tmsg.id] = embed));
    });
    console.log(`${message.author.username} Created a New Task!`);
  }

};