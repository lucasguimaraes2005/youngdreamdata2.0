import { RegisterContainer } from "../components/RegisterContainer/RegisterContainer"

export const RegisterPage = ({onRegister}) => {
    return (
        <>
        <RegisterContainer onRegister={onRegister} />
        </>
    )
}