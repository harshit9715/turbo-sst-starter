/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    Docs: {
      type: "sst.aws.Nextjs"
    }
    MyApi: {
      type: "sst.aws.ApiGatewayV2"
      url: string
    }
    Website: {
      type: "sst.aws.Nextjs"
    }
  }
}
export {}