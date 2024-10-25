import { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '눈' },
        { id: 3, text: '얼음' },
        { id: 4, text: '바람' },
    ]);

    const [input, setInput] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => {
        setInput(e.target.value);
    };

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: input,
        });
        console.log(nextNames);
        setNextId(nextId + 1);
        setNames(nextNames);
        setInput('');
    };

    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id);
        setNames(nextNames);
    };

    const onKeyDown = (e) => {
        console.log(e.nativeEvent.isComposing);
        if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
            onClick();
        } // 에러 발생 : 한글이 두번 입력됨
    };

    const namesList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button onClick={onClick}>추가하기</button>
            <ul>{namesList}</ul>
        </div>
    );
};

export default IterationSample;
