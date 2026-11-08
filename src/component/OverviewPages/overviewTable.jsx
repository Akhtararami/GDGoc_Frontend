import React from "react";
import "../../App.css";
import "./overview.css";

const comparisonRows = [
  {
    track: "Research & discovery",
    explore: "Listen to people, ask better questions, frame a problem worth solving.",
    outcome: "A problem brief or research summary with insights you can act on."
  },
  {
    track: "Design & creativity",
    explore: "Sketch layouts, craft flows, and turn ideas into tangible interfaces.",
    outcome: "An interactive prototype you can test and walk someone through."
  },
  {
    track: "Development",
    explore: "Write code, learn tools, and connect components into working systems.",
    outcome: "A working demo or feature deployed with a GitHub repo to show for it."
  }
];

function OverviewTable() {
  return (
    <section className="overview-table-section" id="compare">
      <h2 className="overview-table-heading">
        From an interest to something you can show.
      </h2>

      <div className="overview-table-card">
        <table className="overview-table">
          <thead>
            <tr>
              <th scope="col" className="col-track">The track</th>
              <th scope="col" className="col-explore">What you will explore</th>
              <th scope="col" className="col-outcome">A tangible outcome</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.track}>
                <td className="cell-track">
                  <strong>{row.track}</strong>
                </td>
                <td className="cell-explore">
                  <span className="mobile-col-label">What you will explore: </span>
                  {row.explore}
                </td>
                <td className="cell-outcome">
                  <span className="mobile-col-label">A tangible outcome: </span>
                  {row.outcome}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="overview-table-note">
        Tracks often overlap in practice. People rarely work on just one piece in isolation, and that’s where the best learning happens.
      </p>
    </section>
  );
}

export default OverviewTable;
