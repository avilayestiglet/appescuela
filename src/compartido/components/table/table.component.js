import React from "react";
import PaginationComponent from "../pagination/pagination.component";

const TableComponent = (
  { 
    data, 
    paginate,
    onPageChange,
    isLoading = false
  }) => {
  return (
    <div className="rounded-md bg-white p-0 shadow-xl bg-boxdark sm:px-7.5 xl:pb-1 mt-4">
      {data?.filters}
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-primary">
            <tr className="bg-gray-2 text-left bg-meta-4">
              {data.headers.map((x) => (
                <th className="min-w-[120px] py-4 px-4 font-medium text-white xl:pl-11">
                  {x}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.body.length > 0 ? (
              data.body
            ) : (
              <tr className="text-center font-sans absolute w-full">
                No hay registros
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className={`w-full border-b border-strokedark border-[#eee] flex flex-wrap ${data?.paginate ? "justify-between" : "justify-end"} py-5`}>
        {data?.paginate ? (
          <PaginationComponent
            currentPage={paginate?.currentPage}
            totalPages={paginate?.totalPages}
            onPageChange={onPageChange ?? ((value) => console.log(value))}
          />
        ) : (
          ""
        )}
        {data?.footer}
      </div>
    </div>
  );
};

export default TableComponent;
