let handler = async m => m.reply(`
💎 *Baymax Bot Rules©*

🤖 _Bot *MUST BE ADMIN* of groups added._

🧧 _Its completely unnecessary to call a bot, rather you will be blocked.♦️_
    
🧧 _Do not spam bot with commands, if bot is not responding then it means either bot is off or there's internet issue at owner's end.♦️_
    
🧧 _Bot or its owner are not responsible for what the bot sends in terms of media.♦️_
    
🧧 _Well, the bot has not been installed with ffmpeg package and probably may not send some image media!♦️_
    
🧧 _Usage of bot in ways that promote racism, slavery, pollution etc will lead to bot exiting the group or ban.♦️_

🧧 _Bot ain't perfect and probably has some bugs, be patient and report them to owner!♦️_
    
🧧 _Enjoy whatever the bot offers and break above rules, Its a free world♦️_

🎎 _Go n sleep if you dont like my bot🏮_
 
 💉 *𝕵𝔲𝔦𝔠𝔢 𝖂𝕽𝕷𝕯 𝑺𝑼𝑷𝑹𝑬𝑴𝑨𝑪𝒀ꫂ᭄⃟🔥*

  `.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i

module.exports = handler
