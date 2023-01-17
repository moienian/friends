import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <ul>
          <li className="user">
            <img
              src="https://randomuser.me/api/portraits/women/23.jpg"
              alt="profile"
            />
            <div className="description">
              <h3 className="name">Alice Ikeman</h3>
              <p className="date">2 days</p>
            </div>
          </li>
          <li className="user">
            <img
              src="https://randomuser.me/api/portraits/women/84.jpg"
              alt="profile"
            />
            <div className="description">
              <h3 className="name">Alice Ikeman</h3>
              <p className="date">2 days</p>
            </div>
          </li>
          <li className="user">
            <img
              src="https://randomuser.me/api/portraits/men/79.jpg"
              alt="profile"
            />
            <div className="description">
              <h3 className="name">Alice Ikeman</h3>
              <p className="date">2 days</p>
            </div>
          </li>
          <li className="user">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="profile"
            />
            <div className="description">
              <h3 className="name">Alice Ikeman</h3>
              <p className="date">2 days</p>
            </div>
          </li>
          <li className="user">
            <img
              src="https://randomuser.me/api/portraits/men/90.jpg"
              alt="profile"
            />
            <div className="description">
              <h3 className="name">Alice Ikeman</h3>
              <p className="date">2 days</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
