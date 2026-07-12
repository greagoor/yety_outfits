// ============================================================
// AppError — Typed error classes for the service/repo layer
// ============================================================

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;

  constructor(message: string, statusCode: number = 500, code: string = 'INTERNAL_ERROR') {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.code = code;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string = 'Resource') {
    super(`${resource} not found`, 404, 'NOT_FOUND');
    this.name = 'NotFoundError';
  }
}

export class ConflictError extends AppError {
  constructor(message: string = 'Resource already exists') {
    super(message, 409, 'CONFLICT');
    this.name = 'ConflictError';
  }
}

export class ValidationError extends AppError {
  constructor(message: string = 'Validation failed') {
    super(message, 422, 'VALIDATION_ERROR');
    this.name = 'ValidationError';
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401, 'UNAUTHORIZED');
    this.name = 'UnauthorizedError';
  }
}

// ──────────────────────────────────────────────────────────
// Prisma error handler — keeps DB internals out of responses
// ──────────────────────────────────────────────────────────

export function handlePrismaError(err: unknown): AppError {
  if (err && typeof err === 'object' && 'code' in err) {
    const code = (err as { code: string }).code;

    switch (code) {
      case 'P2002':
        return new ConflictError('A record with this identifier already exists');
      case 'P2025':
        return new NotFoundError('Record');
      case 'P2003':
        return new AppError('Related record not found', 400, 'FOREIGN_KEY_VIOLATION');
      case 'P2016':
        return new NotFoundError('Record');
      default:
        console.error('[Prisma Error]', err);
        return new AppError('Database operation failed', 500, 'DB_ERROR');
    }
  }

  if (err instanceof AppError) return err;

  console.error('[Unexpected Error]', err);
  return new AppError('An unexpected error occurred', 500);
}
