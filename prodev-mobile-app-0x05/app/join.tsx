import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import { styles as joinStyles } from "../styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "../constants";

export default function Join() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={joinStyles.container}>
      <View style={joinStyles.iconsection}>
        <Image source={GOOGLELOGO} />
        <Image source={FACEBOOKLOGO} />
      </View>

      <View style={joinStyles.titleTextGroup}>
        <Text style={joinStyles.titleText}>Join now</Text>
        <Text style={joinStyles.subText}>Create your account to get started.</Text>
      </View>

      <View style={joinStyles.formGroup}>
        <View>
          <Text style={joinStyles.formLabel}>Full Name</Text>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            style={joinStyles.formControl}
            placeholder="Jane Doe"
          />
        </View>

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

        <Pressable style={joinStyles.primaryButton}>
          <Text style={joinStyles.buttonText}>Create Account</Text>
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
          <Text style={joinStyles.secondaryButtonText}>Continue with Google</Text>
        </Pressable>

        <Pressable style={joinStyles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={joinStyles.secondaryButtonText}>Continue with Facebook</Text>
        </Pressable>
      </View>

      <View style={joinStyles.signupgroup}>
        <Text style={joinStyles.signupTitleText}>Already have an account? </Text>
        <Link href="/signin" asChild>
          <Pressable>
            <Text style={joinStyles.signupSubTitleText}>Sign in</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}