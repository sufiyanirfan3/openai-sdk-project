
# List Files Response

## Structure

`ListFilesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `object` | `string \| undefined` | Optional | - |
| `data` | [`OpenAIFile[] \| undefined`](../../doc/models/open-ai-file.md) | Optional | - |

## Example (as JSON)

```json
{
  "object": "object2",
  "data": [
    {
      "id": "id5",
      "object": "object3",
      "bytes": 61,
      "created_at": 161,
      "filename": "filename7"
    },
    {
      "id": "id6",
      "object": "object4",
      "bytes": 62,
      "created_at": 162,
      "filename": "filename8"
    }
  ]
}
```

