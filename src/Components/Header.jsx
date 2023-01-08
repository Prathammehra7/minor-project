import React from 'react'

const Header = ({ title, children }) => {
    return (

        <header className='header'>
            <div className="header__container">
                <div className="header__container-bg">
                    <img src="https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
                <div className="header__content">
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
            </div>

        </header>


    )
}

export default Header