import styled from "styled-components";

export const Container = styled.section `
     .titleSearch {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .inputSection {
        position: relative;
    }

    .labelInputSearch {
        position: absolute;
        bottom: .2rem;
        left: .8rem;
        pointer-events: none;
        transition: 400ms;
        padding: 0 .4rem;
        color: lightgray;
        font-size: 1.6rem;
    }

    .srOnly {
        position: absolute;
        width: 0.1rem;
        height: 0.1rem;
        overflow: hidden;
        color: transparent;
    }
    
    #inputSearchStudent {
        width: 100%;
        background: none;
        border: .1rem solid lightgray;
        padding: .4rem 1.2rem .2rem;
        border-radius: .4rem;
        font-size: 1.6rem;
        color: gray;
    }
    
    #inputSearchStudent:focus {
        outline: .1rem solid orange;
        border: .1rem solid orange;
    }
    
    #inputSearchStudent:not(:placeholder-shown) + .labelInputSearch,
    #inputSearchStudent:focus + .labelInputSearch {
        bottom: 2.2rem;
        font-size: 1.2rem;
        background: white;
        color: gray;
    }

    .searchIcon {
        position: absolute;
        bottom: .8rem;
        right: 1.2rem;
        font-size: 1.6rem;
        color: lightgray;
    }
`;