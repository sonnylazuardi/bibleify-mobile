import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


export default class SelectedVerseToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.toolbar}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={[styles.actionButton, { marginLeft: 10, flex: 1 }]}
                    onPress={() => this.props._onBackToolbar()}
                >
                    <Icon
                        name="ios-arrow-back"
                        size={25}
                        color="#fff"
                        style={{ backgroundColor: "transparent" }}
                    />
                </TouchableOpacity>
                <View style={styles.actions}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.actionButton}
                        onPress={() => this.props._onCopyVerse()}
                    >
                        <Icon
                            name="ios-copy"
                            size={25}
                            color="#fff"
                            style={{ backgroundColor: "transparent" }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.actionButton}
                        onPress={() => this.props._onShareVerse()}
                    >
                        <Icon
                            name="ios-share-alt"
                            size={25}
                            color="#fff"
                            style={{ backgroundColor: "transparent" }}
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
        backgroundColor: "#1f364d",
        height: Platform.OS == "ios" ? 80 : 60
    },
    actions: {
        flexDirection: "row",
        marginRight: 10
    },
    actionButton: {
        paddingHorizontal: 20
    }
});  
