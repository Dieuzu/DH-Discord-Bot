exports.miniGames = async function (command, args, message, console, speedy, krizzi) {
    //
    if (command === "roll") {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
        if (message.author.id == speedy) { 
            return message.reply("You rolled a 69");
        }else if (message.author.id == krizzi){
            return message.reply("You rolled a 69");
        }else {
        var roll = Math.floor(Math.random() * 100) + 1;
        message.reply("You rolled a " + roll);
        }
    }
};