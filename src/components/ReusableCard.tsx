import './ReusableCard.less';
import { useState } from 'react';

const ReusableCard = () => {
  const [isRed, setRed] = useState(false);
  const toggleColor = () => {
    setRed(!isRed);
  }

  return (
    <div
      onClick={toggleColor}
      className={(isRed ? 'red' : 'yellow') + ' card'}/>
  )
}
export default ReusableCard;