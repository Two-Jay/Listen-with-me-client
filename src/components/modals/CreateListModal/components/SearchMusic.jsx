import React, { Component } from 'react';
import searchYoutube from './SearchYoutube';
import SearchMusicEntry from '../containers/SearchMusicEntry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchMusic extends Component {
  searchMusic() {
    const { searchInfo, handleMusic } = this.props;
    searchYoutube(searchInfo, data => {
      handleMusic(data);
    });
  }

  handlePressEnter(key) {
    if (key === 'Enter') {
      this.searchMusic();
    }
  }

  render() {
    const { music, handleQuery } = this.props;
    return (
      <div className="createListModal_content_searchMusic">
        <input
          className="createListModal_content_searchMusic-inputBox"
          onChange={e => handleQuery(e.target.value)}
          onKeyPress={e => this.handlePressEnter(e.key)}
          placeholder="검색"
        ></input>
        <button
          className="createListModal_content_searchMusic-searchButton"
          onClick={() => this.searchMusic()}
        >
          <FontAwesomeIcon icon={['fas', 'search']} />
        </button>
        <div className="createListModal_content_searchMusic-entries">
          {music &&
            music.map(entry => (
              <SearchMusicEntry key={entry.id.videoId} entry={entry} />
            ))}
        </div>
      </div>
    );
  }
}

export default SearchMusic;
