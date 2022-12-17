import logo from './logo.svg';
import './App.css';
import desktop from './assets/desktop.png'
import mobile from './assets/mobile.png'

function App() {
  return (
    <a href='https://forms.gle/JtaZBL4QdBEda7ok6'>
      <picture>
        <source srcSet={desktop} media='(min-width: 450px)'></source>
        <img src={mobile} />
      </picture>
    </a>
  );
}

export default App;
