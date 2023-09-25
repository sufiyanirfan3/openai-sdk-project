# Fine-Tuning

Manage fine-tuning jobs to tailor a model to your specific training data.

```ts
const fineTuningController = new FineTuningController(client);
```

## Class Name

`FineTuningController`

## Methods

* [Create Fine-Tune Job](../../doc/controllers/fine-tuning.md#create-fine-tune-job)
* [Cancel Fine-Tuning](../../doc/controllers/fine-tuning.md#cancel-fine-tuning)
* [Retrieve Fine-Tuning Iob](../../doc/controllers/fine-tuning.md#retrieve-fine-tuning-iob)


# Create Fine-Tune Job

Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about Fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)

```ts
async createFineTuneJob(
  body: CreateFineTuneRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FineTuning>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateFineTuneRequest`](../../doc/models/create-fine-tune-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FineTuning`](../../doc/models/fine-tuning.md)

## Example Usage

```ts
const body: CreateFineTuneRequest = {
  trainingFile: 'file-ajSREls59WBbvgSzJSVWxMCB',
  model: 'model4',
  validationFile: 'file-XjSREls59WBbvgSzJSVWxMCa',
};

try {
  const { result, ...httpResponse } = await fineTuningController.createFineTuneJob(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Fine-Tuning

Immediately cancel a fine-tuning job.

```ts
async cancelFineTuning(
  fineTuningJobId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FineTuning>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fineTuningJobId` | `string` | Template, Required | The ID of the fine-tuning job to cancel |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FineTuning`](../../doc/models/fine-tuning.md)

## Example Usage

```ts
const fineTuningJobId = 'ft-AF1WoRqd3aJAHsqc9NY7iL8F';

try {
  const { result, ...httpResponse } = await fineTuningController.cancelFineTuning(fineTuningJobId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Fine-Tuning Iob

Gets info about the fine-tuning job.

[Learn more about Fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)

```ts
async retrieveFineTuningIob(
  fineTuningJobId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FineTune>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fineTuningJobId` | `string` | Template, Required | The ID of the fine-tuning job |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`FineTune`](../../doc/models/fine-tune.md)

## Example Usage

```ts
const fineTuningJobId = 'ft-AF1WoRqd3aJAHsqc9NY7iL8F';

try {
  const { result, ...httpResponse } = await fineTuningController.retrieveFineTuningIob(fineTuningJobId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

