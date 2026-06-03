# `googleColabNotebookExecution` Submodule <a name="`googleColabNotebookExecution` Submodule" id="@cdktn/provider-google-beta.googleColabNotebookExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleColabNotebookExecution <a name="GoogleColabNotebookExecution" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution google_colab_notebook_execution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecution(scope Construct, id *string, config GoogleColabNotebookExecutionConfig) GoogleColabNotebookExecution
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig">GoogleColabNotebookExecutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig">GoogleColabNotebookExecutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putCustomEnvironmentSpec">PutCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDataformRepositorySource">PutDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDirectNotebookSource">PutDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putGcsNotebookSource">PutGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetCustomEnvironmentSpec">ResetCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDataformRepositorySource">ResetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDirectNotebookSource">ResetDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionTimeout">ResetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionUser">ResetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetGcsNotebookSource">ResetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookExecutionJobId">ResetNotebookExecutionJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookRuntimeTemplateResourceName">ResetNotebookRuntimeTemplateResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomEnvironmentSpec` <a name="PutCustomEnvironmentSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putCustomEnvironmentSpec"></a>

```go
func PutCustomEnvironmentSpec(value GoogleColabNotebookExecutionCustomEnvironmentSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putCustomEnvironmentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec">GoogleColabNotebookExecutionCustomEnvironmentSpec</a>

---

##### `PutDataformRepositorySource` <a name="PutDataformRepositorySource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDataformRepositorySource"></a>

```go
func PutDataformRepositorySource(value GoogleColabNotebookExecutionDataformRepositorySource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

---

##### `PutDirectNotebookSource` <a name="PutDirectNotebookSource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDirectNotebookSource"></a>

```go
func PutDirectNotebookSource(value GoogleColabNotebookExecutionDirectNotebookSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDirectNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

---

##### `PutGcsNotebookSource` <a name="PutGcsNotebookSource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putGcsNotebookSource"></a>

```go
func PutGcsNotebookSource(value GoogleColabNotebookExecutionGcsNotebookSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putTimeouts"></a>

```go
func PutTimeouts(value GoogleColabNotebookExecutionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a>

---

##### `ResetCustomEnvironmentSpec` <a name="ResetCustomEnvironmentSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetCustomEnvironmentSpec"></a>

```go
func ResetCustomEnvironmentSpec()
```

##### `ResetDataformRepositorySource` <a name="ResetDataformRepositorySource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDataformRepositorySource"></a>

```go
func ResetDataformRepositorySource()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDirectNotebookSource` <a name="ResetDirectNotebookSource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDirectNotebookSource"></a>

```go
func ResetDirectNotebookSource()
```

##### `ResetExecutionTimeout` <a name="ResetExecutionTimeout" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionTimeout"></a>

```go
func ResetExecutionTimeout()
```

##### `ResetExecutionUser` <a name="ResetExecutionUser" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionUser"></a>

```go
func ResetExecutionUser()
```

##### `ResetGcsNotebookSource` <a name="ResetGcsNotebookSource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetGcsNotebookSource"></a>

```go
func ResetGcsNotebookSource()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetId"></a>

```go
func ResetId()
```

##### `ResetNotebookExecutionJobId` <a name="ResetNotebookExecutionJobId" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookExecutionJobId"></a>

```go
func ResetNotebookExecutionJobId()
```

##### `ResetNotebookRuntimeTemplateResourceName` <a name="ResetNotebookRuntimeTemplateResourceName" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookRuntimeTemplateResourceName"></a>

```go
func ResetNotebookRuntimeTemplateResourceName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleColabNotebookExecution resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

googlecolabnotebookexecution.GoogleColabNotebookExecution_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

googlecolabnotebookexecution.GoogleColabNotebookExecution_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

googlecolabnotebookexecution.GoogleColabNotebookExecution_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

googlecolabnotebookexecution.GoogleColabNotebookExecution_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleColabNotebookExecution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleColabNotebookExecution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleColabNotebookExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleColabNotebookExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.customEnvironmentSpec">CustomEnvironmentSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference">GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference">GoogleColabNotebookExecutionDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSource">DirectNotebookSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference">GoogleColabNotebookExecutionDirectNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference">GoogleColabNotebookExecutionGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference">GoogleColabNotebookExecutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.customEnvironmentSpecInput">CustomEnvironmentSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec">GoogleColabNotebookExecutionCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySourceInput">DataformRepositorySourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSourceInput">DirectNotebookSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeoutInput">ExecutionTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUserInput">ExecutionUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSourceInput">GcsNotebookSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUriInput">GcsOutputUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobIdInput">NotebookExecutionJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput">NotebookRuntimeTemplateResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUser">ExecutionUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUri">GcsOutputUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobId">NotebookExecutionJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomEnvironmentSpec`<sup>Required</sup> <a name="CustomEnvironmentSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.customEnvironmentSpec"></a>

```go
func CustomEnvironmentSpec() GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference">GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference</a>

---

##### `DataformRepositorySource`<sup>Required</sup> <a name="DataformRepositorySource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySource"></a>

```go
func DataformRepositorySource() GoogleColabNotebookExecutionDataformRepositorySourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference">GoogleColabNotebookExecutionDataformRepositorySourceOutputReference</a>

---

##### `DirectNotebookSource`<sup>Required</sup> <a name="DirectNotebookSource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSource"></a>

```go
func DirectNotebookSource() GoogleColabNotebookExecutionDirectNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference">GoogleColabNotebookExecutionDirectNotebookSourceOutputReference</a>

---

##### `GcsNotebookSource`<sup>Required</sup> <a name="GcsNotebookSource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSource"></a>

```go
func GcsNotebookSource() GoogleColabNotebookExecutionGcsNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference">GoogleColabNotebookExecutionGcsNotebookSourceOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeouts"></a>

```go
func Timeouts() GoogleColabNotebookExecutionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference">GoogleColabNotebookExecutionTimeoutsOutputReference</a>

---

##### `CustomEnvironmentSpecInput`<sup>Optional</sup> <a name="CustomEnvironmentSpecInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.customEnvironmentSpecInput"></a>

```go
func CustomEnvironmentSpecInput() GoogleColabNotebookExecutionCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec">GoogleColabNotebookExecutionCustomEnvironmentSpec</a>

---

##### `DataformRepositorySourceInput`<sup>Optional</sup> <a name="DataformRepositorySourceInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySourceInput"></a>

```go
func DataformRepositorySourceInput() GoogleColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DirectNotebookSourceInput`<sup>Optional</sup> <a name="DirectNotebookSourceInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSourceInput"></a>

```go
func DirectNotebookSourceInput() GoogleColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExecutionTimeoutInput`<sup>Optional</sup> <a name="ExecutionTimeoutInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeoutInput"></a>

```go
func ExecutionTimeoutInput() *string
```

- *Type:* *string

---

##### `ExecutionUserInput`<sup>Optional</sup> <a name="ExecutionUserInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUserInput"></a>

```go
func ExecutionUserInput() *string
```

- *Type:* *string

---

##### `GcsNotebookSourceInput`<sup>Optional</sup> <a name="GcsNotebookSourceInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSourceInput"></a>

```go
func GcsNotebookSourceInput() GoogleColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

---

##### `GcsOutputUriInput`<sup>Optional</sup> <a name="GcsOutputUriInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUriInput"></a>

```go
func GcsOutputUriInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NotebookExecutionJobIdInput`<sup>Optional</sup> <a name="NotebookExecutionJobIdInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobIdInput"></a>

```go
func NotebookExecutionJobIdInput() *string
```

- *Type:* *string

---

##### `NotebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="NotebookRuntimeTemplateResourceNameInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput"></a>

```go
func NotebookRuntimeTemplateResourceNameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutionTimeout`<sup>Required</sup> <a name="ExecutionTimeout" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeout"></a>

```go
func ExecutionTimeout() *string
```

- *Type:* *string

---

##### `ExecutionUser`<sup>Required</sup> <a name="ExecutionUser" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUser"></a>

```go
func ExecutionUser() *string
```

- *Type:* *string

---

##### `GcsOutputUri`<sup>Required</sup> <a name="GcsOutputUri" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUri"></a>

```go
func GcsOutputUri() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `NotebookExecutionJobId`<sup>Required</sup> <a name="NotebookExecutionJobId" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobId"></a>

```go
func NotebookExecutionJobId() *string
```

- *Type:* *string

---

##### `NotebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceName"></a>

```go
func NotebookRuntimeTemplateResourceName() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleColabNotebookExecutionConfig <a name="GoogleColabNotebookExecutionConfig" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	GcsOutputUri: *string,
	Location: *string,
	CustomEnvironmentSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec,
	DataformRepositorySource: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource,
	DeletionPolicy: *string,
	DirectNotebookSource: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource,
	ExecutionTimeout: *string,
	ExecutionUser: *string,
	GcsNotebookSource: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource,
	Id: *string,
	NotebookExecutionJobId: *string,
	NotebookRuntimeTemplateResourceName: *string,
	Project: *string,
	ServiceAccount: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsOutputUri">GcsOutputUri</a></code> | <code>*string</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.customEnvironmentSpec">CustomEnvironmentSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec">GoogleColabNotebookExecutionCustomEnvironmentSpec</a></code> | custom_environment_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.directNotebookSource">DirectNotebookSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionUser">ExecutionUser</a></code> | <code>*string</code> | The user email to run the execution as. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#id GoogleColabNotebookExecution#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookExecutionJobId">NotebookExecutionJobId</a></code> | <code>*string</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>*string</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#project GoogleColabNotebookExecution#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account to run the execution as. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#display_name GoogleColabNotebookExecution#display_name}

---

##### `GcsOutputUri`<sup>Required</sup> <a name="GcsOutputUri" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsOutputUri"></a>

```go
GcsOutputUri *string
```

- *Type:* *string

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#gcs_output_uri GoogleColabNotebookExecution#gcs_output_uri}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#location GoogleColabNotebookExecution#location}

---

##### `CustomEnvironmentSpec`<sup>Optional</sup> <a name="CustomEnvironmentSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.customEnvironmentSpec"></a>

```go
CustomEnvironmentSpec GoogleColabNotebookExecutionCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec">GoogleColabNotebookExecutionCustomEnvironmentSpec</a>

custom_environment_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#custom_environment_spec GoogleColabNotebookExecution#custom_environment_spec}

---

##### `DataformRepositorySource`<sup>Optional</sup> <a name="DataformRepositorySource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dataformRepositorySource"></a>

```go
DataformRepositorySource GoogleColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#dataform_repository_source GoogleColabNotebookExecution#dataform_repository_source}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#deletion_policy GoogleColabNotebookExecution#deletion_policy}

---

##### `DirectNotebookSource`<sup>Optional</sup> <a name="DirectNotebookSource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.directNotebookSource"></a>

```go
DirectNotebookSource GoogleColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#direct_notebook_source GoogleColabNotebookExecution#direct_notebook_source}

---

##### `ExecutionTimeout`<sup>Optional</sup> <a name="ExecutionTimeout" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionTimeout"></a>

```go
ExecutionTimeout *string
```

- *Type:* *string

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#execution_timeout GoogleColabNotebookExecution#execution_timeout}

---

##### `ExecutionUser`<sup>Optional</sup> <a name="ExecutionUser" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionUser"></a>

```go
ExecutionUser *string
```

- *Type:* *string

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#execution_user GoogleColabNotebookExecution#execution_user}

---

##### `GcsNotebookSource`<sup>Optional</sup> <a name="GcsNotebookSource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsNotebookSource"></a>

```go
GcsNotebookSource GoogleColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#gcs_notebook_source GoogleColabNotebookExecution#gcs_notebook_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#id GoogleColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotebookExecutionJobId`<sup>Optional</sup> <a name="NotebookExecutionJobId" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookExecutionJobId"></a>

```go
NotebookExecutionJobId *string
```

- *Type:* *string

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#notebook_execution_job_id GoogleColabNotebookExecution#notebook_execution_job_id}

---

##### `NotebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName"></a>

```go
NotebookRuntimeTemplateResourceName *string
```

- *Type:* *string

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#notebook_runtime_template_resource_name GoogleColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#project GoogleColabNotebookExecution#project}.

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#service_account GoogleColabNotebookExecution#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.timeouts"></a>

```go
Timeouts GoogleColabNotebookExecutionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#timeouts GoogleColabNotebookExecution#timeouts}

---

### GoogleColabNotebookExecutionCustomEnvironmentSpec <a name="GoogleColabNotebookExecutionCustomEnvironmentSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionCustomEnvironmentSpec {
	MachineSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec,
	NetworkSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec,
	PersistentDiskSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec.property.persistentDiskSpec">PersistentDiskSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a></code> | persistent_disk_spec block. |

---

##### `MachineSpec`<sup>Optional</sup> <a name="MachineSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec.property.machineSpec"></a>

```go
MachineSpec GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#machine_spec GoogleColabNotebookExecution#machine_spec}

---

##### `NetworkSpec`<sup>Optional</sup> <a name="NetworkSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec.property.networkSpec"></a>

```go
NetworkSpec GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#network_spec GoogleColabNotebookExecution#network_spec}

---

##### `PersistentDiskSpec`<sup>Optional</sup> <a name="PersistentDiskSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec.property.persistentDiskSpec"></a>

```go
PersistentDiskSpec GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#persistent_disk_spec GoogleColabNotebookExecution#persistent_disk_spec}

---

### GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec <a name="GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec {
	AcceleratorCount: *f64,
	AcceleratorType: *string,
	MachineType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | The number of accelerators used by the runtime. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.machineType">MachineType</a></code> | <code>*string</code> | The Compute Engine machine type selected for the runtime. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorCount"></a>

```go
AcceleratorCount *f64
```

- *Type:* *f64

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#accelerator_count GoogleColabNotebookExecution#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#accelerator_type GoogleColabNotebookExecution#accelerator_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#machine_type GoogleColabNotebookExecution#machine_type}

---

### GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec <a name="GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec {
	EnableInternetAccess: interface{},
	Network: *string,
	Subnetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | Enable public internet access for the runtime. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.network">Network</a></code> | <code>*string</code> | The name of the VPC that this runtime is in. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The name of the subnetwork that this runtime is in. |

---

##### `EnableInternetAccess`<sup>Optional</sup> <a name="EnableInternetAccess" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.enableInternetAccess"></a>

```go
EnableInternetAccess interface{}
```

- *Type:* interface{}

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#enable_internet_access GoogleColabNotebookExecution#enable_internet_access}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#network GoogleColabNotebookExecution#network}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#subnetwork GoogleColabNotebookExecution#subnetwork}

---

### GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec <a name="GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec {
	DiskSizeGb: *string,
	DiskType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskSizeGb">DiskSizeGb</a></code> | <code>*string</code> | The disk size of the runtime in GB. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskType">DiskType</a></code> | <code>*string</code> | The type of the persistent disk. |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskSizeGb"></a>

```go
DiskSizeGb *string
```

- *Type:* *string

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#disk_size_gb GoogleColabNotebookExecution#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#disk_type GoogleColabNotebookExecution#disk_type}

---

### GoogleColabNotebookExecutionDataformRepositorySource <a name="GoogleColabNotebookExecutionDataformRepositorySource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionDataformRepositorySource {
	DataformRepositoryResourceName: *string,
	CommitSha: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>*string</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.commitSha">CommitSha</a></code> | <code>*string</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `DataformRepositoryResourceName`<sup>Required</sup> <a name="DataformRepositoryResourceName" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```go
DataformRepositoryResourceName *string
```

- *Type:* *string

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#dataform_repository_resource_name GoogleColabNotebookExecution#dataform_repository_resource_name}

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.commitSha"></a>

```go
CommitSha *string
```

- *Type:* *string

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#commit_sha GoogleColabNotebookExecution#commit_sha}

---

### GoogleColabNotebookExecutionDirectNotebookSource <a name="GoogleColabNotebookExecutionDirectNotebookSource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionDirectNotebookSource {
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource.property.content">Content</a></code> | <code>*string</code> | The base64-encoded contents of the input notebook file. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource.property.content"></a>

```go
Content *string
```

- *Type:* *string

The base64-encoded contents of the input notebook file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#content GoogleColabNotebookExecution#content}

---

### GoogleColabNotebookExecutionGcsNotebookSource <a name="GoogleColabNotebookExecutionGcsNotebookSource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionGcsNotebookSource {
	Uri: *string,
	Generation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.uri">Uri</a></code> | <code>*string</code> | The Cloud Storage uri pointing to the ipynb file. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.generation">Generation</a></code> | <code>*string</code> | The version of the Cloud Storage object to read. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The Cloud Storage uri pointing to the ipynb file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#uri GoogleColabNotebookExecution#uri}

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.generation"></a>

```go
Generation *string
```

- *Type:* *string

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#generation GoogleColabNotebookExecution#generation}

---

### GoogleColabNotebookExecutionTimeouts <a name="GoogleColabNotebookExecutionTimeouts" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

&googlecolabnotebookexecution.GoogleColabNotebookExecutionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#create GoogleColabNotebookExecution#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#delete GoogleColabNotebookExecution#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#create GoogleColabNotebookExecution#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_colab_notebook_execution#delete GoogleColabNotebookExecution#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference <a name="GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorCount"></a>

```go
func ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorType"></a>

```go
func ResetAcceleratorType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() *f64
```

- *Type:* *f64

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

---


### GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference <a name="GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetEnableInternetAccess">ResetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableInternetAccess` <a name="ResetEnableInternetAccess" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```go
func ResetEnableInternetAccess()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccessInput">EnableInternetAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInternetAccessInput`<sup>Optional</sup> <a name="EnableInternetAccessInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```go
func EnableInternetAccessInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `EnableInternetAccess`<sup>Required</sup> <a name="EnableInternetAccess" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccess"></a>

```go
func EnableInternetAccess() interface{}
```

- *Type:* interface{}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

---


### GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference <a name="GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec">PutNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.putPersistentDiskSpec">PutPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetMachineSpec">ResetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetNetworkSpec">ResetNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetPersistentDiskSpec">ResetPersistentDiskSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec"></a>

```go
func PutMachineSpec(value GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

---

##### `PutNetworkSpec` <a name="PutNetworkSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec"></a>

```go
func PutNetworkSpec(value GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

---

##### `PutPersistentDiskSpec` <a name="PutPersistentDiskSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.putPersistentDiskSpec"></a>

```go
func PutPersistentDiskSpec(value GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.putPersistentDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

---

##### `ResetMachineSpec` <a name="ResetMachineSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetMachineSpec"></a>

```go
func ResetMachineSpec()
```

##### `ResetNetworkSpec` <a name="ResetNetworkSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetNetworkSpec"></a>

```go
func ResetNetworkSpec()
```

##### `ResetPersistentDiskSpec` <a name="ResetPersistentDiskSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetPersistentDiskSpec"></a>

```go
func ResetPersistentDiskSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference">GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference">GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpec">PersistentDiskSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference">GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpecInput">NetworkSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpecInput">PersistentDiskSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec">GoogleColabNotebookExecutionCustomEnvironmentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpec"></a>

```go
func MachineSpec() GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference">GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference</a>

---

##### `NetworkSpec`<sup>Required</sup> <a name="NetworkSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpec"></a>

```go
func NetworkSpec() GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference">GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference</a>

---

##### `PersistentDiskSpec`<sup>Required</sup> <a name="PersistentDiskSpec" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpec"></a>

```go
func PersistentDiskSpec() GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference">GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference</a>

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpecInput"></a>

```go
func MachineSpecInput() GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

---

##### `NetworkSpecInput`<sup>Optional</sup> <a name="NetworkSpecInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpecInput"></a>

```go
func NetworkSpecInput() GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

---

##### `PersistentDiskSpecInput`<sup>Optional</sup> <a name="PersistentDiskSpecInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpecInput"></a>

```go
func PersistentDiskSpecInput() GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabNotebookExecutionCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpec">GoogleColabNotebookExecutionCustomEnvironmentSpec</a>

---


### GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference <a name="GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskType"></a>

```go
func ResetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *string
```

- *Type:* *string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *string
```

- *Type:* *string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">GoogleColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

---


### GoogleColabNotebookExecutionDataformRepositorySourceOutputReference <a name="GoogleColabNotebookExecutionDataformRepositorySourceOutputReference" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecutionDataformRepositorySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabNotebookExecutionDataformRepositorySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha"></a>

```go
func ResetCommitSha()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">DataformRepositoryResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha">CommitSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```go
func CommitShaInput() *string
```

- *Type:* *string

---

##### `DataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="DataformRepositoryResourceNameInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```go
func DataformRepositoryResourceNameInput() *string
```

- *Type:* *string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha"></a>

```go
func CommitSha() *string
```

- *Type:* *string

---

##### `DataformRepositoryResourceName`<sup>Required</sup> <a name="DataformRepositoryResourceName" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```go
func DataformRepositoryResourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

---


### GoogleColabNotebookExecutionDirectNotebookSourceOutputReference <a name="GoogleColabNotebookExecutionDirectNotebookSourceOutputReference" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecutionDirectNotebookSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabNotebookExecutionDirectNotebookSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

---


### GoogleColabNotebookExecutionGcsNotebookSourceOutputReference <a name="GoogleColabNotebookExecutionGcsNotebookSourceOutputReference" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecutionGcsNotebookSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabNotebookExecutionGcsNotebookSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration">ResetGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration"></a>

```go
func ResetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput">GenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation">Generation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput"></a>

```go
func GenerationInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation"></a>

```go
func Generation() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

---


### GoogleColabNotebookExecutionTimeoutsOutputReference <a name="GoogleColabNotebookExecutionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecolabnotebookexecution"

googlecolabnotebookexecution.NewGoogleColabNotebookExecutionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleColabNotebookExecutionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



