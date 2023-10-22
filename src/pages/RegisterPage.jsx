import { RegisterContainer } from "../components/RegisterContainer/RegisterContainer"

export const RegisterPage = ({onRegister}) => {
    return (
        <>
        <div className="registercontainer">
        <RegisterContainer onRegister={onRegister} />
        </div>
        </>
    )
}