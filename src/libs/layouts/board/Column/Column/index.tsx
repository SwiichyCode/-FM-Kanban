import React, { useCallback, useState } from "react";
import update from "immutability-helper";
import { ColumnTitle } from "../ColumnTitle";
import { TaskCard } from "../../Task/TaskCard";
import * as S from "./styles";

interface ColumnProps {
  item: any;
  columns: any;
}

export const Column = ({ item, columns }: ColumnProps) => {
  const [tasks, setTasks] = useState(item.tasks);
  // const { tasks } = item;

  // console.log(tasks);

  const moveCard = useCallback((dragIndex: any, hoverIndex: any) => {
    setTasks((prevCards: any) => {
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      });
    });
  }, []);

  const renderCard = useCallback((card: any, index: any) => {
    return (
      <TaskCard
        index={index}
        id={card.id}
        moveCard={moveCard}
        key={card.id}
        columns={columns}
        item={item}
      />
    );
  }, []);

  return (
    <S.Container color={item.color}>
      <div className="column-header">
        <ColumnTitle title={item.name} item={item} />
        <div className="column-header__dot"></div>
      </div>
      <div className="column-cards">
        {tasks && tasks.map((card: any, i: any) => renderCard(card, i))}
        {/* // return <TaskCard item={item} key={index} columns={columns} />; */}
      </div>
    </S.Container>
  );
};
