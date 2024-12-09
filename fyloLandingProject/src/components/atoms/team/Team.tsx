import { useNavigate } from "react-router-dom"


const Team = () => {
    const navigateBack = useNavigate()

    const navBackHome = () => {
        navigateBack('/')
    }
  return (
    <div>
        <div>Team</div>
        <p className="cursor-pointer" onClick={navBackHome}>wtf broo?! go back</p>
    </div>
  )
}

export default Team