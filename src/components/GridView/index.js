import React from 'react'

const GridView = (props) => {

  const { 
      columns=[]
    , dataProvider=[]
    , headerOptions={}
    , rowOptions={}
    , ...attributes
  } = props

  const isClosure = variable => typeof variable === "function"

  const renderTableHeader = () => {
    const row = columns.map((col, idx) => {
      const { options, label } = col
      return <th {...options} key={idx}>{ label }</th>
    })
    return <tr {...headerOptions}>{ row }</tr>
  }

  const renderTableRow = (model, key) => {
    const rows = columns.map((column, index) => {
      const { attribute, format, value, options } = column
      let data_cell = model[attribute] || null
      if (isClosure(format)) data_cell = format(data_cell)
      if (isClosure(value)) data_cell = value(model, index)

      return <td {...options} key={index}>{ data_cell }</td>
    })

    return <tr {...rowOptions} key={key} data-key={key}>{ rows }</tr>
  }

  const renderTableBody = () => {
    if (!dataProvider.length) return renderEmpty()
    return dataProvider.map((model, index) => {
      return renderTableRow(model, index)
    })
  }

  const renderEmpty = () => {
    const colspan = columns.length
    return (
      <tr className="empty-data">
        <td colspan={colspan}>No result found.</td>
      </tr>
    )
  }

  return (
    <table {...attributes}>
      <thead>{ renderTableHeader() }</thead>
      <tbody>{ renderTableBody() }</tbody>
    </table>
  )
}

export default GridView
