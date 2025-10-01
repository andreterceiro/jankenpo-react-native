import React, { useState } from "react";
import { StyleSheet, View, Button, Text, Modal } from "react-native";

function BotaoOpcao({ title }: { title: string }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [opcaoComputador, setOpcaoComputador] = useState("");
  const [vencedor, setVencedor] = useState("");

  const handlePress = () => {
    const escolhaComp = definirOpcaoComputador();
    setOpcaoComputador(escolhaComp);
    setVencedor(definirVencedor(title, escolhaComp));
    setModalVisible(true);
  };

  return (
    <View style={styles.botao}>
      <Button title={title} onPress={handlePress} />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.titulo}>Opção do usuário:</Text>
            <Text>{title}</Text>

            <Text style={styles.titulo}>Opção do computador:</Text>
            <Text>{opcaoComputador}</Text>

            <Text style={styles.titulo}>Vencedor:</Text>
            <Text style={styles.vencedor}>{vencedor}</Text>

            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

function definirVencedor(opcaoUsuario: string, opcaoComputador: string): string {
  if (
    (opcaoUsuario == "Paper" && opcaoComputador == "Rock") ||
    (opcaoUsuario == "Rock" && opcaoComputador == "Scissors") ||
    (opcaoUsuario == "Scissors" && opcaoComputador == "Paper")
  ) {
    return "Usuário";
  } else if (opcaoUsuario == opcaoComputador) {
    return "Empate";
  }
  return "Computador";
}

function definirOpcaoComputador(): string {
  const opcoes = ["Paper", "Rock", "Scissors"];
  const index = Math.floor(Math.random() * 3);
  return opcoes[index];
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
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  botao: {
    marginLeft: 3,
    backgroundColor: "#DDD",
    width: 100,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
    elevation: 5,
  },
  titulo: {
    fontWeight: "bold",
    marginTop: 10,
  },
  vencedor: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
  },
});
