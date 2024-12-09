import { useNavigate } from "react-router-dom"

const Features = () => {
    const navigateBack = useNavigate()

    const navBackHome = () => {
        navigateBack('/')
    }
  return (
    <div>
        <div>Features</div>
        <p className="cursor-pointer" onClick={navBackHome}>if u want to back</p>        
    </div>

  )
}

export default Features