const discord = require('discord.js')
const { Client } = require('discord.js');
const client = new Client({disableEveryone: false})
const PREFIX = ("-")
const TOKEN = ('NTc2NTkzODU1NjU1MTgyMzM2.XO3N8Q.nKBtO6lyMENyAEJsO3qGBLlD0bU')
client.on('message', async msg => {
	if (msg.author.bot) return undefined;
	let command = msg.content.toLowerCase().split(' ')[0];
    command = command.slice(PREFIX.length)
    if (!msg.content.startsWith(PREFIX)) return undefined;
    const args = msg.content.split(' ')
    if(command === 'stream')
    {
        var strem = ("@everyone watch the strem https://www.twitch.tv/papurr_v1")
        client.channels.get('471433032541274113').send(strem)
    }
})
client.login(TOKEN)
