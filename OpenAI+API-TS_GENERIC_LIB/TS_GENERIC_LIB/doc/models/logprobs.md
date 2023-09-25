
# Logprobs

## Structure

`Logprobs`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokens` | `string[] \| undefined` | Optional | - |
| `tokenLogprobs` | `number[] \| undefined` | Optional | - |
| `topLogprobs` | `unknown[] \| undefined` | Optional | - |
| `textOffset` | `number[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "tokens": [
    "tokens9",
    "tokens0",
    "tokens1"
  ],
  "token_logprobs": [
    75.26,
    75.27
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
    211
  ]
}
```

