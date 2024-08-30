import React from 'react'
import Header from '../components/Header'
import Table from '../components/Table'

const Transactions = () => {
  return (
    <div>
      <Header Message='Transaction History'/>
      <div>
        <Table/>
      </div>
    </div>
  )
}

export default Transactions