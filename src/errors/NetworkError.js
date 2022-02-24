module.exports = class NetworkError extends Error {
    statusCode;
    route;
    error;
    constructor(message, statusCode, route, error) {
        super(message);
        this.statusCode = statusCode;
        this.route = route;
        this.error = error;
        this.name = 'NetworkError';
    }
}