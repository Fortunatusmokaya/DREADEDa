let handler = async m => m.reply(`
ð *Baymax Bot RulesÂ©*

ð¤ _Bot *MUST BE ADMIN* of groups added._

ð§§ _Its completely unnecessary to call a bot, rather you will be blocked.â¦ï¸_
    
ð§§ _Do not spam bot with commands, if bot is not responding then it means either bot is off or there's internet issue at owner's end.â¦ï¸_
    
ð§§ _Bot or its owner are not responsible for what the bot sends in terms of media.â¦ï¸_
    
ð§§ _Well, the bot has not been installed with ffmpeg package and probably may not send some image media!â¦ï¸_
    
ð§§ _Usage of bot in ways that promote racism, slavery, pollution etc will lead to bot exiting the group or ban.â¦ï¸_

ð§§ _Bot ain't perfect and probably has some bugs, be patient and report them to owner!â¦ï¸_
    
ð§§ _Enjoy whatever the bot offers and break above rules, Its a free worldâ¦ï¸_

ð _Go n sleep if you dont like my botð®_
 
 ð *ðµð²ð¦ð ð¢ ðð½ð·ð¯ ðºð¼ð·ð¹ð¬ð´ð¨ðªðê«á­âð¥*

  `.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i

module.exports = handler
