import { useRecoilValueLoadable } from 'recoil';
import { todoSelectorFamily } from './store/selectors/selectorFamily';

const Loadables = () => {
   return (
      <>
         <Todo id={1} />
         <Todo id={2} />
      </>
   );
};

const Todo = ({ id }) => {
   const todo = useRecoilValueLoadable(todoSelectorFamily(id));

   if (todo.state === 'hasError') {
      return <>Error while getting data from backend</>;
   }

   if (todo.state === 'loading') {
      return <>loading...</>;
   }
   if (todo.state === 'hasValue') {
      return (
         <>
            <h3>{todo.contents.title}</h3>
            <h3>{todo.contents.description}</h3>
         </>
      );
   }
};

export default Loadables;
