function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '263780699988', '𝕵𝔲𝔦𝔠𝔢 𝖂𝕽𝕷𝕯 𝑺𝑼𝑷𝑹𝑬𝑴𝑨𝑪𝒀ꫂ᭄⃟🔥', m)
  this.sendContact(m.chat, '263780699988', '𝕵𝔲𝔦𝔠𝔢 𝖂𝕽𝕷𝕯 𝑺𝑼𝑷𝑹𝑬𝑴𝑨𝑪𝒀ꫂ᭄⃟🔥', m)
}
handler.help = ['owner/creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
