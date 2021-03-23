import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import TestExcerpt from './TestExcerpt'


const TestComponent = () => {

    const [users, setUsers] = useState([
        { id: 1, name: 'Петр' },
        { id: 2, name: 'Сергей' },
        { id: 3, name: 'Евгения' },
    ])

    const [newUser, setNewUser] = useState({
        id: 0, name: ''
    })

    const handleClickAdd = (event) => {
        event.preventDefault()
        setUsers((prevState)=>{
            return [...prevState, newUser]
        })
        setNewUser({id: 0, name: ''})
    }

    const changeInputHandler = (event) => {
        setNewUser(
            { id: Math.random(), name: event.target.value }
            )
    }

    const deleteUserHandler = (userId) => {
        let newUsers = users.filter((user)=>{
            return user.id != userId
        })
        setUsers(newUsers)
    }

    let content;
    if(users){
        content = users.map((user)=>{
            return (
                <TestExcerpt key={user.id} user={user} deleteUserHandler={deleteUserHandler}/>
            )
        })
    }

    return(
        <>
        <Container className="mt-3">
            <Form >

                <Form.Group controlId="text">
                    <Form.Label >Укажите имя</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Введите имя" 
                        value={newUser.name}
                        onChange={(event)=>changeInputHandler(event)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={(event) => handleClickAdd(event)}>
                    Submit
                </Button>
            </Form> 
        </Container>
            
        <Container className="mt-3">
            <ul>
                {content ? content : <div>Информации нет</div>}
            </ul>
        </Container> 
        </>
    )

}

export default TestComponent;