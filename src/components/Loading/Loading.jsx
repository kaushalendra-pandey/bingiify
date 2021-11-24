import React from 'react'
import { Spinner,LockBody,Picture } from '../styles/loading'

const Loading = () => {
    return (
        <Spinner>
            <LockBody/>
            <Picture src="/images/users/1.png" alt="Loading"/>
        </Spinner>
    )
}

export default Loading
