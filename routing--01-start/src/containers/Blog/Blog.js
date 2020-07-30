import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true ',
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Posts></Posts> */}
        {/* <Route path="/" exact render={() => <h1>Home</h1>}></Route>
        <Route path="/" render={() => <h1>Home</h1>}></Route> */}
        <Switch>
          <Route path="/" exact component={Posts}></Route>
          <Route path="/new-post" exact component={NewPost}></Route>
          <Route path="/posts/:id" exact component={FullPost}></Route>
        </Switch>
      </div>
    );
  }
}

export default Blog;
