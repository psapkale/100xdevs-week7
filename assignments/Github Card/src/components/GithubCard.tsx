import useFetch from '../hooks/useFetch';

const GithubCard = () => {
   const user = useFetch();
   console.log(user);

   return <div>Hello</div>;
};

export default GithubCard;
