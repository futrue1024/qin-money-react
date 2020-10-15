import styled from "styled-components";
import React from "react";
import {useTags} from "hooks/useTags";
import Icon from "../Icon";


const Wrapper = styled.section`
  background: #ffffff;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  
  >ul{
  margin: 0 -12px;
    >li{
      background: #D9D9D9;
      border-radius: 18px;
      padding: 3px 18px;
      display: inline-block;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background: #1DA161;
        color: white;
      }
    }
  }
  >.add{
  >button{
    border: none;
    background: none;
    border-bottom: 2px solid #333;
    color: #666;
    margin-top: 8px;
    padding: 2px 4px;
  }
  }
  
`;
type Props = {
  value: number[]
  onChange: (selected: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags,addTag} = useTags();
  const selectTagIds = props.value;

  const onSelectTag = (tagIds: number) => {
    const index = selectTagIds.indexOf(tagIds);
    if (index >= 0) {
      props.onChange(selectTagIds.filter(t => t !== tagIds));
      //如果已经在数组内，再次点击从数组filter。
    } else {
      props.onChange([...selectTagIds, tagIds]);
    }
  };
  return (
    <Wrapper>
      <ul>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => {onSelectTag(tag.id);}}
              className={selectTagIds.indexOf(tag.id) >= 0 ? "selected" : ""}>
            {tag.name}
          </li>)}
      </ul>
      <div className='add'>
        <button onClick={addTag}><Icon name='新建1'/>新增标签</button>
      </div>

    </Wrapper>
  );
};
export {TagsSection};