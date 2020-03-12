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
  }
`
const withGlobal = (storybook: any) => (
  <>
    <GlobalStyle />
    {storybook()}
  </>
)
addDecorator(withGlobal)
