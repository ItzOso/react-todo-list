import React from 'react'
import styled from 'styled-components'
import {BsPlusLg} from "react-icons/bs"

function AddTodo({ setOpenModal, openModal }) {
    return (
        <AddTodoButton onClick={() => setOpenModal(!openModal)}>
            <BsPlusLg />
        </AddTodoButton>
    );
}

const AddTodoButton = styled.button`
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 2.5rem;
    border: none;
    color: white;
    background: #0582ca;
    position: fixed;
    right: 35px;
    bottom: 35px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 300ms ease;
    &:hover {
        transform: scale(1.1);
    }
`;

export default AddTodo