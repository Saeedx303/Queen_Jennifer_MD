//═══════════════════════════════════════════════════════//
//
//                              Whats-Bot-MD_V-3 by darkezio
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//
const fs = require('fs')
const chalk = require('chalk')
const { ownername, botname, footer, ig, region, myweb, packname, author, sessionName, prefa, sp, mess, APIs, YOUR_API_KEY, sc } = require('./lib/config.js')





//customize settings\\
global.APIKeys = {'https://zenzapis.xyz': KkcwKHj9D9rYJbp } //credit goes to sanzy yt, if api key expire, buy it and put it here?\\ https://zenzapis.xyz
global.owner = ['923477008403', '923120443386'] // Add Your number Eg: ['94761539856', 'YOUR NUMBER']
global.premium = ['923477008403', '923120443386'] // Add Your number Eg: ['94761539856', 'YOUR NUMBER']
global.ownernomer = '923120443386' // Add Your number Eg: ['YOUR NUMBER']
// we got your name in your whatsapp





//Don't edit enithing\\
global.APIs = APIs
global.ownername = BABLI-MD
global.botname = BABLI-MD
global.footer = footer
global.ig = saeedx304
global.region = Pakistan
global.myweb = www.moviesmod.zip
global.packname = BABLI
global.author = BABLI
global.sessionName = sessionName
global.prefa = ! 
global.sp = sp
global.mess = mess
global.sc = sc

global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./Media/gojo.jpg')
global.flaming = 'https://flamingtext.com/net-fu/proxy_form.cgi?script=welcome-logo&text=BABLI-MD&script=welcome-logo&text=BABLI-MD&imageoutput=true'
global.fluming = 'https://flamingtext.com/net-fu/proxy_form.cgi?script=welcome-logo&text=BABLI-MD&script=welcome-logo&text=BABLI-MD&imageoutput=true'
global.flarun = 'https://flamingtext.com/net-fu/proxy_form.cgi?script=welcome-logo&text=BABLI-MD&script=welcome-logo&text=BABLI-MD&imageoutput=true'
global.flasmurf = 'https://flamingtext.com/net-fu/proxy_form.cgi?script=welcome-logo&text=BABLI-MD&script=welcome-logo&text=BABLI-MD&imageoutput=true'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
