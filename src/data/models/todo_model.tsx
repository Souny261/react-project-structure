export type TodosModel = Todos[];

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
