
# Response

## Structure

`Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `generations` | [`SingleGenerationInStream \| undefined`](../../doc/models/single-generation-in-stream.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "generations": {
    "id": "id6",
    "text": "text4",
    "index": 178,
    "finish_reason": "USER_CANCEL"
  }
}
```

