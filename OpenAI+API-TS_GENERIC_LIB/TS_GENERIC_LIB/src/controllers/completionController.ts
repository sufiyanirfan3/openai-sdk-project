/**
 * OpenAI APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateCompletionRequest,
  createCompletionRequestSchema,
} from '../models/createCompletionRequest';
import {
  CreateCompletionResponse,
  createCompletionResponseSchema,
} from '../models/createCompletionResponse';
import { BaseController } from './baseController';

export class CompletionController extends BaseController {
  /**
   * `Legacy endpoint` <br/>
   * Creates a completion for the provided prompt and parameters
   *
   * @param body
   * @return Response from the API call
   */
  async createCompletion(
    body: CreateCompletionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateCompletionResponse>> {
    const req = this.createRequest('POST', '/completions');
    const mapped = req.prepareArgs({
      body: [body, createCompletionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(createCompletionResponseSchema, requestOptions);
  }
}