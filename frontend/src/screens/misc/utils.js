// -------- Control splash playback status --------
function onPlaybackStatusUpdate(status, hideAsync, onCompleted, lastStatus, setLastStatus) {
    if (status.isLoaded) {
        if (lastStatus.isLoaded !== status.isLoaded) {
            hideAsync();
        }

        if (status.didJustFinish) {
            onCompleted(true);
        }
    }

    setLastStatus(() => status);
};
// ------------------------------------------------


// ------------------ Exports ---------------------
export {
    // Variables

    // Functions
    onPlaybackStatusUpdate,
};
// ------------------------------------------------