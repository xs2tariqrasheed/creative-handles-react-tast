import React, { Component } from 'react';
import Header from './Header';
import Section from './Section';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Section />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
