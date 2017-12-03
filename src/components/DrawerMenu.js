import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView,
    TextInput,
    Slider
} from "react-native";
import PropTypes from 'prop-types';
import Books from "../constants/Books";
import { COLOR, SUBMENU } from '../constants/constants';
import Icon from "react-native-vector-icons/Ionicons";
import Accordion from 'react-native-collapsible/Accordion';


export default class DrawerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerFlex: 1
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

    _renderSectionHeader(section) {
        return (
            <View style={styles.horizontalContaier}>
                <Icon name={section.icon} size={25} color={COLOR.mainTextColor} />
                <Text style={styles.subMenuTextTitle}>{section.title.toUpperCase()}</Text>
            </View>
        );
    }

    _toggleSetting(index) {
        this.setState({
            headerFlex: index === false ? 1 : 0
        })
    }

    _renderSettingSection = () => {
        const { fontValue } = this.props || 0;
        const { onFontSizeChanged } = this.props || {};
        return (
            <View>
                <ScrollView style={styles.verticalContainer}>
                    <View style={styles.horizontalContaier}>
                        <Icon name="ios-brush" size={25} color={COLOR.mainTextColor} />
                        <Text style={styles.subMenuTextTitle}>FONT SIZE</Text>
                    </View>
                    <Slider
                        maximumValue={10}
                        value={fontValue}
                        thumbTintColor='#fff'
                        minimumTrackTintColor='#1fb28a'
                        maximumTrackTintColor='#d3d3d3'
                        onValueChange={(value) => { onFontSizeChanged(value) }}
                    />
                </ScrollView>
            </View>
        )
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
            for (let i = 1; i <= book.total; i++) {
                chapters.push(i);
            }
            return (
                <View key={`${book.value}-${i}`}>
                    {bookButtonView}
                    <View style={styles.chapterSelector}>
                        <ScrollView
                            horizontal={true}
                            contentContainerStyle={styles.chapterScroll}>
                            {chapters.map(chapter => {
                                const isChapterActive = chapter == activeChapter;
                                return (
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        key={`${book.value}-${chapter}`}
                                        style={styles.chapter}
                                        onPress={() => this._changeActiveChapter(chapter)}>
                                        {isChapterActive ? (
                                            <View style={styles.chapterActive}>
                                                <Text style={[styles.chapterText, styles.chapterTextActive]}>
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
        const { headerFlex } = this.state;
        return (
            <View style={styles.drawerWrapper}>
                <View style={styles.drawerHeader}>
                    <View style={{ flex: headerFlex }}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.drawerVersion}>
                            <Text style={styles.versionText}>Terjemahan Baru</Text>
                            <Icon name="ios-book" size={25} color={COLOR.mainTextColor} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.horizontalContaier, { flex: headerFlex }]}>
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
                            <Icon name="ios-close" size={30} color={COLOR.mainTextColor} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.padding}>
                        <Accordion
                            onChange={(index) => this._toggleSetting(index)}
                            sections={SUBMENU}
                            renderHeader={this._renderSectionHeader}
                            renderContent={this._renderSettingSection}
                        />
                    </View>
                </View>

                <View style={styles.darkOverlay}>
                    <ScrollView >
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    drawerWrapper: {
        flexDirection: 'column',
        backgroundColor: COLOR.primary,
        flex: 1,
        paddingTop: 20
    },
    horizontalContaier: {
        flexDirection: 'row'
    },
    verticalContainer: {
        flexDirection: 'column',
        marginLeft: 24
    },
    separator: {
        fontWeight: "900",
        color: COLOR.mainSeparator,
        fontSize: 10,
        marginVertical: 10,
        marginLeft: 20
    },
    darkOverlay: {
        flex: 1,
        backgroundColor: COLOR.darkOverlay
    },
    book: {
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    bookText: {
        color: COLOR.mainTextColor,
        fontWeight: "300"
    },
    bookActive: {
        backgroundColor: COLOR.primaryDark
    },
    chapterSelector: {
        height: 60,
        backgroundColor: COLOR.primaryDark
    },
    chapter: {
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    chapterText: {
        color: COLOR.mainTextColor
    },
    chapterActive: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLOR.activeBackgroundColor,
        justifyContent: "center",
        alignItems: "center"
    },
    chapterTextActive: {
        color: COLOR.primaryExtraDark
    },
    chapterScroll: {
        paddingHorizontal: 20
    },
    drawerHeader: {
        height: 200
    },
    subMenuTextTitle: {
        color: COLOR.mainTextColor,
        marginLeft: 12,
        alignSelf: 'center'
    },
    drawerVersion: {
        flexDirection: "row",
        height: 25,
        alignItems: "center",
        paddingHorizontal: 20,
        flex: 1
    },
    versionText: {
        color: COLOR.mainTextColor,
        flex: 1
    },
    input: {
        flex: 1,
        backgroundColor: COLOR.primaryDark,
        margin: 5,
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 7,
        paddingHorizontal: 10,
        color: COLOR.mainTextColor,
        fontSize: 13
    },
    clearJump: {
        height: 30,
        width: 30,
        backgroundColor: COLOR.clearBackground
    },
    padding: { padding: 16 }
});

DrawerMenu.propTypes = {
    _changeActiveBook: PropTypes.func.isRequired,
    _changeActiveChapter: PropTypes.func.isRequired,
    _onClearJump: PropTypes.func.isRequired,
    _onJumpText: PropTypes.func.isRequired,
    _onSubmitJump: PropTypes.func.isRequired,
    activeBook: PropTypes.object.isRequired,
    activeChapter: PropTypes.number.isRequired,
    jumpText: PropTypes.string.isRequired
}
