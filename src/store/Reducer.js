import { flow } from "../chat/ChatFlow";


const Reducer = (state, action) => {

    if(action.type === 'refresh'){
        return {...state, 
            refresh: action.payload
        };
    }

    const ques = flow[action.type].question;
    if(ques) { 
        state[ques] = action.payload;
        return {...state};
    }
};

export default Reducer;
