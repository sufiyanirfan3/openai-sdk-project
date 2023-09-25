# Chat

Given a list of messages comprising a conversation, the model will return a response.

```ts
const chatController = new ChatController(client);
```

## Class Name

`ChatController`


# Create Chat Completion

Creates a completion for the chat message

```ts
async createChatCompletion(
  body: CreateChatCompletionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateChatCompletionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateChatCompletionRequest`](../../doc/models/create-chat-completion-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateChatCompletionResponse`](../../doc/models/create-chat-completion-response.md)

## Example Usage

```ts
const body: CreateChatCompletionRequest = {
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: RoleEnum.System,
      content: '"You are ChatGPT, a large language model trained by OpenAI. Answer in detail."',
    },
    {
      role: RoleEnum.User,
      content: 'What is AI?',
    }
  ],
};

try {
  const { result, ...httpResponse } = await chatController.createChatCompletion(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

