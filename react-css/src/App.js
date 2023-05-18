import logo from './logo.svg';
import './App.css';
import CounterComp from './features/counter/CounterComp';
import InputForm from './features/inputform/InputForm';
import StyleComp from './features/styleComponent/StyleComp';

function App() {
  return (
    <div className="App">
      <CounterComp />
      <InputForm />
      <StyleComp >스타일드 컴포넌트</StyleComp>
      <StyleComp >스타일드 컴포넌트</StyleComp>
    </div>
  );
}

export default App;
