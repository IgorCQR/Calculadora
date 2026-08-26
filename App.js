import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}>Calculadora (não é a do Fukuta)</Text>

      <Text style={styles.painel}>0</Text>

      <View style={styles.colunas}>
        <TouchableOpacity style={styles.botao}>
          <Text>MRC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text>M-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text>M+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text>RAIZ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text>OFF</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.colunas}>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>%</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.colunas}>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.colunas}>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.colunas}>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.colunas}>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botaoNumeros, {backgroundColor: '#32c5ff8a'}]}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNumeros}>
          <Text style={[styles.textNumeros, {textAlign:'center'}]}>+</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f2f2',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
    padding:0
  },
  titulo: {
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    height: 35,
    width: '100%'
  },
  painel:{
    width: '100%',
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: 'lightgray',
    borderColor: 'black',
    border: 2,
    padding: 10,
    marginBottom: 20
  },
  colunas:{
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: 10
  },
  botao:{
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'gray',
    height: 50,
    padding: 10,
    marginTop: 20, 
    width: '17%'
  },
  botaoNumeros:{
    backgroundColor: 'white',
    color:'black',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'gray',
    height: 60,
    padding: 10,
    marginTop: 20,
    width: '22%'
  }, 
  textNumeros:{
    fontSize: 24,
    fontWeight: 'bold'
  }
});
