import React from 'react'
import {addDecorator} from '@storybook/react'

addDecorator(storyFn => (
  <>
    <style>
      @import
      url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    </style>
    <div style={{fontFamily: 'Roboto'}}>{storyFn()}</div>
  </>
))
