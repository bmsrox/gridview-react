import React from "react";
import Empty from "./Empty";
import Row from "./Row";

const TBody = ({ columns, dataProvider, emptyText, ...props }) => {
  if (!dataProvider.length) {
    return <Empty colspan={columns.length} text={emptyText} />;
  }

  return (
    <tbody>
      {dataProvider.map((data, index) => {
        return (
          <Row
            {...props}
            data-key={index}
            columns={columns}
            key={index}
            data={data}
          />
        );
      })}
    </tbody>
  );
};

export default TBody;
