# `googleColabSchedule` Submodule <a name="`googleColabSchedule` Submodule" id="@cdktn/provider-google-beta.googleColabSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleColabSchedule <a name="GoogleColabSchedule" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule google_colab_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabSchedule(scope Construct, id *string, config GoogleColabScheduleConfig) GoogleColabSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig">GoogleColabScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig">GoogleColabScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putCreateNotebookExecutionJobRequest">PutCreateNotebookExecutionJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putCreatePipelineJobRequest">PutCreatePipelineJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetAllowQueueing">ResetAllowQueueing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetCreateNotebookExecutionJobRequest">ResetCreateNotebookExecutionJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetCreatePipelineJobRequest">ResetCreatePipelineJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetMaxConcurrentActiveRunCount">ResetMaxConcurrentActiveRunCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetMaxRunCount">ResetMaxRunCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCreateNotebookExecutionJobRequest` <a name="PutCreateNotebookExecutionJobRequest" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putCreateNotebookExecutionJobRequest"></a>

```go
func PutCreateNotebookExecutionJobRequest(value GoogleColabScheduleCreateNotebookExecutionJobRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putCreateNotebookExecutionJobRequest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a>

---

##### `PutCreatePipelineJobRequest` <a name="PutCreatePipelineJobRequest" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putCreatePipelineJobRequest"></a>

```go
func PutCreatePipelineJobRequest(value GoogleColabScheduleCreatePipelineJobRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putCreatePipelineJobRequest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest">GoogleColabScheduleCreatePipelineJobRequest</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putTimeouts"></a>

```go
func PutTimeouts(value GoogleColabScheduleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts">GoogleColabScheduleTimeouts</a>

---

##### `ResetAllowQueueing` <a name="ResetAllowQueueing" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetAllowQueueing"></a>

```go
func ResetAllowQueueing()
```

##### `ResetCreateNotebookExecutionJobRequest` <a name="ResetCreateNotebookExecutionJobRequest" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetCreateNotebookExecutionJobRequest"></a>

```go
func ResetCreateNotebookExecutionJobRequest()
```

##### `ResetCreatePipelineJobRequest` <a name="ResetCreatePipelineJobRequest" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetCreatePipelineJobRequest"></a>

```go
func ResetCreatePipelineJobRequest()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetDesiredState"></a>

```go
func ResetDesiredState()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxConcurrentActiveRunCount` <a name="ResetMaxConcurrentActiveRunCount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetMaxConcurrentActiveRunCount"></a>

```go
func ResetMaxConcurrentActiveRunCount()
```

##### `ResetMaxRunCount` <a name="ResetMaxRunCount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetMaxRunCount"></a>

```go
func ResetMaxRunCount()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleColabSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.GoogleColabSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.GoogleColabSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.GoogleColabSchedule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.GoogleColabSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleColabSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleColabSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleColabSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleColabSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.catchUp">CatchUp</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createNotebookExecutionJobRequest">CreateNotebookExecutionJobRequest</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createPipelineJobRequest">CreatePipelineJobRequest</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference">GoogleColabScheduleCreatePipelineJobRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.lastPauseTime">LastPauseTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.lastResumeTime">LastResumeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.lastScheduledRunResponse">LastScheduledRunResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList">GoogleColabScheduleLastScheduledRunResponseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.nextRunTime">NextRunTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.startedRunCount">StartedRunCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference">GoogleColabScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.allowQueueingInput">AllowQueueingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createNotebookExecutionJobRequestInput">CreateNotebookExecutionJobRequestInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createPipelineJobRequestInput">CreatePipelineJobRequestInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest">GoogleColabScheduleCreatePipelineJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.cronInput">CronInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.desiredStateInput">DesiredStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxConcurrentActiveRunCountInput">MaxConcurrentActiveRunCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxConcurrentRunCountInput">MaxConcurrentRunCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxRunCountInput">MaxRunCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.allowQueueing">AllowQueueing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.cron">Cron</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxConcurrentActiveRunCount">MaxConcurrentActiveRunCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxConcurrentRunCount">MaxConcurrentRunCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxRunCount">MaxRunCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatchUp`<sup>Required</sup> <a name="CatchUp" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.catchUp"></a>

```go
func CatchUp() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CreateNotebookExecutionJobRequest`<sup>Required</sup> <a name="CreateNotebookExecutionJobRequest" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createNotebookExecutionJobRequest"></a>

```go
func CreateNotebookExecutionJobRequest() GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference</a>

---

##### `CreatePipelineJobRequest`<sup>Required</sup> <a name="CreatePipelineJobRequest" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createPipelineJobRequest"></a>

```go
func CreatePipelineJobRequest() GoogleColabScheduleCreatePipelineJobRequestOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference">GoogleColabScheduleCreatePipelineJobRequestOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `LastPauseTime`<sup>Required</sup> <a name="LastPauseTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.lastPauseTime"></a>

```go
func LastPauseTime() *string
```

- *Type:* *string

---

##### `LastResumeTime`<sup>Required</sup> <a name="LastResumeTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.lastResumeTime"></a>

```go
func LastResumeTime() *string
```

- *Type:* *string

---

##### `LastScheduledRunResponse`<sup>Required</sup> <a name="LastScheduledRunResponse" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.lastScheduledRunResponse"></a>

```go
func LastScheduledRunResponse() GoogleColabScheduleLastScheduledRunResponseList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList">GoogleColabScheduleLastScheduledRunResponseList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NextRunTime`<sup>Required</sup> <a name="NextRunTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.nextRunTime"></a>

```go
func NextRunTime() *string
```

- *Type:* *string

---

##### `StartedRunCount`<sup>Required</sup> <a name="StartedRunCount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.startedRunCount"></a>

```go
func StartedRunCount() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.timeouts"></a>

```go
func Timeouts() GoogleColabScheduleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference">GoogleColabScheduleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AllowQueueingInput`<sup>Optional</sup> <a name="AllowQueueingInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.allowQueueingInput"></a>

```go
func AllowQueueingInput() interface{}
```

- *Type:* interface{}

---

##### `CreateNotebookExecutionJobRequestInput`<sup>Optional</sup> <a name="CreateNotebookExecutionJobRequestInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createNotebookExecutionJobRequestInput"></a>

```go
func CreateNotebookExecutionJobRequestInput() GoogleColabScheduleCreateNotebookExecutionJobRequest
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a>

---

##### `CreatePipelineJobRequestInput`<sup>Optional</sup> <a name="CreatePipelineJobRequestInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.createPipelineJobRequestInput"></a>

```go
func CreatePipelineJobRequestInput() GoogleColabScheduleCreatePipelineJobRequest
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest">GoogleColabScheduleCreatePipelineJobRequest</a>

---

##### `CronInput`<sup>Optional</sup> <a name="CronInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.cronInput"></a>

```go
func CronInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.desiredStateInput"></a>

```go
func DesiredStateInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaxConcurrentActiveRunCountInput`<sup>Optional</sup> <a name="MaxConcurrentActiveRunCountInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxConcurrentActiveRunCountInput"></a>

```go
func MaxConcurrentActiveRunCountInput() *string
```

- *Type:* *string

---

##### `MaxConcurrentRunCountInput`<sup>Optional</sup> <a name="MaxConcurrentRunCountInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxConcurrentRunCountInput"></a>

```go
func MaxConcurrentRunCountInput() *string
```

- *Type:* *string

---

##### `MaxRunCountInput`<sup>Optional</sup> <a name="MaxRunCountInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxRunCountInput"></a>

```go
func MaxRunCountInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowQueueing`<sup>Required</sup> <a name="AllowQueueing" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.allowQueueing"></a>

```go
func AllowQueueing() interface{}
```

- *Type:* interface{}

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.cron"></a>

```go
func Cron() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaxConcurrentActiveRunCount`<sup>Required</sup> <a name="MaxConcurrentActiveRunCount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxConcurrentActiveRunCount"></a>

```go
func MaxConcurrentActiveRunCount() *string
```

- *Type:* *string

---

##### `MaxConcurrentRunCount`<sup>Required</sup> <a name="MaxConcurrentRunCount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxConcurrentRunCount"></a>

```go
func MaxConcurrentRunCount() *string
```

- *Type:* *string

---

##### `MaxRunCount`<sup>Required</sup> <a name="MaxRunCount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.maxRunCount"></a>

```go
func MaxRunCount() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleColabScheduleConfig <a name="GoogleColabScheduleConfig" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Cron: *string,
	DisplayName: *string,
	Location: *string,
	MaxConcurrentRunCount: *string,
	AllowQueueing: interface{},
	CreateNotebookExecutionJobRequest: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest,
	CreatePipelineJobRequest: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest,
	DeletionPolicy: *string,
	DesiredState: *string,
	EndTime: *string,
	Id: *string,
	MaxConcurrentActiveRunCount: *string,
	MaxRunCount: *string,
	Project: *string,
	StartTime: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.cron">Cron</a></code> | <code>*string</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. The display name of the Schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.maxConcurrentRunCount">MaxConcurrentRunCount</a></code> | <code>*string</code> | Maximum number of runs that can be started concurrently for this Schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.allowQueueing">AllowQueueing</a></code> | <code>interface{}</code> | Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.createNotebookExecutionJobRequest">CreateNotebookExecutionJobRequest</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a></code> | create_notebook_execution_job_request block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.createPipelineJobRequest">CreatePipelineJobRequest</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest">GoogleColabScheduleCreatePipelineJobRequest</a></code> | create_pipeline_job_request block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.desiredState">DesiredState</a></code> | <code>*string</code> | Desired state of the Colab Schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.endTime">EndTime</a></code> | <code>*string</code> | Timestamp after which no new runs can be scheduled. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#id GoogleColabSchedule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.maxConcurrentActiveRunCount">MaxConcurrentActiveRunCount</a></code> | <code>*string</code> | Specifies the maximum number of active runs that can be executed concurrently for this Schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.maxRunCount">MaxRunCount</a></code> | <code>*string</code> | Maximum run count of the schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#project GoogleColabSchedule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.startTime">StartTime</a></code> | <code>*string</code> | The timestamp after which the first run can be scheduled. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts">GoogleColabScheduleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.cron"></a>

```go
Cron *string
```

- *Type:* *string

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#cron GoogleColabSchedule#cron}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. The display name of the Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#display_name GoogleColabSchedule#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#location GoogleColabSchedule#location}

---

##### `MaxConcurrentRunCount`<sup>Required</sup> <a name="MaxConcurrentRunCount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.maxConcurrentRunCount"></a>

```go
MaxConcurrentRunCount *string
```

- *Type:* *string

Maximum number of runs that can be started concurrently for this Schedule.

This is the limit for starting the scheduled requests and not the execution of the notebook execution jobs created by the requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#max_concurrent_run_count GoogleColabSchedule#max_concurrent_run_count}

---

##### `AllowQueueing`<sup>Optional</sup> <a name="AllowQueueing" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.allowQueueing"></a>

```go
AllowQueueing interface{}
```

- *Type:* interface{}

Whether new scheduled runs can be queued when max_concurrent_runs limit is reached.

If set to true, new runs will be queued instead of skipped. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#allow_queueing GoogleColabSchedule#allow_queueing}

---

##### `CreateNotebookExecutionJobRequest`<sup>Optional</sup> <a name="CreateNotebookExecutionJobRequest" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.createNotebookExecutionJobRequest"></a>

```go
CreateNotebookExecutionJobRequest GoogleColabScheduleCreateNotebookExecutionJobRequest
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a>

create_notebook_execution_job_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#create_notebook_execution_job_request GoogleColabSchedule#create_notebook_execution_job_request}

---

##### `CreatePipelineJobRequest`<sup>Optional</sup> <a name="CreatePipelineJobRequest" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.createPipelineJobRequest"></a>

```go
CreatePipelineJobRequest GoogleColabScheduleCreatePipelineJobRequest
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest">GoogleColabScheduleCreatePipelineJobRequest</a>

create_pipeline_job_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#create_pipeline_job_request GoogleColabSchedule#create_pipeline_job_request}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#deletion_policy GoogleColabSchedule#deletion_policy}

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.desiredState"></a>

```go
DesiredState *string
```

- *Type:* *string

Desired state of the Colab Schedule.

Set this field to 'ACTIVE' to start/resume the schedule, and 'PAUSED' to pause the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#desired_state GoogleColabSchedule#desired_state}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Timestamp after which no new runs can be scheduled.

If specified, the schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#end_time GoogleColabSchedule#end_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#id GoogleColabSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxConcurrentActiveRunCount`<sup>Optional</sup> <a name="MaxConcurrentActiveRunCount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.maxConcurrentActiveRunCount"></a>

```go
MaxConcurrentActiveRunCount *string
```

- *Type:* *string

Specifies the maximum number of active runs that can be executed concurrently for this Schedule.

This limits the number of runs that can be in a non-terminal state at the same time. Currently, this field is only supported for requests of type CreatePipelineJobRequest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#max_concurrent_active_run_count GoogleColabSchedule#max_concurrent_active_run_count}

---

##### `MaxRunCount`<sup>Optional</sup> <a name="MaxRunCount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.maxRunCount"></a>

```go
MaxRunCount *string
```

- *Type:* *string

Maximum run count of the schedule.

If specified, The schedule will be completed when either startedRunCount >= maxRunCount or when endTime is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#max_run_count GoogleColabSchedule#max_run_count}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#project GoogleColabSchedule#project}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The timestamp after which the first run can be scheduled.

Defaults to the schedule creation time. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#start_time GoogleColabSchedule#start_time}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleConfig.property.timeouts"></a>

```go
Timeouts GoogleColabScheduleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts">GoogleColabScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#timeouts GoogleColabSchedule#timeouts}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequest <a name="GoogleColabScheduleCreateNotebookExecutionJobRequest" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreateNotebookExecutionJobRequest {
	NotebookExecutionJob: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob,
	Parent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJob">NotebookExecutionJob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | notebook_execution_job block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest.property.parent">Parent</a></code> | <code>*string</code> | The resource name of the Location to create the NotebookExecutionJob. Format: 'projects/{project}/locations/{location}'. |

---

##### `NotebookExecutionJob`<sup>Required</sup> <a name="NotebookExecutionJob" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJob"></a>

```go
NotebookExecutionJob GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

notebook_execution_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#notebook_execution_job GoogleColabSchedule#notebook_execution_job}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The resource name of the Location to create the NotebookExecutionJob. Format: 'projects/{project}/locations/{location}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#parent GoogleColabSchedule#parent}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob {
	DisplayName: *string,
	GcsOutputUri: *string,
	CustomEnvironmentSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec,
	DataformRepositorySource: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource,
	EncryptionSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec,
	ExecutionTimeout: *string,
	ExecutionUser: *string,
	GcsNotebookSource: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource,
	KernelName: *string,
	Labels: *map[string]*string,
	NotebookRuntimeTemplateResourceName: *string,
	ServiceAccount: *string,
	WorkbenchRuntime: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsOutputUri">GcsOutputUri</a></code> | <code>*string</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.customEnvironmentSpec">CustomEnvironmentSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a></code> | custom_environment_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionUser">ExecutionUser</a></code> | <code>*string</code> | The user email to run the execution as. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.kernelName">KernelName</a></code> | <code>*string</code> | The name of the kernel to use during notebook execution. If unset, the default kernel is used. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize NotebookExecutionJobs. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>*string</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account to run the execution as. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.workbenchRuntime">WorkbenchRuntime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a></code> | workbench_runtime block. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#display_name GoogleColabSchedule#display_name}

---

##### `GcsOutputUri`<sup>Required</sup> <a name="GcsOutputUri" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsOutputUri"></a>

```go
GcsOutputUri *string
```

- *Type:* *string

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#gcs_output_uri GoogleColabSchedule#gcs_output_uri}

---

##### `CustomEnvironmentSpec`<sup>Optional</sup> <a name="CustomEnvironmentSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.customEnvironmentSpec"></a>

```go
CustomEnvironmentSpec GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a>

custom_environment_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#custom_environment_spec GoogleColabSchedule#custom_environment_spec}

---

##### `DataformRepositorySource`<sup>Optional</sup> <a name="DataformRepositorySource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.dataformRepositorySource"></a>

```go
DataformRepositorySource GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#dataform_repository_source GoogleColabSchedule#dataform_repository_source}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.encryptionSpec"></a>

```go
EncryptionSpec GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#encryption_spec GoogleColabSchedule#encryption_spec}

---

##### `ExecutionTimeout`<sup>Optional</sup> <a name="ExecutionTimeout" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionTimeout"></a>

```go
ExecutionTimeout *string
```

- *Type:* *string

Max running time of the execution job in seconds (default 86400s / 24 hrs).

A duration in seconds with up to nine fractional digits, ending with "s". Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#execution_timeout GoogleColabSchedule#execution_timeout}

---

##### `ExecutionUser`<sup>Optional</sup> <a name="ExecutionUser" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionUser"></a>

```go
ExecutionUser *string
```

- *Type:* *string

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#execution_user GoogleColabSchedule#execution_user}

---

##### `GcsNotebookSource`<sup>Optional</sup> <a name="GcsNotebookSource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsNotebookSource"></a>

```go
GcsNotebookSource GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#gcs_notebook_source GoogleColabSchedule#gcs_notebook_source}

---

##### `KernelName`<sup>Optional</sup> <a name="KernelName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.kernelName"></a>

```go
KernelName *string
```

- *Type:* *string

The name of the kernel to use during notebook execution. If unset, the default kernel is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#kernel_name GoogleColabSchedule#kernel_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize NotebookExecutionJobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#labels GoogleColabSchedule#labels}

---

##### `NotebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.notebookRuntimeTemplateResourceName"></a>

```go
NotebookRuntimeTemplateResourceName *string
```

- *Type:* *string

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#notebook_runtime_template_resource_name GoogleColabSchedule#notebook_runtime_template_resource_name}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#service_account GoogleColabSchedule#service_account}

---

##### `WorkbenchRuntime`<sup>Optional</sup> <a name="WorkbenchRuntime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.workbenchRuntime"></a>

```go
WorkbenchRuntime GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a>

workbench_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#workbench_runtime GoogleColabSchedule#workbench_runtime}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec {
	MachineSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec,
	NetworkSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec,
	PersistentDiskSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.property.persistentDiskSpec">PersistentDiskSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a></code> | persistent_disk_spec block. |

---

##### `MachineSpec`<sup>Optional</sup> <a name="MachineSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.property.machineSpec"></a>

```go
MachineSpec GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#machine_spec GoogleColabSchedule#machine_spec}

---

##### `NetworkSpec`<sup>Optional</sup> <a name="NetworkSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.property.networkSpec"></a>

```go
NetworkSpec GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#network_spec GoogleColabSchedule#network_spec}

---

##### `PersistentDiskSpec`<sup>Optional</sup> <a name="PersistentDiskSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec.property.persistentDiskSpec"></a>

```go
PersistentDiskSpec GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a>

persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#persistent_disk_spec GoogleColabSchedule#persistent_disk_spec}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec {
	AcceleratorCount: *f64,
	AcceleratorType: *string,
	GpuPartitionSize: *string,
	MachineType: *string,
	ReservationAffinity: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity,
	TpuTopology: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.gpuPartitionSize">GpuPartitionSize</a></code> | <code>*string</code> | The Nvidia GPU partition size. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.machineType">MachineType</a></code> | <code>*string</code> | The type of the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.tpuTopology">TpuTopology</a></code> | <code>*string</code> | The topology of the TPUs. Corresponds to the TPU topologies available from GKE. (Example: tpu_topology: "2x2x1"). |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.acceleratorCount"></a>

```go
AcceleratorCount *f64
```

- *Type:* *f64

The number of accelerators to attach to the machine.

For accelerator optimized machine types (https://cloud.google.com/compute/docs/accelerator-optimized-machines), One may set the accelerator_count from 1 to N for machine with N GPUs. If accelerator_count is less than or equal to N / 2, Vertex will co-schedule the replicas of the model into the same VM to save cost. For example, if the machine type is a3-highgpu-8g, which has 8 H100 GPUs, one can set accelerator_count to 1 to 8. If accelerator_count is 1, 2, 3, or 4, Vertex will co-schedule 8, 4, 2, or 2 replicas of the model into the same VM to save cost. When co-scheduling, CPU, memory and storage on the VM will be distributed to replicas on the VM. For example, one can expect a co-scheduled replica requesting 2 GPUs out of a 8-GPU VM will receive 25% of the CPU, memory and storage of the VM. Note that the feature is not compatible with multihost_gpu_node_count. When multihost_gpu_node_count is set, the co-scheduling will not be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#accelerator_count GoogleColabSchedule#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#accelerator_type GoogleColabSchedule#accelerator_type}

---

##### `GpuPartitionSize`<sup>Optional</sup> <a name="GpuPartitionSize" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.gpuPartitionSize"></a>

```go
GpuPartitionSize *string
```

- *Type:* *string

The Nvidia GPU partition size.

When specified, the requested accelerators will be partitioned into smaller GPU partitions. For example, if the request is for 8 units of NVIDIA A100 GPUs, and gpu_partition_size="1g.10gb", the service will create 8 * 7 = 56 partitioned MIG instances. The partition size must be a value supported by the requested accelerator. Refer to [Nvidia GPU Partitioning](https://cloud.google.com/kubernetes-engine/docs/how-to/gpus-multi#multi-instance_gpu_partitions) for the available partition sizes. If set, the accelerator_count should be set to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#gpu_partition_size GoogleColabSchedule#gpu_partition_size}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The type of the machine.

See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types) See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types). For DeployedModel this field is optional, and the default value is 'n1-standard-2'. For BatchPredictionJob or as part of WorkerPoolSpec this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#machine_type GoogleColabSchedule#machine_type}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.reservationAffinity"></a>

```go
ReservationAffinity GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#reservation_affinity GoogleColabSchedule#reservation_affinity}

---

##### `TpuTopology`<sup>Optional</sup> <a name="TpuTopology" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec.property.tpuTopology"></a>

```go
TpuTopology *string
```

- *Type:* *string

The topology of the TPUs. Corresponds to the TPU topologies available from GKE. (Example: tpu_topology: "2x2x1").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#tpu_topology GoogleColabSchedule#tpu_topology}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity {
	ReservationAffinityType: *string,
	Key: *string,
	UseReservationPool: interface{},
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.reservationAffinityType">ReservationAffinityType</a></code> | <code>*string</code> | Specifies the reservation affinity type. Possible values: NO_RESERVATION ANY_RESERVATION SPECIFIC_RESERVATION SPECIFIC_THEN_ANY_RESERVATION SPECIFIC_THEN_NO_RESERVATION. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.key">Key</a></code> | <code>*string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.useReservationPool">UseReservationPool</a></code> | <code>interface{}</code> | When set to true, resources will be drawn from go/cloud-ai-gcp-pool. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.values">Values</a></code> | <code>*[]*string</code> | Corresponds to the label values of a reservation resource. |

---

##### `ReservationAffinityType`<sup>Required</sup> <a name="ReservationAffinityType" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.reservationAffinityType"></a>

```go
ReservationAffinityType *string
```

- *Type:* *string

Specifies the reservation affinity type. Possible values: NO_RESERVATION ANY_RESERVATION SPECIFIC_RESERVATION SPECIFIC_THEN_ANY_RESERVATION SPECIFIC_THEN_NO_RESERVATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#reservation_affinity_type GoogleColabSchedule#reservation_affinity_type}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.key"></a>

```go
Key *string
```

- *Type:* *string

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, use 'compute.googleapis.com/reservation-name' as the key and specify the name of your reservation as its value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#key GoogleColabSchedule#key}

---

##### `UseReservationPool`<sup>Optional</sup> <a name="UseReservationPool" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.useReservationPool"></a>

```go
UseReservationPool interface{}
```

- *Type:* interface{}

When set to true, resources will be drawn from go/cloud-ai-gcp-pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#use_reservation_pool GoogleColabSchedule#use_reservation_pool}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Corresponds to the label values of a reservation resource.

This must be the full resource name of the reservation or reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#values GoogleColabSchedule#values}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec {
	EnableInternetAccess: interface{},
	Network: *string,
	Subnetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | Whether to enable public internet access. Default false. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.property.network">Network</a></code> | <code>*string</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks). |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The name of the subnet that this instance is in. Format: 'projects/{project_id_or_number}/regions/{region}/subnetworks/{subnetwork_id}'. |

---

##### `EnableInternetAccess`<sup>Optional</sup> <a name="EnableInternetAccess" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.property.enableInternetAccess"></a>

```go
EnableInternetAccess interface{}
```

- *Type:* interface{}

Whether to enable public internet access. Default false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#enable_internet_access GoogleColabSchedule#enable_internet_access}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.property.network"></a>

```go
Network *string
```

- *Type:* *string

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#network GoogleColabSchedule#network}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The name of the subnet that this instance is in. Format: 'projects/{project_id_or_number}/regions/{region}/subnetworks/{subnetwork_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#subnetwork GoogleColabSchedule#subnetwork}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec {
	DiskSizeGb: *string,
	DiskType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec.property.diskSizeGb">DiskSizeGb</a></code> | <code>*string</code> | Size in GB of the disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec.property.diskType">DiskType</a></code> | <code>*string</code> | Type of the disk (default is "pd-standard"). |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec.property.diskSizeGb"></a>

```go
DiskSizeGb *string
```

- *Type:* *string

Size in GB of the disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#disk_size_gb GoogleColabSchedule#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

Type of the disk (default is "pd-standard").

Valid values: "pd-ssd" (Persistent Disk Solid State Drive) "pd-standard" (Persistent Disk Hard Disk Drive) "pd-balanced" (Balanced Persistent Disk) "pd-extreme" (Extreme Persistent Disk)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#disk_type GoogleColabSchedule#disk_type}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource {
	DataformRepositoryResourceName: *string,
	CommitSha: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>*string</code> | The resource name of the Dataform Repository. Format: 'projects/{project_id}/locations/{location}/repositories/{repository_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.commitSha">CommitSha</a></code> | <code>*string</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `DataformRepositoryResourceName`<sup>Required</sup> <a name="DataformRepositoryResourceName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```go
DataformRepositoryResourceName *string
```

- *Type:* *string

The resource name of the Dataform Repository. Format: 'projects/{project_id}/locations/{location}/repositories/{repository_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#dataform_repository_resource_name GoogleColabSchedule#dataform_repository_resource_name}

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.commitSha"></a>

```go
CommitSha *string
```

- *Type:* *string

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#commit_sha GoogleColabSchedule#commit_sha}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have the format 'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#kms_key_name GoogleColabSchedule#kms_key_name}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource {
	Uri: *string,
	Generation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.uri">Uri</a></code> | <code>*string</code> | The Cloud Storage uri pointing to the ipynb file. Format: gs://bucket/notebook_file.ipynb. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.generation">Generation</a></code> | <code>*string</code> | The version of the Cloud Storage object to read. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The Cloud Storage uri pointing to the ipynb file. Format: gs://bucket/notebook_file.ipynb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#uri GoogleColabSchedule#uri}

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.generation"></a>

```go
Generation *string
```

- *Type:* *string

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#generation GoogleColabSchedule#generation}

---

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime {

}
```


### GoogleColabScheduleCreatePipelineJobRequest <a name="GoogleColabScheduleCreatePipelineJobRequest" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreatePipelineJobRequest {
	PipelineJob: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob,
	Parent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest.property.pipelineJob">PipelineJob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob">GoogleColabScheduleCreatePipelineJobRequestPipelineJob</a></code> | pipeline_job block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest.property.parent">Parent</a></code> | <code>*string</code> | The resource name of the Location to create the PipelineJob in. Format: 'projects/{project}/locations/{location}'. |

---

##### `PipelineJob`<sup>Required</sup> <a name="PipelineJob" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest.property.pipelineJob"></a>

```go
PipelineJob GoogleColabScheduleCreatePipelineJobRequestPipelineJob
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob">GoogleColabScheduleCreatePipelineJobRequestPipelineJob</a>

pipeline_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#pipeline_job GoogleColabSchedule#pipeline_job}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The resource name of the Location to create the PipelineJob in. Format: 'projects/{project}/locations/{location}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#parent GoogleColabSchedule#parent}

---

### GoogleColabScheduleCreatePipelineJobRequestPipelineJob <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJob" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob {
	DisplayName: *string,
	EncryptionSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec,
	Labels: *map[string]*string,
	Network: *string,
	PipelineSpec: *string,
	PreflightValidations: interface{},
	PscInterfaceConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig,
	ReservedIpRanges: *[]*string,
	RuntimeConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig,
	ServiceAccount: *string,
	TemplateUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize PipelineJob. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.network">Network</a></code> | <code>*string</code> | The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the Pipeline Job's workload should be peered. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.pipelineSpec">PipelineSpec</a></code> | <code>*string</code> | A compiled definition of a pipeline, represented as a 'JSON' object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.preflightValidations">PreflightValidations</a></code> | <code>interface{}</code> | Whether to do component level validations before job creation. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>*[]*string</code> | A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account that the pipeline workload runs as. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.templateUri">TemplateUri</a></code> | <code>*string</code> | A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported. Reference to https://cloud.google.com/vertex-ai/docs/pipelines/create-pipeline-template. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the Pipeline.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#display_name GoogleColabSchedule#display_name}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.encryptionSpec"></a>

```go
EncryptionSpec GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#encryption_spec GoogleColabSchedule#encryption_spec}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize PipelineJob.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. Note there is some reserved label key for Vertex AI Pipelines. - 'vertex-ai-pipelines-run-billing-id', user set value will get overrided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#labels GoogleColabSchedule#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.network"></a>

```go
Network *string
```

- *Type:* *string

The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the Pipeline Job's workload should be peered.

For example, 'projects/12345/global/networks/myVPC'. [Format](/compute/docs/reference/rest/v1/networks/insert) is of the form 'projects/{project}/global/networks/{network}'. Where {project} is a project number, as in '12345', and {network} is a network name. Private services access must already be configured for the network. Pipeline job will apply the network configuration to the Google Cloud resources being launched, if applied, such as Vertex AI Training or Dataflow job. If left unspecified, the workload is not peered with any network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#network GoogleColabSchedule#network}

---

##### `PipelineSpec`<sup>Optional</sup> <a name="PipelineSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.pipelineSpec"></a>

```go
PipelineSpec *string
```

- *Type:* *string

A compiled definition of a pipeline, represented as a 'JSON' object.

Defines the structure of the pipeline, including its components, tasks, and parameters. This specification is generated by compiling a pipeline function defined in 'Python' using the 'Kubeflow Pipelines SDK'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#pipeline_spec GoogleColabSchedule#pipeline_spec}

---

##### `PreflightValidations`<sup>Optional</sup> <a name="PreflightValidations" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.preflightValidations"></a>

```go
PreflightValidations interface{}
```

- *Type:* interface{}

Whether to do component level validations before job creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#preflight_validations GoogleColabSchedule#preflight_validations}

---

##### `PscInterfaceConfig`<sup>Optional</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.pscInterfaceConfig"></a>

```go
PscInterfaceConfig GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#psc_interface_config GoogleColabSchedule#psc_interface_config}

---

##### `ReservedIpRanges`<sup>Optional</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.reservedIpRanges"></a>

```go
ReservedIpRanges *[]*string
```

- *Type:* *[]*string

A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload.

If set, we will deploy the Pipeline Job's workload within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network. Example: ['vertex-ai-ip-range'].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#reserved_ip_ranges GoogleColabSchedule#reserved_ip_ranges}

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.runtimeConfig"></a>

```go
RuntimeConfig GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#runtime_config GoogleColabSchedule#runtime_config}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account that the pipeline workload runs as.

If not specified, the Compute Engine default service account in the project will be used. See https://cloud.google.com/compute/docs/access/service-accounts#default_service_account Users starting the pipeline must have the 'iam.serviceAccounts.actAs' permission on this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#service_account GoogleColabSchedule#service_account}

---

##### `TemplateUri`<sup>Optional</sup> <a name="TemplateUri" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob.property.templateUri"></a>

```go
TemplateUri *string
```

- *Type:* *string

A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported. Reference to https://cloud.google.com/vertex-ai/docs/pipelines/create-pipeline-template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#template_uri GoogleColabSchedule#template_uri}

---

### GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have the format 'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#kms_key_name GoogleColabSchedule#kms_key_name}

---

### GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig {
	DnsPeeringConfigs: interface{},
	NetworkAttachment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code>interface{}</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I. |

---

##### `DnsPeeringConfigs`<sup>Optional</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```go
DnsPeeringConfigs interface{}
```

- *Type:* interface{}

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#dns_peering_configs GoogleColabSchedule#dns_peering_configs}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#network_attachment GoogleColabSchedule#network_attachment}

---

### GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs {
	Domain: *string,
	TargetNetwork: *string,
	TargetProject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain">Domain</a></code> | <code>*string</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | The VPC network name in the target_project where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject">TargetProject</a></code> | <code>*string</code> | The project ID hosting the Cloud DNS managed zone that contains the 'domain'. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#domain GoogleColabSchedule#domain}

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```go
TargetNetwork *string
```

- *Type:* *string

The VPC network name in the target_project where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#target_network GoogleColabSchedule#target_network}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```go
TargetProject *string
```

- *Type:* *string

The project ID hosting the Cloud DNS managed zone that contains the 'domain'.

The Vertex AI Service Agent requires the dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#target_project GoogleColabSchedule#target_project}

---

### GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig {
	GcsOutputDirectory: *string,
	FailurePolicy: *string,
	ParameterValues: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.gcsOutputDirectory">GcsOutputDirectory</a></code> | <code>*string</code> | A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.failurePolicy">FailurePolicy</a></code> | <code>*string</code> | Possible values: PIPELINE_FAILURE_POLICY_FAIL_SLOW PIPELINE_FAILURE_POLICY_FAIL_FAST. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.parameterValues">ParameterValues</a></code> | <code>*map[string]*string</code> | The runtime parameters of the PipelineJob. |

---

##### `GcsOutputDirectory`<sup>Required</sup> <a name="GcsOutputDirectory" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.gcsOutputDirectory"></a>

```go
GcsOutputDirectory *string
```

- *Type:* *string

A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline.

It is used by the system to generate the paths of output artifacts. The artifact paths are generated with a sub-path pattern '{job_id}/{task_id}/{output_key}' under the specified output directory. The service account specified in this pipeline must have the 'storage.objects.get' and 'storage.objects.create' permissions for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#gcs_output_directory GoogleColabSchedule#gcs_output_directory}

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.failurePolicy"></a>

```go
FailurePolicy *string
```

- *Type:* *string

Possible values: PIPELINE_FAILURE_POLICY_FAIL_SLOW PIPELINE_FAILURE_POLICY_FAIL_FAST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#failure_policy GoogleColabSchedule#failure_policy}

---

##### `ParameterValues`<sup>Optional</sup> <a name="ParameterValues" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig.property.parameterValues"></a>

```go
ParameterValues *map[string]*string
```

- *Type:* *map[string]*string

The runtime parameters of the PipelineJob.

The parameters will be passed into PipelineJob.pipeline_spec to replace the placeholders at runtime. This field is used by pipelines built using 'PipelineJob.pipeline_spec.schema_version' 2.1.0, such as pipelines built using Kubeflow Pipelines SDK 1.9 or higher and the v2 DSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#parameter_values GoogleColabSchedule#parameter_values}

---

### GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata {

}
```


### GoogleColabScheduleLastScheduledRunResponse <a name="GoogleColabScheduleLastScheduledRunResponse" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleLastScheduledRunResponse {

}
```


### GoogleColabScheduleTimeouts <a name="GoogleColabScheduleTimeouts" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

&googlecolabschedule.GoogleColabScheduleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#create GoogleColabSchedule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#delete GoogleColabSchedule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#update GoogleColabSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#create GoogleColabSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#delete GoogleColabSchedule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_colab_schedule#update GoogleColabSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetGpuPartitionSize">ResetGpuPartitionSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetTpuTopology">ResetTpuTopology</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.putReservationAffinity"></a>

```go
func PutReservationAffinity(value GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a>

---

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorCount"></a>

```go
func ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorType"></a>

```go
func ResetAcceleratorType()
```

##### `ResetGpuPartitionSize` <a name="ResetGpuPartitionSize" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetGpuPartitionSize"></a>

```go
func ResetGpuPartitionSize()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetReservationAffinity"></a>

```go
func ResetReservationAffinity()
```

##### `ResetTpuTopology` <a name="ResetTpuTopology" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.resetTpuTopology"></a>

```go
func ResetTpuTopology()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.gpuPartitionSizeInput">GpuPartitionSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.tpuTopologyInput">TpuTopologyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.gpuPartitionSize">GpuPartitionSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.tpuTopology">TpuTopology</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.reservationAffinity"></a>

```go
func ReservationAffinity() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference</a>

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() *f64
```

- *Type:* *f64

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `GpuPartitionSizeInput`<sup>Optional</sup> <a name="GpuPartitionSizeInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.gpuPartitionSizeInput"></a>

```go
func GpuPartitionSizeInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.reservationAffinityInput"></a>

```go
func ReservationAffinityInput() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a>

---

##### `TpuTopologyInput`<sup>Optional</sup> <a name="TpuTopologyInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.tpuTopologyInput"></a>

```go
func TpuTopologyInput() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `GpuPartitionSize`<sup>Required</sup> <a name="GpuPartitionSize" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.gpuPartitionSize"></a>

```go
func GpuPartitionSize() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `TpuTopology`<sup>Required</sup> <a name="TpuTopology" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.tpuTopology"></a>

```go
func TpuTopology() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a>

---


### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resetUseReservationPool">ResetUseReservationPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetUseReservationPool` <a name="ResetUseReservationPool" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resetUseReservationPool"></a>

```go
func ResetUseReservationPool()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput">ReservationAffinityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.useReservationPoolInput">UseReservationPoolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.reservationAffinityType">ReservationAffinityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.useReservationPool">UseReservationPool</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ReservationAffinityTypeInput`<sup>Optional</sup> <a name="ReservationAffinityTypeInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput"></a>

```go
func ReservationAffinityTypeInput() *string
```

- *Type:* *string

---

##### `UseReservationPoolInput`<sup>Optional</sup> <a name="UseReservationPoolInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.useReservationPoolInput"></a>

```go
func UseReservationPoolInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ReservationAffinityType`<sup>Required</sup> <a name="ReservationAffinityType" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.reservationAffinityType"></a>

```go
func ReservationAffinityType() *string
```

- *Type:* *string

---

##### `UseReservationPool`<sup>Required</sup> <a name="UseReservationPool" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.useReservationPool"></a>

```go
func UseReservationPool() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinityOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecReservationAffinity</a>

---


### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resetEnableInternetAccess">ResetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableInternetAccess` <a name="ResetEnableInternetAccess" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```go
func ResetEnableInternetAccess()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccessInput">EnableInternetAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInternetAccessInput`<sup>Optional</sup> <a name="EnableInternetAccessInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```go
func EnableInternetAccessInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `EnableInternetAccess`<sup>Required</sup> <a name="EnableInternetAccess" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccess"></a>

```go
func EnableInternetAccess() interface{}
```

- *Type:* interface{}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a>

---


### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putNetworkSpec">PutNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putPersistentDiskSpec">PutPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resetMachineSpec">ResetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resetNetworkSpec">ResetNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resetPersistentDiskSpec">ResetPersistentDiskSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putMachineSpec"></a>

```go
func PutMachineSpec(value GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a>

---

##### `PutNetworkSpec` <a name="PutNetworkSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putNetworkSpec"></a>

```go
func PutNetworkSpec(value GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putNetworkSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a>

---

##### `PutPersistentDiskSpec` <a name="PutPersistentDiskSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putPersistentDiskSpec"></a>

```go
func PutPersistentDiskSpec(value GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.putPersistentDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a>

---

##### `ResetMachineSpec` <a name="ResetMachineSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resetMachineSpec"></a>

```go
func ResetMachineSpec()
```

##### `ResetNetworkSpec` <a name="ResetNetworkSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resetNetworkSpec"></a>

```go
func ResetNetworkSpec()
```

##### `ResetPersistentDiskSpec` <a name="ResetPersistentDiskSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.resetPersistentDiskSpec"></a>

```go
func ResetPersistentDiskSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.persistentDiskSpec">PersistentDiskSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.networkSpecInput">NetworkSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.persistentDiskSpecInput">PersistentDiskSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.machineSpec"></a>

```go
func MachineSpec() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpecOutputReference</a>

---

##### `NetworkSpec`<sup>Required</sup> <a name="NetworkSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.networkSpec"></a>

```go
func NetworkSpec() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpecOutputReference</a>

---

##### `PersistentDiskSpec`<sup>Required</sup> <a name="PersistentDiskSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.persistentDiskSpec"></a>

```go
func PersistentDiskSpec() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference</a>

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.machineSpecInput"></a>

```go
func MachineSpecInput() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecMachineSpec</a>

---

##### `NetworkSpecInput`<sup>Optional</sup> <a name="NetworkSpecInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.networkSpecInput"></a>

```go
func NetworkSpecInput() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecNetworkSpec</a>

---

##### `PersistentDiskSpecInput`<sup>Optional</sup> <a name="PersistentDiskSpecInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.persistentDiskSpecInput"></a>

```go
func PersistentDiskSpecInput() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a>

---


### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskType"></a>

```go
func ResetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *string
```

- *Type:* *string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *string
```

- *Type:* *string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecPersistentDiskSpec</a>

---


### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetCommitSha"></a>

```go
func ResetCommitSha()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">DataformRepositoryResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitSha">CommitSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```go
func CommitShaInput() *string
```

- *Type:* *string

---

##### `DataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="DataformRepositoryResourceNameInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```go
func DataformRepositoryResourceNameInput() *string
```

- *Type:* *string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitSha"></a>

```go
func CommitSha() *string
```

- *Type:* *string

---

##### `DataformRepositoryResourceName`<sup>Required</sup> <a name="DataformRepositoryResourceName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```go
func DataformRepositoryResourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---


### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a>

---


### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetGeneration">ResetGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetGeneration"></a>

```go
func ResetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generationInput">GenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generation">Generation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generationInput"></a>

```go
func GenerationInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generation"></a>

```go
func Generation() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---


### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putCustomEnvironmentSpec">PutCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource">PutDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource">PutGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putWorkbenchRuntime">PutWorkbenchRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetCustomEnvironmentSpec">ResetCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDataformRepositorySource">ResetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionTimeout">ResetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionUser">ResetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsNotebookSource">ResetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetKernelName">ResetKernelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetNotebookRuntimeTemplateResourceName">ResetNotebookRuntimeTemplateResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetWorkbenchRuntime">ResetWorkbenchRuntime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomEnvironmentSpec` <a name="PutCustomEnvironmentSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putCustomEnvironmentSpec"></a>

```go
func PutCustomEnvironmentSpec(value GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putCustomEnvironmentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a>

---

##### `PutDataformRepositorySource` <a name="PutDataformRepositorySource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource"></a>

```go
func PutDataformRepositorySource(value GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a>

---

##### `PutGcsNotebookSource` <a name="PutGcsNotebookSource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource"></a>

```go
func PutGcsNotebookSource(value GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---

##### `PutWorkbenchRuntime` <a name="PutWorkbenchRuntime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putWorkbenchRuntime"></a>

```go
func PutWorkbenchRuntime(value GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putWorkbenchRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a>

---

##### `ResetCustomEnvironmentSpec` <a name="ResetCustomEnvironmentSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetCustomEnvironmentSpec"></a>

```go
func ResetCustomEnvironmentSpec()
```

##### `ResetDataformRepositorySource` <a name="ResetDataformRepositorySource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDataformRepositorySource"></a>

```go
func ResetDataformRepositorySource()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetExecutionTimeout` <a name="ResetExecutionTimeout" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionTimeout"></a>

```go
func ResetExecutionTimeout()
```

##### `ResetExecutionUser` <a name="ResetExecutionUser" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionUser"></a>

```go
func ResetExecutionUser()
```

##### `ResetGcsNotebookSource` <a name="ResetGcsNotebookSource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsNotebookSource"></a>

```go
func ResetGcsNotebookSource()
```

##### `ResetKernelName` <a name="ResetKernelName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetKernelName"></a>

```go
func ResetKernelName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNotebookRuntimeTemplateResourceName` <a name="ResetNotebookRuntimeTemplateResourceName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetNotebookRuntimeTemplateResourceName"></a>

```go
func ResetNotebookRuntimeTemplateResourceName()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetWorkbenchRuntime` <a name="ResetWorkbenchRuntime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetWorkbenchRuntime"></a>

```go
func ResetWorkbenchRuntime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.customEnvironmentSpec">CustomEnvironmentSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.jobState">JobState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.scheduleResourceName">ScheduleResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.workbenchRuntime">WorkbenchRuntime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.customEnvironmentSpecInput">CustomEnvironmentSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySourceInput">DataformRepositorySourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeoutInput">ExecutionTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUserInput">ExecutionUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSourceInput">GcsNotebookSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUriInput">GcsOutputUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.kernelNameInput">KernelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceNameInput">NotebookRuntimeTemplateResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.workbenchRuntimeInput">WorkbenchRuntimeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUser">ExecutionUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUri">GcsOutputUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.kernelName">KernelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CustomEnvironmentSpec`<sup>Required</sup> <a name="CustomEnvironmentSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.customEnvironmentSpec"></a>

```go
func CustomEnvironmentSpec() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpecOutputReference</a>

---

##### `DataformRepositorySource`<sup>Required</sup> <a name="DataformRepositorySource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySource"></a>

```go
func DataformRepositorySource() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference</a>

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.encryptionSpec"></a>

```go
func EncryptionSpec() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpecOutputReference</a>

---

##### `GcsNotebookSource`<sup>Required</sup> <a name="GcsNotebookSource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSource"></a>

```go
func GcsNotebookSource() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference</a>

---

##### `JobState`<sup>Required</sup> <a name="JobState" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.jobState"></a>

```go
func JobState() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScheduleResourceName`<sup>Required</sup> <a name="ScheduleResourceName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.scheduleResourceName"></a>

```go
func ScheduleResourceName() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WorkbenchRuntime`<sup>Required</sup> <a name="WorkbenchRuntime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.workbenchRuntime"></a>

```go
func WorkbenchRuntime() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference</a>

---

##### `CustomEnvironmentSpecInput`<sup>Optional</sup> <a name="CustomEnvironmentSpecInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.customEnvironmentSpecInput"></a>

```go
func CustomEnvironmentSpecInput() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobCustomEnvironmentSpec</a>

---

##### `DataformRepositorySourceInput`<sup>Optional</sup> <a name="DataformRepositorySourceInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySourceInput"></a>

```go
func DataformRepositorySourceInput() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobEncryptionSpec</a>

---

##### `ExecutionTimeoutInput`<sup>Optional</sup> <a name="ExecutionTimeoutInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeoutInput"></a>

```go
func ExecutionTimeoutInput() *string
```

- *Type:* *string

---

##### `ExecutionUserInput`<sup>Optional</sup> <a name="ExecutionUserInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUserInput"></a>

```go
func ExecutionUserInput() *string
```

- *Type:* *string

---

##### `GcsNotebookSourceInput`<sup>Optional</sup> <a name="GcsNotebookSourceInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSourceInput"></a>

```go
func GcsNotebookSourceInput() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---

##### `GcsOutputUriInput`<sup>Optional</sup> <a name="GcsOutputUriInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUriInput"></a>

```go
func GcsOutputUriInput() *string
```

- *Type:* *string

---

##### `KernelNameInput`<sup>Optional</sup> <a name="KernelNameInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.kernelNameInput"></a>

```go
func KernelNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NotebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="NotebookRuntimeTemplateResourceNameInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceNameInput"></a>

```go
func NotebookRuntimeTemplateResourceNameInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `WorkbenchRuntimeInput`<sup>Optional</sup> <a name="WorkbenchRuntimeInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.workbenchRuntimeInput"></a>

```go
func WorkbenchRuntimeInput() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutionTimeout`<sup>Required</sup> <a name="ExecutionTimeout" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeout"></a>

```go
func ExecutionTimeout() *string
```

- *Type:* *string

---

##### `ExecutionUser`<sup>Required</sup> <a name="ExecutionUser" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUser"></a>

```go
func ExecutionUser() *string
```

- *Type:* *string

---

##### `GcsOutputUri`<sup>Required</sup> <a name="GcsOutputUri" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUri"></a>

```go
func GcsOutputUri() *string
```

- *Type:* *string

---

##### `KernelName`<sup>Required</sup> <a name="KernelName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.kernelName"></a>

```go
func KernelName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NotebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceName"></a>

```go
func NotebookRuntimeTemplateResourceName() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---


### GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntimeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobWorkbenchRuntime</a>

---


### GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference <a name="GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob">PutNotebookExecutionJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.resetParent">ResetParent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotebookExecutionJob` <a name="PutNotebookExecutionJob" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob"></a>

```go
func PutNotebookExecutionJob(value GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---

##### `ResetParent` <a name="ResetParent" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.resetParent"></a>

```go
func ResetParent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJob">NotebookExecutionJob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobId">NotebookExecutionJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobInput">NotebookExecutionJobInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotebookExecutionJob`<sup>Required</sup> <a name="NotebookExecutionJob" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJob"></a>

```go
func NotebookExecutionJob() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference</a>

---

##### `NotebookExecutionJobId`<sup>Required</sup> <a name="NotebookExecutionJobId" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobId"></a>

```go
func NotebookExecutionJobId() *string
```

- *Type:* *string

---

##### `NotebookExecutionJobInput`<sup>Optional</sup> <a name="NotebookExecutionJobInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobInput"></a>

```go
func NotebookExecutionJobInput() GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">GoogleColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreateNotebookExecutionJobRequest
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreateNotebookExecutionJobRequest">GoogleColabScheduleCreateNotebookExecutionJobRequest</a>

---


### GoogleColabScheduleCreatePipelineJobRequestOutputReference <a name="GoogleColabScheduleCreatePipelineJobRequestOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreatePipelineJobRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreatePipelineJobRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.putPipelineJob">PutPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.resetParent">ResetParent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPipelineJob` <a name="PutPipelineJob" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.putPipelineJob"></a>

```go
func PutPipelineJob(value GoogleColabScheduleCreatePipelineJobRequestPipelineJob)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.putPipelineJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob">GoogleColabScheduleCreatePipelineJobRequestPipelineJob</a>

---

##### `ResetParent` <a name="ResetParent" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.resetParent"></a>

```go
func ResetParent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.pipelineJob">PipelineJob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference">GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.pipelineJobId">PipelineJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.pipelineJobInput">PipelineJobInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob">GoogleColabScheduleCreatePipelineJobRequestPipelineJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest">GoogleColabScheduleCreatePipelineJobRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PipelineJob`<sup>Required</sup> <a name="PipelineJob" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.pipelineJob"></a>

```go
func PipelineJob() GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference">GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference</a>

---

##### `PipelineJobId`<sup>Required</sup> <a name="PipelineJobId" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.pipelineJobId"></a>

```go
func PipelineJobId() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PipelineJobInput`<sup>Optional</sup> <a name="PipelineJobInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.pipelineJobInput"></a>

```go
func PipelineJobInput() GoogleColabScheduleCreatePipelineJobRequestPipelineJob
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob">GoogleColabScheduleCreatePipelineJobRequestPipelineJob</a>

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreatePipelineJobRequest
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequest">GoogleColabScheduleCreatePipelineJobRequest</a>

---


### GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a>

---


### GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.putPscInterfaceConfig">PutPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetPipelineSpec">ResetPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetPreflightValidations">ResetPreflightValidations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetPscInterfaceConfig">ResetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetReservedIpRanges">ResetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetTemplateUri">ResetTemplateUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a>

---

##### `PutPscInterfaceConfig` <a name="PutPscInterfaceConfig" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.putPscInterfaceConfig"></a>

```go
func PutPscInterfaceConfig(value GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a>

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.putRuntimeConfig"></a>

```go
func PutRuntimeConfig(value GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetPipelineSpec` <a name="ResetPipelineSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetPipelineSpec"></a>

```go
func ResetPipelineSpec()
```

##### `ResetPreflightValidations` <a name="ResetPreflightValidations" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetPreflightValidations"></a>

```go
func ResetPreflightValidations()
```

##### `ResetPscInterfaceConfig` <a name="ResetPscInterfaceConfig" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetPscInterfaceConfig"></a>

```go
func ResetPscInterfaceConfig()
```

##### `ResetReservedIpRanges` <a name="ResetReservedIpRanges" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetReservedIpRanges"></a>

```go
func ResetReservedIpRanges()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetRuntimeConfig"></a>

```go
func ResetRuntimeConfig()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTemplateUri` <a name="ResetTemplateUri" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.resetTemplateUri"></a>

```go
func ResetTemplateUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference">GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference">GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference">GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.scheduleName">ScheduleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.templateMetadata">TemplateMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList">GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pipelineSpecInput">PipelineSpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.preflightValidationsInput">PreflightValidationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pscInterfaceConfigInput">PscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.reservedIpRangesInput">ReservedIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.templateUriInput">TemplateUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pipelineSpec">PipelineSpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.preflightValidations">PreflightValidations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.templateUri">TemplateUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob">GoogleColabScheduleCreatePipelineJobRequestPipelineJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.encryptionSpec"></a>

```go
func EncryptionSpec() GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference">GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpecOutputReference</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PscInterfaceConfig`<sup>Required</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pscInterfaceConfig"></a>

```go
func PscInterfaceConfig() GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference">GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference</a>

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.runtimeConfig"></a>

```go
func RuntimeConfig() GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference">GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference</a>

---

##### `ScheduleName`<sup>Required</sup> <a name="ScheduleName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.scheduleName"></a>

```go
func ScheduleName() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TemplateMetadata`<sup>Required</sup> <a name="TemplateMetadata" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.templateMetadata"></a>

```go
func TemplateMetadata() GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList">GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec">GoogleColabScheduleCreatePipelineJobRequestPipelineJobEncryptionSpec</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PipelineSpecInput`<sup>Optional</sup> <a name="PipelineSpecInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pipelineSpecInput"></a>

```go
func PipelineSpecInput() *string
```

- *Type:* *string

---

##### `PreflightValidationsInput`<sup>Optional</sup> <a name="PreflightValidationsInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.preflightValidationsInput"></a>

```go
func PreflightValidationsInput() interface{}
```

- *Type:* interface{}

---

##### `PscInterfaceConfigInput`<sup>Optional</sup> <a name="PscInterfaceConfigInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pscInterfaceConfigInput"></a>

```go
func PscInterfaceConfigInput() GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a>

---

##### `ReservedIpRangesInput`<sup>Optional</sup> <a name="ReservedIpRangesInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.reservedIpRangesInput"></a>

```go
func ReservedIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.runtimeConfigInput"></a>

```go
func RuntimeConfigInput() GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TemplateUriInput`<sup>Optional</sup> <a name="TemplateUriInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.templateUriInput"></a>

```go
func TemplateUriInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `PipelineSpec`<sup>Required</sup> <a name="PipelineSpec" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.pipelineSpec"></a>

```go
func PipelineSpec() *string
```

- *Type:* *string

---

##### `PreflightValidations`<sup>Required</sup> <a name="PreflightValidations" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.preflightValidations"></a>

```go
func PreflightValidations() interface{}
```

- *Type:* interface{}

---

##### `ReservedIpRanges`<sup>Required</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.reservedIpRanges"></a>

```go
func ReservedIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `TemplateUri`<sup>Required</sup> <a name="TemplateUri" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.templateUri"></a>

```go
func TemplateUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreatePipelineJobRequestPipelineJob
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJob">GoogleColabScheduleCreatePipelineJobRequestPipelineJob</a>

---


### GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```go
func Get(index *f64) GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">TargetProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">TargetProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```go
func TargetNetworkInput() *string
```

- *Type:* *string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```go
func TargetProjectInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```go
func TargetNetwork() *string
```

- *Type:* *string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```go
func TargetProject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs">PutDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">ResetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfigs` <a name="PutDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```go
func PutDnsPeeringConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDnsPeeringConfigs` <a name="ResetDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```go
func ResetDnsPeeringConfigs()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```go
func ResetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList">GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">DnsPeeringConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsPeeringConfigs`<sup>Required</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```go
func DnsPeeringConfigs() GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList">GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `DnsPeeringConfigsInput`<sup>Optional</sup> <a name="DnsPeeringConfigsInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```go
func DnsPeeringConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobPscInterfaceConfig</a>

---


### GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resetParameterValues">ResetParameterValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resetFailurePolicy"></a>

```go
func ResetFailurePolicy()
```

##### `ResetParameterValues` <a name="ResetParameterValues" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.resetParameterValues"></a>

```go
func ResetParameterValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput">FailurePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput">GcsOutputDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput">ParameterValuesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory">GcsOutputDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.parameterValues">ParameterValues</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput"></a>

```go
func FailurePolicyInput() *string
```

- *Type:* *string

---

##### `GcsOutputDirectoryInput`<sup>Optional</sup> <a name="GcsOutputDirectoryInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput"></a>

```go
func GcsOutputDirectoryInput() *string
```

- *Type:* *string

---

##### `ParameterValuesInput`<sup>Optional</sup> <a name="ParameterValuesInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput"></a>

```go
func ParameterValuesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.failurePolicy"></a>

```go
func FailurePolicy() *string
```

- *Type:* *string

---

##### `GcsOutputDirectory`<sup>Required</sup> <a name="GcsOutputDirectory" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory"></a>

```go
func GcsOutputDirectory() *string
```

- *Type:* *string

---

##### `ParameterValues`<sup>Required</sup> <a name="ParameterValues" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.parameterValues"></a>

```go
func ParameterValues() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig">GoogleColabScheduleCreatePipelineJobRequestPipelineJobRuntimeConfig</a>

---


### GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.get"></a>

```go
func Get(index *f64) GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference <a name="GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata">GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata">GoogleColabScheduleCreatePipelineJobRequestPipelineJobTemplateMetadata</a>

---


### GoogleColabScheduleLastScheduledRunResponseList <a name="GoogleColabScheduleLastScheduledRunResponseList" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleLastScheduledRunResponseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleColabScheduleLastScheduledRunResponseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.get"></a>

```go
func Get(index *f64) GoogleColabScheduleLastScheduledRunResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleColabScheduleLastScheduledRunResponseOutputReference <a name="GoogleColabScheduleLastScheduledRunResponseOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleLastScheduledRunResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleColabScheduleLastScheduledRunResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.property.runResponse">RunResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.property.scheduledRunTime">ScheduledRunTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponse">GoogleColabScheduleLastScheduledRunResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RunResponse`<sup>Required</sup> <a name="RunResponse" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.property.runResponse"></a>

```go
func RunResponse() *string
```

- *Type:* *string

---

##### `ScheduledRunTime`<sup>Required</sup> <a name="ScheduledRunTime" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.property.scheduledRunTime"></a>

```go
func ScheduledRunTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabScheduleLastScheduledRunResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleLastScheduledRunResponse">GoogleColabScheduleLastScheduledRunResponse</a>

---


### GoogleColabScheduleTimeoutsOutputReference <a name="GoogleColabScheduleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecolabschedule"

googlecolabschedule.NewGoogleColabScheduleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabScheduleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabSchedule.GoogleColabScheduleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



