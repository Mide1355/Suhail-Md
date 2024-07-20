const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="itzjaywon@gmail.com"
global.location="Lagos.Nigeria"


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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349166382224,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_51_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NixcbiAgICAgICAgMTk4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA3LFxuICAgICAgICA4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MixcbiAgICAgICAgOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJUK0xYcUhGQVFrRjhqRDhTMjJMVVhYM09FWExqeGIwS3FBQnpjNXdDWmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIncxMFdJMTRfU3pXNFpjNTNaTmk1OEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTA3ZjczNTktNWQ0NS00N2JhLTg0ZmYtM2U4MWNlNDhjMTdmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDAsXG4gICAgICAyNDAsXG4gICAgICAxMDYsXG4gICAgICAxODcsXG4gICAgICAxNDMsXG4gICAgICAyMDAsXG4gICAgICAyMDgsXG4gICAgICAyMTUsXG4gICAgICAyMDcsXG4gICAgICA0MixcbiAgICAgIDIyMixcbiAgICAgIDE3OSxcbiAgICAgIDIyOSxcbiAgICAgIDIzOCxcbiAgICAgIDEyNyxcbiAgICAgIDE5MCxcbiAgICAgIDE0MSxcbiAgICAgIDE5MixcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDIxNixcbiAgICAgIDIzNCxcbiAgICAgIDg5LFxuICAgICAgMTI0LFxuICAgICAgMjAwLFxuICAgICAgMjcsXG4gICAgICAyMjMsXG4gICAgICA5NCxcbiAgICAgIDI0MixcbiAgICAgIDgxLFxuICAgICAgMTA0LFxuICAgICAgMTc2LFxuICAgICAgNDksXG4gICAgICAyMDgsXG4gICAgICAyNDUsXG4gICAgICAxMDksXG4gICAgICAxNjksXG4gICAgICA1NixcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEUURSWTRZNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2NjM4MjIyNDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU4NTcwNDAyNzAxMzc5OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01Ha25URVFpN3J2dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSXY0Y2NCZHpKaFJaaTRrMSt1L0tPLzR3YUdlZThHRnVCL2Zvdis3bjVpaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0a1VHSmRCRDJvdWd2L29iTFY4NWdsTUc2WkpzcWdTSU1lNWlySk9NQmZNczIyYWM2eE1ycDYxL2ZGWGxsUmhzd2pQMEI0eW84cTQ5M09DTWdZYzVBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRVTN3SHBjQ0JLc1ZVbGY0N3lOdkRHL3ZxUThZaVZZWEdVVHE0S1luOWc4NWV2aWkzbWxFUzRFN3Z2ZFRMQUs3bCsyaEhVaTlkZGZLMjA4ZCtWcnhpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY2MzgyMjI0OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0OTA3MDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLOHZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUs4di5qc29uIjogIntcImtleURhdGFcIjpcIjZCbHcreTlMakNMVERsWmNYOThPdVcwZUgvdkdJWkhObFh5WHdQV1FTcnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAzMjQwMjU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
  LANG: ( process.env.THEME ||  "anonymous"  ).toUpperCase(),



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
