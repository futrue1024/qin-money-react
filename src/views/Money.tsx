import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {NotesSection} from "components/money/NotesSection";
import {NumberPadSection} from "../components/money/NumberPadSection";
import {useRecords} from "../hooks/useRecords";
import {TypeSection} from "../components/money/TypeSection";
import {TagsSection} from "../components/money/TagsSection";



type Category = "-" | "+"
const MyLayout = styled(Layout)`
//给通用组件传入指定的className及样式
 display: flex;
 flex-direction: column;
`;
const defaultFromData = {

  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: 0

};
const Money = () => {
  const { addRecord} = useRecords();
  const [selected, setSelected] = useState(defaultFromData);

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const submit = () => {
    if (addRecord(selected)) {
      alert("保存成功");
    }
    setSelected(defaultFromData);
    window.history.go(0);
  };
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds} onChange={tagIds => onChange({tagIds})}/>
      <NotesSection value={selected.note} onChange={note => onChange({note})}/>
      <TypeSection value={selected.category} onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount} onChange={amount => onChange({amount})}
                        onOk={submit}/>
    </MyLayout>);
};

export default Money;