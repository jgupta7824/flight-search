import './App.css';
import Header from './containers/Header/Header'
import Routes from './routes/routes'

const App =(props)=> {
  return (
    <div className="mainContainer">
      <Header />
      <main >
       <Routes />
      </main>
    </div>
  );
}

export default App;
