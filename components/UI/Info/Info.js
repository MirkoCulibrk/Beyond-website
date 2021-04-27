import React from 'react'

const Info = ({type,message}) => {
    return (
        <div className={`alert ${type}`}>
            {message}
        </div>
    )
}

export default Info
