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

    // add mage
    if(command === "addmage") {

        try {
            db.get("roledata").then(value => {
                // Load from db
                    let mageobj = JSON.parse(value);
                    let curr = mageobj.mage[message.author.id];

                if (curr) return message.reply(`you are already registered as a mage!`);

                mageobj.mage.concat(message.author.id);
                
                // Save to db
                    let sobj = JSON.stringify(mageobj);
                    db.set("roledata", sobj).then(() => {});
                
                return message.reply(`you have been added.`);
            });
        } catch (e) {
            console.log(e);
        }
        
    }

    if (command === "fixroles") {
        let rd = {mage:         {id0: {name: "nil", timestamp: 0}}, 
                  vampire:      {id0: {name: "nil", timestamp: 0}}, 
                  protector:    {id0: {name: "nil", timestamp: 0}}, 
                  bard:         {id0: {name: "nil", timestamp: 0}}, 
                  assassin:     {id0: {name: "nil", timestamp: 0}}, 
                  warrior:      {id0: {name: "nil", timestamp: 0}}, 
                  priest:       {id0: {name: "nil", timestamp: 0}}, 
                  marksman:     {id0: {name: "nil", timestamp: 0}}, 
                  reaper:       {id0: {name: "nil", timestamp: 0}}, 
                  tormentor:    {id0: {name: "nil", timestamp: 0}}, 
                  ranger:       {id0: {name: "nil", timestamp: 0}}};
        let asdf = JSON.stringify(rd);
        db.set("roledata", asdf).then(() => {});
        return
    }

    if (command === "printroles") {
        db.get("roledata").then(value => {
            message.channel.send(`Roletable:\n${value}`);
            return;
        });
    }

};

// let roledata = {mage: [], vampire: [], protector: [], bard: [], assassin: [], warrior: [], priest: [], marksman: [], reaper: [], tormentor: [], ranger: []};
/*

roledata.mage[message.author.id] = {name: message.author.tag};

let roledata = {
    mage: {
        `${userid}`: {name: "XXXX", joined: "07:02 @ 01.05.2022"}
    },
};
*/