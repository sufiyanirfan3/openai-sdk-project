
# Create Completion Response

## Structure

`CreateCompletionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `object` | `string \| undefined` | Optional | - |
| `created` | `number \| undefined` | Optional | - |
| `model` | `string \| undefined` | Optional | - |
| `choices` | [`Choice[] \| undefined`](../../doc/models/choice.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "object": "object2",
  "created": 60,
  "model": "model2",
  "choices": [
    {
      "text": "text3",
      "index": 55,
      "logprobs": {
        "tokens": [
          "tokens4",
          "tokens3",
          "tokens2"
        ],
        "token_logprobs": [
          9.95
        ],
        "top_logprobs": [
          {
            "key1": "val1",
            "key2": "val2"
          },
          {
            "key1": "val1",
            "key2": "val2"
          },
          {
            "key1": "val1",
            "key2": "val2"
          }
        ],
        "text_offset": [
          124,
          123,
          122
        ]
      },
      "finish_reason": "finish_reason3"
    },
    {
      "text": "text2",
      "index": 54,
      "logprobs": {
        "tokens": [
          "tokens3"
        ],
        "token_logprobs": [
          9.94,
          9.93
        ],
        "top_logprobs": [
          {
            "key1": "val1",
            "key2": "val2"
          }
        ],
        "text_offset": [
          125,
          124
        ]
      },
      "finish_reason": "finish_reason4"
    }
  ]
}
```

