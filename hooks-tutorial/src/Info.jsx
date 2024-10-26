import { useState, useEffect, useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: '',
    });

    const { name, nickname } = state;

    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');

    const onChange = (e) => {
        dispatch(e.target);
    };

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('clean up');
            console.log(name);
        };
    }, [name]);

    // const onChangeName = (e) => {
    //     setName(e.target.value);
    // };
    // const onChangeNickname = (e) => {
    //     setNickname(e.target.value);
    // };

    return (
        <div>
            <input type="text" name="name" value={name} onChange={onChange} />
            <input
                type="text"
                name="nickname"
                value={nickname}
                onChange={onChange}
            />
            <div>
                name: {name}, nickname: {nickname}
            </div>
        </div>
    );
};

export default Info;
