import styled from 'styled-components'
import backgroundCrewDesktop from '../../assets/crew/background-crew-desktop.jpg'
import backgroundCrewTablet from '../../assets/crew/background-crew-tablet.jpg'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 20% 80%;
  background: url(${backgroundCrewDesktop}) no-repeat center/cover;
  background-color: #ccc;

  @media (max-width: 1024px) {
    grid-template-rows: 15% 85%;
    background: url(${backgroundCrewTablet}) no-repeat center/cover;
  }
`

export const Sections = styled.div`
  width: 80%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: 55% 45%;
  grid-template-rows: 10% 20% 20% 35% 15%;
  justify-self: center;
  color: #fff;

  h2 {
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

  .role {
    align-self: flex-end;
    font-family: 'Bellefair', serif;
    font-size: 2rem;
    text-transform: uppercase;
    color: #fff5;
  }

  strong {
    font-family: 'Bellefair', serif;
    font-size: 3.5rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    font-family: 'Barlow', sans-serif;
    font-size: 1.12rem;
    line-height: 2rem;
    color: #d0d6f9;
  }

  img {
    max-width: 100%;
    height: 90%;
    object-fit: contain;
    object-position: bottom;
    grid-column: 2;
    grid-row: 1 / 6;
    align-self: flex-end;
    justify-self: flex-end;
  }

  @media (max-width: 1024px) {
    grid-template-columns: initial;
    grid-template-rows: 5% 10% 10% 15% 5% 55%;
    text-align: center;

    h2 {
      text-align: initial;
      font-size: 1.25rem;
    }

    h2 > span {
      margin-right: 1rem;
    }

    .role {
      font-size: 1.5rem;
    }

    strong {
      font-size: 2.5rem;
    }

    p {
      width: 90%;
      justify-self: center;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    img {
      grid-column: initial;
      grid-row: initial;
      justify-self: center;
    }
  }

  @media (max-width: 600px) {
    grid-template-rows: 5% 45% 10% 5% 8% 27%;

    h2 {
      justify-self: center;
      order: 1;
      font-size: 1rem;
    }

    img {
      order: 2;
      width: 100%;
      border-bottom: 1px solid #fff5;
      justify-self: center;
    }

    .role {
      order: 4;
      font-size: 1rem;
    }

    strong {
      order: 5;
      font-size: 1.5rem;
    }

    p {
      order: 6;
      font-size: 0.93rem;
      line-height: 1.5rem;
    }
  }
`

export const HeaderCrew = styled.div`
  ul {
    width: 10rem;
    display: flex;
    justify-content: space-between;
  }

  li {
    display: flex;
  }

  a {
    text-decoration: none;
  }

  li::before {
    content: '';
    width: 1rem;
    height: 1rem;
    background-color: #fff3;
    border-radius: 50%;
  }

  li:hover {
    background-color: #fff;
    border-radius: 50%;
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    ul {
      width: 6rem;
    }

    li::before {
      width: 0.6rem;
      height: 0.6rem;
    }
  }

  @media (max-width: 600px) {
    align-items: center;
    order: 3;
  }
`
