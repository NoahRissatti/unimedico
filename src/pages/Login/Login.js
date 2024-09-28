import { useState } from "react"
import { useAppContext } from "AppContext";
import "./Login.css"

export function Login() {
    const { verificarUsuario } = useAppContext();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
    }

    const handleLogin = () => {
        const usuario = verificarUsuario(email, senha);
        const habilitaAcesso = (url) => {window.location.href = url}
        if(usuario === 'medico')
             habilitaAcesso('http://localhost:3000/medic');
        if(usuario === 'paciente')
            habilitaAcesso('http://localhost:3000/pacient');
        if(usuario === 'admin')
            habilitaAcesso('http://localhost:3000/admin');
        if(usuario === 'invalido')
            window.alert('Credenciais Inválidas');
    }

    return (
        <div>
            <div className="banner">
                <h1>Unimedico</h1>
                <p>Cuidando do seu futuro</p>
            </div>
            <div className="loginCard">
                <h2>Insira suas credencias</h2>
                <div className="credenciais">
                    <labe>Email:</labe>
                    <input onChange={handleChangeEmail}></input>
                    <labe>Senha:</labe>
                    <input onChange={handleChangeSenha}></input>
                </div>
                <button onClick={handleLogin} className="loginButton">Entrar</button>
            </div>
        </div>
    )
}