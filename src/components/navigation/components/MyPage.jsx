import React from 'react';
import { withRouter } from 'react-router-dom';

const MyPage = ({ history }) => {
  const goToMainPage = () => {
    history.push('/profile');
  };
  return (
    <button className="user__button" onClick={goToMainPage}>
      MyPage
    </button>
  );
};

export default withRouter(MyPage);
