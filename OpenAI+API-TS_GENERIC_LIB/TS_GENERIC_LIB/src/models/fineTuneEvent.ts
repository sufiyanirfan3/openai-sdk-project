/**
 * OpenAI APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface FineTuneEvent {
  object?: string;
  createdAt?: number;
  level?: string;
  message?: string;
}

export const fineTuneEventSchema: Schema<FineTuneEvent> = object({
  object: ['object', optional(string())],
  createdAt: ['created_at', optional(number())],
  level: ['level', optional(string())],
  message: ['message', optional(string())],
});