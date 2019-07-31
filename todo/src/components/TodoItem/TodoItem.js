import React from "react";
import T from "prop-types";
import cx from "classnames/bind";
import s from "./TodoItem.module.css";

const classes = cx.bind(s);

const TodoItem = ({
  title,
  id,
  completed,
  onClick,
  onRemoveClick
}) => {
  const LineToggle = classes("container", { completed }); //change to true or false and add styles
  return (
    <div className={s.container} id={completed ? "good" : "inProcess"}>
      <div onClick={evt => onClick(evt, id)}
        className={LineToggle}>
        {title}
      </div>
      <button onClick={() => onRemoveClick(id)}>X</button>
    </div>
  );
};
TodoItem.propTypes = {
  title: T.string,
  id: T.number,
  completed: T.bool,
  onClick: T.func
};

export default TodoItem;
