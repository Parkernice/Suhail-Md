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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_50_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE2LFxuICAgICAgICAzNixcbiAgICAgICAgMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDk4LFxuICAgICAgICA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc4LFxuICAgICAgICA2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICA2NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjksXG4gICAgICAgIDY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU2LFxuICAgICAgICA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNzRIcVNoZDBybWpCSHNnck9IdkdWVzJ6b1M1U3pTOG40N1kzQWtOTVJmaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUU5EbVBPS0dRZWlDazFxbjhFUmZKd1wiLFxuICBcInBob25lSWRcIjogXCJhNWQzMzFjYS01OTE1LTRjYjktOWY1Zi0wMjMwZDA4MGU0NzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMTk1LFxuICAgICAgNjgsXG4gICAgICAxMyxcbiAgICAgIDI1LFxuICAgICAgMjI3LFxuICAgICAgMjQ0LFxuICAgICAgODEsXG4gICAgICA0NSxcbiAgICAgIDE4NSxcbiAgICAgIDkzLFxuICAgICAgMTcxLFxuICAgICAgMzgsXG4gICAgICAyMzIsXG4gICAgICAxMjYsXG4gICAgICAxMTIsXG4gICAgICA3OCxcbiAgICAgIDIzMSxcbiAgICAgIDE2OCxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgMTg4LFxuICAgICAgMTU3LFxuICAgICAgMjExLFxuICAgICAgMTQ4LFxuICAgICAgODEsXG4gICAgICAyNTIsXG4gICAgICAyMzUsXG4gICAgICAxNDcsXG4gICAgICAzNCxcbiAgICAgIDI1LFxuICAgICAgMTE1LFxuICAgICAgMTAsXG4gICAgICAxNjIsXG4gICAgICAwLFxuICAgICAgMjQsXG4gICAgICAyMjIsXG4gICAgICAyMTMsXG4gICAgICAxNzAsXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wrenlNd0ZFSitrOUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiblZ2WlZBVVRsRm42clJ2WTBBZGkxRHhTeFZ1d3dRaytESWhZY3NsUkEzcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiTkpPblBhYmRXem5DUldjcFZXZE8zL3lwZWFBRnZXWjh3elJvTklDMmp3L0d3dlJXd0szUldTZTRjUFRnaThYRElRQW5BVFREbmpaK1N3SEx6QU5DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwU1VYdmdYeWFKK0Y3dGRXdThFempLN1NhZXREYlVXMGtad0FvUDVZQ2xFN2NUUFVGS0pyT0t4K0R3bmRHclpSeUoxLzZyclh4MWlSNm81bkNmYndBUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzg1ODI2Mjc6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyOTA5ODU2MzIzMTg0NjoyOUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzg1ODI2Mjc6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1Njk4Mjhcbn0iCn0="  // PUT your SESSION_ID 


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
