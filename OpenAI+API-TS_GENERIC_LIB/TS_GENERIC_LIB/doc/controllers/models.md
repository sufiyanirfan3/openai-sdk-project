# Models

List and describe the various models available in the API.

```ts
const modelsController = new ModelsController(client);
```

## Class Name

`ModelsController`

## Methods

* [Retrieve Model](../../doc/controllers/models.md#retrieve-model)
* [List Models](../../doc/controllers/models.md#list-models)


# Retrieve Model

Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

```ts
async retrieveModel(
  model: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Model>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `model` | `string` | Template, Required | The ID of the model to use for this request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Model`](../../doc/models/model.md)

## Example Usage

```ts
const model = 'text-davinci-001';

try {
  const { result, ...httpResponse } = await modelsController.retrieveModel(model);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# List Models

Lists the currently available models, and provides basic information about each one such as the owner and availability.

```ts
async listModels(
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListModelsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListModelsResponse`](../../doc/models/list-models-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await modelsController.listModels();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

