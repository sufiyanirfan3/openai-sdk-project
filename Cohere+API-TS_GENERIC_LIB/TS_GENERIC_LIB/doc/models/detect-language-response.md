
# Detect Language Response

## Structure

`DetectLanguageResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `results` | [`Result[] \| undefined`](../../doc/models/result.md) | Optional | List of languages, one per input text |
| `meta` | [`Meta \| undefined`](../../doc/models/meta.md) | Optional | - |

## Example (as JSON)

```json
{
  "results": [
    {
      "language_name": "language_name9",
      "language_code": "language_code1"
    }
  ],
  "meta": {
    "api_version": {
      "version": "version0"
    }
  }
}
```

