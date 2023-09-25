/**
 * OpenAI APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateChatCompletionRequest,
  createChatCompletionRequestSchema,
} from '../models/createChatCompletionRequest';
import {
  CreateChatCompletionResponse,
  createChatCompletionResponseSchema,
} from '../models/createChatCompletionResponse';
import { BaseController } from './baseController';

export class ChatController extends BaseController {
  /**
   * Creates a completion for the chat message
   *
   * @param body
   * @return Response from the API call
   */
  async createChatCompletion(
    body: CreateChatCompletionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateChatCompletionResponse>> {
    const req = this.createRequest('POST', '/chat/completions');
    const mapped = req.prepareArgs({
      body: [body, createChatCompletionRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(createChatCompletionResponseSchema, requestOptions);
  }
}
