import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <Wrapper>
            <h1>Todo List</h1>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background: #006494;
    color: white;
    width: 100%;
    height: 75px;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 1.5rem;
    h1 {
        margin: 0;
    }
    margin-bottom: 25px;
`;

export default Header;
