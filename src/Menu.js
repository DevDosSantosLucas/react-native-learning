import React from 'react'
import  { createDrawerNavigator} from  'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import  Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento' 
import Avo from './componentes/ComunicacaoDireta'
import TextoSincrozado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'



export default createDrawerNavigator({

    ListaFlex: {
        Screen: ListaFlex,
        navigationOption: { title: 'Lista (Flex box)'}
    },
    TextoSincrozado:{
        screen: TextoSincrozado,
        navigationOption: { title: 'Texto Sincrozado'}
    },
    Avo:{
        screen: () => <Avo nome = 'João' sobrenome ='Silva' />
    },
    Evento : {
        screen:  Evento
    },
    ValidarProps: {
        //screen: () => <ValidarProps ano = {20}/> 
        screen: () => <ValidarProps label="Teste: " ano = {20}/>
    },
    Plataformas: {
        screen : Plataformas
    },
    Contador: { 
        screen: () => <Contador />
    },
    MegaSena:{
        screen:  () => <MegaSena numeros = {8}/>,
        navigationOption:{ title:  'Mega Sena'}
    },
    Inverter:{
        screen:  () => <Inverter texto = 'React Nativo !' />    
    },
    ParImpar: {
        screen:  () => <ParImpar numero  = {30}/>,
        navigationOption: { title: 'Par & Impar'}
    },
    Simples:{
        screen:  () => <Simples texto = 'Flexivel '/>
    }

},{ drawerWidth:200 })