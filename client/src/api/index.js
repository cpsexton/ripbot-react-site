//this holds all the commands and definitions



const data = [

    {
        name: 'hello',
        desc: 'get a whatup from your boy',
        image: '../../images/hello-command-demo.gif',
        role: 'basic'
    },
    {
        name: 'covid',
        desc: 'get the latest Covid-19 numbers sourced from the CDC',
        image: '../../images/covid-command-demo.gif',
        role: 'basic'
    },
    {
        name: 'uptime',
        desc: 'find out how long RipBot has been running',
        image: '../../images/uptime-command-demo.gif',
        role: 'basic'
    },
    {
        name: 'mute',
        desc: 'mutes a member',
        image: '../../images/mute-command-demo-start.gif',
        role: 'mod'
    },
    {
        name: 'timer',
        desc: 'set a timer',
        image: '../../images/timer-command-demo.gif',
        role: 'mod'
    },
    {
        name: 'pfp',
        desc: 'take a look at a members profile picture',
        image: '../../images/pfp-command-demo.gif',
        role: 'admin'
    },
    {
        name: 'ping',
        desc: 'ping the server',
        image: '../../images/ping-command-demo.gif',
        role: 'admin'
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