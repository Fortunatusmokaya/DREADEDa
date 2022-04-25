let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Mokaya 🗣️, somebody has tagged me again 😢. Check their message please 🥲...
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@254731545486/i
handler.command = new RegExp

module.exports = handler
