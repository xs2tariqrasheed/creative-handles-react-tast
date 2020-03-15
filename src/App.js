import React, { Component } from 'react';
import Header from './Header';
import Section from './Section';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Section />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;
