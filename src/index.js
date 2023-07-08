import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from './components/user.json';

const User = ({ username, tag, location, avatar }) => (
  <div className="profile">
    <div className="description">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt={avatar}
        className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  </div>
);

const Stats = ({ followers, views, likes }) => (
  <ul className="stats">
    <li>
      <span className="label">{followers}</span>
      <span className="quantity">1000</span>
    </li>
    <li>
      <span className="label">{views}</span>
      <span className="quantity">2000</span>
    </li>
    <li>
      <span className="label">{likes}</span>
      <span className="quantity">3000</span>
    </li>
  </ul>
);

const Profile = () => (
  <div>
    <Profile>
      <User></User>
      <Stats></Stats>
    </Profile>
  </div>
);

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Profile />
  </React.StrictMode>
);
