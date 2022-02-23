import React from "react";
import './components.css';


const DisplayTable = ({ data, repositories }) => {
  return (
    
    <div className="table">
      <table className="content-table">
        <thead className="table-head">
          <tr>
            <th>Name</th>
            <th>Avatar</th>
            <th>Location</th>
            <th>Bio</th>
            <th>Repositories</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>{data.name}</td>
            <td>
              {!data.avatar_url ? (
                " "
              ) : (
                <a href="" >
                <img
                  className="avatar-img"
                  src={data.avatar_url}
                  alt={data.avatar_url}
                />
                </a>
              )}
            </td>
            <td>{data.location}</td>
            <td>{data.bio}</td>
            <td>
              {repositories.map(repo => (
                <div className="" key={repo.name}>
                    <div className="">
                      <a href={repo.html_url} className="" target="_blank">
                        {repo.name}
                      </a>
                    </div>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>    
    </div>

  );
};

export default DisplayTable;
