import styled from "styled-components";
import React, {useRef,} from "react";

const Wrapper = styled.section`
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
type Props = {
  value:string,
  onChange: (note: string) => void}

const NotesSection:React.FC<Props> = (props) => {
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
      if(refInput.current !== null){
        props.onChange(refInput.current.value)
      }
  }

  return(
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text"
               placeholder='写下为什么花钱吧~'
               defaultValue={note}
               onBlur={onBlur}
               ref={refInput}
        />
      </label>
    </Wrapper>
  )
}
export {NotesSection}