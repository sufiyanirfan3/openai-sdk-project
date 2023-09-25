/**
 * OpenAI APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, FileWrapper, RequestOptions } from '../core';
import {
  DeleteFileResponse,
  deleteFileResponseSchema,
} from '../models/deleteFileResponse';
import {
  ListFilesResponse,
  listFilesResponseSchema,
} from '../models/listFilesResponse';
import { OpenAIFile, openAIFileSchema } from '../models/openAIFile';
import { string } from '../schema';
import { BaseController } from './baseController';

export class FilesController extends BaseController {
  /**
   * Returns a list of files that belong to the user's organization.
   *
   * @return Response from the API call
   */
  async listFiles(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListFilesResponse>> {
    const req = this.createRequest('GET', '/files');
    return req.callAsJson(listFilesResponseSchema, requestOptions);
  }

  /**
   * Upload a file that contains document(s) to be used across various endpoints/features. Currently, the
   * size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need
   * to increase the storage limit.
   *
   *
   * @param file    Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be
   *                               uploaded.  If the `purpose` is set to "fine-tune", each line is a JSON record with
   *                               "prompt" and "completion" fields representing your [training
   *                               examples](/docs/guides/fine-tuning/prepare-training-data).
   * @param purpose The intended purpose of the uploaded documents.  Use "fine-tune" for [Fine-
   *                               tuning](/docs/api-reference/fine-tunes). This allows us to validate the format of
   *                               the uploaded file.
   * @return Response from the API call
   */
  async uploadFile(
    file: FileWrapper,
    purpose: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OpenAIFile>> {
    const req = this.createRequest('POST', '/files');
    const mapped = req.prepareArgs({ purpose: [purpose, string()] });
    req.formData({
      file: file,
      purpose: mapped.purpose,
    });
    return req.callAsJson(openAIFileSchema, requestOptions);
  }

  /**
   * Delete a file.
   *
   * @param fileId  The ID of the file to use for this request
   * @return Response from the API call
   */
  async deleteFile(
    fileId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DeleteFileResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ fileId: [fileId, string()] });
    req.appendTemplatePath`/files/${mapped.fileId}`;
    return req.callAsJson(deleteFileResponseSchema, requestOptions);
  }

  /**
   * Returns information about a specific file.
   *
   * @param fileId  The ID of the file to use for this request
   * @return Response from the API call
   */
  async retrieveFile(
    fileId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OpenAIFile>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ fileId: [fileId, string()] });
    req.appendTemplatePath`/files/${mapped.fileId}`;
    return req.callAsJson(openAIFileSchema, requestOptions);
  }

  /**
   * Returns the contents of the specified file
   *
   * @param fileId  The ID of the file to use for this request
   * @return Response from the API call
   */
  async downloadFile(
    fileId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<string>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ fileId: [fileId, string()] });
    req.appendTemplatePath`/files/${mapped.fileId}/content`;
    return req.callAsText(requestOptions);
  }
}