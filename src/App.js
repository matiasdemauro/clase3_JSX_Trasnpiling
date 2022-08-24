import './App.css'
//nombre del componente 'NavBar' para utilizarlo debe importarce en App.js
import NavBar from './components/NavBar';

const claseNumber = 20;
function App() {
  return (
    <>
    <NavBar/>
    <div className="App">
      {/* Estilos en linea*/}
      <p style={
        {
          color: 'salmon',
          padding: '10px',
          marginTop:'100px',
        }
      }>Bienvenidos a la clase {claseNumber}</p>
      <hr/>
    <input placeholder='Ingrese algun contenido'/>
    </div>
    </>
  );
}

export default App;
