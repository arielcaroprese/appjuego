/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    gameScreenContainer: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '60%',
    },
    number : {
        fontFamily: 'Rubik-Medium',
        fontSize: 40,
        paddingBottom: 20,
    },
    title : {
        fontFamily: 'Rubik-Regular',
        fontSize: 20,
        paddingBottom: 8,
    },
});

export default styles;