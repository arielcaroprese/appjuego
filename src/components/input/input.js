/* eslint-disable prettier/prettier */

import React from 'react';

import { TextInput } from 'react-native';
import styles from './styles';

const Input = ({...props}) => {
    return (
        <TextInput style={styles.inputText} {... props}/>
    );
};

export default Input;

