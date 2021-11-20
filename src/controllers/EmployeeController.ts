import { Request, Response } from "express";
import EmployeeService from "../services/EmployeeService";

class EmployeeController {
  public async getAll(request: Request, response: Response) {
    const employeeService = new EmployeeService();
    const employees = await employeeService.getAll();

    return response.json(employees);
  }

  public async getOnly(request: Request, response: Response) {
    const employeeService = new EmployeeService();
    const { id } = request.params;
    const employee = await employeeService.getOnly(id);

    return response.json(employee);
  }

  public async put(request: Request, response: Response) {
    const employeeService = new EmployeeService();
    const { id } = request.params;
    const { name, role } = request.body;
    const employee = await employeeService.update({ id, name, role });

    return response.json(employee);
  }

  public async post(request: Request, response: Response) {
    const employeeService = new EmployeeService();
    const { name, role } = request.body;
    const employee = await employeeService.create({ name, role });

    return response.status(201).json(employee);
  }

  public async delete(request: Request, response: Response) {
    const employeeService = new EmployeeService();
    const { id } = request.params;

    await employeeService.remove(id);

    return response.status(204).end();
  }
}

export default EmployeeController;
