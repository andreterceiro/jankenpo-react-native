import { StyleSheet, View, Button, Alert} from 'react-native';

function BotaoOpcao({ title }: { title: string })
{
    const handlePress = () => {
        Alert.alert("Você escolheu:", title);
    };

    return (
          <View style={styles.botao}>
              <Button title={title} onPress={handlePress} />
          </View>
    );
}

export default function App() {
  return (
    <View style={styles.container}>
        <BotaoOpcao title="Paper" />
        <BotaoOpcao title="Rock" />
        <BotaoOpcao title="Scissors" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  botao: {
    marginLeft: 3,
    backgroundColor: '#DDD',
    width: 100,
  }
});
