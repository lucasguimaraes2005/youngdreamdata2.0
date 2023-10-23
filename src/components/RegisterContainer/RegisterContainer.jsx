import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const RegisterContainer = ({onRegister}) => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [guardian, setGuardian] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!name || !sex || !email || !age || !phone || !guardian) {
            toast.error('Por favor, preencha todos os campos.')
            return
        }

        onRegister(name, sex, email, age, phone, guardian);
        toast.success('Estudante cadastrado com sucesso!');
    }

    return (
        <>
            <section id="registerimg">
            <img src="https://cdn.discordapp.com/attachments/1145484562353356810/1165699691195932682/artboa4.png?ex=6547cd70&is=65355870&hm=19d62dd35d092d53f738e1043acd89218a6a282383403334c94f31279203e584&" alt="" />
            </section>
            <section>
                <form onSubmit={handleSubmit}>
                    <h1>Registro de alunos</h1>
                    <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Sexo" onChange={(e) => setSex(e.target.value)}/>
                    <input type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" placeholder="Idade" onChange={(e) => setAge(e.target.value)}/>
                    <input type="text" placeholder="Telefone" onChange={(e) => setPhone(e.target.value)}/>
                    <input type="text" placeholder="Nome do responsável" onChange={(e) => setGuardian(e.target.value)}/>
                    <button type="submit">Registrar</button>
                    <button onClick={() => navigate('/dashboard')}>Voltar</button>
                </form>
            </section>
        </>
    )
}