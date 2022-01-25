let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'no'
  if (isAdmin) throw 'I have already done that! You are admin!'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^do it.$/i
handler.owner = true
handler.botAdmin = true
module.exports = handler
