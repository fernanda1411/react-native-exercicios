import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'


const ParOuImpar = (num) => {
    if(num % 2 == 0){
        return <Text style={Padrao.ex}>Par</Text>
    }
    return <Text style={Padrao.ex}>Impar</Text>

}
export default props => 
    <View>
        {ParOuImpar(props.numero)}
        {/* {
            props.numero % 2 == 0
            ? <Text style={Padrao.ex}>Par</Text>
            : <Text style={Padrao.ex}>Impar</Text>
        } */}
    </View>

