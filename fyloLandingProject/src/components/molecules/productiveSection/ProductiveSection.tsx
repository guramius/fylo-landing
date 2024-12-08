import ImgBox from "../../atoms/imigBox/ImgBox"
import PopUp from "../../atoms/popUp/PopUp"
import TextContainer from "../../atoms/textContainer/TextContainer"
import secontIlustartion from '../../images/secondIlustartion.png'
import Bg from '../../images/bg.png'

const ProductiveSection = () => {
  return (
    <div className="relative pt-[160px]">
        <ImgBox className="absolute w-full h-full top-[200px] z-[-5]" src={Bg} alt="bg"/>
        <div className="flex justify-between items-center max-tablet:flex-col-reverse max-tablet:px-[24px] max-tablet:pt-[24px] px-[80px] pt-[64px]">
            <div className="w-[600px] max-tablet:w-[200px]">
                <TextContainer
                    color="text-[#07043B]"
                    fontSize="text-[40px]"
                    fontSizeP="text-[17px]"
                    hText="Stay productive, wherever you are"
                    text="Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs."
                    padding="mt-[38px] mb-[16px]"
                /> 
                <p className="text-[#07043B] mb-[15px] max-tablet:text-center">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>               
                <PopUp/>
            </div>
            <div>
                <ImgBox src={secontIlustartion} alt="ilustartion img" />                
            </div>
        </div>        
    </div>
  )
}

export default ProductiveSection