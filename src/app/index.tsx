import { StyleSheet, View, Text, Button } from 'react-native';
import { Link, router } from 'expo-router';


export default function App() {
  function handleNavigation() {
    router.replace("/dashboard") //tira historico de rota
  }
  return (
    <View style={styles.container}>
      <Text>Página Home</Text>
      <Link href={"/typePlace"}>Ir para TypePlace</Link>
      <Link href={"/local/hamburgueria"}>Ir para Local</Link>
      <Link href={"/dashboard"}>Ir para Dashboard</Link>

      <Button title='Navegar para o painel' onPress={handleNavigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
