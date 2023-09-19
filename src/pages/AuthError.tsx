import "./AuthError.less";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const AuthError = (props: any) => {
  const navigate = useNavigate();
  const handleLogin = (event: any) => {
    event.preventDefault();
    navigate('/login');
  }
  return (
    <div className='authErrorLayoutWidth'>
      <Header />
      <div className='authErrorContainer'>
        <h2 className='authErrorHeader'>
          Your user session expired.
        </h2>
        {/* {
          props.error?.length > 0 ?
            (
              <div className='errorMessage'>
                <p>{ props.error }</p>
              </div>
            ) :
            null
        } */}
        <a href="#" onClick={handleLogin}>Return to Login</a>
      </div>
    </div>
  )
}

export default AuthError;