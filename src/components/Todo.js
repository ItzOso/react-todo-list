import React, { useState } from "react";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Todo({ todo, id, todos, setTodos, setOpenEdit, openEdit, editid, setEditid }) {
    const [done, setDone] = useState(false);
    const handleEdit = () => {
        setEditid(id);
        setOpenEdit(!openEdit);
    };
    const handleDelete = () => {
        const editedArray = [...todos];
        const i = editedArray.findIndex((todo) => todo.id === id);
        editedArray.splice(i, 1);
        setTodos(editedArray);
        localStorage.setItem("todos", JSON.stringify(editedArray));
    };
    return (
        <Wrapper>
            <p onClick={() => setDone(!done)} className={done ? "done" : ""}>
                {todo}
            </p>
            <div>
                <button onClick={handleEdit} className="edit">
                    <FiEdit />
                </button>
                <button onClick={handleDelete} className="delete">
                    <MdDelete />
                </button>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    background: #0582ca;
    padding: 1rem;
    font-size: 2rem;
    border-radius: 1rem;
    margin-top: 1rem;
    &:first-child {
        margin-top: 0;
    }

    p {
        margin: 0;
        margin-right: 1rem;
        width: 100%;
    }

    .done {
        text-decoration: line-through;
    }

    button {
        color: white;
        background: none;
        border: none;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    div {
        display: flex;
    }
`;

export default Todo;
