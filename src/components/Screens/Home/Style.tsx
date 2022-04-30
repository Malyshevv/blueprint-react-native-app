import {StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
    item: {
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 15,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    container: {
        flexGrow: 1,
        marginBottom: 10,
        paddingBottom: 5
    },
    btnMore: {
        backgroundColor: '#3c54f8',
        shadowOpacity: 0,
        padding: 10,
        alignItems: 'center'
    },
    btnReed: {
        marginTop: 10,
        backgroundColor: '#1ea14c',
        shadowOpacity: 0,
        padding: 10,
        alignItems: 'center'
    },
    textBtn: {
        color: '#ffffff'
    }
});
