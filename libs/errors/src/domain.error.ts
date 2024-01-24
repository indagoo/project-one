import { ValidationError } from 'class-validator';

export class DomainValidationError extends Error {
  constructor(errors: ValidationError[], message?: string) {
    const _errors: string[] = [];
    errors.length &&
      errors.forEach((err) => {
        err?.constraints &&
          Object.entries(err.constraints).forEach((v) => {
            _errors.push(v[1]);
          });
      });
    super(`Errors: ${_errors.join(';')}${message ? `. ${message}` : ''}`);
    this.name = DomainValidationError.name;
  }
}
