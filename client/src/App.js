import React from 'react';
import { Cards, CommandSelector } from "./components";
import { Typography } from "@material-ui/core";


import styles from './App.module.css';


class App extends React.Component {
    state = {
        command: ''
    }



    handleCommandChange = async (command) => {


        this.setState({ command: command })
    }

    render() {
        const { command } = this.state;
        return (
            <div className={styles.container}>
                <Typography color="primary" variant="h1">RipBot</Typography>

                <CommandSelector handleCommandChange={this.handleCommandChange} />

                <Cards command={command} />
            </div>
        )
    }
}
export default App;