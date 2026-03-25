import { View, Text, StyleSheet, Image } from 'react-native';

export default function SobreMim() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/foto2.png')} 
        style={styles.foto}
      />

      <Text style={styles.nome}>Raphael Rodrigues Silva</Text>

      <Text style={styles.texto}>
        Estudante de Análise e Desenvolvimento de Sistemas.
      </Text>

      <Text style={styles.texto}>
        Focado em desenvolvimento mobile e web.
      </Text>

      <Text style={styles.texto}>
        Em busca da primeira oportunidade como desenvolvedor.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  foto: {
    width: 170,
    height: 170,
    borderRadius: 85,
    marginBottom: 18,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 24,
  },
});