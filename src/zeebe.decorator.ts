import { ZeebeExceptionFilter } from "./zeebe.exception.filter";
import { MessagePattern } from "@nestjs/microservices";
import { ZBWorkerOptions } from "zeebe-node-next";
import { UseFilters } from "@nestjs/common";

export /**
 * A decorator that auto exposes the end-point as a Zeebe worker and overrides the NestJS
 * Exception handling to allow failing a job once an exception is thrown.


 * @param {string} type
 * @param {ZBWorkerOptions} [options]
 * @returns {MethodDecorator}
 */
const ZeebeWorker = (
  type: string,
  options?: ZBWorkerOptions<any>
): MethodDecorator => {
  return (...args) => {
    let messagePattern = MessagePattern({ type, options: options || null });
    let exceptionFilter = UseFilters(ZeebeExceptionFilter);

    if (typeof args[1] === "string") {
      exceptionFilter(args[0], args[1], args[2]);
    }
    messagePattern(...args);
  };
};
