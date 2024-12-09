import { useNavigate } from "react-router-dom"
import Logo from '../../images/Group 5.png'

const Header = () => {
  const navigate = useNavigate()
  
  const featuresClick = () => {
    navigate('/features')
  }
  const teamClick = () => {
    navigate('/team')
  }
  const signInClick = () => {
    navigate('/sign-in')
  }
  return (
    <div className='flex items-center justify-between'>
        <div>
            <img className='max-tablet:w-20' src={Logo} alt="logo" />
        </div>
        <div>
            <ul className='flex justify-between w-[206px] max-tablet:w-[140px]'>
                <li onClick={featuresClick} className="font-raleway text-[#07043B] cursor-pointer capitalize max-tablet:text-[12px] md:text-[16px]">Features</li>
                <li onClick={teamClick} className="font-raleway text-[#07043B] cursor-pointer capitalize max-tablet:text-[12px] md:text-[16px]">Team</li>
                <li onClick={signInClick} className="font-raleway text-[#07043B] cursor-pointer capitalize max-tablet:text-[12px] md:text-[16px]">Sign In</li>
            </ul>            
        </div>
    </div>
  )
}

export default Header