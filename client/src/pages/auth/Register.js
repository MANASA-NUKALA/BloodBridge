import React from 'react'
import Form from '../../components/shared/Form/Form'
import {useSelector} from 'react-redux'
import {DNA} from 'react-loader-spinner'

const Register = () => {
  const {loading,error} = useSelector(state => state.auth)
  return (
    <div className="auth-panel">
      {error && <span>{alert(error)}</span>}
      <div className="auth-card">
        <div className="auth-left">
          <div className="px-2">
            <img src="./assets/logo.png" className='logo-login' alt="Red Gold" />
          </div>
          <div className="d-flex align-items-center h-custom-2 mt-3">
            {loading ? (
              <div className="d-flex w-100 h-100 align-items-center justify-content-center">
                <DNA
                  visible={true}
                  height="200"
                  width="200"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                />
              </div>
            ) : (
              <Form formTitle={"Register"} submitBtn={"Register"} formType={'register'} />
            )}
          </div>
        </div>
        <div className="auth-right d-none d-md-flex">
          <div style={{padding:'2rem', textAlign:'center'}}>
            <h3>Welcome to Blood Bridge</h3>
            <p className="text-muted-2">Join our community — donate, manage, and save lives.</p>
            <img src="./assets/banner2.jpg" alt="Banner" className="banner rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register