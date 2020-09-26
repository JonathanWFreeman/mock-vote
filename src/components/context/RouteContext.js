import React, {useState} from 'react'

export const RouteContext = React.createContext({});

export const RouteProvider = ({children}) => {
  const [route, setRoute] = useState('login');
  return (
    <RouteContext.Provider value={[route, setRoute]}>
      {children}
    </RouteContext.Provider>
  )
}