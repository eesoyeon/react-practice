import './TodoListItem.scss';
import {
    MdOutlineCheckBoxOutlineBlank,
    MdOutlineRemoveCircleOutline,
    MdCheckBox,
} from 'react-icons/md';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem">
            <div
                className={cn('checkbox', { checked })}
                onClick={() => {
                    onToggle(id);
                }}
            >
                {checked ? <MdCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdOutlineRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;
