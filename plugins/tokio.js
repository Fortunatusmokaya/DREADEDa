let handler = async m => m.reply(`
💎 *Dreaded :* a very light wa bot\n\n🔗 *URL :* https://github.com/Fortunnemokaya/dreaded5
`.trim()) // repository
handler.help = ['dreaded']
handler.tags = ['info']
handler.command = /^dreaded|repo$/i

module.exports = handler
