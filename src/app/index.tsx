import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const accentColour = "#85CC17";
export default function Index() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={"dark-content"} />
      <Image
        source={require("@/assets/images/MainLogo.png")}
        style={{
          height: 60,
          width: 60,
          marginBottom: 40,
        }}
      />

      <View>
        <Text style={styles.h1}>Sign In</Text>
        <Text>Let's Enjoy the jou of telecare AI</Text>
      </View>

      <View style={styles.formContent}>
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require("@/assets/images/MailIcon.png")}
            style={{
              height: 20,
              width: 20,
              alignSelf: "center",
              marginRight: 10,
            }}
          />
          <TextInput placeholder="Email address" />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require("@/assets/images/Lock.png")}
            style={{
              height: 20,
              width: 20,
              alignSelf: "center",
              marginRight: 10,
            }}
          />
          <TextInput placeholder="Email address" />
        </View>

        <Pressable style={styles.submitButton}>
          <Text style={styles.buttonText}>Sign In</Text>
          <Image
            source={require("@/assets/images/Arrow.png")}
            style={{
              height: 40,
              width: 40,
              alignSelf: "center",
            }}
          />
        </Pressable>
      </View>

      <Image
        source={require("@/assets/images/social_icons.jpg")}
        style={{
          marginBottom: 40,
        }}
      />

      <Text
        style={{
          fontWeight: "semibold",
          marginBottom: 20,
        }}
      >
        Don't have an account?{"   "}
        <Text
          style={{
            color: accentColour,
          }}
        >
          Sign Up
        </Text>
      </Text>
      <Text
        style={{
          color: accentColour,
          textDecorationLine: "underline",
        }}
      >
        Forgot your password?
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f6f7f7",
    alignItems: "center",
    padding: 30,
  },
  container: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "container",
    elevation: 4,
    padding: 10,
  },
  logo: {
    flex: 1,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignContent: "center",
  },
  h1: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 2,
  },
  formContent: {
    width: "100%",
    justifyContent: "flex-start",
    marginTop: 100,
  },
  inputContainer: {
    width: "100%",
    alignSelf: "flex-start",
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    elevation: 6,
    marginTop: 6,
    marginBottom: 24,
    padding: 15,
  },
  submitButton: {
    flexDirection: "row",
    backgroundColor: accentColour,
    padding: 15,
    borderRadius: 18,
    justifyContent: "center",
    alignContent: "center",
    color: "#ffffff",
    marginBottom: 60,
  },
  buttonText: {
    alignContent: "center",
    padding: 10,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
