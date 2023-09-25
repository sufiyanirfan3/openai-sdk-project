/**
 * Cohere APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Example {
  text?: string;
  label?: string;
}

export const exampleSchema: Schema<Example> = object({
  text: ['text', optional(string())],
  label: ['label', optional(string())],
});
