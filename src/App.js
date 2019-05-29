import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import Header from './components/Header/Header'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Pacifico');

body {
    background-color: #C5C6C7;
  }
`
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header title="Chess App" />
      </Fragment>
    );
  }
}

export default App;
