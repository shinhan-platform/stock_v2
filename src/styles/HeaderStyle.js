
 import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor : "grey",
        borderBottomWidth: 1
      },

    titleContainer: {
        flexDirection: 'row', // Align items horizontally
        alignItems: 'center', // Center items vertically
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    logo: {
        width: 25, // Set the width of the logo image
        height: 23, // Set the height of the logo image
        marginLeft: 5, // Add some space between text and logo
    },
});
