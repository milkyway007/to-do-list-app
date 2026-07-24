import type { ITaskRepository } from "../../../domain.interfaces/repositories/task.repository.interface.ts";
import type { Task } from "../../../domain/task.entity.ts";

export class GetAllTasksUseCase {
    private readonly taskRepository: ITaskRepository

    constructor(taskRepository: ITaskRepository ) {
        this.taskRepository = taskRepository;
    }

    async execute(): Promise<Task[]> {
        return this.taskRepository.findAll();
    }
}