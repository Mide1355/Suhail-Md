const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="itzjaywon@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') :"2349166382224";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349166382224,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_46_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU3LFxuICAgICAgICA0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0LFxuICAgICAgICAxMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2LFxuICAgICAgICAzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTExLFxuICAgICAgICA4MixcbiAgICAgICAgMjI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIklGbi9raGJZRjRnRVU5RTA4RHpmQ0xIR00rK3hXdjZSMnVJTks5UTQvZ2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRILVFfUEtHU0ZhU25oS0p2SGlEVGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWNiMWFjNTEtMzQyOC00YzY2LTliOGEtYWUyNmRiOWRhZjYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDU1LFxuICAgICAgNzcsXG4gICAgICA5MyxcbiAgICAgIDMsXG4gICAgICA4LFxuICAgICAgMTM4LFxuICAgICAgMjQ0LFxuICAgICAgNzcsXG4gICAgICAxMDIsXG4gICAgICAxMDYsXG4gICAgICAxMDIsXG4gICAgICA1NSxcbiAgICAgIDI0MCxcbiAgICAgIDI0MixcbiAgICAgIDEyLFxuICAgICAgMTIzLFxuICAgICAgOTYsXG4gICAgICAyMDcsXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgNDcsXG4gICAgICAzLFxuICAgICAgMjM3LFxuICAgICAgMzAsXG4gICAgICAxNDEsXG4gICAgICA4NixcbiAgICAgIDE5OSxcbiAgICAgIDE4NyxcbiAgICAgIDE5MixcbiAgICAgIDgsXG4gICAgICA4OCxcbiAgICAgIDk2LFxuICAgICAgMTA0LFxuICAgICAgOTQsXG4gICAgICAxMDAsXG4gICAgICAyMDcsXG4gICAgICAxNDcsXG4gICAgICAxMDUsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFMTk2VldNR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2NjM4MjIyNDo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU4NTcwNDAyNzAxMzc5OjQzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lhMzRZb0NFUGZybWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTjJmTDdtdlRDUGkxbDlCTGxXRU52R2t4L2JzcitsQWhVV21hRzAzMDJnYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZaFROeEVWRUFaNGxmUW43bWUrYnNZV1hibk84U1lvN2RxTno0aGNmTlJ5UnJNSWNHUlRiM2xYQnZaRHBOL2pVd2lFL3NkVE81enY2SFp0VzI0NnZDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2djhJTFpwZXgvakdZQkU1YVJmejlHUmg4ZFdJeFJkQmFoUzZ6SDlEVTJBZ2JlaGx6Zkw4K05oWC9LbWkxWUVaRUVuaXpkcGc2WGtxZHh5TUxsb2NoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY2MzgyMjI0OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTg1MjExXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "anonymous",
  botname : process.env.BOT_NAME  || "anonymous",
  ownername:process.env.OWNER_NAME|| "anonymous",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ANONYMOUS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
