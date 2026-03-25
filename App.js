import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import SobreMim from './SobreMim';
import Trajetoria from './Trajetoria';
import Contato from './Contato';

export default function App() {
  const [aba, setAba] = useState('sobre');

  function renderConteudo() {
    if (aba === 'sobre') {
      return <SobreMim />;
    }

    if (aba === 'trajetoria') {
      return <Trajetoria />;
    }

    if (aba === 'contato') {
      return <Contato />;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={[styles.botao, aba === 'sobre' && styles.botaoAtivo]}
          onPress={() => setAba('sobre')}
        >
          <Text style={[styles.botaoTexto, aba === 'sobre' && styles.botaoTextoAtivo]}>
            Sobre
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, aba === 'trajetoria' && styles.botaoAtivo]}
          onPress={() => setAba('trajetoria')}
        >
          <Text style={[styles.botaoTexto, aba === 'trajetoria' && styles.botaoTextoAtivo]}>
            Jornada
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, aba === 'contato' && styles.botaoAtivo]}
          onPress={() => setAba('contato')}
        >
          <Text style={[styles.botaoTexto, aba === 'contato' && styles.botaoTextoAtivo]}>
            Contato
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        {renderConteudo()}
      </View>

      <Text style={styles.footer}>
        Desenvolvido por RaphaeldaTecnologia
      </Text>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  menu: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  botao: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  botaoAtivo: {
    backgroundColor: '#fff',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 14,
  },
  botaoTextoAtivo: {
    color: '#000',
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: '#111',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
  },
  footer: {
    marginTop: 20,
    color: '#aaa',
    fontSize: 12,
  },
});