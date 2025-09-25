import { useState } from "react";
import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
      <Text>Finanças</Text>
  
      <Link href="/sqlite" asChild>
        <Button title="Ir para a 3ª tela" />
      </Link>

    </View>
  );
}