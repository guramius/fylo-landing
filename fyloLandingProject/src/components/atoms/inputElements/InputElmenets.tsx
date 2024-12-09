import { useState } from "react";
import InputProps from "../../interface"

const InputElmenets = ({placeholder, className, styleButton}:InputProps) => {
  const [values, setValue] = useState<string>("")
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  const inputTarget = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(values)) {
      setValidationMessage("Correct, well done!");
    } else {
      setValidationMessage("Invalid validation");
    }
  }
  return (
    <>  
      <div className={`${className} max-tablet:text-center`}>
        <div>
          <input type="text" 
            value={values}
            onChange={(e) => setValue(e.target.value)}
            className={`${styleButton} 
            w-[320px] max-tablet:w-[304px] max-tablet:mb-4 h-[45px] border-[0.5px] border-[#2F65F8] pl-[21px] rounded-[5px] outline-none drop-shadow-[2px_3px_6px_rgba(0,0,0,0.16)] transition duration-300 `} placeholder={placeholder} />
            {validationMessage && (
              <div className={`text-${validationMessage == "Invalid validation" ? "red" : "green"}`}>
                {validationMessage}
              </div>
            )}
        </div>
        <div>
          <button onClick={inputTarget} className="w-[200px] max-tablet:w-[304px] h-[45px] bg-[#2F65F8] hover:bg-[#6C9BFF] transition duration-300 rounded-[5px] text-[white] text-[14px] drop-shadow-[2px_3px_6px_rgba(0,0,0,0.16)] ">Get Started</button>
        </div>
      </div>
    </>
  )
}

export default InputElmenets