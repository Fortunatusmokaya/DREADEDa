import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
let tags = {
    'main': 'MAIN',
  'info': 'INFO',
  'game': 'GAME',
  'xp': 'EXP & LIMIT',
  'sticker': 'STICKER',
  'admin': 'ADMIN',
  'group': 'GROUP',
  'premium': 'PREMIUM',
  'anime': 'ANIME',
  'internet': 'INTERNET',
  'nulis': 'LOGO & WRITING',
  'downloader': 'DOWNLOADER',
  'tools': 'TOOLS',
  'fun': 'FUN',
  'audio': 'AUDIO',
  'maker': 'MAKER',
  'videomaker': 'VIDEOMAKER',
  'database': 'DATABASE',
  'exp': 'REGISTER',
  'vote': 'VOTING',
  'absen': 'ABSENT',
  'jadibot': 'GET BOT',
  'anonymous': 'ANONYMOUS CHAT',
  'owner': 'OWNER',
  'host': 'HOST',
  'advanced': 'ADVANCED',
}
const defaultMenu = {
  before: `
  ╭─━━━━━━━━━━━━━━━━━
  ┃✾┈[ *─ׅ─⃝Notes📮Side─ׅ─⃝*  ]┈✾
  ┖━━━━━━━━━━━━━━━━━━
  Owner Bot not responsible for any inconvenience caused by bot

 Bot Does not store any users data so don't fear about security of your account

 Read FAQ or rules 
 If you find any error in bot please type %powner to contact owner


ENJOY %me .inc Bots🚀

1 | _Do not call bot, if you do then you'll get automatically blocked by bot._
    
2 | _Do not spam bot with commands, if bot is not responding then it means either bot is off or there's internet issue at owner's end._
    
3 | _Do not abuse/disrespect bot and its owner._
    
4 | _If you see any bug/error in bot then report it to owner with the command !bug/report <problem>._
    
5 | _If you want this bot in your group then contact owner by typing !owner/creator._
    
6 | _Enjoy the bot and have fun._

7 | _There's 3 Types of Users
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁

╭━━✾━━━━━━━━━━━━━✾━
┃      ❰ ✾ 𝗨𝗦𝗘𝗥 ✾ ❱
┟━━✾━━━━━━━━━━━━━✾━
┃  
┃ *NAME* : *%name*
┃  𝗟𝗜𝗠𝗜𝗧 : *%limit Limit*
┃  𝗥𝗢𝗟𝗘 : *%role*
┃  𝗟𝗘𝗩𝗘𝗟 : *%level (%exp / %maxexp)*
┃  𝗧𝗢𝗧𝗔𝗟 𝗫𝗣 : %totalexp ✨
┃ 
┃  𝗗𝗔𝗧𝗘: %date*
┃  𝗧𝗜𝗠𝗘: *%time*
┃
┃  𝗨𝗣𝗧𝗜𝗠𝗘: *%uptime (%muptime)*
┃  𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘: %rtotalreg of %totalreg
┗━━━━━━━━━━━━━━━━⦂
%readmore`.trimStart(),
  after: `
  *⊹  ࣪. ִ . ࣪ ⊹  ࣪. ִ . ࣪ ⊹   ࣪. ִ . ࣪ ⊹  ࣪. ִ . ࣪ ⊹ 
  ׄ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ
 ░⃟ 
 *٫٫ 🪧★ ࣪ ،💐🄰🅃🅃🄴🄽🅃🄸🄾🄽 𝆺̸𝅥💐 ›
 ░⃟🛹 𓂅 ָ࣪ ۰BayMax Bot is not online 24hrs
 *٫٫ 🪧★ ࣪ ،💐Rights Reserved𝆺̸𝅥💐
  ׄ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ
  *⊹  ࣪. ִ . ࣪ ⊹  ࣪. ִ . ࣪ ⊹   ࣪. ִ . ࣪ ⊹  ࣪. ִ . ࣪ ⊹ 
  LICENCI SNI
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long', timeZone: 'Africa/Harare' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Africa/Harare'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Africa/Harare'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : ``) + defaultMenu.after
    let _text = [
      before,
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    const pp = await promises.readFile(join('./src/avatar_contact.png'))
    let at1 = ['https://i.pinimg.com/236x/b3/e3/38/b3e338aa349e723cb72b2c6c745e559f.jpg','https://i.pinimg.com/564x/18/f9/d3/18f9d3209f3f5abef5c48046eca0d746.jpg','https://i.pinimg.com/236x/bf/fb/61/bffb6110db24a414cef5eef1df129d7d.jpg','https://i.pinimg.com/236x/9c/14/79/9c1479a17ccba302e334944752d7b6a6.jpg','https://i.pinimg.com/236x/ca/a8/ba/caa8ba4a4629a61b897091b0c8c09226.jpg','https://i.pinimg.com/236x/60/a9/fd/60a9fd07c30f0ebdfbb04635f428fe8e.jpg']
    let ats1 =  at1[Math.floor(Math.random() * at1.length)]
    conn.sendHydrated(m.chat, text.trim(), author, ats1, '', 'WEBSITE', '62895383810600', 'CREATOR',[
      ['OWNER', '/creator'],
      ['SPEED', '/speed'],
      ['RULES', '/rules']
    ], m, { asLocation: 1 })
  } catch (e) {
    conn.reply(m.chat, 'My friend, menu  error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
