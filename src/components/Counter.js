import {useContext } from 'react';
import { GlobalState } from './GlobalState';

export default function Counter() {

    const {data, setData} = useContext(GlobalState);

    const count = data?.count || 0;

    return (
        <div>
            <p>
                Count: {count}
            </p>
            <button
                onClick={() => {
                    const newCount = count + 1;
                    //setCount(count => newCount);
                    setData(prevData => ({...prevData, count: newCount}));
                }}>
                Increase
            </button>
        </div>
    )
}