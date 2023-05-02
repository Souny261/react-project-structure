import { useHookstate } from "@hookstate/core";
import mainState from "../hook/main.state";
import { MainService } from "../../data/services/main.service";
import { TodosModel } from "../../data/models/todo_model";

interface MainCtrlRepository {
  fetchTodoData: () => void;
  todosData: () => TodosModel;
  addCount: () => void;
}

class MainController implements MainCtrlRepository {
  state: any;
  mainService: MainService;
  constructor() {
    this.state = useHookstate(mainState);
    this.mainService = new MainService();
  }
  addCount = () => {
    this.state.count.set(this.state.count.value + 1);
  };

  todosData = () => this.state.todos.value as TodosModel;
  fetchTodoData = () => {
    this.mainService.fetchTodosData().then((value) => {
      this.state.todos.set(value);
    });
  };
}

export { MainController };
