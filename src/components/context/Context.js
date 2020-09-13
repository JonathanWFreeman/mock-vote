import React from 'react'
import {DataProvider} from './DataContext'
import {VoteProvider} from './VoteContext'

export const Context = ({children}) => {
  return (
    <DataProvider>
      <VoteProvider>
        {children}
      </VoteProvider>
    </DataProvider>
  )
}