const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const config = {
    token: process.env.DISCORD_TOKEN,
    clientId: process.env.CLIENT_ID
};

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ],
    partials: [Partials.Channel]
});

client.commands = new Collection();
client.buttons = new Collection();

// ============ Cargar comandos ============
const commandsPath = path.join(__dirname, "src", "commands");
if (fs.existsSync(commandsPath)) {
    const commandFiles = fs.readdirSync(commandsPath).filter(f => f.endsWith(".js"));
    for (const file of commandFiles) {
        const command = require(`./src/commands/${file}`);
        client.commands.set(command.data.name, command);
    }
}

// ============ Cargar botones ============
const buttonsPath = path.join(__dirname, "src", "buttons");
if (fs.existsSync(buttonsPath)) {
    const buttonFiles = fs.readdirSync(buttonsPath).filter(f => f.endsWith(".js"));
    for (const file of buttonFiles) {
        const button = require(`./src/buttons/${file}`);
        client.buttons.set(button.customId, button);
    }
}

// ============ Cargar eventos ============
const eventsPath = path.join(__dirname, "src", "events");
if (fs.existsSync(eventsPath)) {
    const eventFiles = fs.readdirSync(eventsPath).filter(f => f.endsWith(".js"));
    for (const file of eventFiles) {
        const event = require(`./src/events/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
    }
}

// =====================================================
// LOGIN DEL BOT
// =====================================================
client.login(config.token);