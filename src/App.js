import CardHome from './components/cardHome';
import backgroundImg from './img/bg-main.jpg'
import 'antd/dist/reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-content" style={{backgroundImage:`url(${backgroundImg})`,backgroundRepeat:"no-repeat", backgroundSize:"auto"}}>
      <CardHome />
      </header>
    </div>
  );
}

export default App;
