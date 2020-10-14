import Layout from "../components/Layout";
import React from "react";
import {useTags} from "useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
import {Link} from "react-router-dom";

const TagsList = styled.ol`
  font-size: 16px;
  >li{
    border-bottom: 1px solid #D5D5D5;
    line-height: 20px;
    margin: 0 14px;
    >a{
     padding: 12px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    
  }
`;
const Button = styled.button`
  border: none;
  padding:8px 12px;
  color: white;
  border-radius: 4px;
  background: #1DA161;
`;
const Center = styled.div`
margin-top:60px;
display: flex;
justify-content: center;
align-items: center;

`
const Tags = () => {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagsList>
        {tags.map(tag =>
          <li key={tag}>
          <Link to={'/tags/'+tag}>
              <span>{tag}</span>
              <Icon name='right'/>
          </Link>
          </li>
          )}
      </TagsList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
};

export default Tags;