import "./About.less";
import placeholder from "../../assets/img/static_placeholder.jpg";
import ReusableCard from "../../components/ReusableCard/ReusableCard";

const About = () => {
  return (
    <>
      <div className='grey-box aboutContainer'>
        <h2 className='aboutHeader'>
          About iJavaScript
        </h2>
        <hr />
        <div className='placeholderFlex'>
          <img className='placeholderScaled' src={placeholder} alt="placeholder" />
          <p>
            iJavaScript is a research group, founded to check different javascript frameworks based on different design patterns. <br /><br />During Kick-off it will test React, Angular, Knockout and Ember JS features. This use case will prove different aspects of framework capabilities.
          </p>
        </div>
        <h3 className='reusableComponentHeader'>
          Re-usable Component
        </h3>
        <div className='reusableComponentFlex'>
          <ReusableCard key="card1"/>
          <ReusableCard key="card2"/>
        </div>
      </div>
    </>
  )
}

export default About;