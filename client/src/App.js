import React from 'react';
import { Cards, CommandSelector } from "./components";
import { Typography } from "@material-ui/core";
import { fetchData } from './api';

import styles from './App.module.css';


class App extends React.Component {
    state = {
        data: {},
        command: ''
    }

    // componentDidMount() {
    //     const name = getCommandDescriptions();
    //     console.log(name)
    // }

    handleCommandChange = async (command) => {
        const fetchedData = await fetchData(command)

        this.setState({ data: fetchedData, command: command })
        console.log(this.state)
    }

    render() {
        const { command, data } = this.state;
        return (
            <div className={styles.container}>
                <Typography color="primary" variant="h1">RipBot</Typography>

                <CommandSelector handleCommandChange={this.handleCommandChange} />

                <Cards command={command} data={data} />
            </div>
        )
    }
}
export default App;