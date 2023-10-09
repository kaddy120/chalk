import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const Context = createContext({ name: 'dark', setTheme: () => {} });

export default function Editor({ children }) {
  const [theme, setTheme] = useState({ name: 'dark' });
  let value = {
    name: theme.name,
    setTheme: () => {
      setTheme({ name: 'light' });
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function usePageContenxt() {
  return useContext(Context);
}

Editor.propTypes = {
  children: PropTypes.node.isRequired,
};
