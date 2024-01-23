import axios from 'axios';

const useFetch = async () => {
   // const [userData, setUserData] = useState(null);
   try {
      const response = await axios.get('https://api.github.com/users/psapkale');

      return response.data;
   } catch (e) {
      console.log(e);
   }
};

export default useFetch;
