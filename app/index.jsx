import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#abb9b2',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  }
});

// Dados da lista

const viagens = [
  { 
    id: '1', 
    destino: 'Rio de Janeiro', 
    data: '2023-09-01', 
    duracao: '7 dias', 
    imagem: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/03/1-cristo-redentor.jpg' 
  },
  { 
    id: '2', 
    destino: 'São Paulo', 
    data: '2023-08-15', 
    duracao: '3 dias', 
    imagem: 'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/skyline-sao-paulo-brazil.jpg?w=1600&h=1067' 
  },
  { 
    id: '3', 
    destino: 'Belo Horizonte', 
    data: '2023-07-22', 
    duracao: '5 dias', 
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Praca_do_Papa%2C_Belo_Horizonte.jpg/640px-Praca_do_Papa%2C_Belo_Horizonte.jpg' 
  },
  { 
    id: '4', 
    destino: 'Florianópolis', 
    data: '2023-06-30', 
    duracao: '4 dias', 
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhlqZMQwf3asPYlJOjXao5TQpl2zpC12Vkw&s' 
  },
];


//Aqui seria como um "HTML" do app, a estrutura dele
const HistoricoViagens = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Viagens</Text>
      <FlatList
        data={viagens}
        keyExtractor={item => item.id}
        renderItem={Caixa}
      />
    </View>
  );
};

//Cada caixa da lista

const Caixa = ({ item }) => (
  <View style={styles.item}>
    <Image source={{ uri: item.imagem }} style={styles.imagem} />
    <Text style={styles.destino}>Destino: {item.destino}</Text>
    <Text style={styles.data}>Data: {item.data}</Text>
    <Text style={styles.duracao}>Duração: {item.duracao}</Text>
  </View>
);




export default HistoricoViagens;
