import "./Authenticating.less";
import Header from "../components/Header";

const Authenticating = () => {
  return (
    <div className='authenticatingLayoutWidth'>
      <Header />
      <div className='authenticatingContainer'>
        <h2 className='authenticatingHeader'>
          Authenticating...
        </h2>
      </div>
    </div>
  )
}

export default Authenticating;