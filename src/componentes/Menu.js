import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './simples';
import ParImpar from './ParImpar';
import { Inverter, MegaSena } from './Multi';
import Contador from './Contador';
 
export default createDrawerNavigator({
    Contador: {
        screen: () => <Contador />
    },
    MegaSena:{
        // screen irá apontar o componente a ser carregado quando esta opção for escolhida
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Ímpar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!' />
    }
}, { drawerWidth: 300 })