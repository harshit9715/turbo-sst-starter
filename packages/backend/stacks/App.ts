import { StackContext, Api, EventBus } from "sst/constructs";

export function App({ stack }: StackContext) {
  const api = new Api(stack, "Api", {
    routes: {
      $default: {
        function: "../../functions/sst/index.handler",
      },
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
