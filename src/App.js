import React from "react";
import "./App.css";
import GridView from "./components/GridView";

const App = () => {
  const dataProvider = [
    {
      name: "Bruno",
      lastname: "Marinho",
      age: 33,
      total: 50.1,
    },
    {
      name: "Kilderson",
      lastname: "Sena",
      age: 32,
      total: 87.2,
    },
    {
      name: "Eric",
      lastname: "Maicon",
      age: 30,
      total: 30,
    },
  ];

  const columns = [
    {
      attribute: "name",
      label: "Name",
      headerOptions: { className: "test" },
      footer: " - ",
    },
    {
      attribute: "lastname",
      label: "Lastname",
      format: (value) => value.toUpperCase(),
      contentOptions: { className: "rowTest" },
      footer: " - ",
    },
    {
      attribute: "age",
      label: "Age",
      value: (row) => `${row.age} years old.`,
      footer: " - ",
    },
    {
      attribute: "total",
      label: "Total",
      footer: dataProvider.reduce((acc, i) => acc + i.total, 0),
    },
    {
      value: (data) => {
        return <Button onClick={() => console.log(data.name)} />;
      },
    },
  ];

  const Button = ({ onClick }) => {
    return <button onClick={onClick}>test</button>;
  };

  return (
    <GridView
      showFooter
      className="grid-view"
      dataProvider={dataProvider}
      columns={columns}
    />
  );
};

export default App;
