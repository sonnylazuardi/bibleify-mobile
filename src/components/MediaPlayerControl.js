import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import Slider from 'react-native-slider';
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from 'prop-types';
import { COLOR } from '../constants/constants';

/* <View style={[styles.progressLine, { width: `${progress}%` }]} /> */

export default class MediaPlayerControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            sliderHeight: 0
        };
    }

    measureView = (event) => {
        const height = event.nativeEvent.layout.height;
        this.props.setMediaPlayerHeight(height)
        this.setState({
            height
        })
    }

    measureSlider = (event) => {
        this.setState({
            sliderHeight: event.nativeEvent.layout.height
        })
    }

    render() {
        const {
            streamUrl,
            streamChapter,
            paused,
            isLoadingSound,
            streamDuration,
            streamCurrentTime,
            progress,
            onClosePlayer,
            onTogglePaused
          } = this.props;
        const { height } = this.state;
        return (
            <View
                style={[styles.player, { bottom: streamUrl ? 0 : -height }]}
                onLayout={(event) => this.measureView(event)}>
                <View style={styles.progressWrapper}>
                    <Slider
                        maximumValue={100}
                        value={progress ? progress : 0}
                        thumbTintColor='#fff'
                        minimumTrackTintColor='#1fb28a'
                        maximumTrackTintColor='#d3d3d3'
                        style={styles.progressLine}
                        onLayout={(event) => this.measureSlider(event)}
                    />
                </View>
                <View style={styles.row}>
                    {isLoadingSound ? (
                        <View style={styles.playButton}>
                            <ActivityIndicator />
                        </View>
                    ) : (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.playButton}
                                onPress={() => onTogglePaused()}
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
                        onPress={() => onClosePlayer()}
                    >
                        <Icon name="ios-close" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    player: {
        flexDirection: 'column',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLOR.primary,
        paddingHorizontal: 20,
        paddingBottom: 15
    },
    playButton: {
        width: 42,
        height: 42,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLOR.white,
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
        color: COLOR.white,
        paddingHorizontal: 10
    },
    progressWrapper: {
        width: '100%'
    },
    progressLine: {
        backgroundColor: COLOR.clearBackground
    }
});

MediaPlayerControl.propTypes = {
    setMediaPlayerHeight: PropTypes.func.isRequired,
    streamUrl: PropTypes.string,
    streamChapter: PropTypes.string,
    paused: PropTypes.bool.isRequired,
    isLoadingSound: PropTypes.bool.isRequired,
    streamDuration: PropTypes.number.isRequired,
    streamCurrentTime: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    onClosePlayer: PropTypes.func.isRequired,
    onTogglePaused: PropTypes.func.isRequired
}
