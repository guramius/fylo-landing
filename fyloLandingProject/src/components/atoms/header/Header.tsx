import Logo from '../../images/Group 5.png'
const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <div>
            <img src={Logo} alt="logo" />
        </div>
        <div>
            <ul className='flex justify-between md:w-[206px] mobile:w-[140px]'>
                <li className="font-raleway text-[#07043B] capitalize mobile:text-[12px] md:text-[16px]">Features</li>
                <li className="font-raleway text-[#07043B] capitalize mobile:text-[12px] md:text-[16px]">Team</li>
                <li className="font-raleway text-[#07043B] capitalize mobile:text-[12px] md:text-[16px]">Sign In</li>
            </ul>            
        </div>
    </div>
  )
}

export default Header