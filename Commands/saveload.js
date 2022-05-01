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
        let currdata = await getData("testdata", db);
        if (currdata) return message.reply(`Loaded Info: ${currdata.event}\nSaved by: ${currdata.author}`);
    }

};

function getData(key, db) {
    try {
        let data = JSON.parse(await db.get(key));
        return data;
    } catch (e) {
        console.log(e);
    }
};
/*
function readdata(key, db, message) {
    try {
        db.get(key).then(value => { 
            let currdata = JSON.parse(value)
            message.reply(`Loaded Info: ${currdata.event}\nSaved by: ${currdata.author}`);
            return currdata;
        });
    } catch (e) {
        console.log(e);
    };
};
*/