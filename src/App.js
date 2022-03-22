/* eslint-disable prettier/prettier */

import React, {useState} from 'react';

import {View} from 'react-native';

import styles from './styles';

import Header from './components/header/header';
import StartGameScreen from './screens/startGameScreen/startGameScreen';
import GameScreen from './screens/gameScreen/gameScreen';

const App = () => {

  const [userNumber, setUserNumber] = useState();

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={handlerStartGame}/>;

  if (userNumber) {
    content = <GameScreen userOption={userNumber} />;
  }

  return (
    <View style={styles.appContainer}>
      <Header />
      {content}
    </View>
  );
};

export default App;
