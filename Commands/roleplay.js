exports.rolePlay = async function (command, message, console, random, supress, speedy, krizzi, bot) {//
    
    // GIF's for the commands above
    const kizz  = [ "https://cdn.weeb.sh/images/ryEvhTOwW.gif", 
                    "https://cdn.weeb.sh/images/B13D2aOwW.gif", 
                    "https://cdn.weeb.sh/images/HklBtCvTZ.gif", 
                    "https://cdn.weeb.sh/images/B12g3TOPZ.gif", 
                    "https://cdn.weeb.sh/images/S1y-4l5Jf.gif", 
                    "https://cdn.weeb.sh/images/HJ5khTOP-.gif", 
                    "https://cdn.weeb.sh/images/BJMX2TuPb.gif", 
                    "https://cdn.weeb.sh/images/Hy-oQl91z.gif", 
                    "https://cdn.weeb.sh/images/HJmunTOw-.gif", 
                    "https://cdn.weeb.sh/images/BkUJNec1M.gif", 
                    "https://cdn.weeb.sh/images/S1-KXsh0b.gif", 
                    "https://cdn.weeb.sh/images/H1e7nadP-.gif", 
                    "https://cdn.weeb.sh/images/BJLP3a_Pb.gif", 
                    "https://cdn.weeb.sh/images/Sk5P2adDb.gif", 
                    "https://cdn.weeb.sh/images/ByVQha_w-.gif", 
                    "https://cdn.weeb.sh/images/SkQIn6Ovb.gif", 
                    "https://cdn.weeb.sh/images/HJce2pdv-.gif", 
                    "https://cdn.weeb.sh/images/rJrCj6_w-.gif", 
                    "https://cdn.weeb.sh/images/SybPhp_wZ.gif"]

    const hugz  = [ "https://cdn.weeb.sh/images/r1bAksn0W.gif", 
                    "https://cdn.weeb.sh/images/SJfEks3Rb.gif", 
                    "https://cdn.weeb.sh/images/B11CDkhqM.gif", 
                    "https://cdn.weeb.sh/images/B1wRd_XP-.gif", 
                    "https://cdn.weeb.sh/images/BJ0UovdUM.gif", 
                    "https://cdn.weeb.sh/images/HkzndOXvZ.gif", 
                    "https://cdn.weeb.sh/images/B10Tfknqf.gif", 
                    "https://cdn.weeb.sh/images/r1R3_d7v-.gif", 
                    "https://cdn.weeb.sh/images/Sy65_OQvZ.gif", 
                    "https://cdn.weeb.sh/images/Sk-xxs3C-.gif", 
                    "https://cdn.weeb.sh/images/Sk2gmRZZG.gif", 
                    "https://cdn.weeb.sh/images/Hk4qu_XvZ.gif", 
                    "https://cdn.weeb.sh/images/rkYetOXwW.gif", 
                    "https://cdn.weeb.sh/images/rk6PsvOUM.gif", 
                    "https://cdn.weeb.sh/images/HkQs_dXPZ.gif", 
                    "https://cdn.weeb.sh/images/BJF5_uXvZ.gif", 
                    "https://cdn.weeb.sh/images/rko9O_mwW.gif", 
                    "https://cdn.weeb.sh/images/rJnKu_XwZ.gif", 
                    "https://cdn.weeb.sh/images/BkZngAYtb.gif", 
                    "https://cdn.weeb.sh/images/ryg2dd7wW.gif"]

    const slapz = [ "https://cdn.weeb.sh/images/rkpAXa5bG.gif", 
                    "https://cdn.weeb.sh/images/r1VF-lcyz.gif", 
                    "https://cdn.weeb.sh/images/BkxEo7ytDb.gif", 
                    "https://cdn.weeb.sh/images/Sk9mfCtY-.gif", 
                    "https://cdn.weeb.sh/images/B1oCmkFw-.gif", 
                    "https://cdn.weeb.sh/images/r1PXzRYtZ.gif", 
                    "https://cdn.weeb.sh/images/HkK2mkYPZ.gif", 
                    "https://cdn.weeb.sh/images/ryv3myFDZ.gif", 
                    "https://cdn.weeb.sh/images/ByTR7kFwW.gif", 
                    "https://cdn.weeb.sh/images/HkJ6-e91z.gif", 
                    "https://cdn.weeb.sh/images/BJSpWec1M.gif", 
                    "https://cdn.weeb.sh/images/By2iXyFw-.gif", 
                    "https://cdn.weeb.sh/images/B1-nQyFDb.gif", 
                    "https://cdn.weeb.sh/images/HkA6mJFP-.gif", 
                    "https://cdn.weeb.sh/images/rkaqm1twZ.gif", 
                    "https://cdn.weeb.sh/images/HyV5mJtDb.gif", 
                    "https://cdn.weeb.sh/images/ry_RQkYDb.gif", 
                    "https://cdn.weeb.sh/images/HkskD56OG.gif", 
                    "https://cdn.weeb.sh/images/rJgTQ1tvb.gif", 
                    "https://cdn.weeb.sh/images/Byjqm1tDW.gif"] 
    
    const peez  = [ "https://cdn.discordapp.com/attachments/832805651309789194/857570160441294858/zhug2.gif",
                    "https://cdn.discordapp.com/attachments/832805651309789194/857570161916903434/Zhug1.gif"]

    // TEST SPACE ABOVE  
    let aut = message.author;
    let aID = message.author.id;
    let tar = message.mentions.members.first();
    
    if (message.mentions.members.first() != undefined) {
      let tID = message.mentions.members.first().user.id;
      if (command === "hug") {
        message.delete().catch(O_o=>{});
  
        if(!message.mentions.members.first()) {const msg = await  message.channel.send(`***Awwwwwww*** ${client.user} ***hugged*** ${aut}***!***`, {embed: {color: 1671168, image: {url: "https://cdn.weeb.sh/images/H1ui__XDW.gif"}}});
        supress(msg) 
        return};
  
        if (aID == speedy && tID == krizzi) {const msg = await  message.channel.send(`${aut} ***pulled his noob bestie*** ${tar} ***into a loving hug!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/832805651309789194/857570164178550784/original.gif"}}})
        supress(msg) 
        return};
        if (aID == krizzi && tID == speedy) {const msg = await  message.channel.send(`${aut} ***is murdering her bestie*** ${tar} ***with love!***`, {embed: {color: 16758784, image: {url: peez[random(peez.length)]}}})
        supress(msg) 
        return};
        const msg = await  message.channel.send(`${aut} ***grabbed and hugged*** ${tar}`, {embed: {color: 23039, image: {url: hugz[random(hugz.length)]}}});
        supress(msg);
        return
      }
  
      if (command === "slap") {
        message.delete().catch(O_o=>{});
  
        if(!message.mentions.members.first()) {const msg = await  message.channel.send(`${client.user} ***slapped*** ${aut}***!***`, {embed: {color: 16563740, image: {url: slapz[random(slapz.length)]}}})
        supress(msg) 
        return};
  
        if (tID == speedy) {const msg = await  message.channel.send(`***You cannot slap the Server Owner!*** ${tar} ***slapped*** ${aut} ***to Wakanda!***`, {embed: {color: 16758784, image: {url: "https://cdn.weeb.sh/images/H16aQJFvb.gif"}}})
        supress(msg) 
        return};
        if (tID == bot) {const msg = await  message.channel.send(`${tar} ***got a little slap and returned it 10 times more stronger to*** ${aut}!`, {embed: {color: 16758784, image: {url: "https://cdn.weeb.sh/images/HJKiX1tPW.gif"}}})
        supress(msg) 
        return};
        if (aID == speedy) {const msg = await  message.channel.send(`${aut} ***slapped*** ${tar} ***and everyone else in his path!***`, {embed: {color: 16758784, image: {url: "https://i.gifer.com/2958.gif"}}})
        supress(msg) 
        return};
        const msg = await  message.channel.send(`${aut} ***slapped the shit out of*** ${tar}`, {embed: {color: 16563740, image: {url: slapz[random(slapz.length)]}}})
        supress(msg);
        return
      } 
  
      if (command === "kiss") {
        message.delete().catch(O_o=>{});
  
        if(!message.mentions.members.first()) {const msg = await  message.channel.send(`***Awwwwwww*** ${client.user} ***kissed*** ${aut}***!***`, {embed: {color: 1671168, image: {url: "https://cdn.weeb.sh/images/SydfnauPb.gif"}}})
        supress(msg) 
        return};
  
        if (tID == speedy) {const msg = await  message.channel.send(`${tar} ***shouted : "Oii dont try to kiss me!" and smashed***  ${aut} ***into the wall!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/832805651309789194/832847010591277098/speedslap.gif"}}})
        supress(msg) 
        return};
        if (tID == krizzi) {const msg = await  message.channel.send(`${tar} ***grins smugly and says "pfft...better luck next time*** ${aut}***!***`, {embed: {color: 1671168, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/822825059940696094/tenor.gif"}}})
        supress(msg) 
        return};
        const msg = await  message.channel.send(`${aut} ***kissed*** ${tar}`, {embed: {color: 23039, image: {url: kizz[random(kizz.length)]}}});
        supress(msg) 
        return
      }
    }
};