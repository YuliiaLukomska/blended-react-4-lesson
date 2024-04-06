import { Section, Container, Header, Text, TodoList, Form } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading, selectTodos } from './reduxTodo/selectors';
import { useEffect } from 'react';
import { fetchTodos } from 'reduxTodo/operations';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          {todos.length === 0 && (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
          {error && <Text textAlign="center">Wrong way...</Text>}
          {loading && <Text textAlign="center">Loading...</Text>}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
