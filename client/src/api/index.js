//this holds all the commands and definitions



const data = [

    {
        name: 'hello',
        desc: "When RipBot recognizes the hello command, it will respond by asynchronously adding reactions to the original post. The emojis end up spelling 'what up' ",
        image: 'helloGif',
        role: "Basic. Any user in the Discord channel may use this command",
        syntax: '$hello'
    },
    {
        name: 'covid',
        desc: "When RipBot recognizes the covid command, it will fetch the latest data from a covid-19 api. The bot will send a curated message to the channel with the latest data. There are 2 additional 'covid' commands for the Top 5 most affected countries and the Top 5 most affected US states",
        image: 'covidGif',
        role: 'Basic. Any user in the Discord channel may use this command',
        syntax: '$covid'
    },
    {
        name: 'uptime',
        desc: "When RipBot recognizes the uptime command, it will respond with an embed message containing how long it has been live. Response time is seperated in hours, minutes and seconds",
        image: 'uptimeGif',
        role: 'Basic. Any user in the Discord channel may use this command',
        syntax: '$uptime'
    },
    {
        name: 'mute',
        desc: "When RipBot recognizes the mute command, it will first verify the user has admin privileges. If not, it will send a message alerting the user to the required role. If the user has the required privileges, RipBot will then check if the discord channel has the role of 'muted' and if not RipBot will create one. The 'muted' role has no ability to send messages. RipBot will then add the 'muted' role to the requested user for the requested amount of time. After the time elapses RipBot will remove that role from the muted user allowing them to send messages again",
        image: 'muteGif',
        role: "Admin. Only user's with admin privileges may use this command",
        syntax: '$mute <username> <time in minutes>'
    },
    {
        name: 'timer',
        desc: "When RipBot recognizes the timer command, it will alert the user to the timer starting and begin a countdown. After the time expires, RipBot will alert the user that time has expired by sending a message to the channel with the user tagged",
        image: 'timerGif',
        role: 'Basic. Any user in the Discord channel may use this command',
        syntax: '$timer <time in seconds>'
    },
    {
        name: 'pfp',
        desc: "When RipBot recognizes the pfp (profile picture) command, it will respond with an embed containing the requested user's profile picture",
        image: 'pfpGif',
        role: 'Basic. Any user in the Discord channel may use this command',
        syntax: '$pfp <username>'
    },
    {
        name: 'ping',
        desc: "When RipBot recognizes the ping command, it will message the channel 'ping'. RipBot will then use the ping prop of the websocket manager to ping the discord servers. Once the response is received RipBot will replace the 'Ping' message with 'Pong!' and the latency information",
        image: 'pingGif',
        role: 'Basic. Any user in the Discord channel may use this command',
        syntax: '$ping'
    },
    {
        name: 'serverinfo',
        desc: "When RipBot recognizes the serverinfo command, it will reply with an embed containing the following information about the current discord server: server name, the owner of the server, the total number of members, what region of the world the server is based, and the list of roles the server has.",
        image: 'sinfoGif',
        role: 'Basic. Any user in the Discord channel may use this command',
        syntax: '$serverinfo',
    },
    {
        name: 'rolldice',
        desc: "When RipBot recognizes the rolldice command, it will return a random number between one and the number of sides, and it loop through this until the number of dice has been exhausted. RipBot will then reply to the user with their rolls and a sum of all rolls.",
        image: 'rdiceGif',
        role: 'Basic. Any user in the Discord channel may use this command',
        syntax: '$rolldice <# of sides> <# of dice>'
    },
    {
        name: 'poll',
        desc: "When RipBot recognizes the poll command, it will reply with an embed containing the first argument which is the poll question then it will 'react' to that embed with the chosen reaction set. If no reaction set was entered it will prompt the user to do so. This command also creates the reaction options list that can be called at any time with $reactions. Reaction sets are a combination of reaction emojis, one positive and one negative, that can be chosen to add a bit of personality to your poll.",
        image: 'pollGif',
        role: 'Basic. Any user in the Discord channel may use this command',
        syntax: '$poll <question> <reaction set>'
    },
    {
        name: 'activity',
        desc: "The activity command will change RipBot's discord presence. First it will verify the user has admin privileges. A discord presence is a short sentence under a user's name that represents what they are currently doing. For instance one can change RipBot from 'Watching for your messages' to 'Watching chat. $help' ",
        image: 'activityGif',
        role: "Admin. Only user's with admin privileges may use this command",
        syntax: '$activity <activity type> <activity>'
    },
    {
        name: 'prune',
        desc: "When RipBot recognizes the prune command, it will delete the requested number of messages from the channel in which the command was entered. RipBot deletes messages of any type and from any user/bot. It deletes from most recent to oldest.",
        image: 'pruneGif',
        role: 'Admin. Any user in the Discord channel may use this command',
        syntax: '$prune <# of messages>'
    }
];

export const fetchData = (command) => {

    let roles = [];
    let images = [];
    let descriptions = [];
    let names = [];
    let allSyntax = [];

    for (var i = 0, max = data.length; i < max; i += 1) {
        names.push(data[i].name)
        descriptions.push(data[i].desc)
        images.push(data[i].image)
        roles.push(data[i].role)
        allSyntax.push(data[i].syntax)
    }

    let commandIndex = names.indexOf(command);
    let desc = descriptions[commandIndex];
    let image = images[commandIndex];
    let role = roles[commandIndex];
    let syntax = allSyntax[commandIndex];

    return { command, desc, image, role, syntax }
}

export const featured = ['covid', 'rolldice', 'mute', 'activity', 'prune', 'poll'];
export const basic = ['hello', 'pfp', 'serverinfo', 'online', 'date', 'timer', 'ping', 'uptime', 'whois'];
export const admin = ['sLogOn', 'sLogOff', 'status', 'kill', 'kick', 'ban', 'unban', 'warn'];
