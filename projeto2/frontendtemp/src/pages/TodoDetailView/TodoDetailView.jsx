import React from "react";
import "./TodoDetailView.css";
import { useNavigate } from "react-router-dom";

export default function TodoDetailView() {
    const navigate = useNavigate();
    return (
        
        <div className = "task-container">

            <header className = "task-header">
                <h1>To-Do List 📝</h1>
            </header>

            <div className = "task-box">

                <h2 className = "task-title">
                    Nome da tarefa 📎
                </h2>

                <div className = "task-content">

                    <p>
                        📄 <strong>Descrição:</strong><br />
                        Descrição da tarefa
                    </p>

                    <p>
                        📆 <strong>Criada em:</strong> dd/mm/yyyy
                    </p>

                    <p>
                        🗓️ <strong>Entregar até:</strong> dd/mm/yyyy
                    </p>

                    <p>
                        ✅ <strong>Status:</strong> concluída/em andamento
                    </p>

                </div>

                <div className = "task-buttons">
                    <button className = "button edit"
                    type="button"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/tarefas/:id/editar';
                    }}
                    >Editar</button>

                    <button className = "button delete">Excluir</button>

                    <button className = "button back"
                    type="button"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/tarefas';
                    }}
                    >Voltar para lista</button>

                </div>

            </div>

        </div>
    );
}