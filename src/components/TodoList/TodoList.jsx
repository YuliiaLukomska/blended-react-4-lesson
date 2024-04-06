import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/selectors';

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      {!todos.length ? (
        <Text textAlign="center">We did not find any todo😯</Text>
      ) : (
        <Grid>
          {todos.map(({ id, text }, index) => (
            <GridItem key={id}>
              <Todo text={text} id={id} counter={index + 1} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};
