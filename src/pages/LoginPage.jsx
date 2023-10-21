import { LoginContainer } from "../components/LoginContainer/LoginContainer"

export const LoginPage = ({users}) => {
    return (
        <>
            <LoginContainer users={users}/>
        </>
    )
}