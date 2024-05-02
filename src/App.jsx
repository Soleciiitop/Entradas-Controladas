import { useState } from "react";
function App() {
  // Crear un estado llamado miTexto
  const [miTexto, setmiTexto] = useState('');


  // Crear función handleText
  const handleText = (event) =>{
    //tomar el valor de la caja de entrada que podemos referenciar con 'event.target.value'
    setmiTexto(event.target.value);
  }


  return (
      <div>
        <div>
          {/*Capture su texto */}
          <input type="text" onChange={handleText} value={miTexto} />
        </div>
        <h3>Su Texto</h3>
        <p>
          {/* Mostrar el texto de la caja de entrada aquí  */}
          {miTexto}
        </p>
      </div>
  );
}

export default App;
