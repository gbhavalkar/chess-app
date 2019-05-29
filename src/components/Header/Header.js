import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  font-family: 'Pacifico';
  text-align: center;
  font-size: 2.5em;
  color: #1F2833;
  background: linear-gradient(#696969, #C5C6C7), linear-gradient(white, white);
  :hover{
    
  }
`
Header.displayName = 'Header'

const HeaderComponent = (props) => (
  <Header>{props.title}</Header>
)
export default HeaderComponent;