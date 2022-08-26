import React from "react";

const TFooter = ({ columns, options, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <tfoot>
      <tr {...options}>
        {columns.map(({ footerOptions, footer }, idx) => {
          return (
            <td {...footerOptions} key={idx}>
              {footer}
            </td>
          );
        })}
      </tr>
    </tfoot>
  );
};

export default TFooter;
