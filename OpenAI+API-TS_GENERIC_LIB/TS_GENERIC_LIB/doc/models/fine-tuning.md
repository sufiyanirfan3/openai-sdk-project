
# Fine Tuning

## Structure

`FineTuning`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The object identifier, which can be referenced in the API endpoints. |
| `object` | `string \| undefined` | Optional | The object type, which is always "fine_tuning.job". |
| `createdAt` | `number \| undefined` | Optional | The unix timestamp for when the fine-tuning job was created. |
| `finishedAt` | `number \| undefined` | Optional | The unix timestamp for when the fine-tuning job was finished. |
| `model` | `string \| undefined` | Optional | The base model that is being fine-tuned. |
| `fineTunedModel` | `string \| null \| undefined` | Optional | The name of the fine-tuned model that is being created. |
| `organizationId` | `string \| undefined` | Optional | The organization that owns the fine-tuning job. |
| `status` | `string \| undefined` | Optional | The current status of the fine-tuning job, which can be either `created`, `pending`, `running`, `succeeded`, `failed`, or `cancelled` |
| `hyperparameters` | [`Hyperparameters1 \| undefined`](../../doc/models/hyperparameters-1.md) | Optional | - |
| `trainingFiles` | `string \| undefined` | Optional | The file ID used for training. |
| `validationFiles` | `string \| null \| undefined` | Optional | The file ID used for validation. |
| `resultFiles` | [`OpenAIFile[] \| undefined`](../../doc/models/open-ai-file.md) | Optional | The compiled results files for the fine-tuning job. |
| `trainedTokens` | `number \| undefined` | Optional | The total number of billable tokens processed by this fine tuning job. |

## Example (as JSON)

```json
{
  "id": "id0",
  "object": "object2",
  "created_at": 6,
  "finished_at": 52,
  "model": "model2"
}
```

