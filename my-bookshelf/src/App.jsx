import { useState } from 'react'; 

export default function App() {

    const [num, setNum] = useState(0);

    const addClick = () => {
        setNum(num + 1);
    };

    const decreaseClick = () => {
        setNum(num - 1);
    };

    const resetBtn = () => {
        setNum(0);
    };

    return (
    <div className="p-4 flex flex-col items-center gap-4">


        <div className="flex items-center gap-4">
            <button 
                onClick={addClick} 
                className="bg-pink-400 text-white px-4 py-2 rounded-2xl">
                ＋
            </button>
            <p className="text-2xl font-bold">{num}</p>
            <button 
                onClick={decreaseClick} 
                className="bg-sky-600 text-white px-4 py-2 rounded-2xl">
                ー
            </button>
        </div>


        <button
            onClick={resetBtn}
            className="bg-white border text-gray-600 font-bold px-4 py-2 rounded hover:bg-gray-200">
            リセットする
        </button>
    </div>
  );
}
