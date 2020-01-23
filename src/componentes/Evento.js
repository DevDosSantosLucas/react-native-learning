import React,{Component}  from 'react'
import {View, Text,TextInput} from 'react-native'
import Padrao from '../estilo/Padrao'


export default class Evento extends Component{


    state = {
        texto1: '',
        texto2: null
    }

    alterarTexto1 = texto1 => {
        this.setState({texto1})
    }
    alterarTexto2 = texto2 => {
        this.setState({texto2})
    }

    render() {
        return (
            <View>    
                    {/*componente controlado */}               

                <Text style = {Padrao.fonte50}>{this.state.texto1}</Text>
                <TextInput value = { this.state.texto1}
                style={Padrao.input}
                onChangeText = {this.alterarTexto1} />
            
                    {/*componente não controlado */}

                <Text style = {Padrao.fonte50}>{this.state.texto2}</Text>
                <TextInput value = { this.state.texto2}
                style={Padrao.input} />
                
            </View>
            
        )
    }
}
