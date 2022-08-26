import React from "react";
import THeader from "./THeader";
import TFooter from "./TFooter";
import TBody from "./TBody";

const GridView = ({
  columns = [],
  dataProvider = [],
  headerRowOptions = {},
  footerRowOptions = {},
  contentRowOptions = {},
  showFooter = false,
  showHeader = true,
  emptyText = "No results found.",
  ...props
}) => {
  return (
    <table {...props}>
      <THeader
        columns={columns}
        options={headerRowOptions}
        visible={showHeader}
      />
      <TBody
        columns={columns}
        dataProvider={dataProvider}
        emptyText={emptyText}
        options={contentRowOptions}
      />
      <TFooter
        columns={columns}
        options={footerRowOptions}
        visible={showFooter}
      />
    </table>
  );
};

export default GridView;
