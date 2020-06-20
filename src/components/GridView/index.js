import React from 'react'

const GridView = (props) => {

  const { 
      columns=[]
    , dataProvider=[]
    , headerRowOptions={}
    , footerRowOptions={}
    , contentRowOptions={}
    , showFooter=false
    , showHeader=true
    , emptyText="No results found."
    , ...attributes
  } = props

  const renderTableHeader = () => {
    const row = columns.map((col, idx) => {
      const { headerOptions, label } = col
      return <th {...headerOptions} key={idx}>{ label }</th>
    })
    return <tr {...headerRowOptions}>{ row }</tr>
  }

  const renderTableRow = (model, key) => {
    const isClosure = variable => typeof variable === "function"
    const rows = columns.map((column, index, grid) => {
      const { attribute, format, value, contentOptions } = column
      let data_cell = model[attribute] || null
      if (isClosure(format)) data_cell = format(data_cell)
      if (isClosure(value)) data_cell = value(model, key, index, grid)

      return <td {...contentOptions} key={index}>{ data_cell }</td>
    })

    return <tr {...contentRowOptions} key={key} data-key={key}>{ rows }</tr>
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
        <td colspan={colspan}>{ emptyText }</td>
      </tr>
    )
  }

  const renderTableFooter = () => {
    const row = columns.map((col, idx) => {
      const { footerOptions, footer } = col
  
      return <td {...footerOptions} key={idx}>{ footer }</td>
    })
    return <tr {...footerRowOptions}>{ row }</tr>
  }

  return (
    <table {...attributes}>
      { showHeader && <thead>{ renderTableHeader() }</thead> }
      <tbody>{ renderTableBody() }</tbody>
      { showFooter && <tfoot>{ renderTableFooter() }</tfoot> }
    </table>
  )
}

export default GridView
