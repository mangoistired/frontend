import React from "react";
import { useState } from "react";
import "./TodoListView.css";
import { useNavigate } from 'react-router-dom';

export default function TodoListView() {
  const [search, setSearch] = useState("");

  const tarefas = [
    { id: 1, nome: "Ler livro", data: "20/06/2024", status: "concluída" },
    { id: 2, nome: "Estudar React", data: "25/06/2024", status: "em andamento" },
    { id: 3, nome: "Fazer exercícios", data: "30/06/2024", status: "concluída" },
  ];

  const navigate = useNavigate();

   const filtrarTarefas = tarefas.filter((tarefas) => 
      tarefas.nome.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="list-container">
      <div className="list-header">
        <h2 className="list-title">
          Suas tarefas ⭐
        </h2>

        <input
          type="text"
          placeholder="Pesquisar tarefa..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
          />
          
      </div>

      <div className="task-list">

        {filtrarTarefas.map((item, index) => (
          <div className="task-item" key={item.id}>
            <div className="task-info">
              <p>
                <strong>{index + 1}. {item.nome}</strong> - Até: <strong>{item.data}</strong><br />
                <span><strong>Status:</strong> {item.status}</span>
              </p>
            </div>

            <div className="task-buttons">
              <button className="button view"
            type="button"
            onClick={(e) => {
            e.preventDefault();
            window.location.href='http://localhost:3000/tarefas/id:';
            }}>Ver</button>

              <button className="button edit"
          type="button"
          onClick={(e) => {
          e.preventDefault();
          window.location.href='http://localhost:3000/tarefas/id:/editar';
          }}>Editar</button>
              <button className="button delete">Excluir</button>
            </div>
          </div>
        ))}
      </div>

      <div className="new-task-container">
        <button className="button" 
        type="button"
        onClick={(e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000/tarefas/nova';
      }}
      >Nova tarefa</button>
      </div>
    </div>
  );
}