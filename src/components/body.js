import React,{useState,useEffect} from 'react';
import '../assets/css/list.css'
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded'
import KeyboardArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded'
import { useStateValue } from '../containers/list/stateProvider'

function Body() {
    const [list,setList] = React.useState([]);
    const [{ winnersList, isFetching}]=useStateValue();

    useEffect(() =>{
        const data = []
        winnersList.forEach(async(list, i) =>{
            await list.laureates.forEach((laureate)=>{
                data.push({...laureate,year:list.year,category:list.category})
            })
        })
        setList(data);
    },[winnersList]);
    const orderBy=(list,year,direction)=>{
        if(direction==="asc")
        {
            return [...list].sort((a,b)=>(a[year]>b[year]?1:-1));
        }
        if(direction==="desc")
        {
            return [...list].sort((a,b)=>(a[year]>b[year]?-1:1));
        }
        return list;
    }
    
    const SortArrow = ({ direction }) => {
        if (!direction) {
          return <></>;
        }
      
        if (direction === "desc") {
          return (
            <div className="heading_arrow">
              <KeyboardArrowDownRounded color="inherit" />
            </div>
          );
        } else {
          return (
            <div className="heading_arrow">
              <KeyboardArrowUpRounded color="inherit" />
            </div>
          );
        }
      };
      
      const [direction,setDirection]=useState();
      const [value,setValue]=useState();
      const orderedList=orderBy(list,value,direction);
      const switchDirection=()=>{
          if(!direction)
          {
              setDirection("desc"); 
              
          }
          else if(direction==="desc")
          {
              setDirection("asc");
          }
          else
          {
              setDirection(null);
          }
      }
      const setValueAndDirection=(value)=>{
          switchDirection();
          setValue(value);
      }
  return <div className="body">
                <div>
                    <div className="heading">
                        <button className="heading_name" onClick={()=>setValueAndDirection("year")}>
                            <div>Year</div>
                            <SortArrow direction={value=="year"?direction:""}/>
                        </button>
                        <button className="heading_population">
                            <div>Name</div>
                        </button>
                    </div>
                    {orderedList.length ? orderedList.map((list)=>(
                            <div className="row">
                                <div className="name">
                                    {list.year}
                                </div>
                                <div className="population">
                                    {list.firstname}
                                </div>
                            </div>
                    )): !isFetching?"No Data Found":"Loading...."}
                </div>
        </div>;
}

export default Body;
