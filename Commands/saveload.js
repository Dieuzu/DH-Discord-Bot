exports.saveload = async function (command, message, creatorid, args, db) {
    
    // save command
    if(command === "save") {

        let data = {event: "data1234 - asdfasdf", author: message.author.id};
        let sobj = JSON.stringify(data); // Writes object into string

        db.set("testdata", sobj).then(() => {}); // Writes to db under key: testdata
        
        message.reply(`Saved information to data table`);
    }

    // load command
    if (command === "load") {

        db.get("testdata").then(value => {
            datatable = JSON.parse(value);
        });

        message.reply(`Loaded Info: ${datatable.event}\nSaved by: ${datatable.author}`);
    }

};