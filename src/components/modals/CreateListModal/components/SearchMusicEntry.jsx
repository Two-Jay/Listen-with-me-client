import React, { Component } from 'react';

class SearchMusicEntry extends Component {
  state = {
    entry: {
      title: '',
      artist: '',
      musicURL: '',
      thumbnail: '',
    },
  };

  addEntry(value) {
    const { entries, handleEntries } = this.props;
    const newEntries = entries.slice();
    value.id = entries.length ? entries[entries.length - 1].id + 1 : 1;
    newEntries.push(value);
    handleEntries(newEntries);
  }

  componentDidMount() {
    const {
      id: { videoId },
      snippet: {
        title,
        channelTitle,
        thumbnails: {
          default: { url },
        },
      },
    } = this.props.entry;

    this.setState({
      entry: {
        title: title,
        artist: channelTitle,
        musicURL: `https://www.youtube.com/embed/${videoId}`,
        thumbnail: url,
      },
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.entry.thumbnail} alt="" />
        <div>{this.state.entry.title}</div>
        <button onClick={() => this.addEntry(this.state.entry)}>추가</button>
      </div>
    );
  }
}

export default SearchMusicEntry;
