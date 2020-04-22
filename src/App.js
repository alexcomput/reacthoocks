import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [newTech, setNewTech] = useState('');
  const [tech, setTech] = useState([]);

  const handlerAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [tech, newTech]);

  useEffect(() => {
    const storegeTech = localStorage.getItem('tech');

    if (storegeTech) {
      setTech(JSON.parse(storegeTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);
  return (
    <>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} Tecnologias</strong>
      <br/>
      <input
        type="text"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
      />
      <button onClick={handlerAdd} type="button">
        Adicionar
      </button>
    </>
  );
}

export default App;
