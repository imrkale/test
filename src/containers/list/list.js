// import logo from '../logo.svg';
import FetchList from "./actions"
import '../../assets/css/list.css'
import React from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Body from '../../components/body'
import Details from '../../components/details'
import { useStateValue } from './stateProvider'
import Loader from '../../components/loader'
function List() {
  const [{isFetching},dispatch]=useStateValue();
  function callback(data) {
    dispatch({
      type: "FETCH_LIST",
      payload: {...data},
  });
}
  React.useEffect(() =>{
    FetchList("",callback);
  },[])
  console.log("isFetching list",isFetching);
  return (
    <div className="list">
      <div className="loader" style={{display: isFetching?"inline":"none"}}>
        <Loader/>
      </div>
      <div className="innerList">
        <Header callback={callback}/>
        <Body/>
        <Footer/>
      </div>
        <Details/>
    </div>
  );
}

export default List;
