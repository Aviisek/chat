import { flow } from "../chat/ChatFlow";


const Reducer = (state, action) => {

    if(action.type === 'submit'){
        return {...state,
            refresh: action.payload
        }
    }

    if(action.type === 'refresh'){
        if(action.payload){
            return {
                refresh: action.payload
            };
        }else {
            return {
                refresh: action.payload
            };
        }
    }

    const ques = flow[action.type].question;
    if(ques) { 
        state[ques] = action.payload;
        return {...state};
    }
};

export default Reducer;
