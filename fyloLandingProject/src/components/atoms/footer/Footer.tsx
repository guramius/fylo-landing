import WhiteLogo from '../../images/whiteLogo.png'

const Footer = () => {
  return (
    <div className='flex justify-between pt-[80px] pr-[200px] pb-[86px] pl-[80px] items-baseline max-tablet:flex-col  bg-[#07043B] max-tablet:pl-[40px] max-tablet:pr-[0px] text-white'>
      <div>
        <img src={WhiteLogo} />
        <p className='flex items-center gap-[5px] mt-[37px] mb-[16px] hover:text-[#6C9BFF] cursor-pointer transition duration-300 ease-in-out '>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M20 15.5C18.8 15.5 17.6 15.3 16.4 14.9C16.1 14.8 15.7 14.9 15.4 15.1L13.2 17.3C10.4 15.9 8.1 13.5 6.6 10.7L8.8 8.5C9.1 8.2 9.2 7.8 9 7.5C8.7 6.4 8.5 5.2 8.5 4C8.5 3.4 8.1 3 7.5 3H4C3.4 3 3 3.4 3 4C3 13.4 10.6 21 20 21C20.6 21 21 20.6 21 20V16.5C21 15.9 20.6 15.5 20 15.5ZM19 12H21C21 7 17 3 12 3V5C15.9 5 19 8.1 19 12ZM15 12H17C17 9.2 14.8 7 12 7V9C13.7 9 15 10.3 15 12Z" fill="white"/>
          </svg>
          Phone: +1-543-123-4567
        </p>
        <p className='flex items-center gap-[5px] hover:text-[#6C9BFF] cursor-pointer transition duration-300 ease-in-out'>
          <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
            <path fillRule="evenodd" clipRule="evenodd" d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H18V9.2L12 13L6 9.2V18H4V6H5.2L12 10.2L18.8 6H20V18Z" fill="white"/>
          </svg>
          example@fylo.com
        </p>
      </div>
      <div className='flex gap-[200px] max-tablet:flex-col max-tablet:gap-8'>
        <div>
          <p className='hover:text-[#6C9BFF] cursor-pointer transition duration-300 ease-in-out'>About Us</p>
          <p className='hover:text-[#6C9BFF] cursor-pointer transition duration-300 ease-in-out'>Jobs</p>
          <p className='hover:text-[#6C9BFF] cursor-pointer transition duration-300 ease-in-out'>Press</p>
          <p className='hover:text-[#6C9BFF] cursor-pointer transition duration-300 ease-in-out'>Blog</p>
        </div>
        <div>
          <p className='hover:text-[#6C9BFF] cursor-pointer transition duration-300 ease-in-out'>Contact Us</p>
          <p className='hover:text-[#6C9BFF] cursor-pointer transition duration-300 ease-in-out'>Terms</p>
          <p className='hover:text-[#6C9BFF] cursor-pointer transition duration-300 ease-in-out'>Privacy</p>
        </div>
      </div>
      <div className='flex gap-3 max-tablet:m-auto'>
        <svg className='hover:stroke-[#6C9BFF] cursor-pointer transition duration-300 ease-in-out' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#07043B" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="3"/>
          <circle cx="16.5" cy="7.5" r="1"/>
        </svg>
        <svg className='hover:stroke-[#6C9BFF] cursor-pointer transition duration-300 ease-in-out' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#07043B" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 8h-2V6a1 1 0 0 1 1-1h1V3h-2c-1.65 0-3 1.35-3 3v2H9v3h2v8h3v-8h2l1-3z"/>
        </svg>
        <svg className='hover:stroke-[#6C9BFF] cursor-pointer transition duration-300 ease-in-out' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#07043B" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0 0 21 5a8 8 0 0 1-2.3.6A4.2 4.2 0 0 0 20.3 4a8.5 8.5 0 0 1-2.7 1A4.2 4.2 0 0 0 12 9a4.6 4.6 0 0 0 .1.9A11.9 11.9 0 0 1 4 5.2a4.2 4.2 0 0 0-.6 2.1A4.2 4.2 0 0 0 6 11a4.2 4.2 0 0 1-1.9-.5c0 1.8 1.3 3.3 3.1 3.6a4 4 0 0 1-1.9.1c.5 1.6 2 2.8 3.7 2.8a8.5 8.5 0 0 1-5.3 1.8"/>
        </svg>
      </div>
    </div>
  )
}

export default Footer