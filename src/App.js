import logo from './logo.svg';
import './App.scss';
import { Helmet } from 'react-helmet';

function App(props) {
  return (
    <div className="App">

      <Helmet>
        <html lang='it'/>
        <title>Mario Senese</title>
	<meta name="description" content="Mario Senese | Developer"/>        
        <meta name="theme-color" content="#111111"/>
        <meta name="keywords" content="mario senese, developer, programmatore" />
      </Helmet>

      <header className="wrapper">
         <img className="glitch" data-src="./images/logo/Logo-3.png" src="./images/logo/Logo-3.png" alt="Mario Senese" width="150" height="150" />
	 <h1 className="glitch" data-text={props.name}>
          {props.name}
        </h1>
        <span className="sub">
          {props.role}
        </span>
      </header>
    </div>
  );
}

export default App;
