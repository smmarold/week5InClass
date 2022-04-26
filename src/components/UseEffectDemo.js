import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UseEffectDemo = () => {
  const { startingCount} = useParams();
  const [renderCount, setRenderCount] = useState(+startingCount || 0);

  useEffect(() => {
    console.log('Component mounted');
    setRenderCount((count) => setRenderCount(count + 1));
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <>
      <div className="header">useEffect Demo</div>
      <p>Render Count: {renderCount}</p>
      <strong>Params: {startingCount}</strong>
    </>
  );
};

export default UseEffectDemo;
