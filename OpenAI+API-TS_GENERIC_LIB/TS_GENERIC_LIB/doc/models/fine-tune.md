
# Fine Tune

## Structure

`FineTune`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The object identifier, which can be referenced in the API endpoints. |
| `object` | `string \| undefined` | Optional | The object type, which is always "fine-tune". |
| `createdAt` | `number \| undefined` | Optional | The unix timestamp for when the fine-tuning job was created. |
| `updatedAt` | `number \| undefined` | Optional | The unix timestamp for when the fine-tuning job was finished. |
| `model` | `string \| undefined` | Optional | The base model that is being fine-tuned. |
| `fineTunedModel` | `string \| null \| undefined` | Optional | The name of the fine-tuned model that is being created. |
| `organizationId` | `string \| undefined` | Optional | The organization that owns the fine-tuning job. |
| `status` | `string \| undefined` | Optional | The current status of the fine-tuning job, which can be either `created`, `pending`, `running`, `succeeded`, `failed`, or `cancelled` |
| `hyperparams` | `unknown \| undefined` | Optional | The hyperparameters used for the fine-tuning job. |
| `trainingFiles` | [`OpenAIFile[] \| undefined`](../../doc/models/open-ai-file.md) | Optional | The list of files used for training. |
| `validationFiles` | [`OpenAIFile[] \| undefined`](../../doc/models/open-ai-file.md) | Optional | The list of files used for validation. |
| `resultFiles` | [`OpenAIFile[] \| undefined`](../../doc/models/open-ai-file.md) | Optional | The compiled results files for the fine-tuning job. |
| `events` | [`FineTuneEvent[] \| undefined`](../../doc/models/fine-tune-event.md) | Optional | The list of events that have been observed in the lifecycle of the FineTune job. |

## Example (as JSON)

```json
{
  "id": "id0",
  "object": "object2",
  "created_at": 6,
  "updated_at": 162,
  "model": "model2"
}
```

