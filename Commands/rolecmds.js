exports.roleCMDs = async function (command, message, console) {
  // ROLE COMMANDS :
  if (command === "testrole754323552") { // role command
    message.delete().catch(O_o=>{});
    
    let role = message.guild.roles.cache.find(r => r.name == "TESTROLE");
    if(!role) return message.channel.send("Role 'TESTROLE' does not exist");

    let hasRole = message.member.roles.cache.find(r => r.name == "TESTROLE");
    if (hasRole) {
      console.log(`# Removed ${role.name} Role from ${message.author.username}`);
      message.member.roles.remove(role); message.author.send(`Hi ${message.author}! you just left the ***TESTROLE*** Section`);
    }
    else {
      console.log(`# Gave ${role.name} Role to ${message.author.username}`);
      message.member.roles.add(role);
      message.author.send(`Hi ${message.author}! you just unlocked the ***TESTROLE*** Section`);
    }
  }
};