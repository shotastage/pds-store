import { Alert } from 'react-native';

export const InitialAlert = (): void => {

    let title: string = 'PDS Dev';

    let script: string = 'v0.0.1.01232.34.exp01';

    Alert.alert(
        title,
        script,
        [
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
    );
};
