import * as React from 'react';
import './styles.css';

export default function App({ onChange }) {
  const [name, setName] = React.useState(null);
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>{name ? <p>Your name is: {name}</p> : null}</h3>
      <div className="mfe-1">
        <h1>MFE 1</h1>
        <input
          onChange={(e) => {
            setName(e.target.value);
            onChange();
          }}
          type="text"
          placeholder="Enter your name"
        />
      </div>
    </>
  );
}
