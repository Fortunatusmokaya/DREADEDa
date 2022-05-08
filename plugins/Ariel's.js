let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
🧧Master *𝕵𝔲𝔦𝔠𝔢 𝖂𝕽𝕷𝕯 𝑺𝑼𝑷𝑹𝑬𝑴𝑨𝑪𝒀ꫂ᭄⃟🔥* Someone tagged me😟🥺 Please come and see the message Im just a bot I can't help🐥.
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@263774497904/i
handler.command = new RegExp

module.exports = handler
