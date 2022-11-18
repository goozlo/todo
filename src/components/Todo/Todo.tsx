import React, { FC } from "react"
import styled from "styled-components"
import { TodoProps } from "./Todo.props"
import { Description } from "./Description/Description"

const StyledTodo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`

const StyledCheckbox = styled.div<{ isCompleted: boolean }>`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  background: ${props => props.isCompleted && "lightgreen"};
  border: 1px solid var(--gray);
  border-radius: var(--border-radius);
  cursor: pointer;
`

const StyledTitle = styled.h2<{ isCompleted: boolean }>`
  width: 400px;
  word-break: break-all;
  margin-right: 20px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  text-decoration: ${props => props.isCompleted && "line-through"};
  color: ${props => props.isCompleted ? "var(--gray)" : "var(--black)"};
  cursor: pointer;
`

const StyledDate = styled.span`
  font-size: 14px;
  font-weight: 400;
`

export const Todo: FC<Omit<TodoProps, "todoId">> = (
    {
        title,
        body,
        date,
        isCompleted,
        showDesc,
        toggleDesc,
        ...props
    }) => {
    return (
        <StyledTodo {...props}>
            <StyledCheckbox isCompleted={isCompleted}/>
            <StyledTitle
                isCompleted={isCompleted}
                onMouseEnter={toggleDesc}
                onMouseLeave={toggleDesc}
            >
                {title}
            </StyledTitle>
            <Description body={body} style={{ display: showDesc ? "block" : "none" }}/>
            <StyledDate>{date}</StyledDate>
        </StyledTodo>
    )
}


