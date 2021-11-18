import styled from 'styled-components'
import backgroundHomeDesktop from '../../assets/home/background-home-desktop.jpg'
import backgroundHomeTablet from '../../assets/home/background-home-tablet.jpg'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 20% 80%;
  background: url(${backgroundHomeDesktop}) no-repeat center/cover;
  color: #fff;

  @media (max-width: 1024px) {
    background: url(${backgroundHomeTablet}) no-repeat center/cover;
  }

  @media (max-width: 600px) {
    grid-template-rows: 15% 85%;
  }
`

export const Sections = styled.div`
  width: 80%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 32% 38%;
  justify-self: center;
  color: #fff;

  h2 {
    align-self: flex-end;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.75rem;
    font-weight: 400;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #d0d6f9;
  }

  strong {
    grid-column: 1;
    font-family: 'Bellefair', serif;
    font-size: 9.4rem;
    line-height: 14rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    width: 80%;
    grid-column: 1;
    grid-row: 3;
    font-family: 'Barlow', sans-serif;
    font-size: 1.1rem;
    line-height: 2rem;
    color: #d0d6f9;
  }

  @media (max-width: 1024px) {
    grid-template-columns: initial;
    grid-template-rows: 5% 20% 25% 50%;
    text-align: center;

    h2 {
      align-self: initial;
      font-size: 1.25rem;
    }

    strong {
      line-height: initial;
    }

    p {
      justify-self: center;
    }
  }

  @media (max-width: 600px) {
    max-width: 85%;

    h2 {
      font-size: 1rem;
      letter-spacing: 1px;
    }

    strong {
      font-size: 5rem;
      line-height: 8rem;
    }

    p {
      width: 100%;
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
  }
`

export const ExploreBtn = styled.div`
  width: 274px;
  height: 274px;
  border-radius: 50%;
  background-color: #fff;
  grid-column: 2;
  grid-row: 2 / 4;
  align-self: center;
  justify-self: flex-end;
  display: grid;
  place-items: center;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 5rem rgba(255, 255, 255, 0.2);
  }

  span {
    font-family: 'Bellefair', serif;
    font-size: 3rem;
    color: #0b0d17;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    width: 242px;
    height: 242px;
    grid-column: initial;
    grid-row: initial;
    justify-self: center;
  }

  @media (max-width: 600px) {
    width: 150px;
    height: 150px;

    span {
      font-size: 1.25rem;
    }
  }
`
