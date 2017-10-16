import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    toolbar: {
      paddingTop: Platform.OS == "ios" ? 20 : 0,
      flexDirection: "row",
      height: Platform.OS == "ios" ? 80 : 60,
      alignItems: "center",
      backgroundColor: "#fff"
    },
    titleButton: {
      flex: 1,
      paddingHorizontal: 25
    },
    toolbarTitle: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "300"
    },
    innerScroll: {
      paddingVertical: 30
    },
    actions: {},
    actionButton: {
      paddingHorizontal: 20
    },
    container: {
      flex: 1,
      backgroundColor: "#0D233A"
    },
    drawerWrapper: {
      backgroundColor: "#1f364d",
      flex: 1,
      paddingTop: 25
    },
    text: {
      color: "#fff",
      lineHeight: 30,
      paddingHorizontal: 25
    },
    title: {
      fontWeight: "900"
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
      color: "rgba(255,255,255,0.4)",
      fontSize: 10
    },
    input: {
      flex: 1,
      height: 40
    },
    result: {
      fontWeight: "900"
    }
  });

export default styles;
