/**
 * Cohere APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Document {
  /** The text of the document to rerank. */
  text: string;
}

export const documentSchema: Schema<Document> = object({
  text: ['text', string()],
});
