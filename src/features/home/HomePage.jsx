import React from 'react'

const HomePage = ({history}) => {
    return (
        <div>
            <p>Welcome</p>
            <button onClick={ () => history.push('/about') }> Enter </button>
        </div>
    )
}

export default HomePage

