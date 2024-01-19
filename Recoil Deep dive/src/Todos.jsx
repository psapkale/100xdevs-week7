import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './store/atoms/atomFamily';
import { useEffect } from 'react';
import { todoSelectorFamily } from './store/selectors/selectorFamily';

const Todos = () => {
   return (
      <>
         {/* <UpdateElement /> */}
         <Todo id={1} />
         <Todo id={2} />
         <Todo id={2} />
         <Todo id={2} />
         <Todo id={2} />
      </>
   );
};

// eslint-disable-next-line no-unused-vars
function UpdateElement() {
   const updateTodo = useSetRecoilState(todosAtomFamily(2));

   useEffect(() => {
      setTimeout(() => {
         updateTodo({
            id: '2',
            title: 'new title',
            description: 'new description',
         });
      }, 5000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return <></>;
}

const Todo = ({ id }) => {
   // const currentTodo = useRecoilValue(todosAtomFamily(id));
   const currentTodo = useRecoilValue(todoSelectorFamily(id));

   return (
      <>
         {currentTodo.title}
         {currentTodo.description}
         <br />
      </>
   );
};

export default Todos;
