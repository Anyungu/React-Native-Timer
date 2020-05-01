
import React, { Component } from 'react';
import HomePage from './components/HomePage';
import { SafeAreaView, StatusBar } from 'react-native';


class App extends Component {


  render() {

  
    return (
      <>
        <StatusBar backgroundColor= "#ef473a" barStyle="light-content" />
        <SafeAreaView style = {{flex: 1}}>
          <HomePage/>
        </SafeAreaView>
      </>
    );

  }
};

export default App;
