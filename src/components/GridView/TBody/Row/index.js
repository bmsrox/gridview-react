import React from "react";

const isClosure = (variable) => typeof variable === "function";

const Row = ({ columns, data, key, options, ...props }) => {
  return (
    <tr {...props} {...options}>
      {columns.map((column, index, grid) => {
        const { attribute, format, value, contentOptions } = column;

        let row = data[attribute] || null;
        if (isClosure(format)) row = format(row);
        if (isClosure(value)) row = value(data, key, index, grid);

        return (
          <td {...contentOptions} key={attribute} data-key={attribute}>
            {row}
          </td>
        );
      })}
    </tr>
  );
};

export default Row;
