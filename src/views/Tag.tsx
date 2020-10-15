import React from "react";
import {useTags} from "../hooks/useTags";
import {useParams,useHistory} from "react-router-dom";
import Layout from "components/Layout";
import Icon from "components/Icon";
import {Button} from "components/Button";
import styled from "styled-components";
import {Input} from "../components/Input";

type Params = {
  id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content:space-between ;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
  > .topRight{
  width: 16px;
  height: 16px;
  }
  //box-shadow: 0 0 3px rgba(0,0,0,0.3);

`
const LabelWrapper = styled.div`
  background: white;
  margin-top: 16px;
`
const ButtonWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Tag: React.FC = () => {
  const {findTag,updateTag,deleteTag} = useTags();
  let {id:idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const history = useHistory()
  const onBack = () => {
    history.goBack()
  }
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onBack}/>
        <span>编辑标签</span>
        <span className='topRight'/>
      </Topbar>
      {tag?<div>
        <LabelWrapper>
          <Input label='标签名' type='text' placeholder='标签名'
                 value={tag.name}
                 onChange={(e) =>{
                   updateTag(tag.id,{name:e.target.value})}
                 }/>
        </LabelWrapper>
        <ButtonWrapper>
          <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
        </ButtonWrapper>
      </div>:<div>tag不存在</div>}
    </Layout>

  );
};

export {Tag};