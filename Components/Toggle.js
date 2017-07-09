import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Toggle extends React.Component {
  onPress = (option) => {
    this.props.onPress(option)
  }

  renderOption = option => {
    const { selectedValue } = this.props;

    return(
      <TouchableOpacity
        key={option}
        style={selectedValue === option ? styles.activeOption : styles.option}
        onPress={() => this.onPress(option)}
      >
        <Text>{option}</Text>
      </TouchableOpacity>
    )
  }

	render() {
    const { label, options } = this.props;

    return (
      <View style={styles.container} >
        <Text style={styles.label}>
          {label}
        </Text>
        <View style={styles.options}>
          {options.map(this.renderOption)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  label: {
    fontWeight: 'bold',
    padding: 5
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  option: {
    backgroundColor: 'whitesmoke',
    margin: 5,
    padding: 5
  },
  activeOption: {
    backgroundColor: 'skyblue',
    margin: 5,
    padding: 5
  }
})

