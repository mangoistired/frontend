import React from "react";
import "./SignupView.css";

export default function SignupView() {
    return (
        <div className = "signup-container">

            <div className = "signup-box">

                <h2 className = "signup-title">
                    To-Do List 📝
                </h2>

                <form className = "signup-form">

                    <label>
                        <strong>e-mail:</strong>
                        <input type = "email" name = "email" required />
                    </label>

                    <label>
                        <strong>nome:</strong>
                        <input type = "text" name = "firstName" required />
                    </label>

                    <label>
                        <strong>sobrenome:</strong>
                        <input type = "text" name = "lastName" required />
                    </label>

                    <label>
                        <strong>username:</strong>
                        <input type = "text" name = "username" required />
                    </label>

                    <label>
                        <strong>senha:</strong>
                        <input type = "password" name = "password" required />
                    </label>

                    <button type = "submit" className = "signup-button">
                        Criar conta
                    </button>

                </form>

                <p className = "signup-login-link">
                    <a href = "/">já tem uma conta?</a>
                </p>

            </div>

        </div>
    );
}