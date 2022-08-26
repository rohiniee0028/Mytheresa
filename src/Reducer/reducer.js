export const reducer = (state, action)=>{
    switch(action.type){
        case "FETCH_SUCCESS":
            return {
                loading:false,
                error:false,
                data:action.payload,
            }
        case "FETCH_ERROR":
            return {
              loading:false,
              error:"Something went wrong",
              data:[]
            }
        default:
            return state;
    }
}