import React from 'react'
import { Spinner,LockBody,Picture } from '../styles/loading'
import PropTypes from "prop-types"

const Loading = ({photoURL}) => {
    return (
        <Spinner>
            <LockBody/>
            <Picture src={`/images/users/${photoURL}.png`} alt="Loading"/>
        </Spinner>
    )
}

export default Loading
Loading.propTypes = {
    photoURL: PropTypes.string
}