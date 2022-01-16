let handler = async m => m.reply(`
💎 *Dreaded :* a whatsapp bot\n\n🔗 *URL :* https://github.com/Fortunatusmokaya/dreaded5
`.trim()) // repository
handler.help = ['dreaded']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
