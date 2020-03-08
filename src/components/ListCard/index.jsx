import React, {useCallback} from 'react'
import styled from '@emotion/styled'
const defaultTheme = {
  pHead: '#fff',
  pSubHead: '#ffffffaa',
  pBG: '#dde1fb',
  pAccent: '#3282b8',
}

export const ListCard = ({
  theme = defaultTheme,
  title = '',
  subTitle = '',
  id = '',
  img = '',
  fallbackImg = '',
  width = '300px',
  type = 'sm', //sm|m|l
  textalign,
  onButtonClick = () =>
    console.debug('please use onButtonClick property to capture this event'),
}) => {
  const [imgUrl, setImgUrl] = React.useState(img)
  React.useEffect(() => {
    if (img !== imgUrl) setImgUrl(img)
    // i dont want to trigger this hook when the imgUrl changes
    //eslint-disable-next-line
  }, [img])
  const onClick = useCallback(() => {
    onButtonClick({id, title})
  }, [title, id, onButtonClick])
  const CardDiv = styled.div`
    border-radius: 1rem;
    flex: 1 1 160px;
    margin: 5px 0;
    display: flex;
    flex-direction: ${textalign === 'left' ? 'row-reverse' : 'row'};
    color: ${theme.pHead};
    background-color: ${theme.pBG};
    align-items: center;
    ${width && `width:${width}`};
  `
  const Img = styled.img`
    border-radius: 1rem;
    height: 5rem;
  `
  const Aside = styled.div`
    padding: 10px;
    flex-grow: 0;
  `
  const Button = styled.button`
    line-height: 20px;
    padding-bottom: 5px;
    border-radius: 0.5em;
    background-color: ${theme.pAccent};
    box-shadow: 0 0 3px 0px ${theme.pSubHead};
    border: none;
    color: ${theme.pHead};
    font-size: x-large;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      box-shadow: 0 0 10px 0px ${theme.pSubHead};
      transform: scale(1.1);
    }
    &:focus {
      border: none;
      outline: 0;
    }
  `
  const Content = styled.div`
    min-width: 100px;
    padding: 0 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  `
  const Head = styled.span`
    font-size: large;
    font-weight: bold;
    padding: 2px 0;
  `
  const SubHead = styled.div`
    font-size: small;
    font-weight: 100;
  `
  return (
    <CardDiv>
      <Img src={imgUrl} onError={() => setImgUrl(fallbackImg)} />
      <Content>
        <Head>{title}</Head>
        <SubHead>{subTitle}</SubHead>
      </Content>
      <Aside>
        <Button onClick={onClick}>></Button>
      </Aside>
    </CardDiv>
  )
}
export default ListCard
