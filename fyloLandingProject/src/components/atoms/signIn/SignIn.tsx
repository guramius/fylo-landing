import { useNavigate } from "react-router-dom"
const SignIn = () => {
    const nav = useNavigate();
    const backButon = () => {
        nav('/')
    }
  return (
    <div>
        <div>SignIn</div>
        <p className="cursor-pointer" onClick={backButon}>go back</p>        
    </div>

  )
}

export default SignIn