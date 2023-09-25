
# Truncate Enum

One of `NONE|START|END` to specify how the API will handle inputs longer than the maximum token length.

Passing `START` will discard the start of the input. `END` will discard the end of the input. In both cases, input is discarded until the remaining input is exactly the maximum input token length for the model.

If `NONE` is selected, when the input exceeds the maximum input token length an error will be returned.

## Enumeration

`TruncateEnum`

## Fields

| Name |
|  --- |
| `nONE` |
| `sTART` |
| `eND` |

