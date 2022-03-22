/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

import {View, Text, Button} from 'react-native';

import styles from '../gameScreen/styles';

import Card from '../../components/card/card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if(rndNum === exclude)
        return generateRandomBetween(min, max, exclude);
    else
        return rndNum;
};

const GameScreen = ( {userOption} ) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOption));

    return (
        <View style={styles.gameScreenContainer}>
            <Card>
                <Text style={styles.title}>La suposición del oponente es:</Text>
                <Text style={styles.number}> {currentGuess}</Text>
                <View style={styles.buttonContainer}>
                    <Button color="#ff8a20" title="Menor" onPress={() => null}/>
                    <Button color="#ff8a20" title="Mayor" onPress={() => null}/>
                </View>
            </Card>
        </View>
    );
};

export default GameScreen;