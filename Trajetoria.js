import { View, Text, StyleSheet, Image } from 'react-native';

export default function Trajetoria() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/foto_jornada.png')} 
        style={styles.foto}
      />

      <Text style={styles.titulo}>Minha Jornada</Text>

      <Text style={styles.texto}>
        Iniciei meus estudos em programação em 2025, através da faculdade de Análise e Desenvolvimento de Sistemas.
      </Text>

      <Text style={styles.texto}>
        Tenho conhecimentos em lógica de programação, HTML, CSS, JavaScript, C, Python e banco de dados PostgreSQL.
      </Text>

      <Text style={styles.texto}>
        Atualmente estou focado em desenvolvimento mobile com React Native e buscando evoluir como desenvolvedor.
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
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  texto: {
    fontSize: 15,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 22,
  },
});