import styled from "styled-components";
import React from "react";
import {useTags} from "useTags";

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
  value: string[]
  onChange: (selected: string[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectTag = props.value;
  const addTag = () => {
    const tagName = window.prompt("请输入标签名");
    if (tagName === null) {
      alert("未输入标签名，标签名不能为空");
    } else {
      if (tags.indexOf(tagName) < 0) {
        setTags([...tags, tagName]);
      } else {
        alert("标签名已存在");
      }
    }
  };
  const onSelectTag = (tag: string) => {
    const index = selectTag.indexOf(tag);
    if (index >= 0) {
      props.onChange(selectTag.filter(t => t !== tag));
      //如果已经在数组内，再次点击从数组filter。
    } else {
      props.onChange([...selectTag, tag]);
    }
  };
  return (
    <Wrapper>
      <ul>
        {tags.map(tag =>
          <li key={tag} onClick={() => {onSelectTag(tag);}}
              className={selectTag.indexOf(tag) >= 0 ? "selected" : ""}>
            {tag}
          </li>)}
      </ul>
      <button onClick={addTag}>新增表签</button>
    </Wrapper>
  );
};
export {TagsSection};