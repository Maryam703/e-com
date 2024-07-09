import { useNavigate } from 'react-router-dom';

function ProtectedRoutesForUser({children}) {
    const user = JSON.parse(localStorage.getItem("users"));
    const navigate = useNavigate()
    if(user.role === "user"){
        return children
    }else{
       return(navigate("/Login"))
    }
}

export default ProtectedRoutesForUser
