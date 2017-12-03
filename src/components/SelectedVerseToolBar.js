import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from 'prop-types';
import { COLOR } from '../constants/constants';


export default class SelectedVerseToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { _onBackToolbar, _onCopyVerse, _onShareVerse } = this.props
        return (
            <View style={styles.toolbar}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.backButton}
                    onPress={() => _onBackToolbar()}
                >
                    <Icon
                        name="ios-arrow-back"
                        size={25}
                        color="#fff"
                    />
                </TouchableOpacity>
                <View style={styles.actions}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.actionButton}
                        onPress={() => _onCopyVerse()}
                    >
                        <Icon
                            name="ios-copy"
                            size={25}
                            color="#fff"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.actionButton}
                        onPress={() => _onShareVerse()}
                    >
                        <Icon
                            name="ios-share-alt"
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
    backButton: {
        marginLeft: 10,
        paddingHorizontal: 20,
        flex: 1
    },
    actions: {
        flexDirection: "row",
        marginRight: 10
    },
    actionButton: {
        paddingHorizontal: 20
    }
});

SelectedVerseToolBar.propTypes = {
    _onBackToolbar: PropTypes.func.isRequired,
    _onCopyVerse: PropTypes.func.isRequired,
    _onShareVerse: PropTypes.func.isRequired
}
