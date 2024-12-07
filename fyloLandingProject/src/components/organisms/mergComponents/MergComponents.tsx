import Header from "../../atoms/header/Header"
import SectionMerg from "../../molecules/sectionMerg/SectionMerg"


const MergComponents = () => {
  return (
    <div className="mobile:px-[24px] md:px-[80px] mobile:pt-[24px] md:pt-[64px]">
      <Header/>
      <SectionMerg/>
    </div>
  )
}

export default MergComponents