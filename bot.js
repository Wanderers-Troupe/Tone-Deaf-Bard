require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client({
    partials: ["MESSAGE"]
})


const BOT_PREFIX = "!"
const MOD_ME_COMMAND = "mod-me"

client.on("ready", () => {
    console.log("Our bot is ready to go!!!!!")
})

client.on("messageDelete", msg => {
    msg.channel.send("U suck")
})

client.on("message", msg => {
    if (msg.content == "I am a Nyanpai") {
        msg.react("🐈")
    }

    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
}) 

function modUser(member) {
    member.roles.add("742345531870806116")
}

client.login(process.env.BOT_TOKEN)