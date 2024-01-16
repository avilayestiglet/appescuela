import React from "react";

const BinnacleItem = ({ item, i, itemSelected }) => {
    return (
        <tr
          key={i}
          className="border-b border-strokedark border-[#eee] hover:bg-slate-300"
        >
          <td className=" border-[#eee] py-5 px-4 pl-9 border-strokedark xl:pl-11">
            <h5 className="font-medium text-black">{item.actividad}</h5>
          </td>
          <td className=" border-[#eee] py-5 px-4 pl-9 border-strokedark xl:pl-11">
            <h5 className="font-medium text-black">{item.fecha}</h5>
          </td>
          <td className=" border-[#eee] py-5 px-4 pl-9 border-strokedark xl:pl-11">
            <h5 className="font-medium text-black">{item.email}</h5>
          </td>
          
        </tr>
      );
};

export default BinnacleItem;