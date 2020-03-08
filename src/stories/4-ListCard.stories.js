import React, {useState, useEffect} from 'react'
import {action} from '@storybook/addon-actions'
import Card, {Grid} from '../components/Card'
import {withKnobs, text, color, number} from '@storybook/addon-knobs'
import ListCard from '../components/ListCard'

export default {
  title: 'ListCard',
  component: ListCard,
  decorators: [withKnobs],
}

const contributors = [
  {
    title: 'Sooraj',
    subTitle: 'Front End Engineer',
    img: 'https://avatars3.githubusercontent.com/u/8408875?s=460&v=4',
  },
  {
    title: 'Sooraj',
    subTitle: 'Front End Engineer',
    img: 'https://avatars3.githubusercontent.com/u/8408875?s=460&v=4',
  },
  {
    title: 'Sooraj',
    subTitle: 'Front End Engineer',
    img: 'https://avatars3.githubusercontent.com/u/8408875?s=460&v=4',
  },
  {
    title: 'Sooraj',
    subTitle: 'Front End Engineer',
    img: 'https://avatars3.githubusercontent.com/u/8408875?s=460&v=4',
  },
]

export const BasicUse = () => {
  const onButtonClick = action('clicked')
  const title = text('title', 'Sooraj')
  const subTitle = text('subTitle', 'Front End Engineer')
  const img = text(
    'img',
    'https://avatars3.githubusercontent.com/u/8408875?s=460&v=4',
  )
  const fallbackImg = text(
    'fallbackImg',
    'https://api.adorable.io/avatars/215/abott@adorable.png',
  )
  return (
    <>
      <ListCard
        title={title}
        subTitle={subTitle}
        img={img}
        onButtonClick={onButtonClick}
        fallbackImg={fallbackImg}
        id={102}
      />
    </>
  )
}

export const Theme = () => {
  const onButtonClick = action('clicked')
  const title = text('title', 'Sooraj')
  const subTitle = text('subTitle', 'Front End Engineer')
  const img = text(
    'img',
    'https://avatars3.githubusercontent.com/u/8408875?s=460&v=4',
  )
  const fallbackImg = text(
    'fallbackImg',
    'https://api.adorable.io/avatars/215/abott@adorable.png',
  )
  const pHead = color('theme.pHead', '#ffffff')
  const pSubHead = color('theme.pSubHead', '#ffffffaa')
  const pBG = color('theme.pBG', '#230444')
  const pAccent = color('theme.pAccent', '#90303d')

  const theme = {
    pHead,
    pSubHead,
    pBG,
    pAccent,
  }
  return (
    <>
      <ListCard
        title={title}
        subTitle={subTitle}
        img={img}
        onButtonClick={onButtonClick}
        fallbackImg={fallbackImg}
        id={102}
        theme={theme}
      />
    </>
  )
}

export const AsAList = () => {
  const onButtonClick = action('clicked')
  return (
    <>
      {contributors.map((i, id) => (
        <ListCard {...{onButtonClick, id, ...i}} />
      ))}
    </>
  )
}
