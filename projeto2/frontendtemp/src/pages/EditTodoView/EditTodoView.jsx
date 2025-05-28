import React from "react";
import "./EditTodoView.css";


export default function EditTodoView() {
    return (
        <div className = "edit-container">

            <header className = "edit-header">
                <h1>To-Do List 📝</h1>
            </header>

            <div className = "edit-box">

                <h2 className = "edit-title">Editar tarefa 🗒️</h2>

                <form className = "edit-form">

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

                    <button type = "submit" className = "save-button">
                        Salvar edição
                    </button>

                </form>

                <p className = "back-link">
                    <a href = "/tarefas">Voltar para a lista</a>
                </p>

            </div>
            
        </div>
    );
}