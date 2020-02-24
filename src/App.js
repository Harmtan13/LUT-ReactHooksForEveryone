import React, { useRef } from 'react';
import useTitleInput from './hooks//useTitleInput';
import Toggle from './Toggle';
import Counter from './Counter'

const App = () => {

  const [name, setName] = useTitleInput('');
  const ref = useRef();

  return (

    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>Level Up Dishes</h1>
      <Toggle />
      <Counter />

      <form onSubmit={(e) => {
        e.preventDefault();
      }}
      >
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <button>Submit</button>
      </form>

    </div>
  );
};

export default App;
