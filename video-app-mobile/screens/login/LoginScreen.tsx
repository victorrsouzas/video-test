import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://10.0.0.8:3000/api/login", {
        email,
        password,
      });

      const token = response.data.token;
      console.log(token);

      navigation.navigate("Home" as never);
    } catch (err) {
      setError("Login falhou, tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={handleLogin} />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 16,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
});
