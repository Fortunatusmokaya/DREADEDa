let handler = m => m

handler.before = function(m, { text }) {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let username = conn.getName(who)
  let mentionedJid = [m.sender]
  let name = m.fromMe ? conn.user : conn.contacts[m.sender]
  let users = m.sender

    if (m.text > 📄.RAVEN_                                                             📄.RAVEN_) {
  this.reply(m.chat, '*「 DREADED ANTI-BUG 」*\n\nDetected *${username}* you have sent RAVEN troli bug!\n\nSorry am going to kick you now to prevent further lagging!', m)
     this.groupRemove(m.chat, [users])
  }
}
handler.group = true

module.exports = handler
