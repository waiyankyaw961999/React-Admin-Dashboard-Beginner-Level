import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../data";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";
import "./productList.css";
export default function ProductList() {
  const [data, setData] = useState(productRows);

  const deleteUser = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Proudct",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img className="productImage" alt="" src={params.row.avatar} />
            <span>{params.row.name}</span>
          </div>
        );
      },
    },

    { field: "stock", headerName: "Stock", width: 130 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "price", headerName: "Price", width: 100 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="editbtn">Edit</button>
            </Link>
            <DeleteOutlineIcon
              onClick={() => deleteUser(params.row.id)}
              className="deleteBtn"
            />
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
