let handler = async m => m.reply(`
💎 *Dreaded Bot*\n\n🔗 *Info :* Very easy and fast to deploy termux-heroku WhatsApp bot written in Js
`.trim()) // repository
handler.help = ['dreaded']
handler.tags = ['info']
handler.command = /^dreaded|botto$/i

module.exports = handler
