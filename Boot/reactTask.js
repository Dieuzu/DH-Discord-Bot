exports.reactTask = async function (client, taskLog, taskSign, taskComp) {

    client.on('messageReactionAdd', async (reaction, user) => {
        if (user.bot) return; // No bot reactions allowed after this point.
        let message = reaction.message, ej = reaction.emoji;
        if (message.author.id !== client.user.id) return; // Only checks reactions on messages from this bot.
        if (!['✋', '✅'].includes(ej.name)) return; // Only continue if its one of the expected emoji's

        message.reactions.removeAll().catch(O_o => {}).then(() => message.react('✋').then(() => message.react('✅')));

        let embed = taskLog[message.id];
        if (ej.name == '✋') {
            if (taskSign[message.id + "" + user.id]) return message.guild.member(user).send(`You're already signed up for this task, ${user}!`);

            taskSign[message.id + "" + user.id] = user.id;
            if (!embed.description.includes("Signed up:")) {
                embed.setDescription(`${embed.description}\nSigned up:\n> ${user.username}`)
            }
            else
            {
                if (!embed.description.includes("Completed:")) {
                    embed.setDescription(`${embed.description}\n> ${user.username}`);
                }
                else
                {
                    let completed = embed.description.split("Completed:")
                    embed.setDescription(`${completed[0]}> ${user.username}\nCompleted:${completed[1]}`);
                }
            }
        }

        if (ej.name == '✅') {
            if (!taskSign[message.id + "" + user.id]) return message.guild.member(user).send(`You need to sign up for this task first, ${user}!`);
            if (taskComp[message.id + "" + user.id]) return message.guild.member(user).send(`You have already completed this task, ${user}!`);
            
            taskComp[message.id + "" + user.id] = user.id;
            if (!embed.description.includes("Completed:")) {
                embed.setDescription(`${embed.description}\nCompleted:\n> ${user.username}`)
            }
            else
            {
                embed.setDescription(`${embed.description}\n> ${user.username}`);
            }
        }
        message.edit(embed)
    });

};