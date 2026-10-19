import { ApiError } from '../utils/apiError.js';

/**
 * Higher-order middleware to validate incoming request data using Zod
 * @param {import('zod').ZodSchema} schema
 * @param {'body' | 'query' | 'params'} [source='body']
 */
export const validate = (schema, source = 'body') => {
  return async (req, res, next) => {
    try {
      const parsedData = await schema.parseAsync(req[source]);
      req[`validated${source.charAt(0).toUpperCase() + source.slice(1)}`] = parsedData;
      // also replace the original source with cleaned/coerced values
      req[source] = parsedData;
      next();
    } catch (error) {
      if (error.errors) {
        const formattedErrors = error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message
        }));
        return next(new ApiError(400, 'Validation failed', formattedErrors));
      }
      next(error);
    }
  };
};
