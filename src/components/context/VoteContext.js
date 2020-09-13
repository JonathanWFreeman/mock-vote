import React, {useState} from "react";

export const VoteContext = React.createContext({});

export const VoteProvider = ({children}) => {
  const [vote, setVote] = useState();
  return(
    <VoteContext.Provider value={[vote, setVote]}>
      {children}
    </VoteContext.Provider>
  )
}