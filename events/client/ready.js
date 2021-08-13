//here the event starts
const config = require("../../botconfig/config.json")
const {change_status, change_name, getSID, getSKILL, getBNB, getSLP, getAXS, getUSDT, getETH} = require("../../handlers/functions")

module.exports = client => {
  try{
    const stringlength = 69;
    console.log("\n")
    console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + `Discord Bot is online!`.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length-`Discord Bot is online!`.length)+ "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + ` /--/ ${client.user.tag} /--/ `.bold.brightGreen+ " ".repeat(-1+stringlength-` ┃ `.length-` /--/ ${client.user.tag} /--/ `.length)+ "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length)+ "┃".bold.brightGreen)
    console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
  }catch{ /* */ }

  try{
    change_status(client)
    getSKILL()
    getBNB()
    getSLP()
    getETH()
    getUSDT()
    getETH()
    getAXS()

  }catch (e) {
    console.log(String(e.stack).red);
  }

  //Change status each 10 minutes
  setInterval(()=>{
    try{
      change_status(client)
    }catch (e) {
      console.log(String(e.stack).red);
    }
  }, 10*60*1000)

  setInterval(() => {
    client.guilds.cache.forEach(guild => {
      getSID(guild.id);
      //console.log('Server name : ' + guild.name + ' | Server id : ' + guild.id)
    })
  }, 3000)

  setInterval(() => {
    getSKILL()
    getBNB()
    getSLP()
    getETH()
    getUSDT()
    getETH()
    getAXS()
  }, 35500);

  setInterval(() => {
    try {
      change_name(client)
    } catch(error) {
       console.log('Server just removed from bot list')
    }
  }, 5000)
}
