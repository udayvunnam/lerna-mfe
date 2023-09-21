import React, { lazy, Suspense } from 'react';
import './styles.css';

const MfeOne = lazy(() => import('mfe1/app'));

const App = () => {
  const [name, setName] = React.useState(null);

  return (
    <div className="App">
      <h1>Host</h1>
      <h2>Micro host app is integrated here</h2>
      {name ? <p>Your name is: {name}</p> : null}
      <div>
        <Suspense fallback={<span>Loading...</span>}>
          <MfeOne onChange={(e) => setName(e.target.value)} />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
