/**
 * Cohere APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, optional, Schema } from '../schema';
import { Document2, document2Schema } from './document2';

export interface Result2 {
  document?: Document2;
  /** The index of the input document */
  index: number;
  /** A relevance score assigned to the ranking */
  relevanceScore: number;
}

export const result2Schema: Schema<Result2> = object({
  document: ['document', optional(lazy(() => document2Schema))],
  index: ['index', number()],
  relevanceScore: ['relevance_score', number()],
});
