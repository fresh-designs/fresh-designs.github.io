import React from 'react'
import styled from 'styled-components'

const defaultTheme = {
  pHead: '#000',
  pSubHead: '#000a',
  pBG: '#fff',
  sBG: '#edf2f5',
  pAccent: '#3282b8',
}

const FAQBox = ({theme = defaultTheme, FAQs = []}) => {
  // const onlyQuestions = React.useMemo(() => pick(FAQs, "question"), [FAQs]);
  const [active, setActive] = React.useState(FAQs[0])
  const onQnChange = React.useCallback(i => e => setActive(i), [])

  const CardDiv = React.memo(styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    flex-direction: 'row';
    height: 100%;
    background-color: ${theme.pBG};
    margin: 10px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    border: solid 2px rgba(0, 0, 0, 0.1);
    border-radius: 0.3rem;
    font-family: 'Roboto';
    color: ${theme.pHead};
    font-weight: 100;
    text-align: left;
  `)
  const LeftPane = React.memo(styled.div`
    flex: 1 1 20rem;
    padding: 2rem 0;
    border-radius: 0.3rem 0 0 0.3rem;
    /* box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1); */
    background-color: ${theme.sBG};
    color: ${theme.pHead};
  `)
  const RightPane = React.memo(styled.div`
    flex: 3 1 20rem;
    padding: 2rem;
    border-radius: 0 0.3rem 0.3rem 0;
    color: ${theme.pSubHead};
  `)

  const Li = React.memo(styled.div`
    padding: 10px;
    font-size: 1rem;
    border-left: solid 0.2rem;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: ${props =>
      props.active ? '-6px -1px 10px 0 rgba(0, 0, 0, 0.1)' : 'none'};
    border-left: ${props => (props.active ? 'solid 0.2rem' : 'none')};
    color: ${theme.pHead};
    background-color: ${props => (props.active ? 'white' : 'none')};
  `)

  return (
    <CardDiv>
      <LeftPane>
        {FAQs.map(i => (
          <Li active={i === active} onClick={onQnChange(i)}>
            {i.question}
          </Li>
        ))}
      </LeftPane>
      <RightPane>{active.answer || ''}</RightPane>
    </CardDiv>
  )
}
export default FAQBox
