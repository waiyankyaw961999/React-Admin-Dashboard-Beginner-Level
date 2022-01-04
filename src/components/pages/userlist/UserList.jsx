import "./userList.css";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../data";
import { Link } from "react-router-dom";

export default function DataTable() {
  const [data, setData] = useState(userRows);

  const deleteUser = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userImage" alt="" src={params.row.avatar} />
            <span>{params.row.username}</span>
          </div>
        );
      },
    },

    { field: "email", headerName: "Email", width: 130 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "transaction", headerName: "Transaction", width: 100 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
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
