import Logo from './../assets/images/RtoB Whitelogo_横長.png'

export default function Footer() {
  return (
    <div className="">

       <div className="flex">
         {/* Logo */}
         <div className="">
            <img src={Logo} alt="logo" />
        </div>

        {/* Links */}
        <div className="flex items-start">
            <div className="">Here</div>
        </div>
       </div>
    </div>
  )
}
