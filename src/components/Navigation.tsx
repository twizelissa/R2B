import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='bg-red'>
        <div className="flex">
            <div><img src='./../assets/images/RtoB Whitelogo.png' alt="" /></div>

            <ul className='flex'>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/#"}>About us</Link></li>
                <li><Link to={"/#"}>Services</Link></li>
                <li><Link to={"/#"}>Education</Link></li>
                <li><Link to={"/#"}>News</Link></li>
                <li><Link to={"/#"}>Careers</Link></li>
            </ul>
        </div>
    </div>
  )
}
