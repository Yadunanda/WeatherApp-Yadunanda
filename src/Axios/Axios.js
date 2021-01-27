import axios from 'axios'
const instance=axios.create(
  {
  baseURL:'api.openweathermap.org/data/2.5/weather?q={city name}&appid={34bb70d823f6b4c8fb50284d2c6c43e8}'
  }
);
export default instance
