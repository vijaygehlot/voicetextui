class Api {
  constructor() {}

  getNavigation = () => {
    const data = require("../data/navigation.json");
    return data.routes;
  };

  
}

export default new Api();
