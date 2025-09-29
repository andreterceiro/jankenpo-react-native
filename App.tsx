import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function BotaoOpcao() 
{
    return (
        <View style={styles.botao} />
    );
}

export default function App() {
  return (
    <View style={styles.container}>
        <BotaoOpcao />        
        <BotaoOpcao />
        <Text>teste</Text>
        <BotaoOpcao />                
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  botao: {
    backgroundColor: '#EEE',
  }
});
