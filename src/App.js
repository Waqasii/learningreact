import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Message from './components/Message'
import Profile from './components/Profile'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      {/* <Profile name='Muhammad '>
        <h1>This is Main Profile</h1>

      </Profile>
      <Message msg='Muhammad Waqas ' /> */}
      <Counter counter='1'></Counter>

    </div >
  );
}

export default App;
