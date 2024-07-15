import { SSTConfig } from "sst";
import { App } from "./stacks/App";

interface GlobalOptions {
  profile?: string;
  role?: string;
  stage?: string;
  root?: string;
  region?: string;
}

export default {
  config(_input: GlobalOptions) {
    return {
      name: "backend",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(App);
  },
} satisfies SSTConfig;
