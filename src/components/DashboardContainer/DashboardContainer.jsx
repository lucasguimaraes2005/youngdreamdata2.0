export const DashboardContainer = ({students, onDelete}) => {

    const username = localStorage.getItem('username')

    return (
            <>
            
            <div className="dashboardcontainer">
            <h1>Bem vindo, {username}</h1>
                <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        <h2>{student.name}</h2>
                        <p>Sexo: {student.sex}</p>
                        <p>E-mail: {student.email}</p>
                        <p>Idade: {student.age}</p>
                        <p>Telefone: {student.phone}</p>
                        <p>Responsável: {student.guardian}</p>
                        <button onClick={() => onDelete(index)}>Excluir</button>
                    </li>
                ))}
            </ul>
            </div>
            </>
    )
}