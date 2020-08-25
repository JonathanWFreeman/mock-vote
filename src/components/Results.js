import React from 'react'
import styled from 'styled-components';
// import PropTypes from 'prop-types'

const ResultDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
`;

const Results = props => {
  return (
    <section>
        <h2>Candidate</h2>
      <ResultDiv>
        <h3>Biden: </h3>
        <p>50%</p>
      </ResultDiv>
      <ResultDiv>
        <h3>Trump: </h3>
        <p>50%</p>
      </ResultDiv>
        

    </section>
  )
}

// Results.propTypes = {

// }

export default Results
