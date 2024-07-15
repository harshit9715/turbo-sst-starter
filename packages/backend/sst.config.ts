import { SSTConfig } from "sst";
import { App } from "./stacks/App";

export default {
  config(_input) {
    return {
      name: "backend",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(App);
  }
} satisfies SSTConfig;
