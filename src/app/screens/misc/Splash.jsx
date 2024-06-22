// ------------------ Imports ---------------------
import { useState } from 'react';

import { StyleSheet } from 'react-native';

import {
    ResizeMode,
    Video,
} from 'expo-av';

import { hideAsync } from 'expo-splash-screen';

// Utils
import { onPlaybackStatusUpdate } from './utils';
// ------------------------------------------------


// ------------- Splash component -----------------
export function Splash({ onCompleted }) {
    // States
    const [lastStatus, setLastStatus] = useState({});

    return (
        <Video
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            source={require('../../../../assets/vids/splash.mp4')}
            isLooping={false}
            shouldPlay
            onPlaybackStatusUpdate={(status) => onPlaybackStatusUpdate(
                status,
                hideAsync,
                onCompleted,
                lastStatus,
                setLastStatus
            )}
        />
    );
}
// ------------------------------------------------