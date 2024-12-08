interface InputProps {
  placeholder: string;
  className?:string;
  styleButton?:string;
}

const InputElmenets = ({placeholder, className, styleButton}:InputProps) => {
  return (
    <>  
      <div className={`${className} max-tablet:text-center`}>
        <div>
          <input type="text" className={`${styleButton} w-[320px] max-tablet:w-[304px] max-tablet:mb-4 h-[45px] border-[0.5px] border-[#2F65F8] pl-[21px] rounded-[5px] outline-none drop-shadow-[2px_3px_6px_rgba(0,0,0,0.16)] transition duration-300 `} placeholder={placeholder} />
        </div>
        <div>
          <button className="w-[200px] max-tablet:w-[304px] h-[45px] bg-[#2F65F8] hover:bg-[#6C9BFF] transition duration-300 rounded-[5px] text-[white] text-[14px] drop-shadow-[2px_3px_6px_rgba(0,0,0,0.16)] ">Get Started</button>
        </div>
      </div>
    </>
  )
}

export default InputElmenets