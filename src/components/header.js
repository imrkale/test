import React,{useState} from 'react';
import YearPicker from "react-year-picker"
import { useStateValue } from '../containers/list/stateProvider'
import FetchList from '../containers/list/actions'

function Header({callback}) {
  const [showFilter,setShowFilter] = useState(false);
  const [filterBy,setFilterBy] = useState("1");
  const [category,setCategory] = useState([])
  const [ { winnersList,filters }, dispatch] = useStateValue();
  function handleChange(date) {
    dispatch({
        type: "FETCH_LIST",
        payload: {
            filters:{
                ...filters,
                year: date
            }
        },
    });
  }

  React.useEffect(() => {
    let data = [];
    winnersList.forEach(list=>{
        if(!data.includes(list.category))
        data.push(list.category)
    })
    setCategory(data);
  },[winnersList])

  const filterData = () =>{
    FetchList(filters,callback)
  }

  const resetFilter = () =>{
    dispatch({
        type: "FETCH_LIST",
        payload: {
            filters:{
                year:"",
                category:""
            }},
    });
      FetchList("",callback)
  }

  return <div className="header">
      <div className="filter" onClick={() =>setShowFilter(!showFilter)}>
        <i className="fa fa-sliders" aria-hidden="true"></i>&nbsp; Filter
      </div>
      {
          showFilter ? (
            <div className="filterDropDown">
                <div className="leftFilter">
                    <div>
                        <label className="mb-2">Filter By</label>
                        <select
                            className="form-control"
                            value={filterBy}
                            onChange={(e) => {
                                setFilterBy(e.target.value)
                            }}
                            >
                                <option value="1">
                                    Category
                                </option>
                                <option value="2">
                                    Year
                                </option>
                        </select>
                    </div>
                </div>
                <div className="rightFilter">
                    <div>
                        <div>
                            <label>{filterBy === "2" ? "Select Year" : "Select Category"}</label>
                            {filterBy === "2" ? (
                                <div className="datePicker form-control">
                                    <YearPicker onChange={handleChange} value={filters.year}/>
                                </div>
                            ) : (
                                <select
                                    className="form-control"
                                    data-testid="selected_arrep"
                                    value={filters.category}
                                    onChange={(e) => {
                                        dispatch({
                                            type: "FETCH_LIST",
                                            payload: {
                                                filters:{
                                                    ...filters,
                                                    category: e.target.value
                                            }},
                                        });
                                    }}
                                    >
                                    <option value="" disabled={true}>Select Category</option>
                                    {category.map((res)=>(
                                        <option value={res}>
                                            {res}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                        <div>
                            <button
                                type="reset"
                                className="resetbtn"
                                onClick={() => resetFilter()}
                                >
                                Reset
                                </button>
                                <button
                                type="submit"
                                className="applybtn"
                                onClick={filterData}
                                >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          ) : ""
      }
  </div>;
}

export default Header;

{/* <div className={"row d-flex"}>
<div
  data-cy="customer-search"
  className={`col-md-6`}
>
  <label className="mb-2">Filter By</label>
  <select
      className="form-control"
      value={filterBy}
      onChange={(e) => {
          setFilterBy(e.target.value)
      }}
    >
        <option value="1">
              Year
        </option>
        <option value="2">
              Category
        </option>
    </select>
</div>
{
    filterBy == "1" ? (  
      <YearPicker onChange={handleChange} />
    ) : (
      <div
          className={`col-md-6`}
      >
          <label className="mb-2">Year</label>
          <select
          className="form-control"
          data-testid="selected_arrep"
          value={filters.year}
          onChange={(e) => {
              
          }}
          >
              {category.forEach((res)=>(
                  <option value={res}>
                      { res }
                  </option>
              ))}
          </select>
      </div>
    )
}
<div
  className={`col-md-6 ml-auto`}
>
  <div className="setbtn">
    <button
      type="reset"
      className="btn resetbtn btn-light"
      // onClick={() => resetFilter()}
    >
      Reset
    </button>
    <button
      type="submit"
      className="btn applybtn btn-primary"
      // onClick={filterData}
    >
      Submit
    </button>
  </div>
</div>
</div> */}
