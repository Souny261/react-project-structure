import { hookstate } from "@hookstate/core";

const mainState = hookstate({
  todos: [],
  count: 0,
});

export default mainState;
