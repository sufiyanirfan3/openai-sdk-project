# Completion

```ts
const completionController = new CompletionController(client);
```

## Class Name

`CompletionController`


# Create Completion

`Legacy endpoint` <br/>
Creates a completion for the provided prompt and parameters

```ts
async createCompletion(
  body: CreateCompletionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateCompletionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateCompletionRequest`](../../doc/models/create-completion-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateCompletionResponse`](../../doc/models/create-completion-response.md)

## Example Usage

```ts
const body: CreateCompletionRequest = {
  model: 'model4',
  prompt: 'This is a test.',
  suffix: 'test.',
  maxTokens: 16,
  temperature: 1,
  topP: 1,
  n: 1,
  stream: false,
  echo: false,
  presencePenalty: 0,
  frequencyPenalty: 0,
  bestOf: 1,
  user: 'user-1234',
};

try {
  const { result, ...httpResponse } = await completionController.createCompletion(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

