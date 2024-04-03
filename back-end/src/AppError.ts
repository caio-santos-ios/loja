export class AppError extends Error {
    statusCode: number;

    constructor(msg: string, status: number) {
        super(msg)
        this.statusCode = status
    }
}