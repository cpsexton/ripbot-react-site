import React from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { data, fetchAllCommandNames } from "../../api";


import styles from './CommandSelector.module.css';

const CommandSelector = async ({ handleCommandChange }) => {



    return (

        <FormControl className={styles.formControl}>
            <InputLabel htmlFor="grouped-native-select">commands</InputLabel>
            <Select
                native
                defaultValue=""
                id="grouped native-select"
                onChange={


                    (e) => (console.log(e.target), fetchAllCommandNames())
                    // (e) => handleCommandChange(e.target.value)
                } //filter the descrip in commandchange
            >

                <option aria-label="Commands" value="" />
                <optgroup label="Basic">

                    try {
                        fetchAllCommandNames().then([command] =>
                            <option value={command}>
                        {command}
                    </option>
                        )}

                </optgroup>

                <optgroup label="Mod">
                    {Object.keys(data).map((command, i) => (
                        <option key={i} value={command}>
                            {command}
                        </option>
                    ))}
                </optgroup>
                <optgroup label="Admin">
                    {Object.keys(data).map((command, i) => (
                        <option key={i} value={command}>
                            {command}
                        </option>
                    ))}
                </optgroup>

            </Select>
        </FormControl>



    )
}

export default CommandSelector;