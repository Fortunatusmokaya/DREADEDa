let handler = async (m, { conn, participants }) => {
  if (m.fromMe) throw 'no'
  if (isAdmin) throw '*Fortunne* You are No longer Admin Already!'
  await conn.groupDemoteAdmin(m.chat, [m.sender])
}
handler.command = /^undo.$/i
handler.owner = true
handler.botAdmin = true
module.exports = handler
