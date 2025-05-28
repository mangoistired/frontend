import React from "react";
import "./LoginView.css";

export default function LoginView() {
    return (
        <div className = "login-container">

            <div className = "login-box">

                <h2 className = "login-title">To-Do List 📝</h2>

                <form className = "login-form">

                    <label>
                        <strong>username:</strong>
                        <input type = "text" name = "username" />
                    </label>

                    <label>
                        <strong>senha:</strong>
                        <input type = "password" name = "password" />
                    </label>

                    <button 
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/tarefas';
                    }}
                    type = "submit" className = "login-button">
                        Entrar
                    </button>

                </form>

                <p className = "signup-link">
                    <a href="/signup">ainda não tem uma conta?</a>
                </p>

            </div>
            
        </div>
    );
}