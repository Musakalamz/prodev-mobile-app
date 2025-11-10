import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { Link } from "expo-router";
import { styles as joinStyles } from "../styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "../constants";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={joinStyles.container}>
      <View style={joinStyles.iconsection}>
        <Image source={GOOGLELOGO} />
        <Image source={FACEBOOKLOGO} />
      </View>

      <View style={joinStyles.titleTextGroup}>
        <Text style={joinStyles.titleText}>Sign in</Text>
        <Text style={joinStyles.subText}>
          Access your account and continue learning.
        </Text>
      </View>

      <View style={joinStyles.formGroup}>
        <View>
          <Text style={joinStyles.formLabel}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={joinStyles.formControl}
            placeholder="you@example.com"
          />
        </View>

        <View>
          <Text style={joinStyles.formLabel}>Password</Text>
          <View style={joinStyles.formPasswordControl}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={joinStyles.passwordControl}
              placeholder="••••••••"
            />
          </View>
        </View>

        <Text style={joinStyles.forgotPasswordText}>Forgot password?</Text>

        <Pressable style={joinStyles.primaryButton}>
          <Text style={joinStyles.buttonText}>Sign In</Text>
        </Pressable>
      </View>

      <View style={joinStyles.dividerGroup}>
        <View style={joinStyles.divider} />
        <Text style={joinStyles.dividerText}>OR</Text>
        <View style={joinStyles.divider} />
      </View>

      <View style={joinStyles.secondaryButtonGroup}>
        <Pressable style={joinStyles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={joinStyles.secondaryButtonText}>
            Continue with Google
          </Text>
        </Pressable>

        <Pressable style={joinStyles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={joinStyles.secondaryButtonText}>
            Continue with Facebook
          </Text>
        </Pressable>
      </View>

      <View style={joinStyles.signupgroup}>
        <Text style={joinStyles.signupTitleText}>Don’t have an account? </Text>
        <Link href="/join" asChild>
          <Pressable>
            <Text style={joinStyles.signupSubTitleText}>Join Now</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}
