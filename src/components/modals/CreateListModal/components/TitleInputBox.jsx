import React, { Component } from 'react';

class TitleInputBox extends Component {
  render() {
    const { handleListTitle } = this.props;
    return (
      <input
        className="createListModal_content_titleInputBox"
        placeholder="제목을 입력해 주세요."
        onFocus={e => (e.target.placeholder = '')}
        onBlur={e => (e.target.placeholder = '제목을 입력해 주세요.')}
        onChange={e => handleListTitle(e.target.value)}
      ></input>
    );
  }
}

export default TitleInputBox;
