import Header from '../components/Header';
import './Login.less';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react'
import { IS_AUTHENTICATED, LOG_IN } from '../sagas/constants';
import {
  useNavigate
} from "react-router-dom";

const Login = (props: any) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
  });

  const {
    dispatch  
  } = props;

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // You can handle form submission logic here, e.g., send data to a server or perform client-side validation
    console.log('Form submitted with data:', event);
    dispatch({
      type: LOG_IN,
      payload: {
        formData
      }
    });
  };

  useEffect(() => {
    dispatch({
      type: IS_AUTHENTICATED,
    });
  }, [dispatch])

  useEffect(() => {
    if (props.isUserAuthenticated === true) {
      navigate('/home/dashboard');
    }
  }, [props.isUserAuthenticated]);

  return (
    <div>
      <Header />
      <div className='loginContainer'>
        <div className='errorMessage'>
          <p>Error: Invalid User Credentials!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='formContainer'>
            <div className='formFieldFlex'>
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter User ID"
                name="userId"
                required
                value={formData.userId}
                onChange={handleInputChange}
              />
            </div>
            <div className='formFieldFlex'>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  )
}
const mapStateToProps = (state:any) => ({
  isUserAuthenticated: state.authenticateUser.isUserAuthenticated,
  customerId: state.authenticateUser.customerId
});
export default connect(mapStateToProps, null)(Login);