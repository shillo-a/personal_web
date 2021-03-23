import React from 'react'
import { Button } from 'react-bootstrap'

const TestExcerpt = ( {user, deleteUserHandler} ) => {
    return (
        <>
        <li className="mt-3">
            {user.name}
            <Button size="sm" className="ml-3" onClick={()=>deleteUserHandler(user.id)}>Удалить</Button>
        </li>
        </>
    )
}

export default TestExcerpt
