import { useEffect } from "react";
import { MainController } from "../controller/main.controller";
import { TodosModel } from "../../data/models/todo_model";

function ViewIndex() {
  const mainController = new MainController();
  useEffect(() => {
    mainController.fetchTodoData();
  }, []);
  const data: TodosModel = mainController.todosData();
  return (
    <>
      <div className="px-16 py-16">
        <div className="flex flex-row mr-8">
          Counter: {mainController.state.count.value}
          <button
            className="pl-8"
            onClick={() => {
              mainController.addCount();
            }}
          >
            Click
          </button>
        </div>
        <h1 className="text-2xl font-bold">Todos List</h1>
        <hr />
        <ul>
          {data ? (
            data.map((e) => {
              return <li key={e.id}>{e.title}</li>;
            })
          ) : (
            <>Loading...</>
          )}
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default ViewIndex;
