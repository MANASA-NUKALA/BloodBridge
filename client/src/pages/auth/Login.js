import React, { useState } from 'react'
import Form from '../../components/shared/Form/Form'
import {useSelector} from 'react-redux'
import {DNA} from 'react-loader-spinner'
import toast from 'react-hot-toast'

const Login = () => {
  const {loading,error} = useSelector(state => state.auth)
  return (
    <div className="auth-panel">
      {error && <span>{toast.error(error)}</span>}
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
              <Form formTitle={"Log In"} submitBtn={"Login"} formType={'login'} />
            )}
          </div>
        </div>
        <div className="auth-right d-none d-md-flex">
          <div style={{padding:'2rem', textAlign:'center'}}>
            <h3>Welcome back</h3>
            <p className="text-muted-2">Sign in to manage donors, hospitals and donations.</p>
            <img src="./assets/banner1.jpg" alt="Login image" className="banner rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login