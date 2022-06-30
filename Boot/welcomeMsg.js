exports.Welcum = async function (client, console) {//
    client.on('guildMemberAdd', (guildMember) => {
        guildMember.roles.add(guildMember.guild.roles.cache.find(r => r.name === "TEST WELCOME ROLE")).catch(console.error);
        //guildMember.send(`Hi ${guildMember}! Welcome IIT 2021 Batch (CS & SE) Discord! Please React in <#807271779889446968> for your Group and Feel free to introduce yourself in <#805731485726015538> :))`);
    });
};