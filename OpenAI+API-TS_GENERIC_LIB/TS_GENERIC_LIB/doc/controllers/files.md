# Files

Files are used to upload documents that can be used with features like fine-tuning.

```ts
const filesController = new FilesController(client);
```

## Class Name

`FilesController`

## Methods

* [List Files](../../doc/controllers/files.md#list-files)
* [Upload File](../../doc/controllers/files.md#upload-file)
* [Delete File](../../doc/controllers/files.md#delete-file)
* [Retrieve File](../../doc/controllers/files.md#retrieve-file)
* [Download File](../../doc/controllers/files.md#download-file)


# List Files

Returns a list of files that belong to the user's organization.

```ts
async listFiles(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListFilesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListFilesResponse`](../../doc/models/list-files-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await filesController.listFiles();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Upload File

Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.

```ts
async uploadFile(
  file: FileWrapper,
  purpose: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OpenAIFile>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `file` | `FileWrapper` | Form, Required | Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be uploaded.<br><br>If the `purpose` is set to "fine-tune", each line is a JSON record with "prompt" and "completion" fields representing your [training examples](/docs/guides/fine-tuning/prepare-training-data). |
| `purpose` | `string` | Form, Required | The intended purpose of the uploaded documents.<br><br>Use "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tunes). This allows us to validate the format of the uploaded file. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OpenAIFile`](../../doc/models/open-ai-file.md)

## Example Usage

```ts
const file = new FileWrapper(fs.createReadStream('dummy_file'));

const purpose = 'purpose6';

try {
  const { result, ...httpResponse } = await filesController.uploadFile(
    file,
    purpose
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete File

Delete a file.

```ts
async deleteFile(
  fileId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeleteFileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fileId` | `string` | Template, Required | The ID of the file to use for this request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DeleteFileResponse`](../../doc/models/delete-file-response.md)

## Example Usage

```ts
const fileId = 'file_id6';

try {
  const { result, ...httpResponse } = await filesController.deleteFile(fileId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve File

Returns information about a specific file.

```ts
async retrieveFile(
  fileId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OpenAIFile>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fileId` | `string` | Template, Required | The ID of the file to use for this request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OpenAIFile`](../../doc/models/open-ai-file.md)

## Example Usage

```ts
const fileId = 'file_id6';

try {
  const { result, ...httpResponse } = await filesController.retrieveFile(fileId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Download File

Returns the contents of the specified file

```ts
async downloadFile(
  fileId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fileId` | `string` | Template, Required | The ID of the file to use for this request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
const fileId = 'file_id6';

try {
  const { result, ...httpResponse } = await filesController.downloadFile(fileId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

