import React, { memo, useContext } from 'react';
import { Context } from '../store/Store';
import Chat from './Chat';

function ChatContainer() {
    const { state, dispatch } =  useContext(Context);
    const {refresh, ...chat} = {...state};
    return (
        <div className="App">
            {
            !refresh ? (
                <>
                <button style={{margin: '20px 0'}} onClick={() => dispatch({type: 'refresh', payload: true })}>Start Chat</button>
                { Object.keys(chat).length > 0 &&
                    <div>{JSON.stringify(chat)}</div>
                    }
                </>
            )
            :
            (<button style={{margin: '20px 0'}} onClick={() => dispatch({type: 'refresh', payload: false})}>Refresh Chat</button>)
        }
        {
        refresh && <Chat number={1} state = {state} dispatch = {dispatch}></Chat> 
        }
        </div>
    );
}

export default memo(ChatContainer);