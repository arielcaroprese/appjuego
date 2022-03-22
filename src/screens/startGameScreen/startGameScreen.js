/* eslint-disable prettier/prettier */

import React, {useState} from 'react';

import {View, Text, Button, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Card from '../../components/card/card';

import Input from '../../components/input/input';

import styles from './styles';

const StartGameScreen = ({ onStartGame }) => {
    const [enteredValue, setEnteredValue] = useState('');

    const [confirmed, setConfirmed] = useState(false);

    const [selectedNumber, setSelectedNumber] = useState('');

    const handleInputNumber = (value) => {
        setEnteredValue(value.replace(/[^0-9]/g), '');
    };

    const handleResetinput = () => {
        setEnteredValue('');
    };

    const handleConfirmInput = () => {
        const chosenNumber = parseInt(enteredValue);
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) return;

        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
    };

    const confirmedOutput = confirmed ? (
        <Card>
            <Text style={styles.confirmedOutputText}>Elegiste el número {selectedNumber}</Text>
            <Button color="#ff8a20" title="Empezar Juego" onPress={() => onStartGame(selectedNumber)}/>
        </Card>
        ) : null;

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
            <View style={styles.screenContainer}>
            <Card>
                <Text style={styles.inputLabel}>Ingresá un número</Text>
                <Input
                    placeholder="Ej: 27"
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={handleInputNumber}
                    value={enteredValue}
                />
                <View style={styles.buttonsContainer}>
                    <Button color="#ff8a20" title="Limpiar" onPress = {handleResetinput} />
                    <Button color="#ff8a20" title="Confirmar" onPress = {handleConfirmInput} />
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

export default StartGameScreen;
