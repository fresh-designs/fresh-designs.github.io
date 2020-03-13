import React from 'react'
import {addDecorator} from '@storybook/react'
import {createGlobalStyle} from 'styled-components'

addDecorator(storyFn => (
  <>
    <style>
      @import
      url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    </style>
    <div>{storyFn()}</div>
  </>
))

const GlobalStyle = createGlobalStyle`
  html body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    background-color:#edf2f5;

  }
  .container{
    max-width: 1140px;
    margin: 0 auto;
  }
  .text-center{
    text-align:center;
  }
`
const withGlobal = (storybook: any) => (
  <div className="container">
    <GlobalStyle />
    {storybook()}
  </div>
)
addDecorator(withGlobal)
