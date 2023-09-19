import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Dashboard.less";
import idPic from "../assets/img/placeholder-id.jpg";
import { RETRIEVE_USER_DETAILS } from "../sagas/constants";
import { Transaction } from "@/types";

const Dashboard = (props: any) => {
  const {
    dispatch  
  } = props;

  const [transactionList, setTransactionList] = useState<Transaction[]>([]);
  const [userName, setUserName] = useState<string>('');
  const [userBalance, setUserBalance] = useState<string>('');
  const [userLastLogin, setUserLastLogin] = useState<string>('');

  useEffect(() => {
    if (props.customerId?.length > 0 ) {
      dispatch({
        type: RETRIEVE_USER_DETAILS,
        payload: {
          customerId: props.customerId,
          userToken: props.userToken
        }
      });
    }
  },[dispatch, props.customerId]);

  useEffect(() => {
    if (props.retrieveUserDetails.customer.id) {
      setUserName(props.retrieveUserDetails.customer.name);
      setUserBalance(props.retrieveUserDetails.customer.balance);
      setUserLastLogin(props.retrieveUserDetails.customer.last_login);
      setTransactionList(props.retrieveUserDetails.customer.transaction);
    }
  }, [props.retrieveUserDetails.customer.id]);

  const [isSmsChecked, setSmsChecked] = useState(false);
  const [isNewsletter, setNewsletter] = useState(false);
  const [isFlyer, setFlyer] = useState(false);

  return (
    <>
      <div className='grey-box dashboardContainer'>
        <div className='profileFlex'>
          <img className='idPicClass' src={idPic} alt="idPic" />
          <div className='profileText'>
            <h2>Welcome {userName?.length > 0 ? userName : 'Skeleton'}</h2>
            <p>Last login: {userLastLogin?.length > 0 ? userLastLogin : 'Skeleton'}</p>
          </div>
        </div>
        <hr />
        <div className='accountBalanceTable'>
          <h3>Account Balance: {userBalance?.length > 0 ? userBalance : 'Skeleton'}</h3>
          {transactionList && transactionList.length > 0 ?
            (<div className='gridContainer'>
              <span id='header1'><b>Date</b></span>
              <span id='header2'><b>Description</b></span>
              <span id='header3'><b>Amount</b></span>
              {transactionList?.map((item, i) => (
                <React.Fragment key={'item' + i}>
                  <span>{item.date}</span>
                  <span>{item.desc}</span>
                  <span>{item.amount}</span>
                </React.Fragment>
              ))}
            </div>) :
            (<h2>No Table Data</h2>)
          }
        </div>
        <hr />
        <div className='profileSettingsFlex'>
          <div className='subscribeAlertsFlex'>
            <h3>Subscribe to Alerts</h3>
            <label>
              <input type="checkbox"
                defaultChecked={isSmsChecked}
                onChange={() => setSmsChecked((state) => !state)}
              />
              SMS Alert
            </label>
            <label>
              <input type="checkbox"
                defaultChecked={isNewsletter}
                onChange={() => setNewsletter((state) => !state)}
              />
              Marketting Newsletter
            </label>
            <label>
              <input type="checkbox"
                defaultChecked={isFlyer}
                onChange={() => setFlyer((state) => !state)}
              />
              Flyers
            </label>
            <button
              type="button"
              className="blue-button"
            >
              Submit
            </button>
          </div>
          <div className='twoWayBindingFlex'>
            <h3>Two Way Data Binding</h3>
            <input
              type="text"
              className="text-box"
              name="twoWayBindingInput"
              placeholder="Enter value for two way binding" />
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state:any) => ({
  userToken: state.authenticateUser.userToken,
  customerId: state.authenticateUser.customerId,
  retrieveUserDetails: state.retrieveUserDetails
});

export default connect(mapStateToProps, null)(Dashboard);