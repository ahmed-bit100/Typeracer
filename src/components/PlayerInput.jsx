import React, {useState} from 'react';

const PlayerInput = () => {
  const [playerText, setPlayerText] = useState('');
  return (
    <div>
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

export default PlayerInput;
