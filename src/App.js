import React, { Component, Fragment } from 'react';
import { injectGlobal } from 'styled-components'
import Header from './components/Header/Header'
import ChessBoard from './components/Chess/ChessBoard/ChessBoard'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Pacifico');

body {
    background-color: #E9E9E9;
  }
`
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header title="Chess App" />
        <ChessBoard />
      </Fragment>
    );
  }
}

export default App;
