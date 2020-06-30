import React from "react"
import { View, StyleSheet, Text, Button } from 'react-native'

import Simples from './simples'
import ParImpar from './ParImpar'
import { Inverter, MegaSena } from './Multi'
import Human from './Human'


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      humans: [
        {
          name: 'Adam',
          age: 18
        },
        {
          name: 'Eve',
          age: 16
        }
      ]
    };
    this.onPressAddYear = this.onPressAddYear.bind(this);
    this.onPressAddYearPerHuman = this.onPressAddYearPerHuman.bind(this);
  }

  

  onPressAddYear() {
    this.setState(
      (state, props) => ({
        humans: state.humans.map(human => ({
          name: human.name,
          age: human.age + 1
        }))
      })
    )
  }

  onPressAddYearPerHuman(name) {
    this.setState(state => ({
      humans: state.humans.map(human => {
        if(human.name === name) {
          return ({
            name: human.name,
            age: human.age + 1
          })
        }
        return human;
      })
    }))
  }

  render(){
    
    const Adam = this.state.humans.find(human => human.name === "Adam");
    const Eve = this.state.humans.find(human => human.name === "Eve");;

    return (
      <View style={styles.container}>
        <Human 
          name={Adam.name}
          age={Adam.age}
          onPressAddYearPerHuman={this.onPressAddYearPerHuman}
        />
        <Human 
          name={Eve.name}
          age={Eve.age}
          onPressAddYearPerHuman={this.onPressAddYearPerHuman}
        />

        
        <Button
          onPress={this.onPressAddYear}
          title="Add Year to both"
          color="#1234"
          accessibilityLabel="Learn more about this purple button"
        />

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
