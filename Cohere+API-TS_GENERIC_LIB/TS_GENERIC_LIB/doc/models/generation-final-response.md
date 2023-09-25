
# Generation Final Response

## Structure

`GenerationFinalResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isFinished` | `boolean` | Required | - |
| `finishReason` | [`FinishReasonEnum \| undefined`](../../doc/models/finish-reason-enum.md) | Optional | - |
| `response` | [`Response`](../../doc/models/response.md) | Required | - |

## Example (as JSON)

```json
{
  "is_finished": false,
  "finish_reason": "COMPLETE",
  "response": {
    "id": "id0",
    "generations": {
      "id": "id6",
      "text": "text4",
      "index": 84,
      "finish_reason": "ERROR_TOXIC"
    }
  }
}
```

