import React from "react";
import styled from "@emotion/styled";

const defaultTheme = {
  pHead: "#ffffff",
  pSubHead: "#ffffffaa",
  pBG: "#1b262c",
  pAccent: "#3282b8"
};

const Card = ({
  title = "Head",
  subtitle = "subtitle",
  theme = defaultTheme
}) => {
  const Title = styled.h1`
    /* text-align: center; */
    color: ${defaultTheme.pHead};
    margin: 1rem 0 0.4rem 0;
  `;
  const SubTitle = styled.h3`
    color: ${theme.pSubHead};
    font-weight: 100;
    margin: 0 0 0 0.1rem;
    align-self: flex-start;
  `;

  // With some dynamic props
  const Button = styled.button`
    width: fit-content;
    padding: 0.5rem;
    margin: 0.5rem 0.1rem;
    color: ${theme.pHead};
    background-color: ${theme.pAccent};
    border: 1em;
    cursor: pointer;
    border-radius: 0.3rem;
    &:hover {
      background-color: ${theme.pHead};
      color: ${theme.pAccent};
    }
  `;

  const CardDiv = styled.div`
    flex: 1 1 160px;
    background-color: ${theme.pBG};
    padding: 10px;
    margin: 10px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    font-family: "Roboto";
    color: ${theme.pHead};
    font-size: 0.8em;
    font-weight: 100;
    min-height: 10em;
    min-width: 10em;
  `;
  const Footer = styled.div`
    align-self: flex-end;
  `;
  const Container = styled.div`
    flex-grow: 1;
    padding-top: inherit;
    margin-top: inherit;
  `;

  return (
    <CardDiv>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Container>
        Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah{" "}
      </Container>
      <Footer>
        <Button size="small">Submit</Button>
      </Footer>
    </CardDiv>
  );
};

export default Card;