let handler = async m => m.reply(`
š *Dreaded Bot*\n\nš *Info :* Very easy and fast to deploy termux-heroku WhatsApp bot written in Js, Modified Tokio-wabot. Credits to Ajay and Nurutumo 
`.trim()) // repository
handler.help = ['dreaded']
handler.tags = ['info']
handler.command = /^dreaded|botto$/i

module.exports = handler
