'use strict';
/**
 * ReactRecorder
 * Author: Aijin (Vince) Yuan  yuanaijin@gmail.com
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  NativeAppEventEmitter,
  NativeModules,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var RecordingManager = NativeModules.RecordingManager;

class ReactRecorder extends Component {
  getRandomColor() { // Light color
    var letters = '0123456789ABCDEF'.split('');
    var highLetters = '89ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      if (i % 2 == 0) {
        color += highLetters[Math.floor(Math.random() * 8)];
      } else {
        color += letters[Math.floor(Math.random() * 16)];
      }
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
      dataSource: ds.cloneWithRows(rowsData),
      isRecording: false,
      hasRecord: false
    };

    var subscription = NativeAppEventEmitter.addListener(
      'StatusChanged',
      (status) => {
        this.setState({ isRecording: status.isRecording });
        this.setState({ hasRecord: status.hasRecord });
      }
    );
  }
  componentWillUnmount() {
    subscription.remove();
  }
  render() {
    var startButtonEnabled = (this.state.isRecording === false);
    var stopButtonEnabled = (this.state.isRecording === true);
    var playButtonEnabled = (this.state.isRecording === false && this.state.hasRecord === true);
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
              padding: listViewRowPadding}}>
              {"Hello, this is Row " + (rowData.index + 1) + "."}
            </Text>
          }
        />
        <View style={styles.toolbar}>
          <TouchableHighlight style={styles.toolbarButton}
            onPress={() => RecordingManager.startRecording()}>
            <Text style={startButtonEnabled?styles.toolbarButtonTextEnabled:styles.toolbarButtonTextDisabled}>Start</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.toolbarButton}
            onPress={() => RecordingManager.stopRecording()}>
            <Text style={stopButtonEnabled?styles.toolbarButtonTextEnabled:styles.toolbarButtonTextDisabled}>Stop</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.toolbarButton}
            onPress={() => RecordingManager.playRecording()}>
            <Text style={playButtonEnabled?styles.toolbarButtonTextEnabled:styles.toolbarButtonTextDisabled}>Play</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const listViewRowPadding = 10;

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
  toolbar: {
    backgroundColor: '#81c04d',
    flexDirection: 'row',
  },
  toolbarButton: {
    flex: 1,
  },
  toolbarButtonTextEnabled: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
  },
  toolbarButtonTextDisabled: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#888',
    paddingTop: 10,
    paddingBottom: 10,
  }
});

AppRegistry.registerComponent('ReactRecorder', () => ReactRecorder);
