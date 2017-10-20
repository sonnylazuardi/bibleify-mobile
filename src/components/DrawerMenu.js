import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Platform,
    ScrollView,
    TextInput
} from "react-native";
import Books from "../constants/Books";
import Icon from "react-native-vector-icons/Ionicons";


export default class DrawerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _changeActiveBook = (book) => {
        this.props._changeActiveBook(book);
    }

    _changeActiveChapter = (chapter) => {
        this.props._changeActiveChapter(chapter);
    }

    _onJumpText = (jumpText) => {
        this.props._onJumpText(jumpText);
    }
    
    _renderBook(book, i) {
        const { activeBook, activeChapter } = this.props;
        const isBookActive = activeBook.value == book.value;
        const bookButtonView = (
            <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.book, isBookActive ? styles.bookActive : null]}
                key={`${book.value}-${i}`}
                onPress={() => this._changeActiveBook(book)}
            >
                <Text style={styles.bookText}>{book.name_id}</Text>
            </TouchableOpacity>
        );
        if (isBookActive) {
            let chapters = [];
            for (var i = 1; i <= book.total; i++) {
                chapters.push(i);
            }
            return (
                <View key={`${book.value}-${i}`}>
                    {bookButtonView}
                    <View style={styles.chapterSelector}>
                        <ScrollView
                            horizontal={true}
                            contentContainerStyle={styles.chapterScroll}
                        >
                            {chapters.map(chapter => {
                                const isChapterActive = chapter == activeChapter;
                                return (
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        key={`${book.value}-${chapter}`}
                                        style={styles.chapter}
                                        onPress={() => this._changeActiveChapter(chapter)}
                                    >
                                        {isChapterActive ? (
                                            <View style={styles.chapterActive}>
                                                <Text
                                                    style={[styles.chapterText, styles.chapterTextActive]}
                                                >
                                                    {chapter}
                                                </Text>
                                            </View>
                                        ) : (
                                                <Text style={styles.chapterText}>{chapter}</Text>
                                            )}
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>
                </View>
            );
        } else {
            return bookButtonView;
        }
    }

    render() {
        const { jumpText } = this.props;
        return (
            <View style={styles.drawerWrapper}>
                <View style={styles.drawerHeader}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.drawerVersion}>
                        <Text style={styles.versionText}>Terjemahan Baru</Text>
                        <Icon name="ios-book" size={25} color="#fff" />
                    </TouchableOpacity>
                    <TextInput
                        placeholder={"Jump here"}
                        placeholderTextColor={"rgba(255,255,255,0.3)"}
                        value={jumpText}
                        style={styles.input}
                        onSubmitEditing={() => this.props._onSubmitJump()}
                        onChangeText={jumpText => this._onJumpText(jumpText)}
                    />
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.clearJump}
                        onPress={() => this.props._onClearJump()}
                    >
                        <Icon name="ios-close" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <Text style={styles.separator}>OLD TESTAMENT</Text>
                    {Books.filter(
                        book =>
                            book.type == "old" &&
                            book.name_id.toLowerCase().indexOf(jumpText.toLowerCase()) != -1
                    ).map((book, i) => {
                        return this._renderBook(book, i);
                    })}
                    <Text style={styles.separator}>NEW TESTAMENT</Text>
                    {Books.filter(
                        book =>
                            book.type == "new" &&
                            book.name_id.toLowerCase().indexOf(jumpText.toLowerCase()) != -1
                    ).map((book, i) => {
                        return this._renderBook(book, i);
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   
    
    drawerWrapper: {
        backgroundColor: "#1f364d",
        flex: 1,
        paddingTop: 20
    },
    separator: {
        fontWeight: "900",
        color: "rgba(255,255,255,0.4)",
        fontSize: 10,
        marginVertical: 10,
        marginLeft: 20
    },
    book: {
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    bookText: {
        color: "#fff",
        fontWeight: "300"
    },
    bookActive: {
        backgroundColor: "#26405A"
    },
    chapterSelector: {
        height: 60,
        backgroundColor: "#26405A"
    },
    chapter: {
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    chapterText: {
        color: "#fff"
    },
    chapterActive: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    chapterTextActive: {
        color: "#0D233A"
    },
    chapterScroll: {
        paddingHorizontal: 20
    },
    verseNumber: {
        fontWeight: "900",
        paddingRight: 20,
        color: "#26405A",
        fontSize: 10
    },
    drawerHeader: {
        height: 100
    },
    drawerVersion: {
        flexDirection: "row",
        height: 25,
        alignItems: "center",
        paddingHorizontal: 20,
        flex: 1
    },
    versionText: {
        color: "#fff",
        flex: 1
    },
    input: {
        flex: 1,
        height: 20,
        backgroundColor: "#26405A",
        margin: 5,
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 7,
        paddingHorizontal: 10,
        color: "#fff",
        fontSize: 13
    },
    clearJump: {
        position: "absolute",
        right: 10,
        top: 55,
        height: 30,
        width: 30,
        backgroundColor: "transparent"
    }
});
