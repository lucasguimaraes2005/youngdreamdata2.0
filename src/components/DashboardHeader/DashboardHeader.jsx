import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const DashboardHeader = () => {

    const navigate = useNavigate()

    const handleLogout = () => {

        localStorage.clear()
        navigate('/')
        toast.success('Logout efetuado com sucesso!')
    }

    return (
        <>
        <header>
            <h1>YoungDreamData</h1>
            <div>
            <button onClick={() => navigate('/register')}>Registro de alunos</button>
            <button onClick={handleLogout}>Sair</button>
            </div>
        </header>
        </>
    )
}