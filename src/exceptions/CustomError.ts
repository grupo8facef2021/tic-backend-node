class CustomError {
    public message: string;
    public status: number;

    constructor(message: string, status: number = 400) {
        this.message = message
        this.status = status
    }
}

export default CustomError