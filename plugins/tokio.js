let handler = async m => m.reply(`
💎 *Dreaded Bot By Fortunne*\n\n🔗 *Info :* Very easy and fast to deploy termux-heroku WhatsApp bot written in Js
`.trim()) // repository
handler.help = ['dreaded']
handler.tags = ['info']
handler.command = /^dreaded|fortunne$/i

module.exports = handler
