import styled from 'styled-components'
import backgroundDestinationDesktop from '../../assets/destination/background-destination-desktop.jpg'
import backgroundDestinationTablet from '../../assets/destination/background-destination-tablet.jpg'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 20% 80%;
  background: url(${backgroundDestinationDesktop}) no-repeat center/cover;
  background-color: #ccc;

  @media (max-width: 1024px) {
    grid-template-rows: 15% 85%;
    background: url(${backgroundDestinationTablet}) no-repeat center/cover;
  }

  @media (max-width: 600px) {
    grid-template-rows: 12% 88%;
  }
`

export const Sections = styled.div`
  width: 85%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 20% 25% 20% 15% 15%;
  justify-self: center;
  color: #fff;

  img {
    max-width: 82%;
    height: 82%;
    object-fit: contain;
    grid-column: 1;
    grid-row: 2 / 6;
    justify-self: center;
  }

  h2 {
    margin-left: 2.5rem;
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

  strong {
    align-self: center;
    font-family: 'Bellefair', serif;
    font-size: 6.3rem;
    text-transform: uppercase;
    font-weight: 400;
  }

  .description {
    width: 85%;
    font-family: 'Barlow', sans-serif;
    font-size: 1.12rem;
    color: #d0d6f9;
    border-bottom: 1px solid #fff5;
  }

  @media (max-width: 1024px) {
    grid-template-columns: initial;
    grid-template-rows: 5% 45% 5% 15% 15% 15%;
    justify-self: center;
    text-align: center;

    h2 {
      margin: 0;
      justify-self: flex-start;
      font-size: 1.25rem;
    }

    img {
      width: 18.75rem;
      height: 18.75rem;
      align-self: center;
      justify-self: center;
      grid-column: initial;
      grid-row: initial;
    }

    strong {
      align-self: center;
      font-size: 5rem;
    }

    .description {
      width: initial;
      font-size: 1rem;
      line-height: 2rem;
    }
  }

  @media (max-width: 600px) {
    grid-template-rows: 5% 30% 5% 10% 20% 25%; //95%

    h2 {
      justify-self: center;
      font-size: 1rem;
    }

    img {
      width: 10.6rem;
      height: 10.6rem;
    }

    strong {
      font-size: 3.5rem;
    }

    .description {
      font-size: 0.93rem;
      line-height: 1.5rem;
    }
  }
`

export const HeaderDestination = styled.div`
  align-self: flex-end;

  ul {
    display: flex;
    gap: 2rem;
  }

  li {
    height: 2rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #d0d6f9;
    border-bottom: 2px solid transparent;
    display: flex;
  }

  li:hover {
    border-bottom: 2px solid #fff;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    ul {
      justify-content: center;
    }
  }

  @media (max-width: 600px) {
    li {
      font-size: 0.88rem;
    }
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
    grid-template-columns: initial;
    grid-template-rows: 50% 50%;
  }
`

export const Distance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-transform: uppercase;

  p {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.9rem;
    letter-spacing: 2px;
  }

  span {
    font-family: 'Bellefair', serif;
    font-size: 1.75rem;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
  }
`

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-transform: uppercase;

  p {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.9rem;
    letter-spacing: 2px;
  }

  span {
    font-family: 'Bellefair', serif;
    font-size: 1.75rem;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
  }
`
