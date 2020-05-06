import React from 'react';
import { Cards, CommandSelector } from "./components";
import { Typography } from "@material-ui/core";
import { fetchData } from './api';

import styles from './App.module.css';


class App extends React.Component {
    state = {
        command: '',
        desc: '',
        image: '',
        role: '',
        code: ''
    }

    // componentDidMount() {
    //     const name = getCommandDescriptions();
    //     console.log(name)
    // }

    handleCommandChange = async (command) => {
        const { name, desc, image, role, code } = await fetchData(command);

        this.setState({ command: name, desc: desc, image: image, role: role, code: code });

        console.log(this.state)
    }

    render() {
        const { command, desc, image, role, code } = this.state;
        return (
            <div className={styles.container}>
                <Typography color="primary" variant="h1">RipBot</Typography>

                <CommandSelector handleCommandChange={this.handleCommandChange} />

                <Cards command={command} desc={desc} image={image} role={role} code={code} />
            </div>
        )
    }
}
export default App;