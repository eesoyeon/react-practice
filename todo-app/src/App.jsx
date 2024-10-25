import { useState, useCallback, useRef } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '자기 전에 스트레칭하기',
            checked: true,
        },
        {
            id: 2,
            text: '쉐리 산책하기',
            checked: false,
        },
        {
            id: 3,
            text: '리액트 뿌시기',
            checked: false,
        },
    ]);

    const nextId = useRef(4);
    // console.log(nextId);

    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text: text,
            checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    });

    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos]
    );

    const onToggle = useCallback(
        (id) => {
            setTodos(
                todos.map((todo) =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo
                )
            );
        },
        [todos]
    );

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
}

export default App;
