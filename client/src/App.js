import React from 'react';
import { Cards, CommandSelector } from "./components";
import { Typography } from "@material-ui/core";


import styles from './App.module.css';


class App extends React.Component {
    state = {
        command: '',
        description: '',
        image: ''
    }



    handleCommandChange = (command, description, image) => {


        this.setState({ command: command, description: description, image: image })
    }

    render() {
        const { command, description, image } = this.state;
        return (
            <div className={styles.container}>
                <Typography color="primary" variant="h1">RipBot</Typography>

                <CommandSelector handleCommandChange={this.handleCommandChange} />

                <Cards command={command} description={description} image={image} />
            </div>
        )
    }
}
export default App;