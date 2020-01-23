import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao.js'

//export default function(props){
  //  return <Text>{props.texto}</Text>
//}
export default props=> 
    <Text style = {Padrao.ex}> Arrow1: {props.texto}</Text>