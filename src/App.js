import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Message from './components/Message'
import Profile from './components/Profile'
import Counter from './components/Counter'
import FunctionEvent from './components/FunctionEvent'
import ClassEvent from './components/ClassEvent'
import FunctionalCounter from './components/FunctionalCounter';
import ConditionalComponents from './components/ConditionalComponent';
import ListRendering from './components/ListRendering';
import Form from './components/Form'
import Todo from './components/Todo'
import InlineComponents from './components/InlineComponents';
function App() {
  return (
    <div className='App'>
      <Todo />
      <InlineComponents />
    </div>

  );
}

export default App;
