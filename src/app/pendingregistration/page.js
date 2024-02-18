import React from 'react'
import "./page.css"
import Image from 'next/image'
const registeredevents = () => {
    return (
        <>
            <div className='absolute inset-0 -z-10'>
                <Image src="/images/about/about.png" className='' alt="" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100vh' }}></Image>
            </div>
            <div className="container">

                <h1 className="heading">Your Registered Events !!</h1>

                <div className="box-container">

                    <div className="box">

                        <h3>HTML 5</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
                        <button className="btn" style={{ textDecoration: 'none' }}>read more</button>
                    </div>

                    <div className="box">

                        <h3>CSS 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
                        <button className="btn" style={{ textDecoration: 'none' }}>read more</button>
                    </div>

                    <div className="box">

                        <h3>JavaScript</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
                        <button className="btn" style={{ textDecoration: 'none' }}>read more</button>
                    </div>

                    <div className="box">

                        <h3>SASS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
                        <button className="btn" style={{ textDecoration: 'none' }}>read more</button>
                    </div>

                    <div className="box">

                        <h3>JQuery</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
                        <button className="btn" style={{ textDecoration: 'none' }}>read more</button>
                    </div>

                    <div className="box">

                        <h3>React.js</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
                        <button className="btn" style={{ textDecoration: 'none' }}>read more</button>
                    </div>

                </div>

            </div>
        </>


    )
}

export default registeredevents
