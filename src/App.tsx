import Layout from './components/Layout';
import Container from './components/Container';
import Shortener from './components/Shortener';
import Booster from './components/Booster';

import './App.css';

const App = () => {
  return (
    <div>
      <Layout>
        {/* Showcase */}
        <section>
          <Container>
            <h1>hola</h1>
          </Container>
        </section>

        {/* Shorter */}
        <Shortener />

        {/* Booster */}
        <Booster />
      </Layout>
    </div>
  );
};

export default App;
