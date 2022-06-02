import React, { FC } from "react";
import { Tracklist } from "../interfaces/record";

const TrackListTable = ({ tracklist }) => {
  return (
    <>
      <table className="table-fixed text-sm">
        <thead>
          <tr>
            <th className="w-1/6 px-4 py-2">Position</th>
            <th className="w-1/4 px-4 py-2">Title</th>
            <th className="w-1/4 px-4 py-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          {tracklist.map((track) => (
            <tr key={track.title}>
              <td className="border px-4 py-2">{track.position}</td>
              <td className="border px-4 py-2">{track.title}</td>
              <td className="border px-4 py-2">{track.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TrackListTable;
