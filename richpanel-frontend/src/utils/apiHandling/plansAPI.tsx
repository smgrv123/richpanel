import axios from "axios";
import { API_URL } from "../../commons/constants";

const getPlansData = (setplansData:any) => {
  axios
    .get(`${API_URL}/plans/get`)
    .then((res) => {
      console.log('line7',res.data);
      setplansData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getPlansData };
