module.exports = class MissingParamError extends Error {
    statusCode;
    route;
    error;
    constructor(message, route) {
        super(message);
        this.statusCode = 400;
        this.route = route;
        this.error = 'Some parameter is missing.';
        this.name = 'MissingParamError'
    }
}