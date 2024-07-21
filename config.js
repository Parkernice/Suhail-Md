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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_43_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIsXG4gICAgICAgIDM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NixcbiAgICAgICAgODksXG4gICAgICAgIDE1NixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAzMixcbiAgICAgICAgMTU5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInY0cElJV1hOQTUxUFcrS0lWWURPbUlpRlpTWFVtQ0JreVpxYmhrZjRDUkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktLMmFtT3BWUTBhTmo5X0docE1EcUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDE0NjVkZjgtZjE5MC00ZTYwLWJkMGItYWY2YjMyYThmMGVlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICAxOTgsXG4gICAgICAxNTQsXG4gICAgICAyMDEsXG4gICAgICAxNjksXG4gICAgICAyMzEsXG4gICAgICAyMixcbiAgICAgIDEzMyxcbiAgICAgIDEyNCxcbiAgICAgIDE1MyxcbiAgICAgIDI1MixcbiAgICAgIDI0MixcbiAgICAgIDIxNixcbiAgICAgIDY3LFxuICAgICAgMTE1LFxuICAgICAgMjMzLFxuICAgICAgMTQ4LFxuICAgICAgMjUwLFxuICAgICAgNTYsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICAxMjgsXG4gICAgICA2NixcbiAgICAgIDEwMyxcbiAgICAgIDExOSxcbiAgICAgIDM4LFxuICAgICAgMTIzLFxuICAgICAgNzMsXG4gICAgICAyNDksXG4gICAgICA2LFxuICAgICAgMTY0LFxuICAgICAgMTEyLFxuICAgICAgMjQ4LFxuICAgICAgMTk3LFxuICAgICAgMzAsXG4gICAgICA2OSxcbiAgICAgIDE4MixcbiAgICAgIDE1NixcbiAgICAgIDYwLFxuICAgICAgMTY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTi9ncDA0UXpJVDB0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBWk1YQmlzK2Y5c08rN0E0TnJDR2IxdHY0S216Uk40L25xSk9GWnE5UDJvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdxVmZ6UkkyYkp0d2szR1N2b016blVlcUZlS2ZjMVdwbXVCNGk0WTNObXAwdUF4cGI4MmtHR29TUVFaNWRHMWl4TlN6d1RTTzV2eXBaa3FPaFJFaERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFjS3llUzU3alFMM3RMRi94RWl3VFoyak1qbjhrWlNVRkRTWG5pemVuelNrM2J4S1htMzVEM2dFKzBBbW1sQWFCdXpZdHlnUXMvMzMrc0t1MkZxWGp3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3NzA1MTY1MjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA1NTg3NDUxMjM2NDA1OjEwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3NzA1MTY1MjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTY1Nzc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXUxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNdTAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLK2JiaUVXaThtSkdMNmJNczVSeloxOCsrLzhoL3BNdEJONlhLNVpHcmZnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDIyOTIxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXUxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOXU1T1AwV2krVVR2MytsWlJPZVdseldObTIwazUyVmh2R3NPMkZTZUtwND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjQyMjkyMTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1NjE0MTgzNzNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNdTIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqa1d6dkZocWw1cENKZE8wbktPUkVmbjgzOHFIVnMvSlFQcjAxR3U4MTRRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDIyOTIxMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTU2MTQ2NTcyOVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU11My5qc29uIjogIntcImtleURhdGFcIjpcImpxb0VyVDRpMW5KRWQ1ZFcyNVZRa1hFcWR0Vks3RkxBTm9MNUVNWVJhSk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY0MjI5MjE0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNdTQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2WExRUFM4N3k3aCtGN3VYbGt6NFJKaXJpNElJRXE0Z3l0NG15aXZsVlgwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDIyOTIxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTU2NTc2NTAzNVwifSIKfQ=="  // PUT your SESSION_ID 


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
