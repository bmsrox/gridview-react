import React from 'react';
import './App.css';
import GridView from './components/GridView';

const App = () => {

  const dataProvider = [
    {
      name: 'Bruno',
      lastname: 'Marinho',
      age: 33,
      total: 50.10
    },
    {
      name: 'Kilderson',
      lastname: 'Sena',
      age: 32,
      total: 87.20
    },
    {
      name: 'Eric',
      lastname: 'Maicon',
      age: 30,
      total: 30
    }
  ]

  const columns = [
    { attribute: 'name', label: 'Name', options: { class: 'test'}},
    { attribute: 'lastname', label: 'Lastname', options: { class: 'rowTest'} },
    { attribute: 'age', label: 'Age' },
    { attribute: 'total', label: 'Total' }
  ]

  return <GridView className="grid-view" dataProvider={dataProvider} columns={columns} />;
}

export default App;
