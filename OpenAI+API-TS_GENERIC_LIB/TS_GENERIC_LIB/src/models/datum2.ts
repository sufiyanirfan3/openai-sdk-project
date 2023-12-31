/**
 * OpenAI APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Datum2 {
  url?: string;
  b64Json?: string;
}

export const datum2Schema: Schema<Datum2> = object({
  url: ['url', optional(string())],
  b64Json: ['b64_json', optional(string())],
});
