let handler = async (m, { conn }) => {
  const delay = time => new Promise(res=>setTimeout(res,time));
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = (await conn.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
  for (let user of users){
    if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user !== '254114018035@s.whatsapp.net' && user!== '254114018035'){
      await conn.groupRemove(m.chat, [user])
      await delay(100)
    }
  }
}
handler.help = ['okickall']
handler.tags = ['owner']
handler.command = /^(okickall)$/i
handler.owner = true
handler.group = true
handler.fail = null
module.exports = handler
