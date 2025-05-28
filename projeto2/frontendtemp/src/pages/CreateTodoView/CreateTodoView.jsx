import React from "react";
import "./CreateTodoView.css";

export default function CreateTodoView() {
    return (
        <div className = "create-container">

            <header className = "create-header">
                
                <h1>To-Do List 📝</h1>

            </header>

            <div className = "create-box">

                <h2 className = "create-title">Criar nova tarefa ✍️</h2>

                <form className = "create-form">

                    <label>
                        <strong>nome da tarefa:</strong>

                        <input type = "text" name = "nome" />
                    </label>

                    <label>
                        <strong>descrição:</strong>
                        <textarea name = "descricao" rows = "3" />
                    </label>

                    <label>
                        <strong>data de entrega:</strong>
                        <input type = "date" name = "data_entrega" />
                    </label>

                    <label>
                        <strong>status da tarefa:</strong>
                        <input type = "text" name = "status" />
                    </label>

                    <button type = "submit" 
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/tarefas';
                    }}
                    className = "create-button">
                        Criar tarefa
                    </button>

                </form>

                <p className = "back-link">
                    <a href = "/tarefas">Voltar para a lista</a>
                </p>

            </div>
            
        </div>
    );
}