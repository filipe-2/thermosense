// ------------------ Imports ---------------------
import {
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
} from 'react-native';
// ------------------------------------------------


// ---------- Custom touchable component ----------
export default function NativeTouchable({ onPress, children, background }) {
    switch (Platform.OS) {
        case 'android':
            return (
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={background}
                >
                    {children}
                </TouchableNativeFeedback>
            );
        case 'ios':
            return (
                <TouchableOpacity onPress={onPress}>
                    {children}
                </TouchableOpacity>
            );
        default:
            return;
    }
}
// ------------------------------------------------