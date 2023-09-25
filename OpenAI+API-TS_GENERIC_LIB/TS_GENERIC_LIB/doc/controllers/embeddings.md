# Embeddings

Get a vector representation of a given input that can be easily consumed by machine learning models and algorithms.

```ts
const embeddingsController = new EmbeddingsController(client);
```

## Class Name

`EmbeddingsController`


# Create Embedding

Creates an embedding vector representing the input text.

```ts
async createEmbedding(
  body: CreateEmbeddingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateEmbeddingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateEmbeddingRequest`](../../doc/models/create-embedding-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateEmbeddingResponse`](../../doc/models/create-embedding-response.md)

## Example Usage

```ts
const body: CreateEmbeddingRequest = {
  model: 'model4',
  input: 'The quick brown fox jumped over the lazy dog',
  user: 'user-1234',
};

try {
  const { result, ...httpResponse } = await embeddingsController.createEmbedding(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

