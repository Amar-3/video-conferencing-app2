import React from 'react'
import './Navbar.css';


export const Navbar = () => {

   // let bttn=document.getElementsByClassName("navButton");
    return (
        <>
            <div className='navParent'>
                <div className="navDiv1">
                    <div className="navLogo">

                    </div>
                    <div className="navheading">
                        <h3 className='navh31'>video calling app</h3>
                    </div>
                </div>

                <div className="navDiv2">
                    <div className="aiButton">
                        <button className='navButton'><span> </span> ai prep</button>
                    </div>
                    <div className="login">
                    <button className='navButton'><span> </span> Register</button>
                    </div>
                </div>




            </div>

        </>
    )
}