import Layout from "../components/Layout";
import React, {useState} from "react";
import {TypeSection} from "components/money/TypeSection";
import {useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
// import dayjs from "dayjs";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 10px 16px;
  background: #ffffff;
  border-bottom: 1px solid #d4d4d4;
  >.note{
   color: #999;
   margin-right: auto;
   padding-left: 10px;
  }
  
`;
const Statistics = () => {
  const [category, setCategory] = useState<"-" | "+">("-");
  const {records} = useRecords();
  const {findTagName} = useTags();
  return (
    <Layout>
      <TypeSection value={category} onChange={value => setCategory(value)}/>
      <div>
        {records.map(r => {
          return <Item>
            {r.tagIds.map(tagId => <span>{findTagName(tagId)}</span>)}
            {r.note && <div className='note'>{r.note}</div>}
            <div>
              ￥{r.amount}
            </div>
            {/*{dayjs(r.createAt).format("YYYY年MM月DD日")}*/}
          </Item>;
        })}
      </div>
    </Layout>

  );
};

export default Statistics;