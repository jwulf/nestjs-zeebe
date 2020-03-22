import { ZBWorkerOptions, ZBClientOptions } from "zeebe-node-next";

/**
 *
 *
 * @export
 * @interface ZeebeWorkerProperties
 */
export interface ZeebeWorkerProperties {
  type: string;
  options?: ZBWorkerOptions<any>;
}

/**
 *
 *
 * @export
 * @interface ZeebeClientOptions
 */
export interface ZeebeClientOptions {
  gatewayAddress?: string;
  options?: ZBWorkerOptions<any> & ZBClientOptions;
}

/**
 *
 *
 * @export
 * @interface ZeebeAsyncOptions
 */
export interface ZeebeAsyncOptions {
  imports?: any[];
  inject?: any[];
  useFactory?: (
    ...args: any[]
  ) => Promise<ZeebeClientOptions> | ZeebeClientOptions;
}
