import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


export default class MediaPlayerControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log("MEDIA CONTROLL", this.props);
        const {
            streamUrl,
            streamChapter,
            paused,
            isLoadingSound,
            streamDuration,
            streamCurrentTime,
            progress
          } = this.props;
        return (
            <View style={[styles.player, { bottom: streamUrl ? 0 : -80 }]}>
                <View style={styles.row}>
                    {isLoadingSound ? (
                        <View style={styles.playButton}>
                            <ActivityIndicator />
                        </View>
                    ) : (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.playButton}
                                onPress={() => this.props.onTogglePaused()}
                            >
                                {paused ? (
                                    <Icon name="ios-play" size={25} color="#1f364d" />
                                ) : (
                                        <Icon name="ios-pause" size={25} color="#1f364d" />
                                    )}
                            </TouchableOpacity>
                        )}
                    <Text style={styles.playerText}>
                        {streamChapter && streamChapter.activeBook.name_id}{" "}
                        {streamChapter && streamChapter.activeChapter}
                    </Text>
                    <Image
                        source={require("AlkitabApp/assets/alkitabsuara.png")}
                        style={styles.playerImage}
                        resizeMode={"contain"}
                    />
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.closeButton}
                        onPress={() => this.props.onClosePlayer()}
                    >
                        <Icon name="ios-close" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.progressWrapper}>
                    <View style={[styles.progressLine, { width: `${progress}%` }]} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    player: {
        height: 80,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#1f364d",
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    playButton: {
        width: 42,
        height: 42,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 25
    },
    closeButton: {
        width: 42,
        height: 42,
        justifyContent: "center",
        alignItems: "center"
    },
    playerImage: {
        width: 70,
        height: 45
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    playerText: {
        flex: 1,
        color: "#fff",
        paddingHorizontal: 10
    },
    progressWrapper: {
        position: "absolute",
        left: 0,
        right: 0,
        height: 4
    },
    progressLine: {
        backgroundColor: "#fff",
        height: 3
    }
});
