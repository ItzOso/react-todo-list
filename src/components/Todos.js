import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import NewTodoModal from "./NewTodoModal";
import EditTodoModal from "./EditTodoModal";

function Todos() {
    const [todos, setTodos] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [editid, setEditid] = useState("")

    useEffect(() => {
        let check = localStorage.getItem("todos")
        if(check) {
            setTodos(JSON.parse(check))
        }
    }, [])

    return  (
        <Wrapper>
            {todos ? todos.map((todo) => <Todo todo={todo.todo} key={todo.id} id={todo.id} todos={todos} setTodos={setTodos} openEdit={openEdit} setOpenEdit={setOpenEdit} setEditid={setEditid} editid={editid} />) : null}
            {openModal ? (
                <NewTodoModal setOpenModal={setOpenModal} openModal={openModal} setTodos={setTodos} todos={todos} />
            ) : null}
            {openEdit ? (
                <EditTodoModal setOpenEdit={setOpenEdit} openEdit={openEdit} setTodos={setTodos} todos={todos} setEditid={setEditid} editid={editid} />
            ) : null}
            <AddTodo setOpenModal={setOpenModal} openModal={openModal} />
        </Wrapper>)
}

const Wrapper = styled.div`
    background: #006494;
    color: white;
    border-radius: 1rem;
    height: auto;
    padding: 1rem;
`;

export default Todos;
