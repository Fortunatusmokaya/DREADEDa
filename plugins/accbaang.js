let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'no'
  if (isAdmin) throw '*Fortunne* You are No longer Admin Already!'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^undo.$/i
handler.owner = true
handler.botAdmin = true
module.exports = handler
