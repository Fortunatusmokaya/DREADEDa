let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
π§§Master *π΅π²π¦π π’ ππ½π·π― πΊπΌπ·πΉπ¬π΄π¨πͺπκ«α­βπ₯* Someone tagged meππ₯Ί Please come and see the message Im just a bot I can't helpπ₯.
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@263774497904/i
handler.command = new RegExp

module.exports = handler
