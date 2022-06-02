import React, { useState, useEffect } from "react";
import { getRecordById } from "home/records";
import { Record } from "../interfaces/record";
import TrackListTable from "./TrackListTable";
import { useParams } from "react-router";

const PDPContent = () => {
  const { id } = useParams();
  const [record, setRecord] = useState<Record>(null);

  useEffect(() => {
    if (id) {
      getRecordById(id).then(setRecord);
    } else {
      setRecord(null);
    }
  }, []);

  if (!record) return <></>;
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <img src={record.images[0].resource_url} />
          <TrackListTable tracklist={record.tracklist} />
        </div>
        <div>
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl flex-grow">
              {record.artists[0].name} - {record.title}
            </h1>
            <div className="text-gray-500 text-xl">
              <div>Label: {record.labels[0].name}</div>
              <div>Format: {record.formats[0].name}</div>
              <div>Year: {record.year}</div>
              <div>Genre: {record.genres.map((genre) => `${genre} `)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDPContent;
