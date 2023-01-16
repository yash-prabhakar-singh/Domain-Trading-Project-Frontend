const nego={
    present:false,
    sdomain:'',
    price:''
}

const reducer = (state=nego, action) => {
    let newNego;
    switch (action.type) {
      case "set":
       return {
            present:true,
           sdomain: action.sdomain,
           price: action.price
        };
        
        case "reset":
       return {
            present:false,
            sdomain:'',
            price: ''
        }
        
      default:
        return state;
    }
  };

  export default reducer;