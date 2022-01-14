import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData, sliceText} from '../redux/actions';

const Main = () => {
  const {loading, text} = useSelector((state) => state.dataReducer);
  const [playerText, setPlayerText] = useState('');
  const [test, setTest] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    setTest(text);
  }, []);

  useEffect(() => {
    // const compare = () => {
    //   let newText = text.slice(playerText.length, text.length);
    //   if (playerText == newText) {
    //     console.log(newText);
    //     setTest(newText);
    //   }
    // };
    // compare();
  }, [playerText]);

  return (
    <div>
      {loading ? <h3>loading...</h3> : <h3>{test}</h3>}
      <form>
        <textarea
          style={{height: '12vh', width: '150vh'}}
          type="text"
          value={playerText}
          onChange={(e) => setPlayerText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Main;
