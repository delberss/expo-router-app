import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function Local() {
  const { name } = useLocalSearchParams();

  return (
   <View style={styles.container}>
    <Text>Página {name}</Text>
    <Link href={"/"}>HOME</Link>
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
