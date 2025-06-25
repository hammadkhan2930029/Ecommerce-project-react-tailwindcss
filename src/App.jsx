import { Route, Routes } from 'react-router-dom';
import { appRouter } from './Routes/routes';
import { Loader } from './components/Loader/loader';
import React, { useEffect, useState } from 'react';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>

      <Routes>
        {appRouter.map(({ path, element }, index) => (
          <Route path={path} element={element} key={index} />
        ))}
      </Routes>
    </div>

  )
}

export default App;
