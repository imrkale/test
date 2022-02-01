import { instance } from '../../actions/axiosInstance'
import { toast } from "react-toastify";

const getQuery = (data) => {
      var query = "";
      for (const [key, value] of Object.entries(data)) {
        if (value) query += key + "=" + value + "&";
      }
      return query;
};

const FetchList = async (data,callback) =>
{
    callback({
        isFetching: true,
    });

    let query = ""; 
    if(data)
    query = `?${getQuery(data)}`;

    instance.get(`v1/prize.json${query}`).then((res) => {
        toast.success("Filter applied", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500
          });
        callback({
            winnersList: res.data.prizes,
            isFetching: false,
            filters: data
        })
    })
}

export default FetchList;
  
