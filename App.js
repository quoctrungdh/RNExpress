import React from 'react';
import { View, StyleSheet } from 'react-native';

import Toggle from './Components/Toggle';
import Box from './Components/Box';

export default class App extends React.Component {
  flexBoxOptions = {
    flexDirection: {
      label: 'Primary axis (flexDirection)',
      options: [
        'row',
        'column'
      ]
    },
    justifyContent: {
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-around',
        'space-between'
      ]
    },
    alignItems: {
      options: [
        'flex-start',
        'center',
        'stretch',
        'flex-end'
      ]
    }
  }

  state = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }

  render() {
    const { flexDirection } = this.state;
    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical';
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal';

    return (
      <View style={styles.container}>
        <Toggle
          {...this.flexBoxOptions.flexDirection}
          selectedValue={this.state.flexDirection}
          onPress={(flexDirection) => this.setState({ flexDirection })}
        />
        <Toggle
          {...this.flexBoxOptions.justifyContent}
          label={`${primaryAxis} distribution (justifyContent)`}
          selectedValue={this.state.justifyContent}
          onPress={(justifyContent) => this.setState({ justifyContent })}
        />
        <Toggle
          {...this.flexBoxOptions.alignItems}
          label={`${secondaryAxis} alignment (alignItems)`}
          selectedValue={this.state.alignItems}
          onPress={(alignItems) => this.setState({ alignItems })}
        />
        <View style={[styles.flexView, this.state]}>
          <Box />
          <Box />
          <Box />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  flexView: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    marginTop: 10,
    padding: 5
  }
})
