import {BiLogoFacebook, BiLogoInstagram} from 'react-icons/bi'
import {CiTwitter, CiYoutube} from 'react-icons/ci'
import { Link } from 'react-router-dom'

export default function VerticalSocialMedia() {
  return (
    <div>
        <div className="flex flex-col items-center gap-8 md:gap-10 text-secondColor">
            <div className="border h-16 md:h-24 border-secondColor"></div>
            <Link to={"/#"}> <BiLogoFacebook className="text-3xl md:text-4xl"/> </Link>
            <Link to={"/#"}> <CiTwitter className="text-3xl md:text-4xl"/></Link>
            <Link to={"/"}> <BiLogoInstagram className="text-3xl md:text-4xl"/> </Link>
            <Link to={"/#"}> <CiYoutube className="text-3xl md:text-4xl"/></Link>
            <div className="border h-16 md:h-24 border-secondColor"></div>
        </div>
    </div>
  )
}
