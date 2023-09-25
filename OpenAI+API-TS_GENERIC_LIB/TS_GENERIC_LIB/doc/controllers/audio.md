# Audio

Turn audio into text

```ts
const audioController = new AudioController(client);
```

## Class Name

`AudioController`

## Methods

* [Create Transcription](../../doc/controllers/audio.md#create-transcription)
* [Create Translation](../../doc/controllers/audio.md#create-translation)


# Create Transcription

Transcribes audio into the input language.

```ts
async createTranscription(
  file: FileWrapper,
  model: string,
  prompt?: string,
  responseFormat?: string,
  temperature?: number,
  language?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateTranslationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `file` | `FileWrapper` | Form, Required | The audio file to transcribe, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm. |
| `model` | `string` | Form, Required | ID of the model to use. Only `whisper-1` is currently available. |
| `prompt` | `string \| undefined` | Form, Optional | An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should match the audio language. |
| `responseFormat` | `string \| undefined` | Form, Optional | The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.<br>**Default**: `'json'` |
| `temperature` | `number \| undefined` | Form, Optional | The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.<br>**Default**: `0` |
| `language` | `string \| undefined` | Form, Optional | The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy and latency. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateTranslationResponse`](../../doc/models/create-translation-response.md)

## Example Usage

```ts
const file = new FileWrapper(fs.createReadStream('dummy_file'));

const model = 'model2';

const responseFormat = 'json';

const temperature = 0;

try {
  const { result, ...httpResponse } = await audioController.createTranscription(
    file,
    model,
    responseFormat,
    temperature
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Translation

Translates audio into English.

```ts
async createTranslation(
  file: FileWrapper,
  model: string,
  prompt?: string,
  responseFormat?: string,
  temperature?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreateTranslationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `file` | `FileWrapper` | Form, Required | The audio file to translate, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm. |
| `model` | `string` | Form, Required | ID of the model to use. Only `whisper-1` is currently available. |
| `prompt` | `string \| undefined` | Form, Optional | An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should be in English. |
| `responseFormat` | `string \| undefined` | Form, Optional | The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.<br>**Default**: `'json'` |
| `temperature` | `number \| undefined` | Form, Optional | The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.<br>**Default**: `0` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreateTranslationResponse`](../../doc/models/create-translation-response.md)

## Example Usage

```ts
const file = new FileWrapper(fs.createReadStream('dummy_file'));

const model = 'model2';

const responseFormat = 'json';

const temperature = 0;

try {
  const { result, ...httpResponse } = await audioController.createTranslation(
    file,
    model,
    responseFormat,
    temperature
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

