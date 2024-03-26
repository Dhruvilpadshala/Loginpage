import { Layout, Button } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";

export const Page = ({ navigation }) => (
  <Layout
    style={{
      marginTop: 0,
      height: 1000,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          Textalign: "center",
        }}
      >
        <Button
          style={{ fontSize: 30, width: 300 }}
          onPress={() => navigation.navigate("Signuppage")}
        >
          Sign up
        </Button>
      </View>
    </View>
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          Textalign: "center",
          marginTop: 20,
        }}
      >
        <Button
          style={{ fontSize: 30, width: 300 }}
          onPress={() => navigation.navigate("Loginpage")}
        >
          Log in
        </Button>
      </View>
    </View>
  </Layout>
  
);
