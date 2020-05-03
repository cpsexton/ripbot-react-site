//this holds all the commands and definitions

export const data = {

    hello: {
        name: 'hello',
        desc: 'get a whatup from your boy',
        image: '../images/hello-command-demo.gif',
        role: 'basic'
    },
    covid: {
        name: 'covid',
        desc: 'get the latest Covid-19 numbers sourced from the CDC',
        image: '../images/covid-command-demo.gif',
        role: 'basic'
    },
    uptime: {
        name: 'uptime',
        desc: 'find out how long RipBot has been running',
        image: '../images/uptime-command-demo.gif',
        role: 'basic'
    },
    mute: {
        name: 'mute',
        desc: 'mutes a member',
        image: '../images/mute-command-demo-start.gif',
        role: 'mod'
    },
    timer: {
        name: 'timer',
        desc: 'set a timer',
        image: '../images/timer-command-demo.gif',
        role: 'mod'
    },
    pfp: {
        name: 'pfp',
        desc: 'take a look at a members profile picture',
        image: '../images/pfp-command-demo.gif',
        role: 'admin'
    },
    ping: {
        name: 'ping',
        desc: 'ping the server',
        image: '../images/ping-command-demo.gif',
        role: 'admin'
    }
}

export const fetchAllCommandNames = async () => {
    Object.keys(data).map((command, i) => {
        let commandNameList = [];
        commandNameList.push(command)


        return commandNameList
    })
}
// for each command in command list check if the priv is basic

// export const fetchBasicCommands = async (data) => {
//     let basicCommandNames = [];

//     Object.keys(data).map((command) => (
//         role = `${command}.role`

//     ))

//     if (role == 'basic') {
//         basicCommandNames.push(command.name)
//     }
// }

// export const basic = ['hello', 'pfp', 'serverinfo', 'rolldice', 'online', 'poll', 'date', 'timer', 'heal', 'ping', 'uptime', 'whois', 'covid'];
// export const mod = ['kick', 'ban', 'unban', 'prune', 'mute', 'warn'];
// export const admin = ['sLogOn', 'sLogOff', 'status', 'kill', 'activity'];

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