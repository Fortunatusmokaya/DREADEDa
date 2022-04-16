let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'no'
  if (isAdmin) throw '*Master*, I have already made you admin 🌚'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^done.$/i
handler.owner = true
handler.botAdmin = true
module.exports = handler
