export class ContactSubmissionError extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'ContactSubmissionError';

    Object.setPrototypeOf(
      this,
      ContactSubmissionError.prototype,
    );
  }
}