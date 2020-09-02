import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';

import Logo from './components/Logo';
import Title from './components/Title';
import SignIn from './components/SignIn'; // 로그인
import SignUp from './components/SignUp'; // 회원가입
import SignOut from './components/SignOut'; // 로그아웃
import MyPage from './components/MyPage'; // 마이페이지

const Navigation = ({ isSignIn, isLoading, nickname }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-3">
          <div className="row float-left">
            <Logo />
          </div>
        </div>
        <div className="col-6">
          <div className="row" style={{ background: 'LIGHTSALMON' }}>
            <Title />
          </div>
        </div>
        <div className="col-3">
          <div className="row float-right">
            {isSignIn && (
              <>
                <SignOut />
                <MyPage />
              </>
            )}
            {!isSignIn &&
              (isLoading ? (
                <FontAwesomeIcon icon={['fa', 'spinner']} pulse />
              ) : (
                <>
                  <SignIn />
                  <SignUp />
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navigation);
