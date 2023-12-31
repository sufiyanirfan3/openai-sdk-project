/**
 * Cohere APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Meta, metaSchema } from './meta';
import { Result, resultSchema } from './result';

export interface DetectLanguageResponse {
  /** List of languages, one per input text */
  results?: Result[];
  meta?: Meta;
}

export const detectLanguageResponseSchema: Schema<DetectLanguageResponse> = object(
  {
    results: ['results', optional(array(lazy(() => resultSchema)))],
    meta: ['meta', optional(lazy(() => metaSchema))],
  }
);
