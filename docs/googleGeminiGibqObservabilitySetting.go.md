# `googleGeminiGibqObservabilitySetting` Submodule <a name="`googleGeminiGibqObservabilitySetting` Submodule" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiGibqObservabilitySetting <a name="GoogleGeminiGibqObservabilitySetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting google_gemini_gibq_observability_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlegeminigibqobservabilitysetting"

googlegeminigibqobservabilitysetting.NewGoogleGeminiGibqObservabilitySetting(scope Construct, id *string, config GoogleGeminiGibqObservabilitySettingConfig) GoogleGeminiGibqObservabilitySetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig">GoogleGeminiGibqObservabilitySettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig">GoogleGeminiGibqObservabilitySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putConversationalAnalyticsSetting">PutConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting">ResetConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConversationalAnalyticsSetting` <a name="PutConversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putConversationalAnalyticsSetting"></a>

```go
func PutConversationalAnalyticsSetting(value GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putConversationalAnalyticsSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGeminiGibqObservabilitySettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a>

---

##### `ResetConversationalAnalyticsSetting` <a name="ResetConversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting"></a>

```go
func ResetConversationalAnalyticsSetting()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlegeminigibqobservabilitysetting"

googlegeminigibqobservabilitysetting.GoogleGeminiGibqObservabilitySetting_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlegeminigibqobservabilitysetting"

googlegeminigibqobservabilitysetting.GoogleGeminiGibqObservabilitySetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlegeminigibqobservabilitysetting"

googlegeminigibqobservabilitysetting.GoogleGeminiGibqObservabilitySetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlegeminigibqobservabilitysetting"

googlegeminigibqobservabilitysetting.GoogleGeminiGibqObservabilitySetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleGeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGeminiGibqObservabilitySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGeminiGibqObservabilitySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGeminiGibqObservabilitySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting">ConversationalAnalyticsSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference">GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput">ConversationalAnalyticsSettingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput">GibqObservabilitySettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.gibqObservabilitySettingId">GibqObservabilitySettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConversationalAnalyticsSetting`<sup>Required</sup> <a name="ConversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting"></a>

```go
func ConversationalAnalyticsSetting() GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.timeouts"></a>

```go
func Timeouts() GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference">GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ConversationalAnalyticsSettingInput`<sup>Optional</sup> <a name="ConversationalAnalyticsSettingInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput"></a>

```go
func ConversationalAnalyticsSettingInput() GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `GibqObservabilitySettingIdInput`<sup>Optional</sup> <a name="GibqObservabilitySettingIdInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput"></a>

```go
func GibqObservabilitySettingIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `GibqObservabilitySettingId`<sup>Required</sup> <a name="GibqObservabilitySettingId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.gibqObservabilitySettingId"></a>

```go
func GibqObservabilitySettingId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiGibqObservabilitySettingConfig <a name="GoogleGeminiGibqObservabilitySettingConfig" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlegeminigibqobservabilitysetting"

&googlegeminigibqobservabilitysetting.GoogleGeminiGibqObservabilitySettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GibqObservabilitySettingId: *string,
	ConversationalAnalyticsSetting: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting,
	DeletionPolicy: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId">GibqObservabilitySettingId</a></code> | <code>*string</code> | Id of the requesting object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting">ConversationalAnalyticsSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | conversational_analytics_setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#id GoogleGeminiGibqObservabilitySetting#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#project GoogleGeminiGibqObservabilitySetting#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GibqObservabilitySettingId`<sup>Required</sup> <a name="GibqObservabilitySettingId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId"></a>

```go
GibqObservabilitySettingId *string
```

- *Type:* *string

Id of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#gibq_observability_setting_id GoogleGeminiGibqObservabilitySetting#gibq_observability_setting_id}

---

##### `ConversationalAnalyticsSetting`<sup>Optional</sup> <a name="ConversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting"></a>

```go
ConversationalAnalyticsSetting GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

conversational_analytics_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#conversational_analytics_setting GoogleGeminiGibqObservabilitySetting#conversational_analytics_setting}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#deletion_policy GoogleGeminiGibqObservabilitySetting#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#id GoogleGeminiGibqObservabilitySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#labels GoogleGeminiGibqObservabilitySetting#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#location GoogleGeminiGibqObservabilitySetting#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#project GoogleGeminiGibqObservabilitySetting#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.timeouts"></a>

```go
Timeouts GoogleGeminiGibqObservabilitySettingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#timeouts GoogleGeminiGibqObservabilitySetting#timeouts}

---

### GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting <a name="GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlegeminigibqobservabilitysetting"

&googlegeminigibqobservabilitysetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting {
	FeedbackEnabled: interface{},
	LoggingEnabled: interface{},
	MetricsEnabled: interface{},
	TracesEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled">FeedbackEnabled</a></code> | <code>interface{}</code> | Whether to enable feedback. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled">LoggingEnabled</a></code> | <code>interface{}</code> | Whether to enable logging. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled">MetricsEnabled</a></code> | <code>interface{}</code> | Whether to enable metrics. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled">TracesEnabled</a></code> | <code>interface{}</code> | Whether to enable traces. |

---

##### `FeedbackEnabled`<sup>Optional</sup> <a name="FeedbackEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled"></a>

```go
FeedbackEnabled interface{}
```

- *Type:* interface{}

Whether to enable feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#feedback_enabled GoogleGeminiGibqObservabilitySetting#feedback_enabled}

---

##### `LoggingEnabled`<sup>Optional</sup> <a name="LoggingEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled"></a>

```go
LoggingEnabled interface{}
```

- *Type:* interface{}

Whether to enable logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#logging_enabled GoogleGeminiGibqObservabilitySetting#logging_enabled}

---

##### `MetricsEnabled`<sup>Optional</sup> <a name="MetricsEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled"></a>

```go
MetricsEnabled interface{}
```

- *Type:* interface{}

Whether to enable metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#metrics_enabled GoogleGeminiGibqObservabilitySetting#metrics_enabled}

---

##### `TracesEnabled`<sup>Optional</sup> <a name="TracesEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled"></a>

```go
TracesEnabled interface{}
```

- *Type:* interface{}

Whether to enable traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#traces_enabled GoogleGeminiGibqObservabilitySetting#traces_enabled}

---

### GoogleGeminiGibqObservabilitySettingTimeouts <a name="GoogleGeminiGibqObservabilitySettingTimeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlegeminigibqobservabilitysetting"

&googlegeminigibqobservabilitysetting.GoogleGeminiGibqObservabilitySettingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#create GoogleGeminiGibqObservabilitySetting#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#delete GoogleGeminiGibqObservabilitySetting#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#update GoogleGeminiGibqObservabilitySetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#create GoogleGeminiGibqObservabilitySetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#delete GoogleGeminiGibqObservabilitySetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#update GoogleGeminiGibqObservabilitySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference <a name="GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlegeminigibqobservabilitysetting"

googlegeminigibqobservabilitysetting.NewGoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled">ResetFeedbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled">ResetLoggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled">ResetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled">ResetTracesEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeedbackEnabled` <a name="ResetFeedbackEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled"></a>

```go
func ResetFeedbackEnabled()
```

##### `ResetLoggingEnabled` <a name="ResetLoggingEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled"></a>

```go
func ResetLoggingEnabled()
```

##### `ResetMetricsEnabled` <a name="ResetMetricsEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled"></a>

```go
func ResetMetricsEnabled()
```

##### `ResetTracesEnabled` <a name="ResetTracesEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled"></a>

```go
func ResetTracesEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput">FeedbackEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput">LoggingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput">MetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput">TracesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled">FeedbackEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled">LoggingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled">MetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled">TracesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeedbackEnabledInput`<sup>Optional</sup> <a name="FeedbackEnabledInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput"></a>

```go
func FeedbackEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LoggingEnabledInput`<sup>Optional</sup> <a name="LoggingEnabledInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput"></a>

```go
func LoggingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MetricsEnabledInput`<sup>Optional</sup> <a name="MetricsEnabledInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput"></a>

```go
func MetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TracesEnabledInput`<sup>Optional</sup> <a name="TracesEnabledInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput"></a>

```go
func TracesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FeedbackEnabled`<sup>Required</sup> <a name="FeedbackEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled"></a>

```go
func FeedbackEnabled() interface{}
```

- *Type:* interface{}

---

##### `LoggingEnabled`<sup>Required</sup> <a name="LoggingEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled"></a>

```go
func LoggingEnabled() interface{}
```

- *Type:* interface{}

---

##### `MetricsEnabled`<sup>Required</sup> <a name="MetricsEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled"></a>

```go
func MetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TracesEnabled`<sup>Required</sup> <a name="TracesEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled"></a>

```go
func TracesEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---


### GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference <a name="GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlegeminigibqobservabilitysetting"

googlegeminigibqobservabilitysetting.NewGoogleGeminiGibqObservabilitySettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



