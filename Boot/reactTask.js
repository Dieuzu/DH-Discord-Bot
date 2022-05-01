exports.reactTask = async function (client, taskLog, taskSign, taskComp) {

    client.on('messageReactionAdd', async (reaction, user) => {
        if (user.bot) return; // No reactions from bots
        
        let message = reaction.message, ej = reaction.emoji;
        if (message.author.id !== client.user.id) return; // Message reacted on from self

        console.log(ej.name + " used for reaction."); // testing

        let emarray = ['✋', '✅']; // Allowed reactions
        if (!emarray.includes(ej.name)) return; // Only allowed reactions

        let roleaddarray = []; // Role emoji's
        let taskarray = ['✋', '✅']; // Task Message
        if (taskarray.includes(ej.name)) {
            // Still needs to confirm that its task message....
            // Add later.
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
        }
        

    });

};