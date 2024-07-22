const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
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
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_48_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNCxcbiAgICAgICAgNzksXG4gICAgICAgIDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDkzLFxuICAgICAgICA3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODksXG4gICAgICAgIDY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NixcbiAgICAgICAgMTUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRvV0VVVDkxRm5FNTh5dWFMQXFXTkFvMUluMlRSNzV5R0kwR3BWYjRmM2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2ODAyMzcwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEJDRjZDNUM4N0NFQzNCN0VFMTNENEYzRUM5NEFBNjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNjg0OTAyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlnZkllMnAyVEpleThQWUNDSmZveEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTM4ZWZjYTgtNjBlNS00ZjBiLTgzYTQtMDI2MTcyY2Q1M2ZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDE5NyxcbiAgICAgIDgxLFxuICAgICAgOTAsXG4gICAgICAxOTcsXG4gICAgICAxOTUsXG4gICAgICAxMSxcbiAgICAgIDE4MSxcbiAgICAgIDIzNCxcbiAgICAgIDY5LFxuICAgICAgMzUsXG4gICAgICAxMDMsXG4gICAgICAyNDEsXG4gICAgICAxNTUsXG4gICAgICAxMjEsXG4gICAgICAxNTYsXG4gICAgICAxMDcsXG4gICAgICAyNTIsXG4gICAgICAyNCxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAyMzEsXG4gICAgICAxNixcbiAgICAgIDIyMixcbiAgICAgIDIyMixcbiAgICAgIDE2NyxcbiAgICAgIDQ5LFxuICAgICAgMTQ5LFxuICAgICAgMTI5LFxuICAgICAgOTEsXG4gICAgICAxMDEsXG4gICAgICAyOCxcbiAgICAgIDE4OCxcbiAgICAgIDIyNixcbiAgICAgIDc0LFxuICAgICAgMTQ5LFxuICAgICAgMTY2LFxuICAgICAgMTY4LFxuICAgICAgNTMsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTZGOTk5MVhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjgwMjM3MDQ6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzOTY4MTAxMDM0ODI2MzoyOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJQYXJrZXIgTGVlXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTU91MEtFSEVKMm4rN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpdzhJa2tTNGRUYXZNVVpDVkZKOGFOd0JmMXhQWC9iN3dyV2liZ2RFWVNZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImE0ZUlWaUpYMGFMZ3ZBY1pScVlXdm1KOEtOZE1tVHBvL05TTmk2MVpzeExHTHY1UVFvS2w0dnR3eW9uZzUxVVdkdUtQUFJlUG9kODE1NEVTbE9wTUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlg3L2h5cGk2Zy90ZnlEa1lSTk1JakE3ZWQyUUdMclRRSjUzcUg4YnkybU82K2RIVVp1L29MQnhKWFpqREJBNkhPRHNtNDljbHM0Sk9Hc0xSTm92VEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjgwMjM3MDQ6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjg0ODk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlpPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKWk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0bDdhR3ppbmtwaFRrWkdjYXBJM3VpYkRQQVRrRk05MXhYRGRDd3FicUwwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDk1NzA4ODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTY4NDg5OTUzOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
