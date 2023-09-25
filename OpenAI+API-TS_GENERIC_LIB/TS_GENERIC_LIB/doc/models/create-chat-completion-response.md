
# Create Chat Completion Response

## Structure

`CreateChatCompletionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `created` | `number` | Required | - |
| `model` | `string` | Required | - |
| `choices` | [`Choice1[]`](../../doc/models/choice-1.md) | Required | - |
| `usage` | [`Usage \| undefined`](../../doc/models/usage.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "object": "object2",
  "created": 60,
  "model": "model2",
  "choices": [
    {
      "index": 55,
      "message": {
        "role": "system",
        "content": "content1"
      },
      "finish_reason": "finish_reason3"
    }
  ],
  "usage": {
    "prompt_tokens": 16,
    "completion_tokens": 18,
    "total_tokens": 190
  }
}
```

