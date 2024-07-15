/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-ion-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const api = new sst.aws.ApiGatewayV2("MyApi");
    api.route("$default", {
      handler: "../../functions/ion/index.handler",
    });

    new sst.aws.Nextjs("Website", {
      path: "../../apps/web",
    });

    new sst.aws.Nextjs("Docs", {
      path: "../../apps/docs",
    });
  },
});
