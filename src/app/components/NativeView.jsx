import {
    Platform,
    View
} from 'react-native';

import { SafeAreaView } from "react-native-safe-area-context";

export default function NativeView({ children, style }) {
    switch (Platform.OS) {
        case 'android':
            return (
                <View style={style}>
                    {children}
                </View>
            );
        case 'ios':
            return (
                <SafeAreaView style={style}>
                    {children}
                </SafeAreaView>
            );
        default:
            return null;
    }
}