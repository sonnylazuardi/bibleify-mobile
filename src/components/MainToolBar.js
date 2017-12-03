import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from 'prop-types';
import { COLOR } from '../constants/constants';


export default class MainToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { activeBook, activeChapter, _openDrawer, _onShowSearch, _onPlayStreaming } = this.props;

        return (
            <View style={styles.toolbar}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.titleButton}
                    onPress={() => _openDrawer()}
                >
                    <Text style={styles.toolbarTitle}>
                        {activeBook.name_id} {activeChapter}
                    </Text>
                </TouchableOpacity>
                <View style={styles.actions}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.actionButton}
                        onPress={() => _onShowSearch()}
                    >
                        <Icon
                            name="ios-search"
                            size={25}
                            color="#fff"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.actionButton}
                        onPress={() => _onPlayStreaming()}
                    >
                        <Icon
                            name="ios-headset"
                            size={25}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        paddingTop: Platform.OS == "ios" ? 20 : 0,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLOR.primary,
        height: Platform.OS == "ios" ? 80 : 60
    },
    actions: {
        flexDirection: "row",
        marginRight: 10
    },
    actionButton: {
        paddingHorizontal: 20
    },
    titleButton: {
        flex: 1,
        paddingHorizontal: 25
    },
    toolbarTitle: {
        color: COLOR.white,
        fontSize: 20,
        fontWeight: "300",
        backgroundColor: COLOR.clearBackground
    }
});

MainToolBar.propTypes = {
    activeBook: PropTypes.object.isRequired,
    activeChapter: PropTypes.number.isRequired,
    _openDrawer: PropTypes.func.isRequired,
    _onPlayStreaming: PropTypes.func.isRequired,
    _onShowSearch: PropTypes.func.isRequired
}
