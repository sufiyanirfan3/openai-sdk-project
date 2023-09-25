
# Choice

## Structure

`Choice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string \| undefined` | Optional | - |
| `index` | `number \| undefined` | Optional | - |
| `logprobs` | [`Logprobs \| undefined`](../../doc/models/logprobs.md) | Optional | - |
| `finishReason` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "text": "text0",
  "index": 44,
  "logprobs": {
    "tokens": [
      "tokens3"
    ],
    "token_logprobs": [
      7.8,
      7.81,
      7.82
    ],
    "top_logprobs": [
      {
        "key1": "val1",
        "key2": "val2"
      }
    ],
    "text_offset": [
      121,
      122
    ]
  },
  "finish_reason": "finish_reason6"
}
```

