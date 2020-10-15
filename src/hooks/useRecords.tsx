import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";


export type RecordsItem = {
  tagIds: number[],
  note: string,
  category: "+" | "-",
  amount: number,
  createAt: string
}
type newRecordsItem = Omit<RecordsItem, "createAt">
const useRecords = () => {
  const [records, setRecords] = useState<RecordsItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("Records") || "[]"));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("Records", JSON.stringify(records));
  }, records);
  const addRecord = (newRecord: newRecordsItem) => {
    if (newRecord.amount <= 0) {
      alert("金额不能为零");
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      alert("请选择标签");
      return false;
    }
    const record = {...newRecord, createAt: new Date().toISOString()};
    setRecords([...records, record]);
    return true
  };
  return {records, addRecord};
};
export {useRecords};