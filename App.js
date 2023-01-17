import React, { Component } from 'react';
import {View,Text,StyleSheet,TextInput,Button,Image,TouchableOpacity} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      textoFrase:'',
      img:require('./src/biscoito.png'),
    };

    this.quebrarBisc = this.quebrarBisc.bind(this);
    this.frases=[
      'Temer o futuro é normal, o errado é não querer enfrentar o presente',
      'As ambições são frutos de nossos desejos, nós cabe apenas querer saciar',
      'Seus medos nunca são sem razão, mas a razão pode enfrentar seus medos',
      'A vida pode não ser do jeito que queremos, mas pode ser do jeito que a tornamos',
      'Oportunidades podem vir e não ser do jeito que queremos, mas podemos usar elas para um novo caminho',
      'Nem sempre soubemos o quão forte nos somos ou o quao inteligente. Por isso, ande com quem enxerga isso em voce',
    ];

  }
  quebrarBisc(){
    let numAleat = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: this.frases[numAleat],
      img:require('./src/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.img}
        source={this.state.img}
        />

        <Text style={styles.txt}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.btn} onPress={this.quebrarBisc}>
          <View style={styles.btnArea}>
          <Text style={styles.btnTxt}>Quebrar biscoit</Text>
          </View>
          
        </TouchableOpacity>
      </View>
    )

  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
  width:250,
  height:250,
  },
  txt:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStye:'italic',
    textAlign:'center',
  },
  btn:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor:'#dd7b22',
    borderRadius:25,
  },
  btnArea:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  btnTxt:{
    fontSize:18,
    color:'#dd7b22',
    fontWeight:'bold',
  }
})
  
       
export default App;
