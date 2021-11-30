import React from 'react'

const LoadingComponent = () => {
    return (
        <div className='loading__container'>            

            <div className="loading__cube-container sk-cube-grid">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
            </div>

            <h1 className='loading__title'>Loading...</h1>
        </div>
    )
}

export default LoadingComponent;