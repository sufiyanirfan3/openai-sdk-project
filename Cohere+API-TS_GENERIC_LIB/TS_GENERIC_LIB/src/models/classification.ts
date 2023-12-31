/**
 * Cohere APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  dict,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { Labels, labelsSchema } from './labels';

export interface Classification {
  id: string;
  /** The input text that was classified */
  input?: string;
  /** The predicted label for the associated query */
  prediction: string;
  /** The confidence score for the top predicted class */
  confidence: number;
  /** A map containing each label and its confidence score according to the classifier. All the confidence scores add up to 1. */
  labels: Record<string, Labels>;
  /** An array containing each label and its confidence score according to the classifier */
  confidences?: unknown[];
}

export const classificationSchema: Schema<Classification> = object({
  id: ['id', string()],
  input: ['input', optional(string())],
  prediction: ['prediction', string()],
  confidence: ['confidence', number()],
  labels: ['labels', dict(lazy(() => labelsSchema))],
  confidences: ['confidences', optional(array(unknown()))],
});
