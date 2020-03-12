import React, {useState, useEffect} from 'react'
import {action} from '@storybook/addon-actions'
import Img from './index'
import {withKnobs, text, color, number} from '@storybook/addon-knobs'

export default {
  title: 'Img',
  component: Img,
  decorators: [withKnobs],
}

export const ImgStory = () => {
  return (
    <Img
      lq="https://source.unsplash.com/kSNQz1lTBPQ/10x10"
      src="https://source.unsplash.com/kSNQz1lTBPQ/1600x1600"
      width="500px"
      height="500px"
    />
  )
}
