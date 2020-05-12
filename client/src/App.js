import React from 'react';
import { Cards, CommandSelector, Header } from "./components";
import { Typography } from "@material-ui/core";
import { fetchData } from './api';

import styles from './App.module.css';


class App extends React.Component {
    state = {
        name: '',
        desc: '',
        image: '',
        role: '',
        syntax: '',
    }

    // componentDidMount() {
    //     console.log(name)
    // }

    handleCommandChange = async (command) => {
        const { desc, image, role, syntax } = await fetchData(command);

        this.setState({ name: command, desc: desc, image: image, role: role, syntax: syntax });

        console.log(this.state)
    }

    render() {
        const { name, desc, image, role, syntax } = this.state;
        const wallArt = require('./images/RipBot-wall-art.jpg')
        return (
            <div className={styles.container}>
                {/* <Typography color="primary" variant="h1">RipBot</Typography> */}
                {/* <img src={wallArt} alt='ripbot wall art image' className={styles.banner} /> */}
                <Header handleCommandChange={this.handleCommandChange} />
                {/* <CommandSelector handleCommandChange={this.handleCommandChange} /> */}
                <Cards command={name} desc={desc} image={image} role={role} syntax={syntax} />
            </div>
        )
    }
}
export default App;