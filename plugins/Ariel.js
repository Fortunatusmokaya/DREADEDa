let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
You tagged my *OWNER* ❤ >:( Leave him Alone;-).He is Busy...Hehe..;)🌚>:(
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@254114018035/i
handler.command = new RegExp

module.exports = handler
