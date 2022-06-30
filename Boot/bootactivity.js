exports.bootActives = async function (client, console, guildcount, members, activity) { //

    client.on('ready', () => {
        console.log(`# Logged in as ${client.user.tag}!`);
        client.user.setActivity(`FW Dragon Heart`, { type: 'Playing', url: "https://open.spotify.com/playlist/6Q4ArkuNzSGI49GX4RlWxd?si=0XKQElCfS5WQ-SqO7ndrgQ" } );
        //client.user.setActivity(activity[Math.floor(Math.random() * activity.length)]); // randomizer 
        //activityUpdate();
        client.guilds.cache.map( id => {
          guildcount++;
          members += id.memberCount;
        });
        console.log(`Bot has started on ${guildcount} servers with ${members} members.`);
    });
    //==================================================
    activityUpdate();

    function activityUpdate() {
      activity = [//`with ${members} peoples feelings`, 
                  //`on ${guildcount} servers.`, 
                  "with Kizura\'s pc", 
                  "with Speedy\'s feels", 
                  "with a mystical power", 
                  "with a potato", "piano", 
                  "guitar", "with a wet sponge", 
                  "Cheesus Crust"]
    }

    setInterval(() => {
      client.user.setActivity(activity[Math.floor(Math.random() * activity.length)]);
    }, 5400000) 

};