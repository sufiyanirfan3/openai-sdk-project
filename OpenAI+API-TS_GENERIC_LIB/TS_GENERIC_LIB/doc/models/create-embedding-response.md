
# Create Embedding Response

## Structure

`CreateEmbeddingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `object` | `string \| undefined` | Optional | - |
| `model` | `string \| undefined` | Optional | - |
| `data` | [`Datum[] \| undefined`](../../doc/models/datum.md) | Optional | - |

## Example (as JSON)

```json
{
  "object": "object2",
  "model": "model2",
  "data": [
    {
      "index": 123,
      "object": "object3",
      "embedding": [
        134.02,
        134.03,
        134.04
      ]
    },
    {
      "index": 124,
      "object": "object4",
      "embedding": [
        134.03
      ]
    }
  ]
}
```

