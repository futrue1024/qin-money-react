import Layout from "../components/Layout";
import React, {useState} from "react";
import {TypeSection} from "components/money/TypeSection";
import {RecordsItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import styled from "styled-components";
import dayjs from "dayjs";

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
const TitleAt = styled.h3`
 
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  
`
const Statistics = () => {
  const [category, setCategory] = useState<"-" | "+">("-");
  const {records} = useRecords();
  const {findTagName} = useTags();
  const hash: { [K: string]: RecordsItem[] } = {};
  const selectedRecords = records.filter(r => r.category === category);

  selectedRecords.forEach(r => {
    const key = dayjs(r.createAt).format("YYYY年MM月DD日");
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) {return 0;}
    if (a[0] > b[0]) {return -1;}
    if (a[0] < b[0]) {return 1;}
    return 0;
  });
  return (
    <Layout>
      <TypeSection value={category} onChange={value => setCategory(value)}/>
      <div>
        {array.map(([date,records]) => <div key={date}>
            <TitleAt>{date}</TitleAt>
            <div>
              {records.map(r => {
                return <Item key={r.createAt}>
                  {r.tagIds.map(tagId => <span key={tagId}>{findTagName(tagId)}</span>)}
                  {r.note && <div className='note'>{r.note}</div>}
                  <div>
                    ￥{r.amount}
                  </div>
                </Item>;
              })}
            </div>
          </div>
        )}
      </div>
    </Layout>

  );
};

export default Statistics;