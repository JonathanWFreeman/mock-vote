import React from 'react'
import {Firebase, FirebaseContext} from '../firebase'
import {RouteProvider} from './RouteContext'
import {VoteProvider} from './VoteContext'

export const Context = ({children}) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <RouteProvider>
        <VoteProvider>
          {children}
        </VoteProvider>
      </RouteProvider>
    </FirebaseContext.Provider>
  )
}