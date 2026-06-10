# `googleDialogflowEnvironment` Submodule <a name="`googleDialogflowEnvironment` Submodule" id="@cdktn/provider-google-beta.googleDialogflowEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowEnvironment <a name="GoogleDialogflowEnvironment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment google_dialogflow_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.NewGoogleDialogflowEnvironment(scope Construct, id *string, config GoogleDialogflowEnvironmentConfig) GoogleDialogflowEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig">GoogleDialogflowEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig">GoogleDialogflowEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putFulfillment">PutFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTextToSpeechSettings">PutTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetAgentVersion">ResetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetFulfillment">ResetFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetTextToSpeechSettings">ResetTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFulfillment` <a name="PutFulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putFulfillment"></a>

```go
func PutFulfillment(value GoogleDialogflowEnvironmentFulfillment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a>

---

##### `PutTextToSpeechSettings` <a name="PutTextToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTextToSpeechSettings"></a>

```go
func PutTextToSpeechSettings(value GoogleDialogflowEnvironmentTextToSpeechSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTextToSpeechSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDialogflowEnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a>

---

##### `ResetAgentVersion` <a name="ResetAgentVersion" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetAgentVersion"></a>

```go
func ResetAgentVersion()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFulfillment` <a name="ResetFulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetFulfillment"></a>

```go
func ResetFulfillment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTextToSpeechSettings` <a name="ResetTextToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetTextToSpeechSettings"></a>

```go
func ResetTextToSpeechSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.GoogleDialogflowEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.GoogleDialogflowEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.GoogleDialogflowEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.GoogleDialogflowEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleDialogflowEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDialogflowEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDialogflowEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fulfillment">Fulfillment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference">GoogleDialogflowEnvironmentFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.textToSpeechSettings">TextToSpeechSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference">GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference">GoogleDialogflowEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.agentVersionInput">AgentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.environmentidInput">EnvironmentidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fulfillmentInput">FulfillmentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.textToSpeechSettingsInput">TextToSpeechSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.agentVersion">AgentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.environmentid">Environmentid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Fulfillment`<sup>Required</sup> <a name="Fulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fulfillment"></a>

```go
func Fulfillment() GoogleDialogflowEnvironmentFulfillmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference">GoogleDialogflowEnvironmentFulfillmentOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TextToSpeechSettings`<sup>Required</sup> <a name="TextToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.textToSpeechSettings"></a>

```go
func TextToSpeechSettings() GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference">GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.timeouts"></a>

```go
func Timeouts() GoogleDialogflowEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference">GoogleDialogflowEnvironmentTimeoutsOutputReference</a>

---

##### `AgentVersionInput`<sup>Optional</sup> <a name="AgentVersionInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.agentVersionInput"></a>

```go
func AgentVersionInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnvironmentidInput`<sup>Optional</sup> <a name="EnvironmentidInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.environmentidInput"></a>

```go
func EnvironmentidInput() *string
```

- *Type:* *string

---

##### `FulfillmentInput`<sup>Optional</sup> <a name="FulfillmentInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fulfillmentInput"></a>

```go
func FulfillmentInput() GoogleDialogflowEnvironmentFulfillment
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TextToSpeechSettingsInput`<sup>Optional</sup> <a name="TextToSpeechSettingsInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.textToSpeechSettingsInput"></a>

```go
func TextToSpeechSettingsInput() GoogleDialogflowEnvironmentTextToSpeechSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.agentVersion"></a>

```go
func AgentVersion() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Environmentid`<sup>Required</sup> <a name="Environmentid" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.environmentid"></a>

```go
func Environmentid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowEnvironmentConfig <a name="GoogleDialogflowEnvironmentConfig" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

&googledialogflowenvironment.GoogleDialogflowEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Environmentid: *string,
	AgentVersion: *string,
	DeletionPolicy: *string,
	Description: *string,
	Fulfillment: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment,
	Id: *string,
	Location: *string,
	Project: *string,
	TextToSpeechSettings: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.environmentid">Environmentid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#environmentid GoogleDialogflowEnvironment#environmentid}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.agentVersion">AgentVersion</a></code> | <code>*string</code> | The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.description">Description</a></code> | <code>*string</code> | The developer-provided description for this environment. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.fulfillment">Fulfillment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a></code> | fulfillment block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#id GoogleDialogflowEnvironment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#location GoogleDialogflowEnvironment#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#project GoogleDialogflowEnvironment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.textToSpeechSettings">TextToSpeechSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Environmentid`<sup>Required</sup> <a name="Environmentid" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.environmentid"></a>

```go
Environmentid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#environmentid GoogleDialogflowEnvironment#environmentid}.

---

##### `AgentVersion`<sup>Optional</sup> <a name="AgentVersion" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.agentVersion"></a>

```go
AgentVersion *string
```

- *Type:* *string

The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#agent_version GoogleDialogflowEnvironment#agent_version}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#deletion_policy GoogleDialogflowEnvironment#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The developer-provided description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#description GoogleDialogflowEnvironment#description}

---

##### `Fulfillment`<sup>Optional</sup> <a name="Fulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.fulfillment"></a>

```go
Fulfillment GoogleDialogflowEnvironmentFulfillment
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a>

fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#fulfillment GoogleDialogflowEnvironment#fulfillment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#id GoogleDialogflowEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#location GoogleDialogflowEnvironment#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#project GoogleDialogflowEnvironment#project}.

---

##### `TextToSpeechSettings`<sup>Optional</sup> <a name="TextToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.textToSpeechSettings"></a>

```go
TextToSpeechSettings GoogleDialogflowEnvironmentTextToSpeechSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#text_to_speech_settings GoogleDialogflowEnvironment#text_to_speech_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.timeouts"></a>

```go
Timeouts GoogleDialogflowEnvironmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#timeouts GoogleDialogflowEnvironment#timeouts}

---

### GoogleDialogflowEnvironmentFulfillment <a name="GoogleDialogflowEnvironmentFulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

&googledialogflowenvironment.GoogleDialogflowEnvironmentFulfillment {
	DisplayName: *string,
	Features: interface{},
	GenericWebService: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the fulfillment, unique within the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.features">Features</a></code> | <code>interface{}</code> | features block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.name">Name</a></code> | <code>*string</code> | The unique identifier of the fulfillment. Supports the following formats: - projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#display_name GoogleDialogflowEnvironment#display_name}

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.features"></a>

```go
Features interface{}
```

- *Type:* interface{}

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#features GoogleDialogflowEnvironment#features}

---

##### `GenericWebService`<sup>Optional</sup> <a name="GenericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.genericWebService"></a>

```go
GenericWebService GoogleDialogflowEnvironmentFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#generic_web_service GoogleDialogflowEnvironment#generic_web_service}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.name"></a>

```go
Name *string
```

- *Type:* *string

The unique identifier of the fulfillment. Supports the following formats: - projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#name GoogleDialogflowEnvironment#name}

---

### GoogleDialogflowEnvironmentFulfillmentFeatures <a name="GoogleDialogflowEnvironmentFulfillmentFeatures" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

&googledialogflowenvironment.GoogleDialogflowEnvironmentFulfillmentFeatures {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures.property.type">Type</a></code> | <code>*string</code> | The type of the feature that enabled for fulfillment. Possible values: ["TYPE_UNSPECIFIED", "SMALLTALK"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the feature that enabled for fulfillment. Possible values: ["TYPE_UNSPECIFIED", "SMALLTALK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#type GoogleDialogflowEnvironment#type}

---

### GoogleDialogflowEnvironmentFulfillmentGenericWebService <a name="GoogleDialogflowEnvironmentFulfillmentGenericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

&googledialogflowenvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService {
	Uri: *string,
	Password: *string,
	RequestHeaders: *map[string]*string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.uri">Uri</a></code> | <code>*string</code> | The fulfillment URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.password">Password</a></code> | <code>*string</code> | The password for HTTP Basic authentication. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | The HTTP request headers to send together with fulfillment requests. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.username">Username</a></code> | <code>*string</code> | The user name for HTTP Basic authentication. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#uri GoogleDialogflowEnvironment#uri}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#password GoogleDialogflowEnvironment#password}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.requestHeaders"></a>

```go
RequestHeaders *map[string]*string
```

- *Type:* *map[string]*string

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#request_headers GoogleDialogflowEnvironment#request_headers}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.username"></a>

```go
Username *string
```

- *Type:* *string

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#username GoogleDialogflowEnvironment#username}

---

### GoogleDialogflowEnvironmentTextToSpeechSettings <a name="GoogleDialogflowEnvironmentTextToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

&googledialogflowenvironment.GoogleDialogflowEnvironmentTextToSpeechSettings {
	EnableTextToSpeech: interface{},
	OutputAudioEncoding: *string,
	SampleRateHertz: *f64,
	SynthesizeSpeechConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.enableTextToSpeech">EnableTextToSpeech</a></code> | <code>interface{}</code> | Indicates whether text to speech is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.outputAudioEncoding">OutputAudioEncoding</a></code> | <code>*string</code> | Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.sampleRateHertz">SampleRateHertz</a></code> | <code>*f64</code> | The synthesis sample rate (in hertz) for this audio. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.synthesizeSpeechConfigs">SynthesizeSpeechConfigs</a></code> | <code>interface{}</code> | synthesize_speech_configs block. |

---

##### `EnableTextToSpeech`<sup>Optional</sup> <a name="EnableTextToSpeech" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.enableTextToSpeech"></a>

```go
EnableTextToSpeech interface{}
```

- *Type:* interface{}

Indicates whether text to speech is enabled.

Even when this field is false, other settings in this proto are still retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#enable_text_to_speech GoogleDialogflowEnvironment#enable_text_to_speech}

---

##### `OutputAudioEncoding`<sup>Optional</sup> <a name="OutputAudioEncoding" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.outputAudioEncoding"></a>

```go
OutputAudioEncoding *string
```

- *Type:* *string

Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#output_audio_encoding GoogleDialogflowEnvironment#output_audio_encoding}

---

##### `SampleRateHertz`<sup>Optional</sup> <a name="SampleRateHertz" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.sampleRateHertz"></a>

```go
SampleRateHertz *f64
```

- *Type:* *f64

The synthesis sample rate (in hertz) for this audio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#sample_rate_hertz GoogleDialogflowEnvironment#sample_rate_hertz}

---

##### `SynthesizeSpeechConfigs`<sup>Optional</sup> <a name="SynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.synthesizeSpeechConfigs"></a>

```go
SynthesizeSpeechConfigs interface{}
```

- *Type:* interface{}

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#synthesize_speech_configs GoogleDialogflowEnvironment#synthesize_speech_configs}

---

### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

&googledialogflowenvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs {
	Language: *string,
	EffectsProfileId: *[]*string,
	Pitch: *f64,
	SpeakingRate: *f64,
	Voice: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice,
	VolumeGainDb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.language">Language</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#language GoogleDialogflowEnvironment#language}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.effectsProfileId">EffectsProfileId</a></code> | <code>*[]*string</code> | An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.pitch">Pitch</a></code> | <code>*f64</code> | Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.speakingRate">SpeakingRate</a></code> | <code>*f64</code> | Speaking rate/speed, in the range [0.25, 4.0]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.voice">Voice</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | voice block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.volumeGainDb">VolumeGainDb</a></code> | <code>*f64</code> | Volume gain (in dB) of the normal native volume supported by the specific voice. |

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.language"></a>

```go
Language *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#language GoogleDialogflowEnvironment#language}.

---

##### `EffectsProfileId`<sup>Optional</sup> <a name="EffectsProfileId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.effectsProfileId"></a>

```go
EffectsProfileId *[]*string
```

- *Type:* *[]*string

An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.

Effects are applied on top of each other in the order they are given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#effects_profile_id GoogleDialogflowEnvironment#effects_profile_id}

---

##### `Pitch`<sup>Optional</sup> <a name="Pitch" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.pitch"></a>

```go
Pitch *f64
```

- *Type:* *f64

Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#pitch GoogleDialogflowEnvironment#pitch}

---

##### `SpeakingRate`<sup>Optional</sup> <a name="SpeakingRate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.speakingRate"></a>

```go
SpeakingRate *f64
```

- *Type:* *f64

Speaking rate/speed, in the range [0.25, 4.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#speaking_rate GoogleDialogflowEnvironment#speaking_rate}

---

##### `Voice`<sup>Optional</sup> <a name="Voice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.voice"></a>

```go
Voice GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

voice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#voice GoogleDialogflowEnvironment#voice}

---

##### `VolumeGainDb`<sup>Optional</sup> <a name="VolumeGainDb" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.volumeGainDb"></a>

```go
VolumeGainDb *f64
```

- *Type:* *f64

Volume gain (in dB) of the normal native volume supported by the specific voice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#volume_gain_db GoogleDialogflowEnvironment#volume_gain_db}

---

### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

&googledialogflowenvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice {
	Name: *string,
	SsmlGender: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.name">Name</a></code> | <code>*string</code> | The name of the voice. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.ssmlGender">SsmlGender</a></code> | <code>*string</code> | The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"]. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the voice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#name GoogleDialogflowEnvironment#name}

---

##### `SsmlGender`<sup>Optional</sup> <a name="SsmlGender" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.ssmlGender"></a>

```go
SsmlGender *string
```

- *Type:* *string

The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#ssml_gender GoogleDialogflowEnvironment#ssml_gender}

---

### GoogleDialogflowEnvironmentTimeouts <a name="GoogleDialogflowEnvironmentTimeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

&googledialogflowenvironment.GoogleDialogflowEnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#create GoogleDialogflowEnvironment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#delete GoogleDialogflowEnvironment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#update GoogleDialogflowEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#create GoogleDialogflowEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#delete GoogleDialogflowEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_environment#update GoogleDialogflowEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowEnvironmentFulfillmentFeaturesList <a name="GoogleDialogflowEnvironmentFulfillmentFeaturesList" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.NewGoogleDialogflowEnvironmentFulfillmentFeaturesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowEnvironmentFulfillmentFeaturesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.get"></a>

```go
func Get(index *f64) GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference <a name="GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.NewGoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference <a name="GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.NewGoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetRequestHeaders"></a>

```go
func ResetRequestHeaders()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```go
func RequestHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeaders"></a>

```go
func RequestHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowEnvironmentFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a>

---


### GoogleDialogflowEnvironmentFulfillmentOutputReference <a name="GoogleDialogflowEnvironmentFulfillmentOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.NewGoogleDialogflowEnvironmentFulfillmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowEnvironmentFulfillmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putFeatures">PutFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putGenericWebService">PutGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetFeatures">ResetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetGenericWebService">ResetGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFeatures` <a name="PutFeatures" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putFeatures"></a>

```go
func PutFeatures(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putFeatures.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGenericWebService` <a name="PutGenericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putGenericWebService"></a>

```go
func PutGenericWebService(value GoogleDialogflowEnvironmentFulfillmentGenericWebService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFeatures` <a name="ResetFeatures" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetFeatures"></a>

```go
func ResetFeatures()
```

##### `ResetGenericWebService` <a name="ResetGenericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetGenericWebService"></a>

```go
func ResetGenericWebService()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.features">Features</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList">GoogleDialogflowEnvironmentFulfillmentFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference">GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.featuresInput">FeaturesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.genericWebServiceInput">GenericWebServiceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.features"></a>

```go
func Features() GoogleDialogflowEnvironmentFulfillmentFeaturesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList">GoogleDialogflowEnvironmentFulfillmentFeaturesList</a>

---

##### `GenericWebService`<sup>Required</sup> <a name="GenericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.genericWebService"></a>

```go
func GenericWebService() GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference">GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FeaturesInput`<sup>Optional</sup> <a name="FeaturesInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.featuresInput"></a>

```go
func FeaturesInput() interface{}
```

- *Type:* interface{}

---

##### `GenericWebServiceInput`<sup>Optional</sup> <a name="GenericWebServiceInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.genericWebServiceInput"></a>

```go
func GenericWebServiceInput() GoogleDialogflowEnvironmentFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowEnvironmentFulfillment
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a>

---


### GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.NewGoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs">PutSynthesizeSpeechConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetEnableTextToSpeech">ResetEnableTextToSpeech</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetOutputAudioEncoding">ResetOutputAudioEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSampleRateHertz">ResetSampleRateHertz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs">ResetSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSynthesizeSpeechConfigs` <a name="PutSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs"></a>

```go
func PutSynthesizeSpeechConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnableTextToSpeech` <a name="ResetEnableTextToSpeech" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetEnableTextToSpeech"></a>

```go
func ResetEnableTextToSpeech()
```

##### `ResetOutputAudioEncoding` <a name="ResetOutputAudioEncoding" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetOutputAudioEncoding"></a>

```go
func ResetOutputAudioEncoding()
```

##### `ResetSampleRateHertz` <a name="ResetSampleRateHertz" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSampleRateHertz"></a>

```go
func ResetSampleRateHertz()
```

##### `ResetSynthesizeSpeechConfigs` <a name="ResetSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs"></a>

```go
func ResetSynthesizeSpeechConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs">SynthesizeSpeechConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeechInput">EnableTextToSpeechInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncodingInput">OutputAudioEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertzInput">SampleRateHertzInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput">SynthesizeSpeechConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeech">EnableTextToSpeech</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncoding">OutputAudioEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertz">SampleRateHertz</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SynthesizeSpeechConfigs`<sup>Required</sup> <a name="SynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs"></a>

```go
func SynthesizeSpeechConfigs() GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList</a>

---

##### `EnableTextToSpeechInput`<sup>Optional</sup> <a name="EnableTextToSpeechInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeechInput"></a>

```go
func EnableTextToSpeechInput() interface{}
```

- *Type:* interface{}

---

##### `OutputAudioEncodingInput`<sup>Optional</sup> <a name="OutputAudioEncodingInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncodingInput"></a>

```go
func OutputAudioEncodingInput() *string
```

- *Type:* *string

---

##### `SampleRateHertzInput`<sup>Optional</sup> <a name="SampleRateHertzInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertzInput"></a>

```go
func SampleRateHertzInput() *f64
```

- *Type:* *f64

---

##### `SynthesizeSpeechConfigsInput`<sup>Optional</sup> <a name="SynthesizeSpeechConfigsInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput"></a>

```go
func SynthesizeSpeechConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableTextToSpeech`<sup>Required</sup> <a name="EnableTextToSpeech" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeech"></a>

```go
func EnableTextToSpeech() interface{}
```

- *Type:* interface{}

---

##### `OutputAudioEncoding`<sup>Required</sup> <a name="OutputAudioEncoding" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncoding"></a>

```go
func OutputAudioEncoding() *string
```

- *Type:* *string

---

##### `SampleRateHertz`<sup>Required</sup> <a name="SampleRateHertz" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertz"></a>

```go
func SampleRateHertz() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowEnvironmentTextToSpeechSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a>

---


### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.NewGoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.NewGoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice">PutVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetEffectsProfileId">ResetEffectsProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetPitch">ResetPitch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetSpeakingRate">ResetSpeakingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVoice">ResetVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVolumeGainDb">ResetVolumeGainDb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVoice` <a name="PutVoice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice"></a>

```go
func PutVoice(value GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---

##### `ResetEffectsProfileId` <a name="ResetEffectsProfileId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetEffectsProfileId"></a>

```go
func ResetEffectsProfileId()
```

##### `ResetPitch` <a name="ResetPitch" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetPitch"></a>

```go
func ResetPitch()
```

##### `ResetSpeakingRate` <a name="ResetSpeakingRate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetSpeakingRate"></a>

```go
func ResetSpeakingRate()
```

##### `ResetVoice` <a name="ResetVoice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVoice"></a>

```go
func ResetVoice()
```

##### `ResetVolumeGainDb` <a name="ResetVolumeGainDb" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVolumeGainDb"></a>

```go
func ResetVolumeGainDb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voice">Voice</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileIdInput">EffectsProfileIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitchInput">PitchInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRateInput">SpeakingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voiceInput">VoiceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDbInput">VolumeGainDbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileId">EffectsProfileId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitch">Pitch</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRate">SpeakingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDb">VolumeGainDb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Voice`<sup>Required</sup> <a name="Voice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voice"></a>

```go
func Voice() GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference</a>

---

##### `EffectsProfileIdInput`<sup>Optional</sup> <a name="EffectsProfileIdInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileIdInput"></a>

```go
func EffectsProfileIdInput() *[]*string
```

- *Type:* *[]*string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `PitchInput`<sup>Optional</sup> <a name="PitchInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitchInput"></a>

```go
func PitchInput() *f64
```

- *Type:* *f64

---

##### `SpeakingRateInput`<sup>Optional</sup> <a name="SpeakingRateInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRateInput"></a>

```go
func SpeakingRateInput() *f64
```

- *Type:* *f64

---

##### `VoiceInput`<sup>Optional</sup> <a name="VoiceInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voiceInput"></a>

```go
func VoiceInput() GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---

##### `VolumeGainDbInput`<sup>Optional</sup> <a name="VolumeGainDbInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDbInput"></a>

```go
func VolumeGainDbInput() *f64
```

- *Type:* *f64

---

##### `EffectsProfileId`<sup>Required</sup> <a name="EffectsProfileId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileId"></a>

```go
func EffectsProfileId() *[]*string
```

- *Type:* *[]*string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `Pitch`<sup>Required</sup> <a name="Pitch" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitch"></a>

```go
func Pitch() *f64
```

- *Type:* *f64

---

##### `SpeakingRate`<sup>Required</sup> <a name="SpeakingRate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRate"></a>

```go
func SpeakingRate() *f64
```

- *Type:* *f64

---

##### `VolumeGainDb`<sup>Required</sup> <a name="VolumeGainDb" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDb"></a>

```go
func VolumeGainDb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.NewGoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetSsmlGender">ResetSsmlGender</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSsmlGender` <a name="ResetSsmlGender" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetSsmlGender"></a>

```go
func ResetSsmlGender()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGenderInput">SsmlGenderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGender">SsmlGender</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SsmlGenderInput`<sup>Optional</sup> <a name="SsmlGenderInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGenderInput"></a>

```go
func SsmlGenderInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SsmlGender`<sup>Required</sup> <a name="SsmlGender" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGender"></a>

```go
func SsmlGender() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---


### GoogleDialogflowEnvironmentTimeoutsOutputReference <a name="GoogleDialogflowEnvironmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowenvironment"

googledialogflowenvironment.NewGoogleDialogflowEnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowEnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



