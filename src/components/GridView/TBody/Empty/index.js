import React from "react";

const Empty = ({ colspan, text, ...props }) => {
  return (
    <tr className="empty-data" {...props}>
      <td colspan={colspan}>{text}</td>
    </tr>
  );
};

export default Empty;
