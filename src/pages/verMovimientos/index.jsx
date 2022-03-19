import React,  { useState, useEffect } from 'react'

export const Movimientos = () => {
  const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(currentUser);
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch( window.$dir+'api/v1/transactions/getTransactionsDetail',{
                          method: 'GET',
                          headers: {
                              'Content-Type': 'application/json'
                          }
                        }
                      );
      const parsedRes = await res.json();
      setIsLoading(false);
      switch (currentUser.user.usr_role) {
        case 'CLIENT':
          const res = parsedRes.result.filter(item => item.source_numdoc === currentUser.user.usr_numdoc || item.destiny_numdoc === currentUser.user.usr_numdoc);
          setData(res);
          break;
        default:
          setData(parsedRes.result);
          break;
      }

    }     
  
    fetchData();
  }, [])

  useEffect(() => {
    if (!data.length > 0){
      return;
    }

    
    
  }, [currentUser])
  

  return (
    <>
        <h2>Ver Movimientos</h2>

        <div>
          <ul>
              {
                (!isLoading  && data[0])?
                data && data.map((item, idx)=> {
                  return <li key={idx}>
                    <p>Fecha: {item.date.split('T')[0]}</p>
                    <p>Emisor: {`${item.source_name} ${item.source_lastname}`} </p>
                    <p>Receptor: {`${item.destiny_name} ${item.destiny_lastname}`} </p>
                    <p>{item.source_numdoc === currentUser.usr_numdoc ? 'Enviado' : 'Recibido' }: {item.amount}</p>
                  </li>
                })
                :
                !isLoading?
                <p>Sin movimientos.</p>
                :
                <p>Cargando...</p>
              }
          </ul>
        </div>
    </>
  )
}

