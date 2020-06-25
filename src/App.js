import React from "react"
import { View, StyleSheet } from 'react-native'

import Simples from './componentes/simples'
import ParImpar from './componentes/ParImpar'


export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Simples texto='HOJE TEM!!!!' />
        <ParImpar numero={34} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
