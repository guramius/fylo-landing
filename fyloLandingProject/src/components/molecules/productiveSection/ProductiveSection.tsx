import ImgBox from "../../atoms/imigBox/ImgBox"
import PopUp from "../../atoms/popUp/PopUp"
import TextContainer from "../../atoms/textContainer/TextContainer"
import secontIlustartion from '../../images/secondIlustartion.png'
import Bg from '../../images/bg.png'

const ProductiveSection = () => {
  return (
    <div className="relative">
        <ImgBox className="absolute z-[-5]" src={Bg} alt="bg"/>
        <div className="flex justify-between items-center">
            <div className="w-[500px]">
                <TextContainer
                    color="text-[#07043B]"
                    fontSize="text-[40px]"
                    fontSizeP="text-[17px]"
                    hText="Stay productive, wherever you are"
                    text="Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs."
                /> 
                <p className="text-[#07043B]">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>               
            </div>
            <div>
                <ImgBox src={secontIlustartion} alt="ilustartion img" />                
            </div>
        </div>        
        <PopUp/>
    </div>
  )
}

export default ProductiveSection