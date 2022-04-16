let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('http://api.brainshop.ai/get?bid=163086&key=t78dOnZP5GQL5olm&uid=[uid]&msg=[msg]', '/v2/', { text: encodeURIComponent(text), lc: "en" }, ''))
  let json = await res.json()
  if (json.success) m.reply(json.success)
  else throw json
}
handler.help = ['bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^(bot|simi)$/i

module.exports = handler

