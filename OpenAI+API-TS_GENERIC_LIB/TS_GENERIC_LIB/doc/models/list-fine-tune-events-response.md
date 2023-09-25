
# List Fine Tune Events Response

## Structure

`ListFineTuneEventsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `object` | `string \| undefined` | Optional | - |
| `data` | [`FineTuneEvent[] \| undefined`](../../doc/models/fine-tune-event.md) | Optional | - |

## Example (as JSON)

```json
{
  "object": "object2",
  "data": [
    {
      "object": "object3",
      "created_at": 161,
      "level": "level1",
      "message": "message5"
    },
    {
      "object": "object4",
      "created_at": 162,
      "level": "level2",
      "message": "message6"
    }
  ]
}
```

