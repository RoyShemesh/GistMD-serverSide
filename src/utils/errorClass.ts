class ErrorBucket extends Error {
	type: string;
	status: number;
	constructor() {
		super();
		this.name = this.constructor.name;
		if (this instanceof ErrorMissingInfo) {
			this.type = 'Missing info';
			this.status = 400;
		} else {
			this.type = 'Internal server error';
			this.status = 500;
		}
		this.message = this.type;
	}
}

export class ErrorMissingInfo extends ErrorBucket {}
