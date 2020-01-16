import React, { createContext, useReducer } from "react";

// 创建 context
export const showContext = createContext({});

export const UPDATE_SHOW = "UPDATE_SHOW";
export const UPDATE_INDEX = "UPDATE_INDEX";
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case UPDATE_SHOW:
      return action.show;
    case UPDATE_INDEX:
      return action.show;
    default:
      return state;
  }
};

/**
 * 创建一个 Color 组件
 * Color 组件包裹的所有组件都可以访问到 value
 */
export const Show = props => {
  const [show, dispatch] = useReducer(reducer, {index: 0, show: false, play: true});
  return (
    <showContext.Provider value={{ show, dispatch }}>
      {props.children}
    </showContext.Provider>
  );
};