import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import { TagsSection } from "components/money/TagsSection";


const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
    display: flex;
    align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      display: block;
      border: none;
      width: 100%;
      height: 72px;
      background: none;
    }
  }
`;
const CategorySection = styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    background: #1DA161;
    color: white;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        position: absolute;
        display: block;
        content: '';
        height: 3px;
        background: #333333;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }

`;
const NumberPadSection = styled.section`
  >.output{
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 4px -5px rgba(0,0,0,0.25),
                inset 0 5px 4px -5px rgba(0,0,0,0.25);
  }
  .pad{
    >button{
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border:1px solid #999 ;
      border-radius: 8px;
      &.ok{
        height: 128px;
        float: right;
      }
      &.zero{
       width: 50%;
      }
      &:nth-child(1){
        background: #f2f2f2;
      }
      &:nth-child(2),&:nth-child(5){
        background: #e0e0e0;
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background: #d3d3d3;
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10){
        background: #c1c1c1;
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
        background: #b8b8b8;
      }
      &:nth-child(12){
        background: #9a9a9a;
      }
      &:nth-child(14){
        background: #a9a9a9;
      }
`;
const MyLayout = styled(Layout)`
 display: flex;
 flex-direction: column;
`;
const Money = () => {
  return (
    <MyLayout>
      <TagsSection>

      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder='写下为什么花钱吧~'/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className='selected'>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className='output'>
          100
        </div>
        <div className='pad clearfix'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className='cancel'>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className='clear'>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className='ok'>ok</button>
          <button className='zero'>0</button>
          <button>.</button>
        </div>

      </NumberPadSection>
    </MyLayout>);
};

export default Money;