import React, {Component} from 'react';
import { View, Button, Text } from 'react-native'


export default class Human extends Component {
    render() {
        const { name, age, onPressAddYearPerHuman } = this.props;
        return (
            <View>
                <Text>{name} - {age}</Text>
                <Button
                    onPress={() => onPressAddYearPerHuman(name)}
                    title={`Add Year to ${name}`}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        
        )
    }
}
