const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reduser: todosReduser,
});

export default store;
