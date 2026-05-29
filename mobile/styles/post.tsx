import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
  },
  left: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  user: {
    borderRadius: 30,
    height: 30,
    width: 30,
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "100%",
    height: 40,
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "100%",
    height: 40,
  },
});
