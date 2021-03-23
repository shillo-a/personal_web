import React from 'react'
import { Spinner } from 'react-bootstrap'

const PageLoadingSpinner = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{
            position: 'fixed',
            padding: '0',
            margin: '0',

            top: '0',
            left: '0',

            width: '100%',
            height: '100%',
            background: 'rgba(255,255,255)',
            zIndex: '99999'
        }}>
            <div className='text-center'>
            <strong>Страница загружается</strong>
            
            <hr></hr>
            <Spinner animation="grow" variant="primary" style={{width: '1rem', height: '1rem',}}/> <span> </span>
            <Spinner animation="grow" variant="primary" style={{width: '1rem', height: '1rem',}}/> <span> </span>
            <Spinner animation="grow" variant="primary" style={{width: '1rem', height: '1rem',}}/>
            
            </div>
            
        </div>
    )
}

export default PageLoadingSpinner
