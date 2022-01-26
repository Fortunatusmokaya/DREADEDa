let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'no'
  if (isAdmin) throw 'I have already made you admin, What is it again?'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^do.$/i
handler.owner = true
handler.botAdmin = true
module.exports = handler
