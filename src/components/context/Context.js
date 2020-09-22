import React from 'react'
import {Firebase, FirebaseContext} from '../firebase'
import {DataProvider} from './DataContext'
import {VoteProvider} from './VoteContext'

export const Context = ({children}) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <DataProvider>
        <VoteProvider>
          {children}
        </VoteProvider>
      </DataProvider>
    </FirebaseContext.Provider>
  )
}