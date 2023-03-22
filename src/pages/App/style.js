import styled from "styled-components";

export const Container = styled.section `
  h1 {
    font-size: 1.6rem;
  }

  .characterCards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .characterCard img {
    width: 3.2rem;
    transition: brightness 300ms;
    box-shadow: .01rem .01rem .2rem .1rem black;
  }
`; 