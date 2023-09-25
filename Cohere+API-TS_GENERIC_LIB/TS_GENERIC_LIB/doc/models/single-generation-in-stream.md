
# Single Generation in Stream

## Structure

`SingleGenerationInStream`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `text` | `string` | Required | Full text of the generation. |
| `index` | `number \| undefined` | Optional | Refers to the nth generation. Only present when `num_generations` is greater than zero. |
| `finishReason` | [`FinishReasonEnum`](../../doc/models/finish-reason-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "text": "text0",
  "index": 44,
  "finish_reason": "COMPLETE"
}
```

