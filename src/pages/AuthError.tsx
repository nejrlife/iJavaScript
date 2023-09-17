import "./AuthError.less";

const AuthError = (props: any) => {
  return (
    <>
      <div className='authErrorContainer'>
        <h2 className='authErrorHeader'>
          Auth Error
        </h2>
        {
          props.error?.length > 0 ?
            (
              <div className='errorMessage'>
                <p>{ props.error }</p>
              </div>
            ) :
            null
        }
      </div>
    </>
  )
}

export default AuthError;