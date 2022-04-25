function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '254114018035', 'Fortunne mokaya', m)
  this.sendContact(m.chat, '254114018035', 'Mokaya 🐦', m)
}
handler.help = ['owner/creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
