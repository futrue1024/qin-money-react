import styled from "styled-components";
import React from "react";
import {useTags} from "hooks/useTags";
import {createId} from "../../ilb/createId";

const Wrapper = styled.section`
  background: #ffffff;
  flex-grow: 1;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ul{
  margin: 0 -12px;
    >li{
      background: #D9D9D9;
      border-radius: 18px;
      padding: 3px 18px;
      display: inline-block;
      font-size: 14px;
      margin: 4px 12px;
      &.selected{
        background: #1DA161;
        color: white;
      }
    }
  }
  >button{
    border: none;
    background: none;
    border-bottom: 2px solid #333;
    color: #666;
    margin-top: 8px;
    padding: 2px 4px;
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
      <button onClick={addTag}>新增表签</button>
    </Wrapper>
  );
};
export {TagsSection};