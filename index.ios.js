/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReactRecorder extends Component {
  getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  constructor(props) {
    super(props);
    var count = 30;
    var rowsData = [];
    for (var i = 0; i < count; i++) {
      rowsData.push({index: i, color: this.getRandomColor()});
    }
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.index !== r2.index});
    this.state = {
      dataSource: ds.cloneWithRows(rowsData)
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          ReactRecorder
        </Text>
        <ListView style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={
            (rowData) =>
            <Text style={{backgroundColor: rowData.color,
              padding: styles.listViewRowPadding}}>
              {"Hello, this is Row " + (rowData.index + 1) + "."}
            </Text>
          }
        />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  listView: {
    alignSelf: 'stretch',
  },
  listViewRowPadding: 10,
  listViewRowFontSize: 20,
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactRecorder', () => ReactRecorder);
