let handler = m => m

let linkRegex = /youtu.be\/(?:invite\/)?([0-9A-Za-z]{10-20})/i
handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isYoutubeLink = linkRegex.exec(m.text)

  if (chat.antiLink && isYoutubeLink) {
    m.reply('Uuuuuh!!\n\nYoutube Link Detected Bye')
    if (global.opts['restrict']) {
      if (isAdmin || !isBotAdmin) return true
      // this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler
