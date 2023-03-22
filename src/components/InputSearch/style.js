import styled from "styled-components";

export const Container = styled.section `
    .inputSection {
        position: relative;
        max-width: 36.0rem;
        margin: 0 auto;
    }

    .labelInputSearch {
        position: absolute;
        bottom: .6rem;
        left: .8rem;
        pointer-events: none;
        transition: 400ms;
        padding: 0 .4rem;
        color: lightgray;
        font-size: 2.0rem;
    }
    
    #inputSearchCharacter {
        width: 100%;
        background: none;
        border: .15rem solid lightgray;
        padding: 1.2rem 1.2rem .4rem;
        border-radius: .4rem;
        font-size: 2.0rem;
        color: gray;
    }
    
    #inputSearchCharacter:focus {
        outline: .15rem solid orange;
        border: .15rem solid orange;
    }
    
    #inputSearchCharacter:not(:placeholder-shown) + .labelInputSearch,
    #inputSearchCharacter:focus + .labelInputSearch {
        bottom: 3.4rem;
        font-size: 1.4rem;
        background: white;
        color: gray;
    }

    .searchIcon {
        position: absolute;
        bottom: 1.0rem;
        right: -.2rem;
        font-size: 2.0rem;
        color: lightgray;
    }
`;