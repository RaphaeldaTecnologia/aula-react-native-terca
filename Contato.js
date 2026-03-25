import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Contato() {
  function abrirLink(url) {
    Linking.openURL(url);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato</Text>

      <TouchableOpacity
        style={styles.botaoContato}
        onPress={() => abrirLink('mailto:raphael_rodri@hotmail.com')}
      >
        <Ionicons name="mail-outline" size={22} color="#ffffff" />
        <Text style={styles.textoBotao}>Email</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoContato}
        onPress={() =>
          abrirLink('https://www.linkedin.com/in/raphael-rodrigues-silva-aa0335355/')
        }
      >
        <Ionicons name="logo-linkedin" size={22} color="#0A66C2" />
        <Text style={styles.textoBotao}>LinkedIn</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoContato}
        onPress={() => abrirLink('https://github.com/RaphaeldaTecnologia')}
      >
        <Ionicons name="logo-github" size={22} color="#ffffff" />
        <Text style={styles.textoBotao}>GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoContato}
        onPress={() => abrirLink('https://wa.me/5562984011177')}
      >
        <Ionicons name="logo-whatsapp" size={22} color="#25D366" />
        <Text style={styles.textoBotao}>WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 18,
    textAlign: 'center',
  },
  botaoContato: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    paddingVertical: 12,
    marginBottom: 12,
    gap: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});