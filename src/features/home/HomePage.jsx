import React from 'react'

const HomePage = ({history}) => {
    return (
        <div class="home_page">
            <a onClick={ () => history.push('/about') } class="welcome_button" >
                <p class="landing_title" >Richie Wu</p>
                <p>Product | Engineering </p>
            </a>
        </div>
        
    )
}

export default HomePage

