import React, { Component } from 'react';

class MyPlayListEntry extends Component {
  state = {
    title: '',
    inputTitleDisplay: false,
  };

  handleState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  editTitleButton() {
    this.handleState('inputTitleDisplay', true);
  }

  completeButton() {
    // fetch(`/playlist?id=${this.props.listEntry.id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     title: this.state.title,
    //   }),
    //   credentials: 'include',
    // })
    //   .then(res => {
    //     if (res.status !== 200) {
    //       this.handleState('title', this.props.listEntry.title);
    //     }
    //     this.handleState('inputTitleDisplay', false);
    //   })
    //   .catch(err => console.log(err));
  }

  deleteRoom() {
    // const { id } = this.props.listEntry;
    // fetch(`/playlist?id=${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   credentials: 'include',
    // })
    //   .then(res => {
    //     if (res.status === 204) {
    //       this.props.deleteList(id);
    //     }
    //   })
    //   .catch(err => console.log(err));
  }

  createRoom() {
    // fetch('/room', {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     playlist_id: this.props.listEntry.id,
    //   }),
    //   credentials: 'include',
    // })
    //   .then(res => res.json())
    //   .then(room => {
    //     // room = {"id": integer, "roomURL": "string"} 이렇게 옴
    //     // id와 url을 listen page로 전달
    //     // url로 라우팅
    //   })
    //   .catch(err => console.log(err));
  }

  componentDidMount() {
    this.handleState('title', this.props.listEntry.title);
  }

  render() {
    const { thumbnails, likeAmount, audienceAmount } = this.props.listEntry;

    return (
      <div className="myPlayList_content_entry">
        <button
          className="myPlayList_content_entry-deleteButton"
          onClick={() => this.deleteRoom()}
        >
          삭제
        </button>
        <img
          className="myPlayList_content_entry-thumbnails"
          onClick={() => this.createRoom()}
          src={thumbnails}
          alt=""
        ></img>
        <div className="myPlayList_content_entry-title">
          <div
            className="myPlayList_content_entry-title-description"
            style={{ display: this.state.inputTitleDisplay ? 'none' : 'block' }}
          >
            {this.state.title}
          </div>
          <input
            className="myPlayList_content_entry-title-inputBox"
            style={{ display: this.state.inputTitleDisplay ? 'block' : 'none' }}
            onChange={e => this.handleState('title', e.target.value)}
            value={this.state.title}
          ></input>
          <button
            className="myPlayList_content_entry-title-editButton"
            style={{ display: this.state.inputTitleDisplay ? 'none' : 'block' }}
            onClick={() => this.editTitleButton()}
          >
            수정
          </button>
          <button
            className="myPlayList_content_entry-title-completeButton"
            style={{ display: this.state.inputTitleDisplay ? 'block' : 'none' }}
            onClick={() => this.completeButton()}
          >
            완료
          </button>
        </div>
        <div className="myPlayList_content_entry-liked">
          좋아요: {likeAmount}
        </div>
        <div className="myPlayList_content_entry-audience">
          누적청취자: {audienceAmount}
        </div>
      </div>
    );
  }
}

export default MyPlayListEntry;
