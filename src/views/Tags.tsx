import Layout from "../components/Layout";
import React from "react";
import {useTags} from "hooks/useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
import {Link} from "react-router-dom";
import {Button} from "../components/Button";

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
    >span{
      display: flex;
      align-items: center;
    }
    }
    
  }
`;

const Center = styled.div`
margin-top:60px;
display: flex;
justify-content: center;
align-items: center;

`
const Tags = () => {
  const {tags,addTag} = useTags();
  return (
    <Layout>
      <TagsList>
        {tags.map(tag =>
          <li key={tag.id}>
          <Link to={'/tags/'+tag.id}>
              <span>{tag.name}</span>
              <span>编辑<Icon name='right'/></span>
          </Link>
          </li>
          )}
      </TagsList>
      <Center>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
};

export default Tags;