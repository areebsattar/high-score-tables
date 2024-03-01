import React from "react";
import allCountryScores from "./scores";
import "./Table.css"

function Table() {
  return (
    <>
      <h1>High score per Country</h1>
      <div>
        {allCountryScores.map(({ name, scores }, index) => {
          return (
            <div key={index}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">{name}</th>
                  </tr>
                </thead>
                <tbody>
                  {scores.map(({ n, s }, index) => {
                    return (
                      <tr key={index}>
                        <td>{n}</td>
                        <td>{s}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Table;
