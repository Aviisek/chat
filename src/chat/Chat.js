import { memo, useState } from 'react';
import { flow } from './ChatFlow';

function Chat({number, state, dispatch}) {
    const [answer, setAnswer] = useState(null);
    const [nextQues, setNextQues] = useState(null);

    const onClickHandler = (answer, nextQ) => {
      setAnswer(answer);
      setNextQues(nextQ);
      dispatch({type: number, payload: answer});
    }
    const onSubmit = () => {
      setAnswer(null);
      console.log(state);
      dispatch({type: 'refresh'});
    }
    return (
    <div style={{}}>
        <div style={{ margin: 'auto'}}>
            <div style={{backgroundColor:'aqua', width:'60%', margin: '10px auto'}}>{flow[number].question}</div>
            { !answer &&
            Object.keys(flow[number].options).map(
                (key) => (
                    flow[number].options[key].next ?
                    (<div key={key} style={{paddingTop: '10px'}}
                    onClick={() => onClickHandler(flow[number].options[key].val, flow[number].options[key].next)}>
                        {flow[number].options[key].val}
                        </div> ) : (
                        <div key={key} style={{paddingTop: '10px'}} onClick={onSubmit}>
                            {flow[number].options[key].val}
                            </div> )
                            ))
                            }
            {
                nextQues && (
                    
                <>
                <div style={{backgroundColor:'darkgray', width: '40%' , margin: '20px auto'}}>{answer}</div>
                <Chat number={nextQues} state= {state} dispatch = {dispatch}>
                </Chat>
                </>)
            }
        </div> 
    </div>
  );
}
  
  export default memo(Chat);