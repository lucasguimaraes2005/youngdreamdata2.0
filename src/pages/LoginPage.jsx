import { LoginContainer } from "../components/LoginContainer/LoginContainer"

export const LoginPage = ({users}) => {
    return (
        <>
            <div className="logincontainer"> 
            <LoginContainer users={users}/>
            </div>
        </>
    )
}