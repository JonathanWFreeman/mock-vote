import React, {useState} from 'react'
import {db} from '../../testDb'

export const DataContext = React.createContext({});

export const DataProvider = ({children}) => {
  const [data, setData] = useState(db);
  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  )
}