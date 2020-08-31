import React, { Component } from 'react';

class SearchUser extends Component {
  state = {
    nickname: '',
  };

  handleNickname(value) {
    this.setState({
      nickname: value,
    });
  }

  handlePressEnter(key) {
    if (key === 'Enter') {
      this.listenAlong();
    }
  }

  listenAlong() {
    // fetch('/along', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     nickname: this.state.nickname,
    //   }),
    //   credentials: 'include',
    // })
    //   .then(res => {
    //     if (res.status === 200) {
    //       // 상태코드 200이면 룸에 대한 정보를 받고 listen page로 보내 줌
    //     } else if (res.status === 202) {
    //       alert('해당 유저가 방을 열지 않았습니다.');
    //     } else {
    //       alert('해당 유저를 찾을 수 없습니다.');
    //     }
    //   })
    //   .catch(err => console.log(err));
  }

  listenRandom() {
    // fetch('/randomentry', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   credentials: 'include',
    // })
    //   .then(res => {
    //     if (res.status === 200) {
    //       // 상태코드 200이면 룸에 대한 정보를 받고 listen page로 보내 줌
    //     } else {
    //       alert('열려있는 방이 없습니다.');
    //     }
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="searchMain_content">
        <input
          className="searchMain_content_input"
          onChange={e => this.handleNickname(e.target.value)}
          onKeyPress={e => this.handlePressEnter(e.key)}
        ></input>
        <button
          className="searchMain_content_alongButton"
          onClick={() => this.listenAlong()}
        >
          따라듣기
        </button>
        <button
          className="searchMain_content_RandomButton"
          onClick={() => this.listenRandom()}
        >
          랜덤듣기
        </button>
      </div>
    );
  }
}

export default SearchUser;
