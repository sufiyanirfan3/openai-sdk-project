/**
 * Cohere APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, lazy, number, object, Schema, string } from '../schema';
import { Labels, labelsSchema } from './labels';

export interface Result4 {
  /** The input text that was classified */
  input: string;
  /** The predicted class for the associated query */
  prediction: string;
  /** The confidence score for the top predicted class */
  confidence: number;
  /**
   * A map containing each class and its confidence score according to the classifier. The score is computed as follows:
   * 1. Obtain the likelihood from the back of every generate prompt until the label is formed.
   * 1. Divide the sum from Step 1 by the number of tokens in the label.
   * 1. Normalize scores with a softmax.
   */
  labels: Record<string, Labels>;
}

export const result4Schema: Schema<Result4> = object({
  input: ['input', string()],
  prediction: ['prediction', string()],
  confidence: ['confidence', number()],
  labels: ['labels', dict(lazy(() => labelsSchema))],
});