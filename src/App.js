import './App.css';
import Header from './components/Header/Header.jsx'
import Body from './components/Body/Body.jsx'
import Filter from './components/Filter/Filter.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Body />
    </div>
  );
}

export default App;
