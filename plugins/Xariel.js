let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
You tagged my *OWNER* Juice Wrld, He's Busy 🐦. Hehe
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@263780699988/i
handler.command = new RegExp

module.exports = handler
