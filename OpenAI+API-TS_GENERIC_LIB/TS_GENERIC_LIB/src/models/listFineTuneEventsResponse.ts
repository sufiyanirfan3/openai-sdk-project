/**
 * OpenAI APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { FineTuneEvent, fineTuneEventSchema } from './fineTuneEvent';

export interface ListFineTuneEventsResponse {
  object?: string;
  data?: FineTuneEvent[];
}

export const listFineTuneEventsResponseSchema: Schema<ListFineTuneEventsResponse> = object(
  {
    object: ['object', optional(string())],
    data: ['data', optional(array(lazy(() => fineTuneEventSchema)))],
  }
);