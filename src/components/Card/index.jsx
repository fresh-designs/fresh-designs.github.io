import React, {useContext} from 'react'
import styled from 'styled-components'
import {ThemeContext} from '../Theme'

const defaultTheme = {
  pHead: '#ffffff',
  pSubHead: '#ffffffaa',
  pBG: '#1b262c',
  pAccent: '#3282b8',
}

const Card = ({
  title = '',
  subtitle = '',
  content = '',
  width,
  theme,
  buttonText = 'Submit',
  buttonDisabled = false,
  footerAlign = 'right',
  onButtonClick = () =>
    console.debug('Please pass a valid onButtonClick property to <Card />'),
}) => {
  const themeC = useContext(ThemeContext)
  theme = theme || themeC || defaultTheme
  const Title = styled.h1`
    /* text-align: center; */
    color: ${theme.pHead};
    margin: 1rem 0 0.4rem 0;
  `
  const SubTitle = styled.h3`
    color: ${theme.pSubHead};
    font-weight: 100;
    margin: 0 0 0 0.1rem;
    align-self: flex-start;
  `

  // With some dynamic props
  const Button = styled.button`
    width: fit-content;
    padding: 0.5rem;
    margin: 0.5rem 0;
    color: ${theme.pHead};
    background-color: ${theme.pAccent};
    border: 1em;
    cursor: pointer;
    border-radius: 0.3rem;
    &:hover {
      background-color: ${theme.pHead};
      color: ${theme.pAccent};
    }
    &:focus {
      outline: 0;
    }
  `

  const CardDiv = styled.div`
    flex: 1 1 160px;
    background-color: ${theme.pBG};
    padding: 10px;
    margin: 10px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    color: ${theme.pHead};
    font-size: 0.8em;
    font-weight: 100;
    min-height: 10em;
    min-width: 10em;
    ${width && `width:${width}`};
  `
  const footerAlignV = footerAlign === 'left' ? 'flex-start' : 'flex-end'
  const Footer = styled.div`
    align-self: ${footerAlignV};
  `
  const Container = styled.div`
    flex-grow: 1;
    padding-top: inherit;
    margin-top: inherit;
  `

  return (
    <CardDiv>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Container>{content}</Container>
      <Footer>
        <Button size="small" onClick={onButtonClick} disabled={buttonDisabled}>
          {buttonText}
        </Button>
      </Footer>
    </CardDiv>
  )
}

export default Card

export const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  flex-direction: 'row';
`
