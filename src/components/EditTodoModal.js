import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";

function EditTodoModal({ setOpenEdit, openEdit, setTodos, todos, editid, setEditid }) {
    const editedArray = [...todos];
    const i = editedArray.findIndex((todo) => todo.id === editid);
    const [input, setInput] = useState(editedArray[i].todo);
    const editTodo = () => {
        editedArray[i].todo = input;
        return editedArray;
    };
    const handleClick = () => {
        setTodos(editTodo);
        localStorage.setItem("todos", JSON.stringify(todos));

        setInput("");
        setEditid("");
        setOpenEdit(!openEdit);
    };
    return (
        <Wrapper>
            <Modal>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="todo.." />
                <button onClick={handleClick}>EDIT TODO</button>
                <button onClick={() => setOpenEdit(!openEdit)}>
                    <MdOutlineClose />
                </button>
            </Modal>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

const Modal = styled.div`
    width: 400px;
    height: 200px;
    background: #003554;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    input {
        margin-bottom: 20px;
        padding: 1rem;
        font-size: 1.5rem;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        width: 100%;
    }

    button:nth-of-type(1) {
        padding: 1rem;
        color: white;
        width: 100%;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        border: none;
        background: #0582ca;
        transition: all 250ms ease;
        &:hover {
            transform: scale(1.02);
        }
    }

    button:nth-of-type(2) {
        position: absolute;
        top: 2px;
        right: 0px;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
    }
`;

export default EditTodoModal;
