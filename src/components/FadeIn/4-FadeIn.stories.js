import React, {useState, useEffect} from 'react'
import {action} from '@storybook/addon-actions'
import FadeIn from './index'
import Card from '../Card'
import {withKnobs, text, color, number} from '@storybook/addon-knobs'

export default {
  title: 'FadeIn',
  component: FadeIn,
  decorators: [withKnobs],
}

export const FadeInStory = () => {
  return (
    <FadeIn>
      <Card
        {...{
          title: `Fade In`,
          subtitle: 'a simple card component',
          buttonText: 'Switch theme',
        }}
      />
    </FadeIn>
  )
}
