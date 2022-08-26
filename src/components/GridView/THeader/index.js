import React from "react";

const THeader = ({ columns, options, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <thead>
      <tr {...options}>
        {columns.map(({ headerOptions, label }, idx) => {
          return (
            <th {...headerOptions} key={idx}>
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default THeader;
