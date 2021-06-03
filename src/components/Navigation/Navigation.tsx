import Container from '../Container';
import Button from '../Button';

import './Navigation.styles.css';

const Navigation = () => {
  return (
    <nav>
      <Container>
        <div className="nav-container">
          <a href="/#" className="nav-brand">
            Shortly
          </a>
          <div className="nav-items-container">
            <ul className="nav-list">
              <li>
                <a href="/#" className="nav-link">
                  Features
                </a>
              </li>
              <li>
                <a href="/#" className="nav-link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#" className="nav-link">
                  Resources
                </a>
              </li>
            </ul>

            <div className="nav-buttons">
              <Button type="simple">Login</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
