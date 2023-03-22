import styled from "styled-components";

export const Container = styled.section `
  .logoMarvel {
    width: 100%;
  }
  
  h1 {
    font-size: 1.6rem;
  }

  .characterCards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.4rem;
    margin-top: 1.6rem;
  }

  .characterCard {
    width: 24.0rem;
    height: 30.0rem;
    border-radius: .4rem;
    box-shadow: .01rem .01rem .2rem .1rem black;

    transition: 300ms;
  }

  .characterCard:hover {
    scale: 1.05;
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
    box-shadow: .01rem .01rem .2rem .1rem black;
  }

  .part2 {
    display: grid;
    place-content: center;
  }

  h3 {
    font-size: 1.6rem;
    margin: 1.0rem 0 0;
  }

  a {
    text-align: center;
    color: red;
  }
`; 