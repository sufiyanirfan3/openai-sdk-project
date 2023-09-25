
# Create Fine Tune Request

## Structure

`CreateFineTuneRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `trainingFile` | `string` | Required | The ID of an uploaded file that contains training data.See [upload file](https://platform.openai.com/docs/api-reference/files/upload) for how to upload a file.Your dataset must be formatted as a JSONL file. Additionally, you must upload your file with the purpose `fine-tune`.See the [fine-tuning guide](https://platform.openai.com/docs/guides/fine-tuning) for more details. |
| `validationFile` | `string \| null \| undefined` | Optional | The ID of an uploaded file that contains validation data.If you provide this file, the data is used to generate validationmetrics periodically during fine-tuning. These metrics can be viewed in the fine-tuning results file.The same data should not be present in both train and validation files. Your dataset must be formatted as a JSONL file. You must upload your file with the purpose `fine-tune`.See the [fine-tuning guide](https://platform.openai.com/docs/guides/fine-tuning) for more details. |
| `model` | `string` | Required | The name of the base model to fine-tune. You can select one of "ada",<br>"babbage", "curie", or "davinci". To learn more about these models, see the<br>[Models](https://beta.openai.com/docs/models) documentation. |
| `hyperparameters` | [`Hyperparameters1 \| undefined`](../../doc/models/hyperparameters-1.md) | Optional | - |
| `suffix` | `string \| null \| undefined` | Optional | A string of up to 40 characters that will be added to your fine-tuned model name.<br><br>For example, a `suffix` of "custom-model-name" would produce a model name like `ada:ft-your-org:custom-model-name-2022-02-15-04-21-04`.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |

## Example (as JSON)

```json
{
  "training_file": "file-ajSREls59WBbvgSzJSVWxMCB",
  "validation_file": "file-XjSREls59WBbvgSzJSVWxMCa",
  "model": "model2",
  "hyperparameters": {
    "n_epochs": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "suffix": "suffix0"
}
```

