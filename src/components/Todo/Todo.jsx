import { Text } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'reduxTodo/operations';

export const Todo = ({ text, id, counter }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {counter}
      </Text>

      <Text>{text}</Text>
      <button
        onClick={() => dispatch(deleteTodo(id))}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
      {/* <button className={style.editButton} type="button">
      <RiEdit2Line size={24} />
    </button> */}
    </div>
  );
};
