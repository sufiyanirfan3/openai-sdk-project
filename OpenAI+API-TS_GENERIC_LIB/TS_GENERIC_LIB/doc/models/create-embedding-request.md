
# Create Embedding Request

## Structure

`CreateEmbeddingRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `model` | `string` | Required | ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them. |
| `input` | `string` | Required | Input text to get embeddings for, encoded as a string or array of tokens. To get embeddings for multiple inputs in a single request, pass an array of strings or array of token arrays. Each input must not exceed 2048 tokens in length.<br><br>Unless your are embedding code, we suggest replacing newlines (`\n`) in your input with a single space, as we have observed inferior results when newlines are present. |
| `user` | `string \| undefined` | Optional | A unique identifier representing your end-user, which will help OpenAI to monitor and detect abuse. |

## Example (as JSON)

```json
{
  "model": "model2",
  "input": "The quick brown fox jumped over the lazy dog",
  "user": "user-1234"
}
```

