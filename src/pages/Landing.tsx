import {TbBulb} from 'react-icons/tb'
import {SiGooglemarketingplatform} from 'react-icons/si'
import {CgWebsite} from 'react-icons/cg'
import {MdSlowMotionVideo, MdOutlineMonetizationOn} from 'react-icons/md'

import Navigation from "../components/Navigation.js"
import VerticalSocialMedia from "../components/VerticalSocialMedia.js"
import Button from "../components/Button.js"
import './../styles/button.css'

import aboutImage from './../assets/images/about-analytics.jpg'
import servicesImage from './../assets/images/services.jpg'
import wheelImage from './../assets/images/wheel-image.svg'
import sidePoints from './../assets/images/points.svg'
import chooseUsImage from './../assets/images/why-choose-us.jpg'

import awardImage from './../assets/images/golden-award.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.js'
import Title from '../components/Title.js'

function Landing(){
    return(
        <div>
           

           {/* -------Footer */}
           <div className='relative top-[44rem]'>
              <Footer/>
            </div>
        </div>
    )
}

export default Landing