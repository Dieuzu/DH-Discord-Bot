exports.dmChats = async function (message, process, readline, DMActive) {
  //
  if (message.channel.type === 'dm'){
    process.stdout.write(`\n# ${message.author.username} DMed: ${message.content}\n`);
    for (var i = 0; i < DMActive.length; i++) { // Loops through DMActive Array
      if (message.author.id === DMActive[i]) { // checks if the author id is already active.
        process.stdout.write(`# Reply to ${message.author.username}: `); // Cleans up previous "Reply to [ XXXX ]" 
        return // Returns if it already is in there
      }
    }
    DMActive.push(message.author.id); // Puts id in array
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(`# Reply to ${message.author.username}: `, (answer) => {
        message.author.send(`${answer}`);
        DMActive.pop(i); // Removes id from array
        rl.close();
    });
  }

};