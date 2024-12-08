import ImgBox from "../../atoms/imigBox/ImgBox"
import InputElmenets from "../../atoms/inputElements/InputElmenets"
import TextContainer from "../../atoms/textContainer/TextContainer"
import IlustartionOne from '../../images/illustration_1-01.png'

const SectionMerg = () => {
  return (
    <div className="flex justify-between items-center max-tablet:flex-col-reverse  mt-[80px]">  
      <div className=" w-[50%] max-tablet:w-full">
        <TextContainer
          color="text-[#07043B]"
          fontSize="text-[40px] font-bold"
          fontSizeP="text-[17px]"
          hText="All your files in one secure location, accessible anywhere."
          text="Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers."
          padding="pt-[15px] pb-[25px]"
        />    
        <InputElmenets
          className="flex gap-4 max-tablet:block"
          placeholder="Enter your email…"
        />        
      </div>
      <div className="w-[50%] max-tablet:w-full">
        <ImgBox
          src={IlustartionOne}
          alt="logo"
          className="mr-auto"
        />
      </div>
    </div>
  )
}

export default SectionMerg