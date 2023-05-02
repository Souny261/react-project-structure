import { TodosModel } from "../models/todo_model";
import restClient from "../provider/network/api_rest_client";
interface MainServiceRepository {
  fetchTodosData: () => Promise<TodosModel>;
}

class MainService implements MainServiceRepository {
  fetchTodosData = async () => {
    const res = await restClient.get(`/todos`);
    const data: TodosModel = res.data;
    return data;
  };
}

export { MainService };
