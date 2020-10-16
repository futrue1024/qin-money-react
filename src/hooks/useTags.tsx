import {useEffect, useState} from "react";
import {createId} from "../ilb/createId";
import {useUpdate} from "./useUpdate";

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]")
    if (localTags.length === 0){
      localTags = [
        {id: createId(), name: "衣服"},
        {id: createId(), name: "餐饮"},
        {id: createId(), name: "房贷"},
        {id: createId(), name: "娱乐"},
        {id: createId(), name: "教育"},
        {id: createId(), name: "宠物"},
        {id: createId(), name: "工资"},
        {id: createId(), name: "理财"}

      ]
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));},
    tags);

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;

  };

  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name: obj.name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt("请输入标签名");
    if (tagName !== null && tags.length >= 1) {
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].name === tagName) {
          alert("标签名已存在");
        } else {
          setTags([...tags, {id: createId(), name: tagName}]);
        }
      }
    } else if (tags.length === 0 && tagName !== null) {
      setTags([{id: createId(), name: tagName}]);
    } else {
      alert("未输入标签名，标签名不能为空");
    }
  };
  const findTagName = (id:number) => {
     const tag = tags.filter(t => t.id === id)[0]
    return tag.name
  }
  return {tags, setTags,findTagName, addTag, findTag, updateTag, deleteTag, findTagIndex};
};
export {useTags};