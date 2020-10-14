import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {TagsSection} from "components/money/TagsSection";
import {NotesSection} from "components/money/NotesSection";
import {CategorySection} from "components/money/categorySection";
import {NumberPadSection} from "../components/money/NumberPadSection";


type Category = "-" | "+"
const MyLayout = styled(Layout)`
 display: flex;
 flex-direction: column;
`;
const Money = () => {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: "",
    category: "-" as Category,
    amount: 0
  });
const onChange = (obj:Partial<typeof selected>) => {
  setSelected({
    ...selected,
    ...obj
  });
}
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds} onChange={tagIds => onChange({tagIds})}/>
      <NotesSection value={selected.note} onChange={note => onChange({note})}/>
      <CategorySection value={selected.category} onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount} onChange={amount => onChange({amount})}/>
    </MyLayout>);
};

export default Money;