import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const getNavbarStyle = () => {
    if (props.mode === 'dark') {
      return { backgroundColor: '#042743', color: 'white' };
    } else if (props.mode === 'green') {
      return { backgroundColor: '#0b6623', color: 'white' };
    } else {
      return { backgroundColor: 'white', color: 'black' };
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" style={getNavbarStyle()}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TextUtils</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
          </ul>

          {/* Green Mode Button */}
          <div className={`form-check form-switch text-${props.mode === 'green' ? 'Disable Green Mode' : 'Enable Green Mode'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="darkModeSwitch"onClick={props.toggleGreenMode} />
            <label className="form-check-label" htmlFor="darkModeSwitch">Green Mode</label>
          </div>

          {/* Dark Mode Toggle */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="darkModeSwitch" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="darkModeSwitch">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
