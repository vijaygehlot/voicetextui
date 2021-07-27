import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";
import { StyleSheet } from "react-native";
import { heightToDp } from "../constants/Utils";

heightToDp;

const commonStyle = StyleSheet.create({
  container: {
    flex: Sizes.weight_1,

    marginTop: heightToDp(Sizes.per_20),
  },
  text20Size: {
    color: Colors.white,
    fontSize: Sizes.px_20,
  },

  text25Size: {
    color: Colors.white,
    fontSize: Sizes.px_25,
  },
  flex2Container: {
    flex: Sizes.weight_2,
    justifyContent: "center",
    alignItems: "center",
  },
  flex4Container: {
    flex: Sizes.weight_4,
    justifyContent: "center",
    alignItems: "center",
  },

  gridColumn: {
    width: Sizes.per_100,
    height: Sizes.per_100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  colum30: {
    width: Sizes.per_100,
    height: Sizes.per_30,
    margin: Sizes.per_2,
  },
  colum50: {
    width: Sizes.per_100,
    height: Sizes.per_50,
    margin: Sizes.per_2,
  },
  colum20: {
    width: Sizes.per_100,
    height: Sizes.per_20,
  },
  radioText: {
    fontSize: Sizes.px_20,
    color: Colors.white,
  },
  margin5: {
    margin: Sizes.per_5,
  },
  margin2: {
    margin: Sizes.per_2,
  },
  sectionBorder: {
    borderWidth: 2,
    borderColor: Colors.white,
    margin: Sizes.per_4,
  },
  btn: {
    flexDirection: "row",
  },
  screenthreeContainer: {
    flex: Sizes.weight_1,
    marginTop: Sizes.per_2,
  },
  screen3Data: {
    fontSize: Sizes.px_20,
    margin: Sizes.per_5,
  },
  screenfourContainer: {
    flex: Sizes.weight_1,
    marginTop: Sizes.per_2,
    borderColor: Colors.dark,
    borderWidth: Sizes.px_5,
  },
  textscreenFour: {
    fontSize: Sizes.px_20,
    color: Colors.dark,
    borderColor: Colors.dark,
    borderWidth: Sizes.px_2,
    padding: Sizes.per_20,
  },
  screenfiveContainer: {
    flex: Sizes.weight_1,
    marginTop: Sizes.per_2,
    borderColor: Colors.dark,
    borderWidth: Sizes.px_5,
  },
  screen5Border: {
    flex: Sizes.weight_2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.dark,
    borderWidth: Sizes.px_2,
    padding: Sizes.per_2,
  },
  screen5Text: {
    fontSize: Sizes.px_20,
    color: Colors.dark,
  },
  draweSection: {
    justifyContent: "center",
    alignItems: "flex-end",
    margin: Sizes.per_2,
  },

  screen6Container: {
    flex: Sizes.weight_1,
    marginTop: heightToDp(Sizes.per_10),
  },
  commonContainer: {
    flex: Sizes.weight_1,
  },
  screen6Data: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.dark,
    borderWidth: 2,
    padding: "2%",
  },
  input: {
    height: "20%",
    width: "80%",
    borderWidth: 1,
    marginBottom: "10%",
    backgroundColor: Colors.white,
  },
});

export default commonStyle;
