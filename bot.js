const discord = require('discord.js')
const { Client } = require('discord.js');
const client = new Client({disableEveryone: false})
const PREFIX = ("-")
client.on('ready', function(){
    console.log(`Bot Ready for ${client.users.size} users`);
    client.user.setPresence({ game: { name: 'Carson Stream', type: "watching", url: "https://www.twitch.tv/Papurr_v1"}});
    client.user.setStatus('online')
});
client.on('message', async msg => {
	if (msg.author.bot) return undefined;
	let command = msg.content.toLowerCase().split(' ')[0];
    command = command.slice(PREFIX.length)
    if (!msg.content.startsWith(PREFIX)) return undefined;
    const args = msg.content.split(' ')
    if(command === 'stream')
    {
	{
        if(!msg.member.hasPermission("ADMINISTRATOR"))
            {
                msg.channel.send('https://cdn.discordapp.com/attachments/502238703335505920/589312397915717661/Z.png')
                return;
            }
        }
        var strem = ("@everyone watch the strem https://www.twitch.tv/papurr_v1")
        client.channels.get('471433032541274113').send(strem)
    }
})
client.login(process.env.BOT_TOKEN)
