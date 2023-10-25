import { Route, Routes, useNavigate } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { Dashboard } from "../pages/Dashboard"
import { useEffect, useState } from "react"


const users = [
    { username: 'admin', password: 'admin123'},
    { username: 'lucas', password: 'lucas123'},
    { username: 'mateus', password: 'mateus123'},
    { username: 'renan', password: 'renan123'},
  ]

  const students = [
    { name: 'Paulo', sex: 'Homem', email: 'paulo@mail.com', age: '10', phone: '(27) 2614-2476', guardian: 'João'},
    { name: 'Maria', sex: 'Mulher', email: 'maria@mail.com', age: '11', phone: '(27) 2582-5264', guardian: 'Ana'},
    { name: 'João', sex: 'Homem', email: 'joao@mail.com', age: '12', phone: '(27) 2231-5705', guardian: 'Paulo'},
    { name: 'Ana', sex: 'Mulher', email: 'ana@mail.com', age: '13', phone: '(27) 2263-9430', guardian: 'Maria'},
    { name: 'Carlos', sex: 'Homem', email: 'carlos@mail.com', age: '14', phone: '(27) 3180-8621', guardian: 'Roberto'},
    { name: 'Fernanda', sex: 'Mulher', email: 'fernanda@mail.com', age: '15', phone: '(27) 3371-2333', guardian: 'Juliana'},
    { name: 'Roberto', sex: 'Homem', email: 'roberto@mail.com', age: '16', phone: '(27) 3773-3481', guardian: 'Carlos'}
  ];


export const RoutesMain = () => {

    const [studentList, setStudentList] = useState(students);
    const navigate = useNavigate()



    const handleDelete = (index) => {
        const newStudents = [...studentList]
        newStudents.splice(index, 1)
        setStudentList(newStudents)
        localStorage.setItem('students', JSON.stringify(newStudents))
    }


    const handleRegister = (name, sex, email, age, phone, guardian) => {
        const newStudents = [...studentList, { name, sex, email, age, phone, guardian }];
        setStudentList(newStudents);
        localStorage.setItem('students', JSON.stringify(newStudents));
        navigate('/dashboard')
      };

      useEffect(() => {
        const savedStudents = localStorage.getItem('students');
        if (savedStudents) {
            setStudentList(JSON.parse(savedStudents))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('students', JSON.stringify(studentList));
    }, [studentList]);

    return (
        <>

            <Routes>

                <Route path="/" element={<LoginPage users={users}/>}></Route>

                <Route path="/register" element={<RegisterPage onRegister={handleRegister}/>}></Route>
                <Route path="/dashboard" element={<Dashboard students={studentList} onDelete={handleDelete}/>}></Route>
            </Routes>

        </>
    )
}