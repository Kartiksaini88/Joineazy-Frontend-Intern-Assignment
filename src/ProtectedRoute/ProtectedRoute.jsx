
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {

    const id = JSON.parse(localStorage.getItem('currentUser'))
     
    if(id){
        return children
    }else{
        return <Navigate to={'/register'}></Navigate>
    }
}

export default ProtectedRoute
