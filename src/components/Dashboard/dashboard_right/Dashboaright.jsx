import React from "react";
import "./Dashboaright.css";
import Table from "../../Table/Table";

export default function Dashboaright({ accounts }) {
  const tableColumns = ["ID", "Username", "Email", "Address", "Phone", "Role"];
  const dataWithUsername = accounts.results.map((account) => ({
    ID: account.id,
    Username: `${account.firstname} ${account.lastname}`,
    Email: account.email,
    Address: account.address,
    Phone: account.phone,
    Role: account.role,
  }));
  return (
    <div className="dashboard_right">
      <div className="right-header">
        <input placeholder="Search..." className="right-search"></input>
        <div className="header-input-date">
          <div className="input-date">
            <div className="inputdate-title">Start date: </div>
            <input type="date"></input>
          </div>
          <div className="input-date">
            <div className="inputdate-title">End date: </div>
            <input type="date"></input>
          </div>
        </div>
      </div>
      <div className="right-body">
        <Table data={dataWithUsername} columns={tableColumns} />
        <div className="right-footer">
          <div className="pagination">
            <a href="#">❮</a>
            <a href="#">1</a>
            <a href="#" className="active">
              2
            </a>
            <a href="#">3</a>
            <a href="#">6</a>
            <a href="#">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
}
