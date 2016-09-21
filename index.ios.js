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
  TouchableHighlight,
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
        <View style={styles.toolbar}>
          <TouchableHighlight style={styles.toolbarButton}>
            <Text style={styles.toolbarButtonText}>Start</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.toolbarButton}>
            <Text style={styles.toolbarButtonText}>Stop</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.toolbarButton}>
            <Text style={styles.toolbarButtonText}>Play</Text>
          </TouchableHighlight>
        </View>
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
  toolbar: {
    backgroundColor:'#81c04d',
    paddingTop:10,
    paddingBottom:10,
    flexDirection:'row',
  },
  toolbarButton: {
    flex: 1,
  },
  toolbarButtonText: {
    textAlign:'center',
    fontWeight:'bold',
    color:'#fff',
  }
});

AppRegistry.registerComponent('ReactRecorder', () => ReactRecorder);
