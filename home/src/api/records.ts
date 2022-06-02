const API_SERVER = "http://localhost:8080/api/records";

export const getRecordsCollection = () =>
  fetch(`${API_SERVER}/`).then((res) => res.json());

export const getRecordById = (id) =>
  fetch(`${API_SERVER}/${id}`).then((res) => res.json());
