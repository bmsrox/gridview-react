import React from 'react';
import './App.css';
import GridView from './components/GridView';

const App = () => {

  const dataProvider = [
    {
      name: 'Bruno',
      sobrenome: 'Marinho',
      idade: 33,
      total: 50.10
    },
    {
      name: 'Kilderson',
      sobrenome: 'Sena',
      idade: 32,
      total: 87.20
    },
    {
      name: 'Eric',
      sobrenome: 'Maicon',
      idade: 30,
      total: 30
    }
  ]

  const columns = [
    { attribute: 'name', label: 'Name', headerOptions: { class: 'test'}},
    { attribute: 'sobrenome', label: 'Sobrenome', rowOptions: { class: 'rowTest'} },
    { attribute: 'idade', label: 'Idade' },
    { attribute: 'total', label: 'Total' }
  ]

  return <GridView className="grid-view" dataProvider={dataProvider} columns={columns} />;
}

export default App;
