import { useNavigate } from "react-router-dom"

export const DashboardHeader = () => {

    const navigate = useNavigate()

    return (
        <>
        <header>
            <h1>YoungDreamData</h1>
            <button onClick={() => navigate('/register')}>Registro de alunos</button>
        </header>
        </>
    )
}