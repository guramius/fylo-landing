import ImgBox from "../../atoms/imigBox/ImgBox"
import InputElmenets from "../../atoms/inputElements/InputElmenets"
import TextContainer from "../../atoms/textContainer/TextContainer"
import IlustartionOne from '../../images/illustration_1-01.png'

const SectionMerg = () => {
  return (
    <div className="flex justify-between items-center max-tablet:flex-col-reverse">  
      <div className=" mobile:w-[50%]">
        <TextContainer
          color="text-[#07043B]"
          fontSize="text-[40px]"
          fontSizeP="text-[17px]"
          hText="All your files in one secure location, accessible anywhere."
          text="Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers."
        />    
        <InputElmenets/>        
      </div>
      <div className=" mobile:w-[50%]">
        <ImgBox
          src={IlustartionOne}
          alt="logo"
          className=""
        />
      </div>

    </div>
  )
}

export default SectionMerg