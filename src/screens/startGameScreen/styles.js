/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputLabel : {
        fontSize: 20,
        fontFamily: 'Rubik-Regular',
    },
    screenContainer : {
        flex: 9,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    buttonsContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '60%',
    },
    confirmedOutputText: {
        fontSize: 20,
        paddingBottom: 16,
        fontFamily: 'Rubik-Regular',
    },
});

export default styles;
