import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Not found'
  let { title, description, thumbnail, videoId, durationH } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
馃寧 *饾棫饾棞饾棫饾棢饾棙:* ${title}
馃實 *饾棬饾棩饾棢:* ${url}
馃尀 *饾棗饾棙饾棪饾棖饾棩饾棞饾棧饾棫饾棞饾棦饾棥:* ${description}
  `.trim(), author, thumbnail, '', '', null, null, [
    ['SONG', `${usedPrefix}yta ${url} yes`],
    ['VIDEO', `${usedPrefix}ytv ${url} yes`]
  ], m, { asLocation: 1 })
}
handler.help = ['play', 'play2'].map(v => v + '')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false

export default handler

