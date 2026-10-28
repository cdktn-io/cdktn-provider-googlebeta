# `googleVertexAiPipelineJob` Submodule <a name="`googleVertexAiPipelineJob` Submodule" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiPipelineJob <a name="GoogleVertexAiPipelineJob" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job google_vertex_ai_pipeline_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJob(scope Construct, id *string, config GoogleVertexAiPipelineJobConfig) GoogleVertexAiPipelineJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig">GoogleVertexAiPipelineJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig">GoogleVertexAiPipelineJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putPscInterfaceConfig">PutPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineJobId">ResetPipelineJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineSpec">ResetPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPreflightValidations">ResetPreflightValidations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPscInterfaceConfig">ResetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetReservedIpRanges">ResetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTemplateUri">ResetTemplateUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value GoogleVertexAiPipelineJobEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

---

##### `PutPscInterfaceConfig` <a name="PutPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putPscInterfaceConfig"></a>

```go
func PutPscInterfaceConfig(value GoogleVertexAiPipelineJobPscInterfaceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig"></a>

```go
func PutRuntimeConfig(value GoogleVertexAiPipelineJobRuntimeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVertexAiPipelineJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetPipelineJobId` <a name="ResetPipelineJobId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineJobId"></a>

```go
func ResetPipelineJobId()
```

##### `ResetPipelineSpec` <a name="ResetPipelineSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPipelineSpec"></a>

```go
func ResetPipelineSpec()
```

##### `ResetPreflightValidations` <a name="ResetPreflightValidations" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPreflightValidations"></a>

```go
func ResetPreflightValidations()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPscInterfaceConfig` <a name="ResetPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetPscInterfaceConfig"></a>

```go
func ResetPscInterfaceConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetReservedIpRanges` <a name="ResetReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetReservedIpRanges"></a>

```go
func ResetReservedIpRanges()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetRuntimeConfig"></a>

```go
func ResetRuntimeConfig()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTemplateUri` <a name="ResetTemplateUri" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTemplateUri"></a>

```go
func ResetTemplateUri()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiPipelineJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.GoogleVertexAiPipelineJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.GoogleVertexAiPipelineJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.GoogleVertexAiPipelineJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.GoogleVertexAiPipelineJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleVertexAiPipelineJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVertexAiPipelineJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVertexAiPipelineJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiPipelineJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference">GoogleVertexAiPipelineJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList">GoogleVertexAiPipelineJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.jobDetail">JobDetail</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList">GoogleVertexAiPipelineJobJobDetailList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference">GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference">GoogleVertexAiPipelineJobRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.scheduleName">ScheduleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateMetadata">TemplateMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList">GoogleVertexAiPipelineJobTemplateMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference">GoogleVertexAiPipelineJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobIdInput">PipelineJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpecInput">PipelineSpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidationsInput">PreflightValidationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfigInput">PscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRangesInput">ReservedIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUriInput">TemplateUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobId">PipelineJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpec">PipelineSpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidations">PreflightValidations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUri">TemplateUri</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpec"></a>

```go
func EncryptionSpec() GoogleVertexAiPipelineJobEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference">GoogleVertexAiPipelineJobEncryptionSpecOutputReference</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.error"></a>

```go
func Error() GoogleVertexAiPipelineJobErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList">GoogleVertexAiPipelineJobErrorList</a>

---

##### `JobDetail`<sup>Required</sup> <a name="JobDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.jobDetail"></a>

```go
func JobDetail() GoogleVertexAiPipelineJobJobDetailList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList">GoogleVertexAiPipelineJobJobDetailList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PscInterfaceConfig`<sup>Required</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfig"></a>

```go
func PscInterfaceConfig() GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference">GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference</a>

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfig"></a>

```go
func RuntimeConfig() GoogleVertexAiPipelineJobRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference">GoogleVertexAiPipelineJobRuntimeConfigOutputReference</a>

---

##### `ScheduleName`<sup>Required</sup> <a name="ScheduleName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.scheduleName"></a>

```go
func ScheduleName() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TemplateMetadata`<sup>Required</sup> <a name="TemplateMetadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateMetadata"></a>

```go
func TemplateMetadata() GoogleVertexAiPipelineJobTemplateMetadataList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList">GoogleVertexAiPipelineJobTemplateMetadataList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeouts"></a>

```go
func Timeouts() GoogleVertexAiPipelineJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference">GoogleVertexAiPipelineJobTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() GoogleVertexAiPipelineJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PipelineJobIdInput`<sup>Optional</sup> <a name="PipelineJobIdInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobIdInput"></a>

```go
func PipelineJobIdInput() *string
```

- *Type:* *string

---

##### `PipelineSpecInput`<sup>Optional</sup> <a name="PipelineSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpecInput"></a>

```go
func PipelineSpecInput() *string
```

- *Type:* *string

---

##### `PreflightValidationsInput`<sup>Optional</sup> <a name="PreflightValidationsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidationsInput"></a>

```go
func PreflightValidationsInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PscInterfaceConfigInput`<sup>Optional</sup> <a name="PscInterfaceConfigInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pscInterfaceConfigInput"></a>

```go
func PscInterfaceConfigInput() GoogleVertexAiPipelineJobPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReservedIpRangesInput`<sup>Optional</sup> <a name="ReservedIpRangesInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRangesInput"></a>

```go
func ReservedIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.runtimeConfigInput"></a>

```go
func RuntimeConfigInput() GoogleVertexAiPipelineJobRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TemplateUriInput`<sup>Optional</sup> <a name="TemplateUriInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUriInput"></a>

```go
func TemplateUriInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `PipelineJobId`<sup>Required</sup> <a name="PipelineJobId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineJobId"></a>

```go
func PipelineJobId() *string
```

- *Type:* *string

---

##### `PipelineSpec`<sup>Required</sup> <a name="PipelineSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.pipelineSpec"></a>

```go
func PipelineSpec() *string
```

- *Type:* *string

---

##### `PreflightValidations`<sup>Required</sup> <a name="PreflightValidations" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.preflightValidations"></a>

```go
func PreflightValidations() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReservedIpRanges`<sup>Required</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.reservedIpRanges"></a>

```go
func ReservedIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `TemplateUri`<sup>Required</sup> <a name="TemplateUri" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.templateUri"></a>

```go
func TemplateUri() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiPipelineJobConfig <a name="GoogleVertexAiPipelineJobConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DeletionPolicy: *string,
	DisplayName: *string,
	EncryptionSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec,
	Id: *string,
	Labels: *map[string]*string,
	Network: *string,
	PipelineJobId: *string,
	PipelineSpec: *string,
	PreflightValidations: interface{},
	Project: *string,
	PscInterfaceConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig,
	Region: *string,
	ReservedIpRanges: *[]*string,
	RuntimeConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig,
	ServiceAccount: *string,
	TemplateUri: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#id GoogleVertexAiPipelineJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize PipelineJob. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.network">Network</a></code> | <code>*string</code> | The full name of the Compute Engine network to which the Pipeline Job's workload should be peered. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineJobId">PipelineJobId</a></code> | <code>*string</code> | The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineSpec">PipelineSpec</a></code> | <code>*string</code> | The spec of the pipeline. This is a JSON object that describes the pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.preflightValidations">PreflightValidations</a></code> | <code>interface{}</code> | Whether to do component level validations before job creation. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#project GoogleVertexAiPipelineJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.region">Region</a></code> | <code>*string</code> | The region of the pipeline job. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>*[]*string</code> | A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account that the pipeline workload runs as. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.templateUri">TemplateUri</a></code> | <code>*string</code> | A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_pipeline_job.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#deletion_policy GoogleVertexAiPipelineJob#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the Pipeline.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#display_name GoogleVertexAiPipelineJob#display_name}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.encryptionSpec"></a>

```go
EncryptionSpec GoogleVertexAiPipelineJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#encryption_spec GoogleVertexAiPipelineJob#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#id GoogleVertexAiPipelineJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize PipelineJob.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#labels GoogleVertexAiPipelineJob#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The full name of the Compute Engine network to which the Pipeline Job's workload should be peered.

For example, 'projects/12345/global/networks/myVPC'. Format is of the form 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is a network name. Private services access must already be configured for the network. Pipeline job will apply the network configuration to the Google Cloud resources being launched, if applied, such as Vertex AI Training or Dataflow job. If left unspecified, the workload is not peered with any network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#network GoogleVertexAiPipelineJob#network}

---

##### `PipelineJobId`<sup>Optional</sup> <a name="PipelineJobId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineJobId"></a>

```go
PipelineJobId *string
```

- *Type:* *string

The ID to use for the PipelineJob, which will become the final component of the PipelineJob name.

If not provided, an ID will be automatically generated.
This value should be less than 128 characters, and valid characters are '/[a-z][0-9]-/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#pipeline_job_id GoogleVertexAiPipelineJob#pipeline_job_id}

---

##### `PipelineSpec`<sup>Optional</sup> <a name="PipelineSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pipelineSpec"></a>

```go
PipelineSpec *string
```

- *Type:* *string

The spec of the pipeline. This is a JSON object that describes the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#pipeline_spec GoogleVertexAiPipelineJob#pipeline_spec}

---

##### `PreflightValidations`<sup>Optional</sup> <a name="PreflightValidations" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.preflightValidations"></a>

```go
PreflightValidations interface{}
```

- *Type:* interface{}

Whether to do component level validations before job creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#preflight_validations GoogleVertexAiPipelineJob#preflight_validations}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#project GoogleVertexAiPipelineJob#project}.

---

##### `PscInterfaceConfig`<sup>Optional</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.pscInterfaceConfig"></a>

```go
PscInterfaceConfig GoogleVertexAiPipelineJobPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#psc_interface_config GoogleVertexAiPipelineJob#psc_interface_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the pipeline job. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#region GoogleVertexAiPipelineJob#region}

---

##### `ReservedIpRanges`<sup>Optional</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.reservedIpRanges"></a>

```go
ReservedIpRanges *[]*string
```

- *Type:* *[]*string

A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job's workload.

If set, we will deploy the Pipeline Job's workload within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#reserved_ip_ranges GoogleVertexAiPipelineJob#reserved_ip_ranges}

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.runtimeConfig"></a>

```go
RuntimeConfig GoogleVertexAiPipelineJobRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#runtime_config GoogleVertexAiPipelineJob#runtime_config}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account that the pipeline workload runs as.

If not specified, the Compute Engine default service account in the project will be used. Users starting the pipeline must have the iam.serviceAccounts.actAs permission on this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#service_account GoogleVertexAiPipelineJob#service_account}

---

##### `TemplateUri`<sup>Optional</sup> <a name="TemplateUri" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.templateUri"></a>

```go
TemplateUri *string
```

- *Type:* *string

A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry & Gallery is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#template_uri GoogleVertexAiPipelineJob#template_uri}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobConfig.property.timeouts"></a>

```go
Timeouts GoogleVertexAiPipelineJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts">GoogleVertexAiPipelineJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#timeouts GoogleVertexAiPipelineJob#timeouts}

---

### GoogleVertexAiPipelineJobEncryptionSpec <a name="GoogleVertexAiPipelineJobEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#kms_key_name GoogleVertexAiPipelineJob#kms_key_name}

---

### GoogleVertexAiPipelineJobError <a name="GoogleVertexAiPipelineJobError" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobError {

}
```


### GoogleVertexAiPipelineJobJobDetail <a name="GoogleVertexAiPipelineJobJobDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobJobDetail {

}
```


### GoogleVertexAiPipelineJobJobDetailPipelineContext <a name="GoogleVertexAiPipelineJobJobDetailPipelineContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobJobDetailPipelineContext {

}
```


### GoogleVertexAiPipelineJobJobDetailPipelineRunContext <a name="GoogleVertexAiPipelineJobJobDetailPipelineRunContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext {

}
```


### GoogleVertexAiPipelineJobJobDetailTaskDetails <a name="GoogleVertexAiPipelineJobJobDetailTaskDetails" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobJobDetailTaskDetails {

}
```


### GoogleVertexAiPipelineJobJobDetailTaskDetailsError <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsError" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError {

}
```


### GoogleVertexAiPipelineJobPscInterfaceConfig <a name="GoogleVertexAiPipelineJobPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobPscInterfaceConfig {
	DnsPeeringConfigs: interface{},
	NetworkAttachment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code>interface{}</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | The name of the Compute Engine network attachment to attach to the resource within the region and user project. |

---

##### `DnsPeeringConfigs`<sup>Optional</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```go
DnsPeeringConfigs interface{}
```

- *Type:* interface{}

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#dns_peering_configs GoogleVertexAiPipelineJob#dns_peering_configs}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

The name of the Compute Engine network attachment to attach to the resource within the region and user project.

To specify this field, you must have already created a network attachment. This field is only used for resources using PSC-I.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#network_attachment GoogleVertexAiPipelineJob#network_attachment}

---

### GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs <a name="GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs {
	Domain: *string,
	TargetNetwork: *string,
	TargetProject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain">Domain</a></code> | <code>*string</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | The VPC network name in the targetProject where the DNS zone specified by domain is visible. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject">TargetProject</a></code> | <code>*string</code> | The project ID hosting the Cloud DNS managed zone that contains the above domain. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#domain GoogleVertexAiPipelineJob#domain}

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```go
TargetNetwork *string
```

- *Type:* *string

The VPC network name in the targetProject where the DNS zone specified by domain is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#target_network GoogleVertexAiPipelineJob#target_network}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```go
TargetProject *string
```

- *Type:* *string

The project ID hosting the Cloud DNS managed zone that contains the above domain.

The Vertex AI Service Agent must be granted the dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#target_project GoogleVertexAiPipelineJob#target_project}

---

### GoogleVertexAiPipelineJobRuntimeConfig <a name="GoogleVertexAiPipelineJobRuntimeConfig" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobRuntimeConfig {
	GcsOutputDirectory: *string,
	DefaultRuntime: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime,
	FailurePolicy: *string,
	InputArtifacts: interface{},
	ParameterValues: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.gcsOutputDirectory">GcsOutputDirectory</a></code> | <code>*string</code> | A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.defaultRuntime">DefaultRuntime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a></code> | default_runtime block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.failurePolicy">FailurePolicy</a></code> | <code>*string</code> | Represents the failure policy of a pipeline. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.inputArtifacts">InputArtifacts</a></code> | <code>interface{}</code> | input_artifacts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.parameterValues">ParameterValues</a></code> | <code>*map[string]*string</code> | The runtime parameters of the PipelineJob. |

---

##### `GcsOutputDirectory`<sup>Required</sup> <a name="GcsOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.gcsOutputDirectory"></a>

```go
GcsOutputDirectory *string
```

- *Type:* *string

A path in a Cloud Storage bucket, which will be treated as the root output directory of the pipeline.

It is used by the system to generate the paths of output artifacts. The artifact paths are generated with a sub-directory pattern '{job_id}/{task_id}/{output_key}' under the specified output directory. The service account specified in this pipeline must have the 'storage.objects.get' and 'storage.objects.create' permissions for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#gcs_output_directory GoogleVertexAiPipelineJob#gcs_output_directory}

---

##### `DefaultRuntime`<sup>Optional</sup> <a name="DefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.defaultRuntime"></a>

```go
DefaultRuntime GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

default_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#default_runtime GoogleVertexAiPipelineJob#default_runtime}

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.failurePolicy"></a>

```go
FailurePolicy *string
```

- *Type:* *string

Represents the failure policy of a pipeline.

Currently, the default of a pipeline is that the pipeline will continue to run until no more tasks can be executed, also known as 'PIPELINE_FAILURE_POLICY_FAIL_SLOW'. However, if a pipeline is set to 'PIPELINE_FAILURE_POLICY_FAIL_FAST', it will stop scheduling any new tasks as soon as the pipeline fails.
Possible values are: 'PIPELINE_FAILURE_POLICY_UNSPECIFIED', 'PIPELINE_FAILURE_POLICY_FAIL_SLOW', 'PIPELINE_FAILURE_POLICY_FAIL_FAST'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#failure_policy GoogleVertexAiPipelineJob#failure_policy}

---

##### `InputArtifacts`<sup>Optional</sup> <a name="InputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.inputArtifacts"></a>

```go
InputArtifacts interface{}
```

- *Type:* interface{}

input_artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#input_artifacts GoogleVertexAiPipelineJob#input_artifacts}

---

##### `ParameterValues`<sup>Optional</sup> <a name="ParameterValues" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig.property.parameterValues"></a>

```go
ParameterValues *map[string]*string
```

- *Type:* *map[string]*string

The runtime parameters of the PipelineJob.

The parameters will be passed into PipelineJob.pipeline_spec to replace the placeholders at runtime. This field is used by pipelines built using 'PipelineJob.pipeline_spec.schema_version' 2.1.0, such as pipelines built using Kubeflow Pipelines SDK 1.9 or higher and the v2 DSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#parameter_values GoogleVertexAiPipelineJob#parameter_values}

---

### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime {
	PersistentResourceRuntimeDetail: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime.property.persistentResourceRuntimeDetail">PersistentResourceRuntimeDetail</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a></code> | persistent_resource_runtime_detail block. |

---

##### `PersistentResourceRuntimeDetail`<sup>Optional</sup> <a name="PersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime.property.persistentResourceRuntimeDetail"></a>

```go
PersistentResourceRuntimeDetail GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

persistent_resource_runtime_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#persistent_resource_runtime_detail GoogleVertexAiPipelineJob#persistent_resource_runtime_detail}

---

### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail {
	PersistentResourceName: *string,
	TaskResourceUnavailableTimeoutBehavior: *string,
	TaskResourceUnavailableWaitTimeMs: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.persistentResourceName">PersistentResourceName</a></code> | <code>*string</code> | PersistentResource name, format: 'projects/{project}/locations/{location}/persistentResources/{persistent_resource}'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableTimeoutBehavior">TaskResourceUnavailableTimeoutBehavior</a></code> | <code>*string</code> | Sets the behavior when a task has reached the defined wait duration while waiting for task resources to become available in the specified persistent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableWaitTimeMs">TaskResourceUnavailableWaitTimeMs</a></code> | <code>*string</code> | The maxWaitTime for the task if the persistent resource is unavailable. |

---

##### `PersistentResourceName`<sup>Optional</sup> <a name="PersistentResourceName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.persistentResourceName"></a>

```go
PersistentResourceName *string
```

- *Type:* *string

PersistentResource name, format: 'projects/{project}/locations/{location}/persistentResources/{persistent_resource}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#persistent_resource_name GoogleVertexAiPipelineJob#persistent_resource_name}

---

##### `TaskResourceUnavailableTimeoutBehavior`<sup>Optional</sup> <a name="TaskResourceUnavailableTimeoutBehavior" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableTimeoutBehavior"></a>

```go
TaskResourceUnavailableTimeoutBehavior *string
```

- *Type:* *string

Sets the behavior when a task has reached the defined wait duration while waiting for task resources to become available in the specified persistent resource.

Possible values are: 'TASK_RESOURCE_UNAVAILABLE_TIMEOUT_BEHAVIOR_UNSPECIFIED', 'FAIL', 'FALL_BACK_TO_ON_DEMAND'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#task_resource_unavailable_timeout_behavior GoogleVertexAiPipelineJob#task_resource_unavailable_timeout_behavior}

---

##### `TaskResourceUnavailableWaitTimeMs`<sup>Optional</sup> <a name="TaskResourceUnavailableWaitTimeMs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail.property.taskResourceUnavailableWaitTimeMs"></a>

```go
TaskResourceUnavailableWaitTimeMs *string
```

- *Type:* *string

The maxWaitTime for the task if the persistent resource is unavailable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#task_resource_unavailable_wait_time_ms GoogleVertexAiPipelineJob#task_resource_unavailable_wait_time_ms}

---

### GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts <a name="GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts {
	ArtifactId: *string,
	ArtifactKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactId">ArtifactId</a></code> | <code>*string</code> | Artifact resource id from MLMD. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactKey">ArtifactKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_key GoogleVertexAiPipelineJob#artifact_key}. |

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

Artifact resource id from MLMD.

Which is the last portion of an artifact resource name: 'projects/{project}/locations/{location}/metadataStores/default/artifacts/{artifact_id}'. The artifact must be within the same project, location and default metadatastore as the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_id GoogleVertexAiPipelineJob#artifact_id}

---

##### `ArtifactKey`<sup>Required</sup> <a name="ArtifactKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifacts.property.artifactKey"></a>

```go
ArtifactKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#artifact_key GoogleVertexAiPipelineJob#artifact_key}.

---

### GoogleVertexAiPipelineJobTemplateMetadata <a name="GoogleVertexAiPipelineJobTemplateMetadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobTemplateMetadata {

}
```


### GoogleVertexAiPipelineJobTimeouts <a name="GoogleVertexAiPipelineJobTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

&googlevertexaipipelinejob.GoogleVertexAiPipelineJobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#create GoogleVertexAiPipelineJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#delete GoogleVertexAiPipelineJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#update GoogleVertexAiPipelineJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#create GoogleVertexAiPipelineJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#delete GoogleVertexAiPipelineJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_pipeline_job#update GoogleVertexAiPipelineJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiPipelineJobEncryptionSpecOutputReference <a name="GoogleVertexAiPipelineJobEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPipelineJobEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPipelineJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobEncryptionSpec">GoogleVertexAiPipelineJobEncryptionSpec</a>

---


### GoogleVertexAiPipelineJobErrorList <a name="GoogleVertexAiPipelineJobErrorList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiPipelineJobErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.get"></a>

```go
func Get(index *f64) GoogleVertexAiPipelineJobErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiPipelineJobErrorOutputReference <a name="GoogleVertexAiPipelineJobErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiPipelineJobErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.details">Details</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError">GoogleVertexAiPipelineJobError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.details"></a>

```go
func Details() StringMapList
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPipelineJobError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobError">GoogleVertexAiPipelineJobError</a>

---


### GoogleVertexAiPipelineJobJobDetailList <a name="GoogleVertexAiPipelineJobJobDetailList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobJobDetailList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiPipelineJobJobDetailList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.get"></a>

```go
func Get(index *f64) GoogleVertexAiPipelineJobJobDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiPipelineJobJobDetailOutputReference <a name="GoogleVertexAiPipelineJobJobDetailOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobJobDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiPipelineJobJobDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineContext">PipelineContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList">GoogleVertexAiPipelineJobJobDetailPipelineContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineRunContext">PipelineRunContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList">GoogleVertexAiPipelineJobJobDetailPipelineRunContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.taskDetails">TaskDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList">GoogleVertexAiPipelineJobJobDetailTaskDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail">GoogleVertexAiPipelineJobJobDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PipelineContext`<sup>Required</sup> <a name="PipelineContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineContext"></a>

```go
func PipelineContext() GoogleVertexAiPipelineJobJobDetailPipelineContextList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList">GoogleVertexAiPipelineJobJobDetailPipelineContextList</a>

---

##### `PipelineRunContext`<sup>Required</sup> <a name="PipelineRunContext" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.pipelineRunContext"></a>

```go
func PipelineRunContext() GoogleVertexAiPipelineJobJobDetailPipelineRunContextList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList">GoogleVertexAiPipelineJobJobDetailPipelineRunContextList</a>

---

##### `TaskDetails`<sup>Required</sup> <a name="TaskDetails" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.taskDetails"></a>

```go
func TaskDetails() GoogleVertexAiPipelineJobJobDetailTaskDetailsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList">GoogleVertexAiPipelineJobJobDetailTaskDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPipelineJobJobDetail
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetail">GoogleVertexAiPipelineJobJobDetail</a>

---


### GoogleVertexAiPipelineJobJobDetailPipelineContextList <a name="GoogleVertexAiPipelineJobJobDetailPipelineContextList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobJobDetailPipelineContextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiPipelineJobJobDetailPipelineContextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.get"></a>

```go
func Get(index *f64) GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference <a name="GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.labels">Labels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.parentContexts">ParentContexts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaTitle">SchemaTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaVersion">SchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext">GoogleVertexAiPipelineJobJobDetailPipelineContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentContexts`<sup>Required</sup> <a name="ParentContexts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.parentContexts"></a>

```go
func ParentContexts() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaTitle`<sup>Required</sup> <a name="SchemaTitle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaTitle"></a>

```go
func SchemaTitle() *string
```

- *Type:* *string

---

##### `SchemaVersion`<sup>Required</sup> <a name="SchemaVersion" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.schemaVersion"></a>

```go
func SchemaVersion() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContextOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPipelineJobJobDetailPipelineContext
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineContext">GoogleVertexAiPipelineJobJobDetailPipelineContext</a>

---


### GoogleVertexAiPipelineJobJobDetailPipelineRunContextList <a name="GoogleVertexAiPipelineJobJobDetailPipelineRunContextList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobJobDetailPipelineRunContextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiPipelineJobJobDetailPipelineRunContextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.get"></a>

```go
func Get(index *f64) GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference <a name="GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.labels">Labels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.parentContexts">ParentContexts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaTitle">SchemaTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaVersion">SchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext">GoogleVertexAiPipelineJobJobDetailPipelineRunContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentContexts`<sup>Required</sup> <a name="ParentContexts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.parentContexts"></a>

```go
func ParentContexts() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaTitle`<sup>Required</sup> <a name="SchemaTitle" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaTitle"></a>

```go
func SchemaTitle() *string
```

- *Type:* *string

---

##### `SchemaVersion`<sup>Required</sup> <a name="SchemaVersion" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.schemaVersion"></a>

```go
func SchemaVersion() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContextOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPipelineJobJobDetailPipelineRunContext
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailPipelineRunContext">GoogleVertexAiPipelineJobJobDetailPipelineRunContext</a>

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.get"></a>

```go
func Get(index *f64) GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError">GoogleVertexAiPipelineJobJobDetailTaskDetailsError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPipelineJobJobDetailTaskDetailsError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsError">GoogleVertexAiPipelineJobJobDetailTaskDetailsError</a>

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsList <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobJobDetailTaskDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiPipelineJobJobDetailTaskDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference <a name="GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList">GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.parentTaskId">ParentTaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskId">TaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskName">TaskName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskUniqueName">TaskUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails">GoogleVertexAiPipelineJobJobDetailTaskDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.error"></a>

```go
func Error() GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList">GoogleVertexAiPipelineJobJobDetailTaskDetailsErrorList</a>

---

##### `ParentTaskId`<sup>Required</sup> <a name="ParentTaskId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.parentTaskId"></a>

```go
func ParentTaskId() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskId"></a>

```go
func TaskId() *string
```

- *Type:* *string

---

##### `TaskName`<sup>Required</sup> <a name="TaskName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskName"></a>

```go
func TaskName() *string
```

- *Type:* *string

---

##### `TaskUniqueName`<sup>Required</sup> <a name="TaskUniqueName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.taskUniqueName"></a>

```go
func TaskUniqueName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPipelineJobJobDetailTaskDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobJobDetailTaskDetails">GoogleVertexAiPipelineJobJobDetailTaskDetails</a>

---


### GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList <a name="GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">TargetProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">TargetProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```go
func TargetNetworkInput() *string
```

- *Type:* *string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```go
func TargetProjectInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```go
func TargetNetwork() *string
```

- *Type:* *string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```go
func TargetProject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference <a name="GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobPscInterfaceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs">PutDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">ResetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfigs` <a name="PutDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```go
func PutDnsPeeringConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDnsPeeringConfigs` <a name="ResetDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```go
func ResetDnsPeeringConfigs()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```go
func ResetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">DnsPeeringConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsPeeringConfigs`<sup>Required</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```go
func DnsPeeringConfigs() GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPipelineJobPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `DnsPeeringConfigsInput`<sup>Optional</sup> <a name="DnsPeeringConfigsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```go
func DnsPeeringConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPipelineJobPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobPscInterfaceConfig">GoogleVertexAiPipelineJobPscInterfaceConfig</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail">PutPersistentResourceRuntimeDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resetPersistentResourceRuntimeDetail">ResetPersistentResourceRuntimeDetail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPersistentResourceRuntimeDetail` <a name="PutPersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail"></a>

```go
func PutPersistentResourceRuntimeDetail(value GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.putPersistentResourceRuntimeDetail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

---

##### `ResetPersistentResourceRuntimeDetail` <a name="ResetPersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.resetPersistentResourceRuntimeDetail"></a>

```go
func ResetPersistentResourceRuntimeDetail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetail">PersistentResourceRuntimeDetail</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetailInput">PersistentResourceRuntimeDetailInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PersistentResourceRuntimeDetail`<sup>Required</sup> <a name="PersistentResourceRuntimeDetail" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetail"></a>

```go
func PersistentResourceRuntimeDetail() GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference</a>

---

##### `PersistentResourceRuntimeDetailInput`<sup>Optional</sup> <a name="PersistentResourceRuntimeDetailInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.persistentResourceRuntimeDetailInput"></a>

```go
func PersistentResourceRuntimeDetailInput() GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetPersistentResourceName">ResetPersistentResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableTimeoutBehavior">ResetTaskResourceUnavailableTimeoutBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableWaitTimeMs">ResetTaskResourceUnavailableWaitTimeMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPersistentResourceName` <a name="ResetPersistentResourceName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetPersistentResourceName"></a>

```go
func ResetPersistentResourceName()
```

##### `ResetTaskResourceUnavailableTimeoutBehavior` <a name="ResetTaskResourceUnavailableTimeoutBehavior" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableTimeoutBehavior"></a>

```go
func ResetTaskResourceUnavailableTimeoutBehavior()
```

##### `ResetTaskResourceUnavailableWaitTimeMs` <a name="ResetTaskResourceUnavailableWaitTimeMs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.resetTaskResourceUnavailableWaitTimeMs"></a>

```go
func ResetTaskResourceUnavailableWaitTimeMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceNameInput">PersistentResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehaviorInput">TaskResourceUnavailableTimeoutBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMsInput">TaskResourceUnavailableWaitTimeMsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceName">PersistentResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehavior">TaskResourceUnavailableTimeoutBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMs">TaskResourceUnavailableWaitTimeMs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PersistentResourceNameInput`<sup>Optional</sup> <a name="PersistentResourceNameInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceNameInput"></a>

```go
func PersistentResourceNameInput() *string
```

- *Type:* *string

---

##### `TaskResourceUnavailableTimeoutBehaviorInput`<sup>Optional</sup> <a name="TaskResourceUnavailableTimeoutBehaviorInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehaviorInput"></a>

```go
func TaskResourceUnavailableTimeoutBehaviorInput() *string
```

- *Type:* *string

---

##### `TaskResourceUnavailableWaitTimeMsInput`<sup>Optional</sup> <a name="TaskResourceUnavailableWaitTimeMsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMsInput"></a>

```go
func TaskResourceUnavailableWaitTimeMsInput() *string
```

- *Type:* *string

---

##### `PersistentResourceName`<sup>Required</sup> <a name="PersistentResourceName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.persistentResourceName"></a>

```go
func PersistentResourceName() *string
```

- *Type:* *string

---

##### `TaskResourceUnavailableTimeoutBehavior`<sup>Required</sup> <a name="TaskResourceUnavailableTimeoutBehavior" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableTimeoutBehavior"></a>

```go
func TaskResourceUnavailableTimeoutBehavior() *string
```

- *Type:* *string

---

##### `TaskResourceUnavailableWaitTimeMs`<sup>Required</sup> <a name="TaskResourceUnavailableWaitTimeMs" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.taskResourceUnavailableWaitTimeMs"></a>

```go
func TaskResourceUnavailableWaitTimeMs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimePersistentResourceRuntimeDetail</a>

---


### GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList <a name="GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKeyInput">ArtifactKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKey">ArtifactKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `ArtifactKeyInput`<sup>Optional</sup> <a name="ArtifactKeyInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKeyInput"></a>

```go
func ArtifactKeyInput() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `ArtifactKey`<sup>Required</sup> <a name="ArtifactKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.artifactKey"></a>

```go
func ArtifactKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiPipelineJobRuntimeConfigOutputReference <a name="GoogleVertexAiPipelineJobRuntimeConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobRuntimeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPipelineJobRuntimeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putDefaultRuntime">PutDefaultRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts">PutInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetDefaultRuntime">ResetDefaultRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetInputArtifacts">ResetInputArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetParameterValues">ResetParameterValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultRuntime` <a name="PutDefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putDefaultRuntime"></a>

```go
func PutDefaultRuntime(value GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putDefaultRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

---

##### `PutInputArtifacts` <a name="PutInputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts"></a>

```go
func PutInputArtifacts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.putInputArtifacts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultRuntime` <a name="ResetDefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetDefaultRuntime"></a>

```go
func ResetDefaultRuntime()
```

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetFailurePolicy"></a>

```go
func ResetFailurePolicy()
```

##### `ResetInputArtifacts` <a name="ResetInputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetInputArtifacts"></a>

```go
func ResetInputArtifacts()
```

##### `ResetParameterValues` <a name="ResetParameterValues" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.resetParameterValues"></a>

```go
func ResetParameterValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntime">DefaultRuntime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifacts">InputArtifacts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList">GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntimeInput">DefaultRuntimeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput">FailurePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput">GcsOutputDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifactsInput">InputArtifactsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput">ParameterValuesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory">GcsOutputDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValues">ParameterValues</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultRuntime`<sup>Required</sup> <a name="DefaultRuntime" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntime"></a>

```go
func DefaultRuntime() GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntimeOutputReference</a>

---

##### `InputArtifacts`<sup>Required</sup> <a name="InputArtifacts" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifacts"></a>

```go
func InputArtifacts() GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList">GoogleVertexAiPipelineJobRuntimeConfigInputArtifactsList</a>

---

##### `DefaultRuntimeInput`<sup>Optional</sup> <a name="DefaultRuntimeInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.defaultRuntimeInput"></a>

```go
func DefaultRuntimeInput() GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime">GoogleVertexAiPipelineJobRuntimeConfigDefaultRuntime</a>

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicyInput"></a>

```go
func FailurePolicyInput() *string
```

- *Type:* *string

---

##### `GcsOutputDirectoryInput`<sup>Optional</sup> <a name="GcsOutputDirectoryInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectoryInput"></a>

```go
func GcsOutputDirectoryInput() *string
```

- *Type:* *string

---

##### `InputArtifactsInput`<sup>Optional</sup> <a name="InputArtifactsInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.inputArtifactsInput"></a>

```go
func InputArtifactsInput() interface{}
```

- *Type:* interface{}

---

##### `ParameterValuesInput`<sup>Optional</sup> <a name="ParameterValuesInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValuesInput"></a>

```go
func ParameterValuesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.failurePolicy"></a>

```go
func FailurePolicy() *string
```

- *Type:* *string

---

##### `GcsOutputDirectory`<sup>Required</sup> <a name="GcsOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.gcsOutputDirectory"></a>

```go
func GcsOutputDirectory() *string
```

- *Type:* *string

---

##### `ParameterValues`<sup>Required</sup> <a name="ParameterValues" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.parameterValues"></a>

```go
func ParameterValues() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPipelineJobRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobRuntimeConfig">GoogleVertexAiPipelineJobRuntimeConfig</a>

---


### GoogleVertexAiPipelineJobTemplateMetadataList <a name="GoogleVertexAiPipelineJobTemplateMetadataList" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobTemplateMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiPipelineJobTemplateMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.get"></a>

```go
func Get(index *f64) GoogleVertexAiPipelineJobTemplateMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiPipelineJobTemplateMetadataOutputReference <a name="GoogleVertexAiPipelineJobTemplateMetadataOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobTemplateMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiPipelineJobTemplateMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata">GoogleVertexAiPipelineJobTemplateMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPipelineJobTemplateMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTemplateMetadata">GoogleVertexAiPipelineJobTemplateMetadata</a>

---


### GoogleVertexAiPipelineJobTimeoutsOutputReference <a name="GoogleVertexAiPipelineJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlevertexaipipelinejob"

googlevertexaipipelinejob.NewGoogleVertexAiPipelineJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPipelineJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPipelineJob.GoogleVertexAiPipelineJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



