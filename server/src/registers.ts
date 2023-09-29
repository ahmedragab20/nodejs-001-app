import { Express } from "express";
interface IRegisters {
  (app: Express): void;
}
/**
 * Registers all app components (routers, middlewares, etc.)
 */
export default (app: Express, registers: IRegisters[]) => {
  registers.forEach((register) => register?.(app));
};
