import styled from 'styled-components'
import backgroundTechnologyDesktop from '../../assets/technology/background-technology-desktop.jpg'
import backgroundTechnologyTablet from '../../assets/technology/background-technology-tablet.jpg'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 20% 80%;
  background: url(${backgroundTechnologyDesktop}) no-repeat center/cover;
  background-color: #ccc;

  @media (max-width: 1024px) {
    grid-template-rows: 15% 85%;
    background: url(${backgroundTechnologyTablet}) no-repeat center/cover;
  }
`

export const Sections = styled.div`
  max-width: 1440px;
  display: grid;
  grid-template-columns: 10% 10% 1fr 1fr;
  grid-template-rows: 25% 5% 15% 55%;
  justify-self: center;
  color: #fff;

  h2 {
    grid-column: 2 / 5;
    grid-row: 1;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.75rem;
    font-weight: 400;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #fff;
  }

  h2 > span {
    margin-right: 1.5rem;
    opacity: 0.25;
    font-weight: bold;
  }

  .terminology {
    grid-column: 3 / 4;
    grid-row: 2;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem;
    color: #d0d6f9;
    text-transform: uppercase;
  }

  strong {
    align-self: center;
    grid-column: 3 / 4;
    grid-row: 3;
    font-family: 'Bellefair', serif;
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 400;
  }

  p {
    width: 68%;
    grid-column: 3 / 4;
    grid-row: 4;
    line-height: 1.7rem;
    color: #d0d6f9;
  }

  hr {
    border: 1px solid #383b4b;
  }

  @media (max-width: 1024px) {
    grid-template-columns: initial;
    grid-template-rows: 10% 36% 15% 5% 10% 24%;
    text-align: center;

    h2 {
      justify-self: flex-start;
      margin-left: 3rem;
      grid-column: initial;
      font-size: 1.25rem;
    }

    .terminology {
      grid-column: initial;
      grid-row: 4;
      font-size: 1rem;
    }

    strong {
      grid-column: initial;
      grid-row: 5;
      font-size: 2.5rem;
      align-self: initial;
    }

    p {
      width: 59%;
      grid-column: initial;
      grid-row: 6;
      justify-self: center;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    grid-template-rows: 10% 25% 15% 5% 10% 35%;

    h2 {
      margin: 0;
      font-size: 1rem;
      justify-self: center;
    }

    .terminology {
      font-size: 0.87rem;
    }

    strong {
      font-size: 1.5rem;
    }

    p {
      width: 90%;
      font-size: 0.93rem;
      line-height: 1.5rem;
    }
  }
`

export const HeaderTechnology = styled.div`
  grid-column: 2 / 4;
  grid-row: 2;

  ul {
    width: 5rem;
    height: 19rem;
    font-family: 'Barlow Condensed', sans-serif;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  li {
    font-size: 2rem;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
  }

  a {
    width: 80px;
    height: 80px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: 1px solid #fff;
    border-radius: 50%;
  }

  a:hover {
    background-color: #fff;
    color: #000;
  }

  .terminology {
    display: block;
    font-family: 'Bellefair', serif;
    font-size: 2rem;
  }

  @media (max-width: 1024px) {
    grid-column: initial;
    grid-row: 3;
    justify-self: center;
    align-self: center;

    ul {
      width: 14rem;
      height: 4rem;
      flex-direction: row;
    }

    a {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 600px) {
    margin: 2rem 0;

    a {
      width: 40px;
      height: 40px;
    }

    ul {
      width: 9.5rem;
      height: 2.5rem;
    }

    li {
      font-size: 1rem;
    }

    .terminology {
      font-size: 1rem;
    }
  }
`

export const Section2 = styled.div`
  grid-column: 4;
  grid-row: 1 / 5;

  background: url(${props => props.srcDesktop}) no-repeat;
  background-position: right center;

  @media (max-width: 1024px) {
    grid-column: initial;
    grid-row: 2;
    background: url(${props => props.srcTablet}) no-repeat;
    background-size: cover;
  }
`
