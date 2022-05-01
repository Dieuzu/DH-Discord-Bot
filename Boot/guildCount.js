exports.Gcunt = async function (client, console, guildcount, members, activity) {
    //
    client.on("guildCreate", async guild => {
      guildcount++;
      members += guild.memberCount;
      console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    });
    
    client.on("guildDelete", async guild => {
      guildcount--;
      members -= guild.memberCount;
      console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    });

};