# `googleVertexAiTrainingPipeline` Submodule <a name="`googleVertexAiTrainingPipeline` Submodule" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiTrainingPipeline <a name="GoogleVertexAiTrainingPipeline" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline google_vertex_ai_training_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipeline(scope Construct, id *string, config GoogleVertexAiTrainingPipelineConfig) GoogleVertexAiTrainingPipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig">GoogleVertexAiTrainingPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig">GoogleVertexAiTrainingPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig">PutInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload">PutModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetInputDataConfig">ResetInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetModelToUpload">ResetModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetParentModel">ResetParentModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value GoogleVertexAiTrainingPipelineEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

---

##### `PutInputDataConfig` <a name="PutInputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig"></a>

```go
func PutInputDataConfig(value GoogleVertexAiTrainingPipelineInputDataConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

---

##### `PutModelToUpload` <a name="PutModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload"></a>

```go
func PutModelToUpload(value GoogleVertexAiTrainingPipelineModelToUpload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putModelToUpload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVertexAiTrainingPipelineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetId"></a>

```go
func ResetId()
```

##### `ResetInputDataConfig` <a name="ResetInputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetInputDataConfig"></a>

```go
func ResetInputDataConfig()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetModelToUpload` <a name="ResetModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetModelToUpload"></a>

```go
func ResetModelToUpload()
```

##### `ResetParentModel` <a name="ResetParentModel" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetParentModel"></a>

```go
func ResetParentModel()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleVertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVertexAiTrainingPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVertexAiTrainingPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiTrainingPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList">GoogleVertexAiTrainingPipelineErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUpload">ModelToUpload</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference">GoogleVertexAiTrainingPipelineModelToUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference">GoogleVertexAiTrainingPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskMetadata">TrainingTaskMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfigInput">InputDataConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUploadInput">ModelToUploadInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModelInput">ParentModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinitionInput">TrainingTaskDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputsInput">TrainingTaskInputsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModel">ParentModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinition">TrainingTaskDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputs">TrainingTaskInputs</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpec"></a>

```go
func EncryptionSpec() GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.error"></a>

```go
func Error() GoogleVertexAiTrainingPipelineErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList">GoogleVertexAiTrainingPipelineErrorList</a>

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfig"></a>

```go
func InputDataConfig() GoogleVertexAiTrainingPipelineInputDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigOutputReference</a>

---

##### `ModelToUpload`<sup>Required</sup> <a name="ModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUpload"></a>

```go
func ModelToUpload() GoogleVertexAiTrainingPipelineModelToUploadOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference">GoogleVertexAiTrainingPipelineModelToUploadOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeouts"></a>

```go
func Timeouts() GoogleVertexAiTrainingPipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference">GoogleVertexAiTrainingPipelineTimeoutsOutputReference</a>

---

##### `TrainingTaskMetadata`<sup>Required</sup> <a name="TrainingTaskMetadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskMetadata"></a>

```go
func TrainingTaskMetadata() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() GoogleVertexAiTrainingPipelineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputDataConfigInput`<sup>Optional</sup> <a name="InputDataConfigInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.inputDataConfigInput"></a>

```go
func InputDataConfigInput() GoogleVertexAiTrainingPipelineInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `ModelToUploadInput`<sup>Optional</sup> <a name="ModelToUploadInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelToUploadInput"></a>

```go
func ModelToUploadInput() GoogleVertexAiTrainingPipelineModelToUpload
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

---

##### `ParentModelInput`<sup>Optional</sup> <a name="ParentModelInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModelInput"></a>

```go
func ParentModelInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrainingTaskDefinitionInput`<sup>Optional</sup> <a name="TrainingTaskDefinitionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinitionInput"></a>

```go
func TrainingTaskDefinitionInput() *string
```

- *Type:* *string

---

##### `TrainingTaskInputsInput`<sup>Optional</sup> <a name="TrainingTaskInputsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputsInput"></a>

```go
func TrainingTaskInputsInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

##### `ParentModel`<sup>Required</sup> <a name="ParentModel" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.parentModel"></a>

```go
func ParentModel() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TrainingTaskDefinition`<sup>Required</sup> <a name="TrainingTaskDefinition" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskDefinition"></a>

```go
func TrainingTaskDefinition() *string
```

- *Type:* *string

---

##### `TrainingTaskInputs`<sup>Required</sup> <a name="TrainingTaskInputs" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.trainingTaskInputs"></a>

```go
func TrainingTaskInputs() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiTrainingPipelineConfig <a name="GoogleVertexAiTrainingPipelineConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	ModelId: *string,
	TrainingTaskDefinition: *string,
	TrainingTaskInputs: *string,
	DeletionPolicy: *string,
	EncryptionSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec,
	Id: *string,
	InputDataConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig,
	Labels: *map[string]*string,
	ModelToUpload: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload,
	ParentModel: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The user-defined name of this TrainingPipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelId">ModelId</a></code> | <code>*string</code> | The ID to use for the uploaded Model, which will become the final component of the model resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskDefinition">TrainingTaskDefinition</a></code> | <code>*string</code> | A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskInputs">TrainingTaskInputs</a></code> | <code>*string</code> | The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#id GoogleVertexAiTrainingPipeline#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize TrainingPipelines. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelToUpload">ModelToUpload</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | model_to_upload block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.parentModel">ParentModel</a></code> | <code>*string</code> | When specified, the model_to_upload will become a new version of this parent_model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#project GoogleVertexAiTrainingPipeline#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.region">Region</a></code> | <code>*string</code> | The region of the training pipeline. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The user-defined name of this TrainingPipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#display_name GoogleVertexAiTrainingPipeline#display_name}

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

The ID to use for the uploaded Model, which will become the final component of the model resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#model_id GoogleVertexAiTrainingPipeline#model_id}

---

##### `TrainingTaskDefinition`<sup>Required</sup> <a name="TrainingTaskDefinition" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskDefinition"></a>

```go
TrainingTaskDefinition *string
```

- *Type:* *string

A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work.

The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_task_definition GoogleVertexAiTrainingPipeline#training_task_definition}

---

##### `TrainingTaskInputs`<sup>Required</sup> <a name="TrainingTaskInputs" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.trainingTaskInputs"></a>

```go
TrainingTaskInputs *string
```

- *Type:* *string

The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_task_inputs GoogleVertexAiTrainingPipeline#training_task_inputs}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#deletion_policy GoogleVertexAiTrainingPipeline#deletion_policy}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.encryptionSpec"></a>

```go
EncryptionSpec GoogleVertexAiTrainingPipelineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#encryption_spec GoogleVertexAiTrainingPipeline#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#id GoogleVertexAiTrainingPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputDataConfig`<sup>Optional</sup> <a name="InputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.inputDataConfig"></a>

```go
InputDataConfig GoogleVertexAiTrainingPipelineInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#input_data_config GoogleVertexAiTrainingPipeline#input_data_config}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize TrainingPipelines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#labels GoogleVertexAiTrainingPipeline#labels}

---

##### `ModelToUpload`<sup>Optional</sup> <a name="ModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.modelToUpload"></a>

```go
ModelToUpload GoogleVertexAiTrainingPipelineModelToUpload
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

model_to_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#model_to_upload GoogleVertexAiTrainingPipeline#model_to_upload}

---

##### `ParentModel`<sup>Optional</sup> <a name="ParentModel" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.parentModel"></a>

```go
ParentModel *string
```

- *Type:* *string

When specified, the model_to_upload will become a new version of this parent_model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#parent_model GoogleVertexAiTrainingPipeline#parent_model}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#project GoogleVertexAiTrainingPipeline#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the training pipeline. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#region GoogleVertexAiTrainingPipeline#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineConfig.property.timeouts"></a>

```go
Timeouts GoogleVertexAiTrainingPipelineTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts">GoogleVertexAiTrainingPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeouts GoogleVertexAiTrainingPipeline#timeouts}

---

### GoogleVertexAiTrainingPipelineEncryptionSpec <a name="GoogleVertexAiTrainingPipelineEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#kms_key_name GoogleVertexAiTrainingPipeline#kms_key_name}

---

### GoogleVertexAiTrainingPipelineError <a name="GoogleVertexAiTrainingPipelineError" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineError {

}
```


### GoogleVertexAiTrainingPipelineInputDataConfig <a name="GoogleVertexAiTrainingPipelineInputDataConfig" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineInputDataConfig {
	DatasetId: *string,
	AnnotationSchemaUri: *string,
	AnnotationsFilter: *string,
	BigqueryDestination: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination,
	FilterSplit: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit,
	FractionSplit: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit,
	GcsDestination: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination,
	PersistMlUseAssignment: interface{},
	PredefinedSplit: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit,
	SavedQueryId: *string,
	StratifiedSplit: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit,
	TimestampSplit: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the Dataset in the same Project and Location which data will be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri">AnnotationSchemaUri</a></code> | <code>*string</code> | Applicable only to custom training with Datasets that have DataItems and Annotations. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationsFilter">AnnotationsFilter</a></code> | <code>*string</code> | Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination">BigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.filterSplit">FilterSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | filter_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.fractionSplit">FractionSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | fraction_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.gcsDestination">GcsDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | gcs_destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment">PersistMlUseAssignment</a></code> | <code>interface{}</code> | Whether to persist the ML use assignment to data item system labels. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.predefinedSplit">PredefinedSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | predefined_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.savedQueryId">SavedQueryId</a></code> | <code>*string</code> | Only applicable to Datasets that have SavedQueries. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit">StratifiedSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | stratified_split block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.timestampSplit">TimestampSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | timestamp_split block. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the Dataset in the same Project and Location which data will be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#dataset_id GoogleVertexAiTrainingPipeline#dataset_id}

---

##### `AnnotationSchemaUri`<sup>Optional</sup> <a name="AnnotationSchemaUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri"></a>

```go
AnnotationSchemaUri *string
```

- *Type:* *string

Applicable only to custom training with Datasets that have DataItems and Annotations.

Cloud Storage URI that points to a YAML file describing the annotation schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#annotation_schema_uri GoogleVertexAiTrainingPipeline#annotation_schema_uri}

---

##### `AnnotationsFilter`<sup>Optional</sup> <a name="AnnotationsFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.annotationsFilter"></a>

```go
AnnotationsFilter *string
```

- *Type:* *string

Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#annotations_filter GoogleVertexAiTrainingPipeline#annotations_filter}

---

##### `BigqueryDestination`<sup>Optional</sup> <a name="BigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination"></a>

```go
BigqueryDestination GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#bigquery_destination GoogleVertexAiTrainingPipeline#bigquery_destination}

---

##### `FilterSplit`<sup>Optional</sup> <a name="FilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.filterSplit"></a>

```go
FilterSplit GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

filter_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#filter_split GoogleVertexAiTrainingPipeline#filter_split}

---

##### `FractionSplit`<sup>Optional</sup> <a name="FractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.fractionSplit"></a>

```go
FractionSplit GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

fraction_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#fraction_split GoogleVertexAiTrainingPipeline#fraction_split}

---

##### `GcsDestination`<sup>Optional</sup> <a name="GcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.gcsDestination"></a>

```go
GcsDestination GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#gcs_destination GoogleVertexAiTrainingPipeline#gcs_destination}

---

##### `PersistMlUseAssignment`<sup>Optional</sup> <a name="PersistMlUseAssignment" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment"></a>

```go
PersistMlUseAssignment interface{}
```

- *Type:* interface{}

Whether to persist the ML use assignment to data item system labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#persist_ml_use_assignment GoogleVertexAiTrainingPipeline#persist_ml_use_assignment}

---

##### `PredefinedSplit`<sup>Optional</sup> <a name="PredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.predefinedSplit"></a>

```go
PredefinedSplit GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

predefined_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#predefined_split GoogleVertexAiTrainingPipeline#predefined_split}

---

##### `SavedQueryId`<sup>Optional</sup> <a name="SavedQueryId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.savedQueryId"></a>

```go
SavedQueryId *string
```

- *Type:* *string

Only applicable to Datasets that have SavedQueries.

The ID of a SavedQuery under the Dataset specified by dataset_id used for filtering Annotations for training.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#saved_query_id GoogleVertexAiTrainingPipeline#saved_query_id}

---

##### `StratifiedSplit`<sup>Optional</sup> <a name="StratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit"></a>

```go
StratifiedSplit GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

stratified_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#stratified_split GoogleVertexAiTrainingPipeline#stratified_split}

---

##### `TimestampSplit`<sup>Optional</sup> <a name="TimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig.property.timestampSplit"></a>

```go
TimestampSplit GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

timestamp_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timestamp_split GoogleVertexAiTrainingPipeline#timestamp_split}

---

### GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination <a name="GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination {
	OutputUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri">OutputUri</a></code> | <code>*string</code> | The BigQuery table to which the output is to be written. |

---

##### `OutputUri`<sup>Required</sup> <a name="OutputUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri"></a>

```go
OutputUri *string
```

- *Type:* *string

The BigQuery table to which the output is to be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#output_uri GoogleVertexAiTrainingPipeline#output_uri}

---

### GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit {
	TestFilter: *string,
	TrainingFilter: *string,
	ValidationFilter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter">TestFilter</a></code> | <code>*string</code> | A filter on DataItems of the Dataset for test set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter">TrainingFilter</a></code> | <code>*string</code> | A filter on DataItems of the Dataset for training set. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter">ValidationFilter</a></code> | <code>*string</code> | A filter on DataItems of the Dataset for validation set. |

---

##### `TestFilter`<sup>Required</sup> <a name="TestFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter"></a>

```go
TestFilter *string
```

- *Type:* *string

A filter on DataItems of the Dataset for test set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_filter GoogleVertexAiTrainingPipeline#test_filter}

---

##### `TrainingFilter`<sup>Required</sup> <a name="TrainingFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter"></a>

```go
TrainingFilter *string
```

- *Type:* *string

A filter on DataItems of the Dataset for training set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_filter GoogleVertexAiTrainingPipeline#training_filter}

---

##### `ValidationFilter`<sup>Required</sup> <a name="ValidationFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter"></a>

```go
ValidationFilter *string
```

- *Type:* *string

A filter on DataItems of the Dataset for validation set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_filter GoogleVertexAiTrainingPipeline#validation_filter}

---

### GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit {
	TestFraction: *f64,
	TrainingFraction: *f64,
	ValidationFraction: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction">TestFraction</a></code> | <code>*f64</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction">TrainingFraction</a></code> | <code>*f64</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction">ValidationFraction</a></code> | <code>*f64</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `TestFraction`<sup>Optional</sup> <a name="TestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction"></a>

```go
TestFraction *f64
```

- *Type:* *f64

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

##### `TrainingFraction`<sup>Optional</sup> <a name="TrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction"></a>

```go
TrainingFraction *f64
```

- *Type:* *f64

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

##### `ValidationFraction`<sup>Optional</sup> <a name="ValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction"></a>

```go
ValidationFraction *f64
```

- *Type:* *f64

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

### GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination <a name="GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination {
	OutputUriPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix">OutputUriPrefix</a></code> | <code>*string</code> | The Cloud Storage URI prefix to write to. |

---

##### `OutputUriPrefix`<sup>Required</sup> <a name="OutputUriPrefix" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix"></a>

```go
OutputUriPrefix *string
```

- *Type:* *string

The Cloud Storage URI prefix to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#output_uri_prefix GoogleVertexAiTrainingPipeline#output_uri_prefix}

---

### GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit {
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key">Key</a></code> | <code>*string</code> | The key is a name of one of the Dataset's data columns. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

### GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit {
	Key: *string,
	TestFraction: *f64,
	TrainingFraction: *f64,
	ValidationFraction: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key">Key</a></code> | <code>*string</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction">TestFraction</a></code> | <code>*f64</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction">TrainingFraction</a></code> | <code>*f64</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction">ValidationFraction</a></code> | <code>*f64</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

##### `TestFraction`<sup>Optional</sup> <a name="TestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction"></a>

```go
TestFraction *f64
```

- *Type:* *f64

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

##### `TrainingFraction`<sup>Optional</sup> <a name="TrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction"></a>

```go
TrainingFraction *f64
```

- *Type:* *f64

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

##### `ValidationFraction`<sup>Optional</sup> <a name="ValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction"></a>

```go
ValidationFraction *f64
```

- *Type:* *f64

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

### GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit <a name="GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit {
	Key: *string,
	TestFraction: *f64,
	TrainingFraction: *f64,
	ValidationFraction: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key">Key</a></code> | <code>*string</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction">TestFraction</a></code> | <code>*f64</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction">TrainingFraction</a></code> | <code>*f64</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction">ValidationFraction</a></code> | <code>*f64</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#key GoogleVertexAiTrainingPipeline#key}

---

##### `TestFraction`<sup>Optional</sup> <a name="TestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction"></a>

```go
TestFraction *f64
```

- *Type:* *f64

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#test_fraction GoogleVertexAiTrainingPipeline#test_fraction}

---

##### `TrainingFraction`<sup>Optional</sup> <a name="TrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction"></a>

```go
TrainingFraction *f64
```

- *Type:* *f64

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#training_fraction GoogleVertexAiTrainingPipeline#training_fraction}

---

##### `ValidationFraction`<sup>Optional</sup> <a name="ValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction"></a>

```go
ValidationFraction *f64
```

- *Type:* *f64

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#validation_fraction GoogleVertexAiTrainingPipeline#validation_fraction}

---

### GoogleVertexAiTrainingPipelineModelToUpload <a name="GoogleVertexAiTrainingPipelineModelToUpload" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineModelToUpload {
	DisplayName: *string,
	ArtifactUri: *string,
	ContainerSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec,
	Description: *string,
	EncryptionSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec,
	ExplanationSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec,
	Labels: *map[string]*string,
	VersionAliases: *[]*string,
	VersionDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.displayName">DisplayName</a></code> | <code>*string</code> | The user-defined name of the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.artifactUri">ArtifactUri</a></code> | <code>*string</code> | The path to the directory containing the Model artifact and any of its supporting files. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.description">Description</a></code> | <code>*string</code> | The description of the Model. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.explanationSpec">ExplanationSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | explanation_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize your Models. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionAliases">VersionAliases</a></code> | <code>*[]*string</code> | User provided version aliases so that a model version can be referenced using alias. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | The description of this version. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The user-defined name of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#display_name GoogleVertexAiTrainingPipeline#display_name}

---

##### `ArtifactUri`<sup>Optional</sup> <a name="ArtifactUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.artifactUri"></a>

```go
ArtifactUri *string
```

- *Type:* *string

The path to the directory containing the Model artifact and any of its supporting files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#artifact_uri GoogleVertexAiTrainingPipeline#artifact_uri}

---

##### `ContainerSpec`<sup>Optional</sup> <a name="ContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.containerSpec"></a>

```go
ContainerSpec GoogleVertexAiTrainingPipelineModelToUploadContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#container_spec GoogleVertexAiTrainingPipeline#container_spec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#description GoogleVertexAiTrainingPipeline#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.encryptionSpec"></a>

```go
EncryptionSpec GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#encryption_spec GoogleVertexAiTrainingPipeline#encryption_spec}

---

##### `ExplanationSpec`<sup>Optional</sup> <a name="ExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.explanationSpec"></a>

```go
ExplanationSpec GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

explanation_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#explanation_spec GoogleVertexAiTrainingPipeline#explanation_spec}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize your Models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#labels GoogleVertexAiTrainingPipeline#labels}

---

##### `VersionAliases`<sup>Optional</sup> <a name="VersionAliases" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionAliases"></a>

```go
VersionAliases *[]*string
```

- *Type:* *[]*string

User provided version aliases so that a model version can be referenced using alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#version_aliases GoogleVertexAiTrainingPipeline#version_aliases}

---

##### `VersionDescription`<sup>Optional</sup> <a name="VersionDescription" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload.property.versionDescription"></a>

```go
VersionDescription *string
```

- *Type:* *string

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#version_description GoogleVertexAiTrainingPipeline#version_description}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpec <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec {
	ImageUri: *string,
	Args: *[]*string,
	Command: *[]*string,
	DeploymentTimeout: *string,
	Env: interface{},
	GrpcPorts: interface{},
	HealthProbe: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe,
	HealthRoute: *string,
	Ports: interface{},
	PredictRoute: *string,
	SharedMemorySizeMb: *string,
	StartupProbe: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri">ImageUri</a></code> | <code>*string</code> | URI of the Docker image to be used as the custom container for serving predictions. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.args">Args</a></code> | <code>*[]*string</code> | Specifies the arguments to the command when the container starts. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.command">Command</a></code> | <code>*[]*string</code> | Specifies the command that runs when the container starts. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout">DeploymentTimeout</a></code> | <code>*string</code> | Deployment timeout. Limit for deployment timeout is 2 hours. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.env">Env</a></code> | <code>interface{}</code> | env block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts">GrpcPorts</a></code> | <code>interface{}</code> | grpc_ports block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe">HealthProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | health_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute">HealthRoute</a></code> | <code>*string</code> | HTTP path on the container to send health checks to. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.ports">Ports</a></code> | <code>interface{}</code> | ports block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute">PredictRoute</a></code> | <code>*string</code> | HTTP path on the container to send prediction requests to. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb">SharedMemorySizeMb</a></code> | <code>*string</code> | The amount of the VM memory to reserve as the shared memory for the model in megabytes. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | startup_probe block. |

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

URI of the Docker image to be used as the custom container for serving predictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#image_uri GoogleVertexAiTrainingPipeline#image_uri}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Specifies the arguments to the command when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#args GoogleVertexAiTrainingPipeline#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Specifies the command that runs when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

##### `DeploymentTimeout`<sup>Optional</sup> <a name="DeploymentTimeout" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout"></a>

```go
DeploymentTimeout *string
```

- *Type:* *string

Deployment timeout. Limit for deployment timeout is 2 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#deployment_timeout GoogleVertexAiTrainingPipeline#deployment_timeout}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.env"></a>

```go
Env interface{}
```

- *Type:* interface{}

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#env GoogleVertexAiTrainingPipeline#env}

---

##### `GrpcPorts`<sup>Optional</sup> <a name="GrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts"></a>

```go
GrpcPorts interface{}
```

- *Type:* interface{}

grpc_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#grpc_ports GoogleVertexAiTrainingPipeline#grpc_ports}

---

##### `HealthProbe`<sup>Optional</sup> <a name="HealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe"></a>

```go
HealthProbe GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#health_probe GoogleVertexAiTrainingPipeline#health_probe}

---

##### `HealthRoute`<sup>Optional</sup> <a name="HealthRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute"></a>

```go
HealthRoute *string
```

- *Type:* *string

HTTP path on the container to send health checks to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#health_route GoogleVertexAiTrainingPipeline#health_route}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.ports"></a>

```go
Ports interface{}
```

- *Type:* interface{}

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#ports GoogleVertexAiTrainingPipeline#ports}

---

##### `PredictRoute`<sup>Optional</sup> <a name="PredictRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute"></a>

```go
PredictRoute *string
```

- *Type:* *string

HTTP path on the container to send prediction requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#predict_route GoogleVertexAiTrainingPipeline#predict_route}

---

##### `SharedMemorySizeMb`<sup>Optional</sup> <a name="SharedMemorySizeMb" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb"></a>

```go
SharedMemorySizeMb *string
```

- *Type:* *string

The amount of the VM memory to reserve as the shared memory for the model in megabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#shared_memory_size_mb GoogleVertexAiTrainingPipeline#shared_memory_size_mb}

---

##### `StartupProbe`<sup>Optional</sup> <a name="StartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe"></a>

```go
StartupProbe GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#startup_probe GoogleVertexAiTrainingPipeline#startup_probe}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name">Name</a></code> | <code>*string</code> | The name of the environment variable. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value">Value</a></code> | <code>*string</code> | The value of the environment variable. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#name GoogleVertexAiTrainingPipeline#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#value GoogleVertexAiTrainingPipeline#value}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts {
	ContainerPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | The number of the port on the container. |

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort"></a>

```go
ContainerPort *f64
```

- *Type:* *f64

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#container_port GoogleVertexAiTrainingPipeline#container_port}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe {
	Exec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec,
	PeriodSeconds: *f64,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec">Exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Number of seconds after which the probe times out. |

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec"></a>

```go
Exec GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#exec GoogleVertexAiTrainingPipeline#exec}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds"></a>

```go
PeriodSeconds *f64
```

- *Type:* *f64

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#period_seconds GoogleVertexAiTrainingPipeline#period_seconds}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeout_seconds GoogleVertexAiTrainingPipeline#timeout_seconds}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec {
	Command: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command">Command</a></code> | <code>*[]*string</code> | Command is the command line to execute inside the container. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts {
	ContainerPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | The number of the port on the container. |

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort"></a>

```go
ContainerPort *f64
```

- *Type:* *f64

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#container_port GoogleVertexAiTrainingPipeline#container_port}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe {
	Exec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec,
	PeriodSeconds: *f64,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec">Exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Number of seconds after which the probe times out. |

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec"></a>

```go
Exec GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#exec GoogleVertexAiTrainingPipeline#exec}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds"></a>

```go
PeriodSeconds *f64
```

- *Type:* *f64

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#period_seconds GoogleVertexAiTrainingPipeline#period_seconds}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#timeout_seconds GoogleVertexAiTrainingPipeline#timeout_seconds}

---

### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec {
	Command: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command">Command</a></code> | <code>*[]*string</code> | Command is the command line to execute inside the container. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#command GoogleVertexAiTrainingPipeline#command}

---

### GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec <a name="GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#kms_key_name GoogleVertexAiTrainingPipeline#kms_key_name}

---

### GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec <a name="GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec {
	Metadata: *string,
	Parameters: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata">Metadata</a></code> | <code>*string</code> | Metadata describing the Model's input and output for explanation. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters">Parameters</a></code> | <code>*string</code> | Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string. |

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

Metadata describing the Model's input and output for explanation. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#metadata GoogleVertexAiTrainingPipeline#metadata}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#parameters GoogleVertexAiTrainingPipeline#parameters}

---

### GoogleVertexAiTrainingPipelineTimeouts <a name="GoogleVertexAiTrainingPipelineTimeouts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

&googlevertexaitrainingpipeline.GoogleVertexAiTrainingPipelineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#create GoogleVertexAiTrainingPipeline#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#delete GoogleVertexAiTrainingPipeline#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#update GoogleVertexAiTrainingPipeline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#create GoogleVertexAiTrainingPipeline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#delete GoogleVertexAiTrainingPipeline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_vertex_ai_training_pipeline#update GoogleVertexAiTrainingPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference <a name="GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineEncryptionSpec">GoogleVertexAiTrainingPipelineEncryptionSpec</a>

---


### GoogleVertexAiTrainingPipelineErrorList <a name="GoogleVertexAiTrainingPipelineErrorList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiTrainingPipelineErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.get"></a>

```go
func Get(index *f64) GoogleVertexAiTrainingPipelineErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiTrainingPipelineErrorOutputReference <a name="GoogleVertexAiTrainingPipelineErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiTrainingPipelineErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError">GoogleVertexAiTrainingPipelineError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineError">GoogleVertexAiTrainingPipelineError</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput">OutputUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri">OutputUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutputUriInput`<sup>Optional</sup> <a name="OutputUriInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput"></a>

```go
func OutputUriInput() *string
```

- *Type:* *string

---

##### `OutputUri`<sup>Required</sup> <a name="OutputUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri"></a>

```go
func OutputUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput">TestFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput">TrainingFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput">ValidationFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter">TestFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter">TrainingFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter">ValidationFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TestFilterInput`<sup>Optional</sup> <a name="TestFilterInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput"></a>

```go
func TestFilterInput() *string
```

- *Type:* *string

---

##### `TrainingFilterInput`<sup>Optional</sup> <a name="TrainingFilterInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput"></a>

```go
func TrainingFilterInput() *string
```

- *Type:* *string

---

##### `ValidationFilterInput`<sup>Optional</sup> <a name="ValidationFilterInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput"></a>

```go
func ValidationFilterInput() *string
```

- *Type:* *string

---

##### `TestFilter`<sup>Required</sup> <a name="TestFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter"></a>

```go
func TestFilter() *string
```

- *Type:* *string

---

##### `TrainingFilter`<sup>Required</sup> <a name="TrainingFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter"></a>

```go
func TrainingFilter() *string
```

- *Type:* *string

---

##### `ValidationFilter`<sup>Required</sup> <a name="ValidationFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter"></a>

```go
func ValidationFilter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction">ResetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction">ResetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction">ResetValidationFraction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestFraction` <a name="ResetTestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction"></a>

```go
func ResetTestFraction()
```

##### `ResetTrainingFraction` <a name="ResetTrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction"></a>

```go
func ResetTrainingFraction()
```

##### `ResetValidationFraction` <a name="ResetValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction"></a>

```go
func ResetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput">TestFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput">TrainingFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput">ValidationFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction">TestFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction">TrainingFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction">ValidationFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TestFractionInput`<sup>Optional</sup> <a name="TestFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput"></a>

```go
func TestFractionInput() *f64
```

- *Type:* *f64

---

##### `TrainingFractionInput`<sup>Optional</sup> <a name="TrainingFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput"></a>

```go
func TrainingFractionInput() *f64
```

- *Type:* *f64

---

##### `ValidationFractionInput`<sup>Optional</sup> <a name="ValidationFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput"></a>

```go
func ValidationFractionInput() *f64
```

- *Type:* *f64

---

##### `TestFraction`<sup>Required</sup> <a name="TestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction"></a>

```go
func TestFraction() *f64
```

- *Type:* *f64

---

##### `TrainingFraction`<sup>Required</sup> <a name="TrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction"></a>

```go
func TrainingFraction() *f64
```

- *Type:* *f64

---

##### `ValidationFraction`<sup>Required</sup> <a name="ValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction"></a>

```go
func ValidationFraction() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput">OutputUriPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix">OutputUriPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutputUriPrefixInput`<sup>Optional</sup> <a name="OutputUriPrefixInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput"></a>

```go
func OutputUriPrefixInput() *string
```

- *Type:* *string

---

##### `OutputUriPrefix`<sup>Required</sup> <a name="OutputUriPrefix" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix"></a>

```go
func OutputUriPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineInputDataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineInputDataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination">PutBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit">PutFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit">PutFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination">PutGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit">PutPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit">PutStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit">PutTimestampSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri">ResetAnnotationSchemaUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter">ResetAnnotationsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination">ResetBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit">ResetFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit">ResetFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination">ResetGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment">ResetPersistMlUseAssignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit">ResetPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId">ResetSavedQueryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit">ResetStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit">ResetTimestampSplit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigqueryDestination` <a name="PutBigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination"></a>

```go
func PutBigqueryDestination(value GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---

##### `PutFilterSplit` <a name="PutFilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit"></a>

```go
func PutFilterSplit(value GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---

##### `PutFractionSplit` <a name="PutFractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit"></a>

```go
func PutFractionSplit(value GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---

##### `PutGcsDestination` <a name="PutGcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination"></a>

```go
func PutGcsDestination(value GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---

##### `PutPredefinedSplit` <a name="PutPredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit"></a>

```go
func PutPredefinedSplit(value GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---

##### `PutStratifiedSplit` <a name="PutStratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit"></a>

```go
func PutStratifiedSplit(value GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---

##### `PutTimestampSplit` <a name="PutTimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit"></a>

```go
func PutTimestampSplit(value GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---

##### `ResetAnnotationSchemaUri` <a name="ResetAnnotationSchemaUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri"></a>

```go
func ResetAnnotationSchemaUri()
```

##### `ResetAnnotationsFilter` <a name="ResetAnnotationsFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter"></a>

```go
func ResetAnnotationsFilter()
```

##### `ResetBigqueryDestination` <a name="ResetBigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination"></a>

```go
func ResetBigqueryDestination()
```

##### `ResetFilterSplit` <a name="ResetFilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit"></a>

```go
func ResetFilterSplit()
```

##### `ResetFractionSplit` <a name="ResetFractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit"></a>

```go
func ResetFractionSplit()
```

##### `ResetGcsDestination` <a name="ResetGcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination"></a>

```go
func ResetGcsDestination()
```

##### `ResetPersistMlUseAssignment` <a name="ResetPersistMlUseAssignment" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment"></a>

```go
func ResetPersistMlUseAssignment()
```

##### `ResetPredefinedSplit` <a name="ResetPredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit"></a>

```go
func ResetPredefinedSplit()
```

##### `ResetSavedQueryId` <a name="ResetSavedQueryId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId"></a>

```go
func ResetSavedQueryId()
```

##### `ResetStratifiedSplit` <a name="ResetStratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit"></a>

```go
func ResetStratifiedSplit()
```

##### `ResetTimestampSplit` <a name="ResetTimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit"></a>

```go
func ResetTimestampSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination">BigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit">FilterSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit">FractionSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination">GcsDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit">PredefinedSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit">StratifiedSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit">TimestampSplit</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput">AnnotationSchemaUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput">AnnotationsFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput">BigqueryDestinationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput">FilterSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput">FractionSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput">GcsDestinationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput">PersistMlUseAssignmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput">PredefinedSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput">SavedQueryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput">StratifiedSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput">TimestampSplitInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri">AnnotationSchemaUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter">AnnotationsFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment">PersistMlUseAssignment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId">SavedQueryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BigqueryDestination`<sup>Required</sup> <a name="BigqueryDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination"></a>

```go
func BigqueryDestination() GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a>

---

##### `FilterSplit`<sup>Required</sup> <a name="FilterSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit"></a>

```go
func FilterSplit() GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a>

---

##### `FractionSplit`<sup>Required</sup> <a name="FractionSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit"></a>

```go
func FractionSplit() GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a>

---

##### `GcsDestination`<sup>Required</sup> <a name="GcsDestination" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination"></a>

```go
func GcsDestination() GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a>

---

##### `PredefinedSplit`<sup>Required</sup> <a name="PredefinedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit"></a>

```go
func PredefinedSplit() GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a>

---

##### `StratifiedSplit`<sup>Required</sup> <a name="StratifiedSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit"></a>

```go
func StratifiedSplit() GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a>

---

##### `TimestampSplit`<sup>Required</sup> <a name="TimestampSplit" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit"></a>

```go
func TimestampSplit() GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a>

---

##### `AnnotationSchemaUriInput`<sup>Optional</sup> <a name="AnnotationSchemaUriInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput"></a>

```go
func AnnotationSchemaUriInput() *string
```

- *Type:* *string

---

##### `AnnotationsFilterInput`<sup>Optional</sup> <a name="AnnotationsFilterInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput"></a>

```go
func AnnotationsFilterInput() *string
```

- *Type:* *string

---

##### `BigqueryDestinationInput`<sup>Optional</sup> <a name="BigqueryDestinationInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput"></a>

```go
func BigqueryDestinationInput() GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination">GoogleVertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `FilterSplitInput`<sup>Optional</sup> <a name="FilterSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput"></a>

```go
func FilterSplitInput() GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit">GoogleVertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---

##### `FractionSplitInput`<sup>Optional</sup> <a name="FractionSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput"></a>

```go
func FractionSplitInput() GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit">GoogleVertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---

##### `GcsDestinationInput`<sup>Optional</sup> <a name="GcsDestinationInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput"></a>

```go
func GcsDestinationInput() GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination">GoogleVertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---

##### `PersistMlUseAssignmentInput`<sup>Optional</sup> <a name="PersistMlUseAssignmentInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput"></a>

```go
func PersistMlUseAssignmentInput() interface{}
```

- *Type:* interface{}

---

##### `PredefinedSplitInput`<sup>Optional</sup> <a name="PredefinedSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput"></a>

```go
func PredefinedSplitInput() GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---

##### `SavedQueryIdInput`<sup>Optional</sup> <a name="SavedQueryIdInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput"></a>

```go
func SavedQueryIdInput() *string
```

- *Type:* *string

---

##### `StratifiedSplitInput`<sup>Optional</sup> <a name="StratifiedSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput"></a>

```go
func StratifiedSplitInput() GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---

##### `TimestampSplitInput`<sup>Optional</sup> <a name="TimestampSplitInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput"></a>

```go
func TimestampSplitInput() GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---

##### `AnnotationSchemaUri`<sup>Required</sup> <a name="AnnotationSchemaUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri"></a>

```go
func AnnotationSchemaUri() *string
```

- *Type:* *string

---

##### `AnnotationsFilter`<sup>Required</sup> <a name="AnnotationsFilter" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter"></a>

```go
func AnnotationsFilter() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `PersistMlUseAssignment`<sup>Required</sup> <a name="PersistMlUseAssignment" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment"></a>

```go
func PersistMlUseAssignment() interface{}
```

- *Type:* interface{}

---

##### `SavedQueryId`<sup>Required</sup> <a name="SavedQueryId" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId"></a>

```go
func SavedQueryId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfig">GoogleVertexAiTrainingPipelineInputDataConfig</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit">GoogleVertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction">ResetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction">ResetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction">ResetValidationFraction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestFraction` <a name="ResetTestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction"></a>

```go
func ResetTestFraction()
```

##### `ResetTrainingFraction` <a name="ResetTrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction"></a>

```go
func ResetTrainingFraction()
```

##### `ResetValidationFraction` <a name="ResetValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction"></a>

```go
func ResetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput">TestFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput">TrainingFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput">ValidationFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction">TestFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction">TrainingFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction">ValidationFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TestFractionInput`<sup>Optional</sup> <a name="TestFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput"></a>

```go
func TestFractionInput() *f64
```

- *Type:* *f64

---

##### `TrainingFractionInput`<sup>Optional</sup> <a name="TrainingFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput"></a>

```go
func TrainingFractionInput() *f64
```

- *Type:* *f64

---

##### `ValidationFractionInput`<sup>Optional</sup> <a name="ValidationFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput"></a>

```go
func ValidationFractionInput() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `TestFraction`<sup>Required</sup> <a name="TestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction"></a>

```go
func TestFraction() *f64
```

- *Type:* *f64

---

##### `TrainingFraction`<sup>Required</sup> <a name="TrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction"></a>

```go
func TrainingFraction() *f64
```

- *Type:* *f64

---

##### `ValidationFraction`<sup>Required</sup> <a name="ValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction"></a>

```go
func ValidationFraction() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit">GoogleVertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---


### GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference <a name="GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction">ResetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction">ResetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction">ResetValidationFraction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestFraction` <a name="ResetTestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction"></a>

```go
func ResetTestFraction()
```

##### `ResetTrainingFraction` <a name="ResetTrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction"></a>

```go
func ResetTrainingFraction()
```

##### `ResetValidationFraction` <a name="ResetValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction"></a>

```go
func ResetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput">TestFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput">TrainingFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput">ValidationFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction">TestFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction">TrainingFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction">ValidationFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TestFractionInput`<sup>Optional</sup> <a name="TestFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput"></a>

```go
func TestFractionInput() *f64
```

- *Type:* *f64

---

##### `TrainingFractionInput`<sup>Optional</sup> <a name="TrainingFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput"></a>

```go
func TrainingFractionInput() *f64
```

- *Type:* *f64

---

##### `ValidationFractionInput`<sup>Optional</sup> <a name="ValidationFractionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput"></a>

```go
func ValidationFractionInput() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `TestFraction`<sup>Required</sup> <a name="TestFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction"></a>

```go
func TestFraction() *f64
```

- *Type:* *f64

---

##### `TrainingFraction`<sup>Required</sup> <a name="TrainingFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction"></a>

```go
func TrainingFraction() *f64
```

- *Type:* *f64

---

##### `ValidationFraction`<sup>Required</sup> <a name="ValidationFraction" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction"></a>

```go
func ValidationFraction() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit">GoogleVertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get"></a>

```go
func Get(index *f64) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput"></a>

```go
func ContainerPortInput() *f64
```

- *Type:* *f64

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand"></a>

```go
func ResetCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec">PutExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec">ResetExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExec` <a name="PutExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec"></a>

```go
func PutExec(value GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---

##### `ResetExec` <a name="ResetExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec"></a>

```go
func ResetExec()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds"></a>

```go
func ResetPeriodSeconds()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec">Exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput">ExecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exec`<sup>Required</sup> <a name="Exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec"></a>

```go
func Exec() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a>

---

##### `ExecInput`<sup>Optional</sup> <a name="ExecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput"></a>

```go
func ExecInput() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput"></a>

```go
func PeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts">PutGrpcPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe">PutHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe">PutStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout">ResetDeploymentTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts">ResetGrpcPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe">ResetHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute">ResetHealthRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute">ResetPredictRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb">ResetSharedMemorySizeMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe">ResetStartupProbe</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv"></a>

```go
func PutEnv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGrpcPorts` <a name="PutGrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts"></a>

```go
func PutGrpcPorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHealthProbe` <a name="PutHealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe"></a>

```go
func PutHealthProbe(value GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---

##### `PutPorts` <a name="PutPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts"></a>

```go
func PutPorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStartupProbe` <a name="PutStartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe"></a>

```go
func PutStartupProbe(value GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetDeploymentTimeout` <a name="ResetDeploymentTimeout" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout"></a>

```go
func ResetDeploymentTimeout()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetGrpcPorts` <a name="ResetGrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts"></a>

```go
func ResetGrpcPorts()
```

##### `ResetHealthProbe` <a name="ResetHealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe"></a>

```go
func ResetHealthProbe()
```

##### `ResetHealthRoute` <a name="ResetHealthRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute"></a>

```go
func ResetHealthRoute()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts"></a>

```go
func ResetPorts()
```

##### `ResetPredictRoute` <a name="ResetPredictRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute"></a>

```go
func ResetPredictRoute()
```

##### `ResetSharedMemorySizeMb` <a name="ResetSharedMemorySizeMb" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb"></a>

```go
func ResetSharedMemorySizeMb()
```

##### `ResetStartupProbe` <a name="ResetStartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe"></a>

```go
func ResetStartupProbe()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env">Env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts">GrpcPorts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe">HealthProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput">DeploymentTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput">EnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput">GrpcPortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput">HealthProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput">HealthRouteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput">PortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput">PredictRouteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput">SharedMemorySizeMbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput">StartupProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout">DeploymentTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute">HealthRoute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute">PredictRoute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb">SharedMemorySizeMb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env"></a>

```go
func Env() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a>

---

##### `GrpcPorts`<sup>Required</sup> <a name="GrpcPorts" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts"></a>

```go
func GrpcPorts() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a>

---

##### `HealthProbe`<sup>Required</sup> <a name="HealthProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe"></a>

```go
func HealthProbe() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports"></a>

```go
func Ports() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a>

---

##### `StartupProbe`<sup>Required</sup> <a name="StartupProbe" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe"></a>

```go
func StartupProbe() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeploymentTimeoutInput`<sup>Optional</sup> <a name="DeploymentTimeoutInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput"></a>

```go
func DeploymentTimeoutInput() *string
```

- *Type:* *string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput"></a>

```go
func EnvInput() interface{}
```

- *Type:* interface{}

---

##### `GrpcPortsInput`<sup>Optional</sup> <a name="GrpcPortsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput"></a>

```go
func GrpcPortsInput() interface{}
```

- *Type:* interface{}

---

##### `HealthProbeInput`<sup>Optional</sup> <a name="HealthProbeInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput"></a>

```go
func HealthProbeInput() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---

##### `HealthRouteInput`<sup>Optional</sup> <a name="HealthRouteInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput"></a>

```go
func HealthRouteInput() *string
```

- *Type:* *string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput"></a>

```go
func PortsInput() interface{}
```

- *Type:* interface{}

---

##### `PredictRouteInput`<sup>Optional</sup> <a name="PredictRouteInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput"></a>

```go
func PredictRouteInput() *string
```

- *Type:* *string

---

##### `SharedMemorySizeMbInput`<sup>Optional</sup> <a name="SharedMemorySizeMbInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput"></a>

```go
func SharedMemorySizeMbInput() *string
```

- *Type:* *string

---

##### `StartupProbeInput`<sup>Optional</sup> <a name="StartupProbeInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput"></a>

```go
func StartupProbeInput() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `DeploymentTimeout`<sup>Required</sup> <a name="DeploymentTimeout" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout"></a>

```go
func DeploymentTimeout() *string
```

- *Type:* *string

---

##### `HealthRoute`<sup>Required</sup> <a name="HealthRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute"></a>

```go
func HealthRoute() *string
```

- *Type:* *string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `PredictRoute`<sup>Required</sup> <a name="PredictRoute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute"></a>

```go
func PredictRoute() *string
```

- *Type:* *string

---

##### `SharedMemorySizeMb`<sup>Required</sup> <a name="SharedMemorySizeMb" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb"></a>

```go
func SharedMemorySizeMb() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineModelToUploadContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput"></a>

```go
func ContainerPortInput() *f64
```

- *Type:* *f64

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand"></a>

```go
func ResetCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec">PutExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec">ResetExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExec` <a name="PutExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec"></a>

```go
func PutExec(value GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---

##### `ResetExec` <a name="ResetExec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec"></a>

```go
func ResetExec()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds"></a>

```go
func ResetPeriodSeconds()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec">Exec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput">ExecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exec`<sup>Required</sup> <a name="Exec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec"></a>

```go
func Exec() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a>

---

##### `ExecInput`<sup>Optional</sup> <a name="ExecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput"></a>

```go
func ExecInput() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput"></a>

```go
func PeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---


### GoogleVertexAiTrainingPipelineModelToUploadOutputReference <a name="GoogleVertexAiTrainingPipelineModelToUploadOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineModelToUploadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineModelToUploadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec">PutContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec">PutExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri">ResetArtifactUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec">ResetContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec">ResetExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases">ResetVersionAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription">ResetVersionDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerSpec` <a name="PutContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec"></a>

```go
func PutContainerSpec(value GoogleVertexAiTrainingPipelineModelToUploadContainerSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---

##### `PutExplanationSpec` <a name="PutExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec"></a>

```go
func PutExplanationSpec(value GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---

##### `ResetArtifactUri` <a name="ResetArtifactUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri"></a>

```go
func ResetArtifactUri()
```

##### `ResetContainerSpec` <a name="ResetContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec"></a>

```go
func ResetContainerSpec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetExplanationSpec` <a name="ResetExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec"></a>

```go
func ResetExplanationSpec()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetVersionAliases` <a name="ResetVersionAliases" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases"></a>

```go
func ResetVersionAliases()
```

##### `ResetVersionDescription` <a name="ResetVersionDescription" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription"></a>

```go
func ResetVersionDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec">ExplanationSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput">ArtifactUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput">ContainerSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput">ExplanationSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput">VersionAliasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput">VersionDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri">ArtifactUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases">VersionAliases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerSpec`<sup>Required</sup> <a name="ContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec"></a>

```go
func ContainerSpec() GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a>

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec"></a>

```go
func EncryptionSpec() GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a>

---

##### `ExplanationSpec`<sup>Required</sup> <a name="ExplanationSpec" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec"></a>

```go
func ExplanationSpec() GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ArtifactUriInput`<sup>Optional</sup> <a name="ArtifactUriInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput"></a>

```go
func ArtifactUriInput() *string
```

- *Type:* *string

---

##### `ContainerSpecInput`<sup>Optional</sup> <a name="ContainerSpecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput"></a>

```go
func ContainerSpecInput() GoogleVertexAiTrainingPipelineModelToUploadContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadContainerSpec">GoogleVertexAiTrainingPipelineModelToUploadContainerSpec</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec">GoogleVertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---

##### `ExplanationSpecInput`<sup>Optional</sup> <a name="ExplanationSpecInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput"></a>

```go
func ExplanationSpecInput() GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec">GoogleVertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VersionAliasesInput`<sup>Optional</sup> <a name="VersionAliasesInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput"></a>

```go
func VersionAliasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VersionDescriptionInput`<sup>Optional</sup> <a name="VersionDescriptionInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput"></a>

```go
func VersionDescriptionInput() *string
```

- *Type:* *string

---

##### `ArtifactUri`<sup>Required</sup> <a name="ArtifactUri" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri"></a>

```go
func ArtifactUri() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VersionAliases`<sup>Required</sup> <a name="VersionAliases" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases"></a>

```go
func VersionAliases() *[]*string
```

- *Type:* *[]*string

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription"></a>

```go
func VersionDescription() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiTrainingPipelineModelToUpload
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineModelToUpload">GoogleVertexAiTrainingPipelineModelToUpload</a>

---


### GoogleVertexAiTrainingPipelineTimeoutsOutputReference <a name="GoogleVertexAiTrainingPipelineTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaitrainingpipeline"

googlevertexaitrainingpipeline.NewGoogleVertexAiTrainingPipelineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiTrainingPipelineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiTrainingPipeline.GoogleVertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



