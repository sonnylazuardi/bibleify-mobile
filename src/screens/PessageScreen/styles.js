import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    toolbar: {
      paddingTop: Platform.OS == "ios" ? 20 : 0,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#1f364d",
      height: Platform.OS == "ios" ? 80 : 60
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
    innerScroll: {
      paddingVertical: 15
    },
    actions: {
      flexDirection: "row",
      marginRight: 10
    },
    actionButton: {
      paddingHorizontal: 20
    },
    icon: {},
    container: {
      flex: 1,
      backgroundColor: "#0D233A"
    },
    drawerWrapper: {
      backgroundColor: "#1f364d",
      flex: 1,
      paddingTop: 20
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
    },
    selectedVerse: {
      backgroundColor: "#fff"
    },
    textSelected: {
      color: "#1f364d"
    },
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
export default styles;
