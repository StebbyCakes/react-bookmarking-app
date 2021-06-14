import { Component } from 'react';
import './App.css';
import BookmarkForm from './BookmarkForm';
import BookmarkList from './BookmarkList';

const defaultBookmarks = [
  {
    url: 'https://www.seaofthieves.com/news/a-pirates-life-announcement',
    title: 'Sea of Thieves Update',
    tag: 'Gaming'
  }, {
    url: 'https://news.bitcoin.com/venezuela-numbers-cryptocurrency-adoption-factors/',
    title: 'Venezuela adopts Bitcoin',
    tag: 'Finance'
  }, {
    url: 'https://www.youtube.com/watch?v=Zcz-Hq1NP98',
    title: 'Monkey plays game with his mind',
    tag: 'tech'
  }
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: defaultBookmarks,
      filter: null,
    }
    this.addBookmark = this.addBookmark.bind(this);
  }
  addBookmark(bookmark) {
    const bookmarks = [...this.state.bookmarks];
    bookmarks.push(bookmark);
    this.setState({ bookmarks });
  }
  render() {
    const tags = this.state.bookmarks.map(bookmark => bookmark.tag);
    const uniqueTags = [...new Set(tags)];
    const navLinks = uniqueTags.map((tag, index)=> <button key={index} onClick={() => this.setState({filter: tag})}>{tag.toUpperCase()}</button>)
    const bookmarks = this.state.filter ? this.state.bookmarks.filter(bookmark => bookmark.tag === this.state.filter) : this.state.bookmarks;
    return (
      <>
        <nav>
          {navLinks}
          <button onClick={() => this.setState({filter: null})}>ALL</button>
        </nav>
        <BookmarkForm addBookmark={this.addBookmark}/>
        <BookmarkList bookmarks={bookmarks} />
      </>
    )
  }
}
export default App;
