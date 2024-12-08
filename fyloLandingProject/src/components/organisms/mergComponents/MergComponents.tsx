import Footer from "../../atoms/footer/Footer"
import GetAccess from "../../atoms/getAccess/GetAccess"
import Header from "../../atoms/header/Header"
import ProductiveSection from "../../molecules/productiveSection/ProductiveSection"
import SectionMerg from "../../molecules/sectionMerg/SectionMerg"


const MergComponents = () => {
  return (
    <div className=" h-[2500px]">
      <div className="mobile:px-[24px] md:px-[80px] mobile:pt-[24px] md:pt-[64px]">
        <Header/>
        <SectionMerg/>
        <ProductiveSection/>
      </div>
      <GetAccess/>
      <Footer/>
    </div>
  )
}

export default MergComponents