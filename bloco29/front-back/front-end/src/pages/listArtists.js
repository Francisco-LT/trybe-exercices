import React, { useEffect, useState } from 'react';
//nao usar async await no use effect
function ListArtists() {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    fetch('http://localhost:3001/artists')
    .then(respose => respose.json())
    .then(data =>{
      setArtists(data)
      setIsLoading(true);
    })
  }, []);

  return(
    <div>
    {isLoading
    ? <p>Carregando</p>
    : (
      <ul>
        {artists.map((artist) => (
          <li key = {artist.artista_id} >{artist.nome}</li>    
        ))}
      </ul>
    )
}
</div>
  )
}

export default ListArtists;
