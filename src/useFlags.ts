import { useContext, useEffect, useState } from 'react';
import FlagContext from './FlagContext';

const useFlags = () => {
  const { client } = useContext(FlagContext);
  const [flags, setFlags] = useState(client.getAllToggles());

  const updateHandler = () => {
    setFlags(client.getAllToggles());
  };

  useEffect(() => {
    client.on('update', updateHandler);

    return () => {
      client.off('update', updateHandler);
    };
  }, []);

  return flags;
};

export default useFlags;
