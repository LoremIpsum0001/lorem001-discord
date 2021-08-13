const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
const axios = require('axios');

module.exports = {
  name: "coin", //the command name for execution & for helpcmd [OPTIONAL]
  category: "Information", //the command category for helpcmd [OPTIONAL]
  aliases: ["latency"], //the command aliases for helpcmd [OPTIONAL]
  cooldown: 2, //the command cooldown for execution & for helpcmd [OPTIONAL]
  usage: "slp", //the command usage for helpcmd [OPTIONAL]
  description: "Gives u information about a cryptocoin from coingecko.", //the command description for helpcmd [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  minargs: 0, // minimum args for the message, 0 == none [OPTIONAL]
  maxargs: 0, // maximum args for the message, 0 == none [OPTIONAL]
  minplusargs: 0, // minimum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  argsmissing_message: "", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  argstoomany_message: "", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    try{

      axios.get("https://api.coingecko.com/api/v3/coins/smooth-love-potion")
      .then((response) => {
        //message.channel.send("```md \n SLN Price: ```" + 
        //response.data.market_data.current_price.php)
    
        const updatedPrice = new MessageEmbed()
          .setTitle('Price : ₱' + response.data.market_data.current_price.php)
          .setColor('#FFC0CB')
          .setAuthor('Smooth Love Potion', 'https://assets.coingecko.com/coins/images/10366/small/SLP.png', 'https://cdn.discordapp.com/attachments/822447087102722058/861067829087174666/72911812_529732817820730_1379542026596384768_n.jpg')
          .addFields(
            { name: '24H High', value: response.data.market_data.high_24h.php, inline: true },
            { name: '24H Low', value: response.data.market_data.low_24h.php, inline: true },
          )
          .setFooter('Created by M1EL', client.user.displayAvatarURL())

        message.channel.send(updatedPrice)
		 
      })
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}
