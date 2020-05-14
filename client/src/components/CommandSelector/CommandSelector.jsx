import React from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { basic, mod, admin, featured } from "../../api";

import styles from './CommandSelector.module.css';

const CommandSelector = ({ handleCommandChange }) => {

    return (
        <FormControl className={styles.formControl}>
            <InputLabel htmlFor="grouped-native-select">commands</InputLabel>
            <Select
                native
                defaultValue=""
                id="grouped native-select"
                onChange={
                    (e) => (
                        console.log('Command selected from menu was: ' + e.target.value),
                        handleCommandChange(e.target.value)
                    )
                }
            >

                <option aria-label="Commands" value="" />

                <optgroup label="Featured">
                    {featured.map((command, index) => (
                        <option key={index} value={command}>
                            {command}
                        </option>
                    ))}
                </optgroup>

                <optgroup label="Basic">
                    {basic.map((command, index) => (
                        <option key={index} value={command}>
                            {command}
                        </option>
                    ))}
                </optgroup>

                <optgroup label="Admin">
                    {admin.map((command, index) => (
                        <option key={index} value={command}>
                            {command}
                        </option>
                    ))}
                </optgroup>

            </Select>
        </FormControl >
    )
}

export default CommandSelector;