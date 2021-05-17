import React from 'react';
import Counter from './counter/counter';

const App = () => {
    return (
        <div>
            <Counter counterLimit={2} />
            <Counter counterLimit={5} />
        </div>
    );
}

export default App;