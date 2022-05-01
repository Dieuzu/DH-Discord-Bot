exports.saveload = async function (command, message, creatorid, args, db, datatable) {
    
    // save command
    if(command === "save") {
        let data = {event: "data1234 - asdfasdf", author: message.author.id};
        let sobj = JSON.stringify(data); // Writes object into string
        db.set("testdata", sobj).then(() => {}); // Writes to db under key: testdata
        
        message.reply(`Saved information to data table`);
    }

    // load command
    if (command === "load") {
        try {
            db.get("testdata").then(value => { 
                let currdata = JSON.parse(value);
                if (currdata) return message.reply(`Loaded Info: ${currdata.event}\nSaved by: ${currdata.author}`);
            });
        } catch (e) {
            console.log(e);
        }
    }

};