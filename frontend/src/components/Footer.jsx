import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div>

        {/* ----Left Section ---- */}
        <div>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eos, impedit in quo sint ipsam dicta deleniti debitis qui enim dolores nostrum, deserunt, saepe repellendus. Tempora tenetur dolorum voluptas officia?</p>
        </div>

        {/* ----Center Section ---- */}
        <div>
            <p>COMPANY</p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

        {/* ----Right Section ---- */}
        <div>
            
        </div>

      </div>
    </div>
  )
}

export default Footer
