import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { styles as mainStyles } from "../styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "../constants";

export default function Index() {
  return (
    <SafeAreaView style={mainStyles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        resizeMode="cover"
        style={mainStyles.backgroundImageContainer}
      >
        <View style={mainStyles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        <View style={mainStyles.titleContainer}>
          <Text style={mainStyles.titleText}>Together We Create</Text>
          <View style={mainStyles.titleSubTextContainer}>
            <Text style={mainStyles.titleSubText}>
              Welcome to ProDev — collaborate and grow your skills.
            </Text>
          </View>
        </View>

        <View style={mainStyles.buttonGroup}>
          <Link href="/join" asChild>
            <Pressable style={mainStyles.buttonPrimary}>
              <Text style={mainStyles.buttonPrimaryText}>Join Now</Text>
            </Pressable>
          </Link>

          <Link href="/signin" asChild>
            <Pressable style={mainStyles.buttonSecondary}>
              <Text style={mainStyles.buttonSecondaryText}>Sign In</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
