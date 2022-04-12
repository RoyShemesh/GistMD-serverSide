class ErrorBucket extends Error {
	type: string;
	status: number;
	constructor() {
		super();
		this.name = this.constructor.name;
		if (this instanceof ErrorMissingInfo) {
			this.type = 'Missing info';
			this.status = 400;
		} else if (this instanceof ErrorInvalidVariable) {
			this.type = 'Invalid varibales';
			this.status = 400;
		} else if (this instanceof ErrorForbiddenRequest) {
			this.type = 'Values does not match';
			this.status = 403;
		} else {
			this.type = 'Internal server error';
			this.status = 500;
		}
		this.message = this.type;
	}
}

export class ErrorMissingInfo extends ErrorBucket {}
export class ErrorInvalidVariable extends ErrorBucket {}
export class ErrorForbiddenRequest extends ErrorBucket {}
