import styled from 'styled-components'

export const Container = styled.div`
  width: 96.2%;
  height: 6rem;
  display: grid;
  grid-template-columns: 4% 36% 60%;
  justify-self: flex-end;
  align-self: center;

  @media (max-width: 1024px) {
    grid-template-columns: 30% 70%;
    align-self: initial;
  }

  @media (max-width: 600px) {
    height: ${props => (props.menuHide ? '6rem' : '100vh')};
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    margin-top: 2rem;
  }
`

export const Hr = styled.div`
  position: relative;

  @media (min-width: 1024px) {
    ::before {
      content: '';
      width: 100%;
      height: 1px;
      background-color: #fff;
      opacity: 25%;
      position: absolute;
      top: 50%;
      left: 2.5rem;
      z-index: 1;
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  font-family: 'Barlow Condensed', sans-serif;

  ul {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  li {
    height: 100%;
    font-size: 1rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    border: 2px solid transparent;
  }

  li:hover {
    border-bottom: 2px solid #fff5;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  strong {
    margin-right: 0.75rem;
  }

  @media (max-width: 1024px) {
    ul {
      width: 32rem;
      margin: 0;
      justify-content: space-evenly;
    }

    li {
      font-size: 0.87rem;
    }

    strong {
      display: none;
    }
  }

  @media (max-width: 600px) {
    display: ${props => (props.menuHide ? 'none' : 'initial')};

    ul {
      width: initial;
      height: 17rem;
      flex-direction: column;
      margin: 8rem 0 0 2rem;
    }

    li {
      height: 2rem;
    }

    li:hover {
      border: 2px solid transparent;

      border-right: 3px solid #fff;
    }

    strong {
      display: block;
    }
  }
`

export const Menu = styled.div`
  display: none;

  @media (max-width: 600px) {
    position: absolute;
    display: flex;
    z-index: 1;
    right: 2rem;
    top: 3rem;
  }
`
