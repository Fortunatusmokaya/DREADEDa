let handler = async m => m.reply(`
💤 Keep Your money for yourself, owner does not need.
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
