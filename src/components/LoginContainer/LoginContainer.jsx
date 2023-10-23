import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



export const LoginContainer = ({users}) => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin(username, password);
    }

    const handleLogin = (username, password) => {
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            localStorage.setItem('username', username)
            navigate('/dashboard')
            toast.success('Login realizado com sucesso!');
        }
        else toast.error('Erro ao fazer o login');
      }


    return (
        <>
            <section id="imgsection">
                <img src="https://cdn.discordapp.com/attachments/1145484562353356810/1165699691195932682/artboa4.png?ex=6547cd70&is=65355870&hm=19d62dd35d092d53f738e1043acd89218a6a282383403334c94f31279203e584&" alt="" />
            </section>
            <section>
                <form onSubmit={handleSubmit}>
                    <h1>Bem-vindo!</h1>
                    <input type="text" placeholder="Login" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Login</button>
                </form>
            </section>
        </>
    )
}
