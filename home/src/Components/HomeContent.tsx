import React, { useEffect, useState } from "react";
import { getRecordsCollection } from "../api/records";
import { ReleaseCard } from "./ReleaseCard";

export const HomeContent = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getRecordsCollection().then((res) => {
      setRecords(res.releases);
    });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
      {records.map((record) => (
        <ReleaseCard
          key={record.id}
          image={record.basic_information.cover_image}
          title={record.basic_information.title}
          artist={record.basic_information.artists[0].name}
          label={record.basic_information.labels[0].name}
          year={record.basic_information.year}
        ></ReleaseCard>
      ))}
    </div>
  );
};
