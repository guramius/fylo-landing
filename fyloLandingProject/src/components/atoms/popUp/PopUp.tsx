import { useState } from 'react'
import Drop from '../../images/drop.png'
import Avatar from '../../images/avatar.png'

const PopUp = () => {
    const [active, setAvtive] = useState<boolean>(false)

    const handlerClick = () => {
        setAvtive(!active)
    }
    
  return (
    <div className='relative'>
        <div className='flex items-center underline max-tablet:justify-center decoration-[#3DA08F]'>
            <button onClick={handlerClick} className='text-[#3DA08F]'>
                See how Fylo works
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g filter="url(#filter0_d_0_126)">
                <circle cx="8" cy="8" r="6" fill="#3DA08F"/>
                </g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.58235 6L8.21938 6.35L9.67123 7.75H5.33333V8.25H9.67123L8.21938 9.65L8.58235 10L10.6564 8L8.58235 6Z" fill="white"/>
                <defs>
                <filter id="filter0_d_0_126" x="0" y="0" width="16" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.239216 0 0 0 0 0.627451 0 0 0 0 0.560784 0 0 0 0.793507 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_126"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_126" result="shape"/>
                </filter>
                </defs>
            </svg>
        </div>
        
            {active &&
               <div className=' max-tablet:text-center max-tablet:text-[24px]'>
                <div className='absolute px-[32px] py-[32px] w-[356px] mt-[45px] bg-white shadow-[0px_0px_10px_5px_rgba(56,56,56,0.05)]'>
                    <img src={Drop} alt="drop" />
                    <p className='text-[13px] mt-[16px] mb-[16px] text-[#07043B]'>
                        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                    </p>
                    <div className='flex gap-2'>
                        <div>
                            <img src={Avatar} alt="avatar icone" />
                        </div>
                        <div>
                            <p className='font-bold text-[#07043B] text-[11px]'>Kyle Burton</p>
                            <p className='text-[#07043B] text-[8px]'>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            </div>    
            }
        </div>
  )
}

export default PopUp