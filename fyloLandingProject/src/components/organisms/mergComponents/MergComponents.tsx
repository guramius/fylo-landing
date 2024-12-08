import Header from "../../atoms/header/Header"
import ProductiveSection from "../../molecules/productiveSection/ProductiveSection"
import SectionMerg from "../../molecules/sectionMerg/SectionMerg"


const MergComponents = () => {
  return (
    <div className="mobile:px-[24px] md:px-[80px] mobile:pt-[24px] md:pt-[64px] h-[1500px]">
      <Header/>
      <SectionMerg/>
      <ProductiveSection/>
    </div>
  )
}

export default MergComponents