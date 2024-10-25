import { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('clean up');
            console.log(name);
        };
    }, [name]);

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={onChangeName} />
            <input type="text" value={nickname} onChange={onChangeNickname} />
            <div>
                name: {name}, nickname: {nickname}
            </div>
        </div>
    );
};

export default Info;
