//this holds all the commands and definitions



const data = [

    {
        name: 'hello',
        desc: "When RipBot hears the hello command, it will respond by asynchronously adding reactions to the original post with emojis spelling 'what up' ",
        image: 'helloGif',
        role: "BASIC. Any user in the Discord channel may use this command",
        code: 'helloCode'
    },
    {
        name: 'covid',
        desc: 'get the latest Covid-19 numbers sourced from the CDC',
        image: 'covidGif',
        role: 'BASIC. Any user in the Discord channel may use this command'
    },
    {
        name: 'uptime',
        desc: "When RipBot recognizes the uptime command, it will respond with an embed message containing how long it has been live. Response time is seperated in hours, minutes and seconds",
        image: 'uptimeGif',
        role: 'BASIC. Any user in the Discord channel may use this command'
    },
    {
        name: 'mute',
        desc: 'mutes a member',
        image: 'muteGif',
        role: "Mod. Only user's with mod privileges may use this command"
    },
    {
        name: 'timer',
        desc: 'set a timer',
        image: 'timerGif',
        role: 'BASIC. Any user in the Discord channel may use this command'
    },
    {
        name: 'pfp',
        desc: 'take a look at a members profile picture',
        image: 'pfpGif',
        role: 'BASIC. Any user in the Discord channel may use this command'
    },
    {
        name: 'ping',
        desc: 'ping the server',
        image: 'pingGif',
        role: 'BASIC. Any user in the Discord channel may use this command'
    }
];

export const fetchData = (command) => {

    let roles = [];
    let images = [];
    let descriptions = [];
    let names = [];
    for (var i = 0, max = data.length; i < max; i += 1) {
        names.push(data[i].name)
        descriptions.push(data[i].desc)
        images.push(data[i].image)
        roles.push(data[i].role)
    }
    let commandIndex = names.indexOf(command);
    let name = command;
    let desc = descriptions[commandIndex];
    let image = images[commandIndex];
    let role = roles[commandIndex];

    //get the index of the command in the names array. use that index for the other arrays. should get the single command name, desc, image, role
    return { name, desc, image, role }
}

export const basic = ['hello', 'pfp', 'serverinfo', 'rolldice', 'online', 'poll', 'date', 'timer', 'heal', 'ping', 'uptime', 'whois', 'covid'];
export const mod = ['kick', 'ban', 'unban', 'prune', 'mute', 'warn'];
export const admin = ['sLogOn', 'sLogOff', 'status', 'kill', 'activity'];

// export const descriptions = {
//     hello: 'get a whatup from your boy',
//     covid: 'get the latest Covid-19 numbers sourced from the CDC',
//     serverinfo: 'get all the details on the server'
// }

// export const image = {
//     hello: '.././images/hello-command-demo.gif',
//     covid: '.././images/covid-command-demo.gif'
// }


//basically the fetch calls go here and sends 