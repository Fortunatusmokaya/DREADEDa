function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '254713602321', 'Zachie Martial/mokaya', m)
  this.sendContact(m.chat, '254713602321', 'Zachie Martial/mokaya', m)
}
handler.help = ['owner/creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
