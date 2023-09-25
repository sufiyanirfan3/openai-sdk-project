# Images

Given a prompt and/or an input image, the model will generate a new image.

```ts
const imagesController = new ImagesController(client);
```

## Class Name

`ImagesController`


# Create Image

Creates an image given a prompt.

```ts
async createImage(
  body: CreateImageRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ImagesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateImageRequest`](../../doc/models/create-image-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ImagesResponse`](../../doc/models/images-response.md)

## Example Usage

```ts
const body: CreateImageRequest = {
  prompt: 'A cute baby sea otter',
  n: 1,
  user: 'user-1234',
};

try {
  const { result, ...httpResponse } = await imagesController.createImage(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

