import React, {useState, useEffect} from 'react'
import {action} from '@storybook/addon-actions'
import FAQBox from './index'
import {withKnobs, text, color, number} from '@storybook/addon-knobs'

export default {
  title: 'FAQBox',
  component: FAQBox,
  decorators: [withKnobs],
}
const FAQs = Array.from({length: 4}).map((_, i) => ({
  question: `What are the good thing about your company andWhat are the good thing about your company andWhat are the good thing about your company and the team ${i}?`,
  answer: `${i} is the answer.${i} is the answer.${i} is the answer.${i} is the answer.${i} is the answer.${i} is the answer.${i} is the answer.${i} is the answer.\n ${i} is the answer.${i} is the answer.${i} is the answer.${i} is the answer.${i} is the answer.`,
}))

export const FAQBoxStory = () => {
  return (
    <div>
      <h1 className="text-center">FAQ </h1>
      <FAQBox FAQs={FAQs} />
    </div>
  )
}
