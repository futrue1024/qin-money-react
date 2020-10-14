import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import { TagsSection } from "components/money/TagsSection";
import { NotesSection } from "components/money/NotesSection";
import { CategorySection } from "components/money/categorySection";
import {NumberPadSection} from "../components/money/NumberPadSection";



const MyLayout = styled(Layout)`
 display: flex;
 flex-direction: column;
`;
const Money = () => {
  return (
    <MyLayout>
      <TagsSection/>
      <NotesSection/>
      <CategorySection/>
      <NumberPadSection/>
    </MyLayout>);
};

export default Money;