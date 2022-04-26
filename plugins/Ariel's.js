let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
I am a *bot* you know and so I can't read your tag. Mokaya 🗣️ come and check the message please 😥.
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@254731545486/i
handler.command = new RegExp

module.exports = handler
