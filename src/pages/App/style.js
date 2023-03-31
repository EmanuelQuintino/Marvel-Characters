import styled from "styled-components";

export const Container = styled.section `
  background: #252525;
  color: white;

  .logoMarvelHeader {
    width: 100%;
  }

  h1 {
    font-size: 3.2rem;
    text-align: center;
  }
  
  .inputSearch{}

  .navigatePage {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 72.0rem;
    margin: 1.2rem auto;
    color: gray;
    font-size: 2.4rem;
  }

  button {
    background: none;
    border: none;
  }

  .navigateIcon {
    color: gray;
    font-size: 4.2rem;
  }

  .navigateIcon:hover {
    color: white;
    cursor: pointer;
  }

  .previousIcon {
    animation: previousIconAnimation 1.5s infinite ease-in-out;
  }

  .nextIcon {
    animation: nextIconAnimation 1.5s infinite ease-in-out;
  }

  .spinner {
    animation: spinnerRotate 1s linear infinite;
    font-size: 7.2rem;
    display: block;
    margin: 25% auto 100%;
    color: lightgray;
  }

  .characterCards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.4rem;
    margin-top: 1.2rem;
  }

  .characterCard {
    width: 24.0rem;
    height: 30.0rem;
    border-radius: .4rem;
    box-shadow: .01rem .01rem .2rem .1rem white;

    transition: 300ms;
  }

  .characterCard:hover {
    scale: 1.05;
    cursor: pointer;
  }

  .characterCard .part1 {
    overflow: hidden;
    width: 24.0rem;
    height: 24.0rem;
    border-radius: .4rem .4rem 0 0;
  }

  .characterCard img {
    width: 100%;
    height: 100%;
    
    object-fit: cover;
    object-position: center;

    transition: brightness 300ms;
    box-shadow: .01rem .01rem .2rem .1rem white;
  }

  .part2 {
    display: grid;
    place-content: center;
  }

  h3 {
    font-size: 1.6rem;
    padding: .4rem;
  }

  a {
    text-align: center;
    color: white;
    text-decoration: none;
  }

  .characterNotFound {
    color: gray;
    font-size: 3.2rem;
    margin: 10% auto 100%;
    padding: 0 4.2rem;
    text-align: center;
  }

  .logoMarvelFooter {
    width: 100%;
    margin-top: 5.6rem;
  }

  @keyframes spinnerRotate {
    to {
        transform: rotate(360deg);
    }
  }

  @keyframes previousIconAnimation {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(-0.4rem);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes nextIconAnimation {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(.4rem);
    }

    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 36.0rem) {
    .characterNotFound {
      font-size: 2.4rem;
    }
  }
`; 