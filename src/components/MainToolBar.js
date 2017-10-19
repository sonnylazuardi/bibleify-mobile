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
        const { activeBook, activeChapter } = this.props;
        
        return (
            <View style={styles.toolbar}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.titleButton}
                    onPress={() => this.props._openDrawer()}
                >
                    <Text style={styles.toolbarTitle}>
                        {activeBook.name_id} {activeChapter}
                    </Text>
                </TouchableOpacity>
                <View style={styles.actions}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.actionButton}
                        onPress={() => this.props._onShowSearch()}
                    >
                        <Icon
                            name="ios-search"
                            size={25}
                            color="#fff"
                            style={{ backgroundColor: "transparent" }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.actionButton}
                        onPress={() => this.props._onPlayStreaming()}
                    >
                        <Icon
                            name="ios-headset"
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
    },
    titleButton: {
        flex: 1,
        paddingHorizontal: 25
    },
    toolbarTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "300",
        backgroundColor: "transparent"
    },
});  
