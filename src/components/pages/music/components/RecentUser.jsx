import React, { Component } from 'react';
import RecentUserEntry from './RecentUserEntry';

let fakeData = [
  {
    id: 1,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'brbr',
  },
  {
    id: 2,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'ccccrrrr',
  },
  {
    id: 3,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'brbr',
  },
  {
    id: 4,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'ccccrrrr',
  },
  {
    id: 5,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'brbr',
  },
  {
    id: 6,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'ccccrrrr',
  },
  {
    id: 7,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'brbr',
  },
  {
    id: 8,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'ccccrrrr',
  },
  {
    id: 9,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'ccccrrrr',
  },
  {
    id: 10,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'brbr',
  },
  {
    id: 12,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'ccccrrrr',
  },
  {
    id: 13,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'brbr',
  },
  {
    id: 14,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'ccccrrrr',
  },
  {
    id: 15,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'brbr',
  },
  {
    id: 16,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'ccccrrrr',
  },
  {
    id: 17,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'brbr',
  },
  {
    id: 18,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'ccccrrrr',
  },
  {
    id: 19,
    profileImg:
      'https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg',
    nickname: 'ccccrrrr',
  },
];

class RecentUser extends Component {
  state = {
    recentUser: [],
    viewCount: 7,
    buttonDisplay: false,
  };

  handleState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  viewListEntry(list) {
    let count = 0;
    return list.map(entry => {
      if ((list.length <= 8 ? 8 : this.state.viewCount) > count) {
        count++;
        return <RecentUserEntry key={entry.id} entry={entry} />;
      }
    });
  }

  handleViewButton(list) {
    const { viewCount, buttonDisplay } = this.state;
    const count = list.length;
    this.handleState('viewCount', count === viewCount ? 7 : count);
    this.handleState('buttonDisplay', !buttonDisplay);
  }

  getRecentUser() {
    const recentUser = JSON.parse(localStorage.getItem('recentUser')) || [];
    this.handleState('recentUser', recentUser);
  }

  removeRecentUser() {
    localStorage.removeItem('recentUser');
    this.getRecentUser();
  }

  componentDidMount() {
    // 기록
    localStorage.setItem('recentUser', JSON.stringify(fakeData));
    // 가져오기
    this.getRecentUser();
  }

  render() {
    const { recentUser, buttonDisplay } = this.state;
    return (
      <div className="recentUser">
        <div className="recentUser_title">최근 따라들은 유저</div>
        <button
          className="recentUser_removeRecentUserButton"
          onClick={() => this.removeRecentUser()}
        >
          기록 삭제
        </button>
        <div
          className="recentUserEntry"
          style={{ height: buttonDisplay ? '25em' : '100%' }}
        >
          {this.viewListEntry(recentUser)}
          <button
            className="recentUser_viewButton"
            style={{
              display:
                buttonDisplay || recentUser.length <= 8 ? 'none' : 'block',
            }}
            onClick={() => this.handleViewButton(recentUser)}
          >
            더보기
          </button>
          <button
            className="recentUser_viewButton"
            style={{ display: buttonDisplay ? 'block' : 'none' }}
            onClick={() => this.handleViewButton(recentUser)}
          >
            줄이기
          </button>
        </div>
      </div>
    );
  }
}

export default RecentUser;
