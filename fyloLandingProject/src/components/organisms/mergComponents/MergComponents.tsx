import Footer from "../../atoms/footer/Footer"
import GetAccess from "../../atoms/getAccess/GetAccess"
import Header from "../../atoms/header/Header"
import ProductiveSection from "../../molecules/productiveSection/ProductiveSection"
import SectionMerg from "../../molecules/sectionMerg/SectionMerg"


const MergComponents = () => {
  return (
    <div>
      <div className="max-tablet:px-[24px] max-tablet:pt-[24px] px-[80px] pt-[64px]">
        <Header/>
        <SectionMerg/>
      </div>
      <ProductiveSection/>
      <GetAccess/>
      <Footer/>
    </div>
  )
}

export default MergComponents