function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '263780699988', 'π΅π²π¦π π’ ππ½π·π― πΊπΌπ·πΉπ¬π΄π¨πͺπκ«α­βπ₯', m)
  this.sendContact(m.chat, '263780699988', 'π΅π²π¦π π’ ππ½π·π― πΊπΌπ·πΉπ¬π΄π¨πͺπκ«α­βπ₯', m)
}
handler.help = ['owner/creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
