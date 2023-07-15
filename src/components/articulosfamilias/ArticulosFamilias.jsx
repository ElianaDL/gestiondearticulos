import React, {useState, useEffect} from 'react';
import { articulosFamiliasMockService } from './services/articulosFamilias-mock-service';

function ArticulosFamilias() {
  const tituloPagina = 'ArticulosFamilias';
  const [articulosFamilias, setArticulosFamilias] = useState(null);
  //Esta es una funcion, los datos no se guardan si los asignas a una variable
  //Entonces, el useState sirve para cambiar su estado y que se mantenga así
  
  useEffect(() => {
    BuscarArticulosFamilas();
  }, []);
  
  async function BuscarArticulosFamilas() {
    let data = await articulosFamiliasMockService.Buscar();
    setArticulosFamilias(data);
  };

  return (
    <div>
      <div className="tituloPagina">{tituloPagina}</div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th style={{ width: "40%" }}>IdArticuloFamilia</th>
            <th style={{ width: "60%" }}>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {articulosFamilias &&
            articulosFamilias.map((articulofamilia) => (
              <tr key={articulofamilia.IdArticuloFamilia}>
                <td>{articulofamilia.IdArticuloFamilia}</td>
                <td>{articulofamilia.Nombre}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );

}

export { ArticulosFamilias };

  