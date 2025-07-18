import { sleep } from "@temporalio/workflow";

export async function sayHelloWorkflow(name: string): Promise<string> {
  sleep(5000)
  return `Hello, ${name}!`;
}