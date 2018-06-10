export default function home(state = {}, action) {
    const { payload, type } = action;
    switch(type) {
        case "CHANGE_STATE":
        return { ...state, ...payload };
        default: 
        return state;
    }
}