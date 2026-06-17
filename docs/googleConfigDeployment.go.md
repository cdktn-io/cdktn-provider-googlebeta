# `googleConfigDeployment` Submodule <a name="`googleConfigDeployment` Submodule" id="@cdktn/provider-google-beta.googleConfigDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleConfigDeployment <a name="GoogleConfigDeployment" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment google_config_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

googleconfigdeployment.NewGoogleConfigDeployment(scope Construct, id *string, config GoogleConfigDeploymentConfig) GoogleConfigDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig">GoogleConfigDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig">GoogleConfigDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint">PutTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetArtifactsGcsBucket">ResetArtifactsGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetImportExistingResources">ResetImportExistingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetQuotaValidation">ResetQuotaValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTfVersionConstraint">ResetTfVersionConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetWorkerPool">ResetWorkerPool</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTerraformBlueprint` <a name="PutTerraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint"></a>

```go
func PutTerraformBlueprint(value GoogleConfigDeploymentTerraformBlueprint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTerraformBlueprint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts"></a>

```go
func PutTimeouts(value GoogleConfigDeploymentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetArtifactsGcsBucket` <a name="ResetArtifactsGcsBucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetArtifactsGcsBucket"></a>

```go
func ResetArtifactsGcsBucket()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetId"></a>

```go
func ResetId()
```

##### `ResetImportExistingResources` <a name="ResetImportExistingResources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetImportExistingResources"></a>

```go
func ResetImportExistingResources()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetQuotaValidation` <a name="ResetQuotaValidation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetQuotaValidation"></a>

```go
func ResetQuotaValidation()
```

##### `ResetTfVersionConstraint` <a name="ResetTfVersionConstraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTfVersionConstraint"></a>

```go
func ResetTfVersionConstraint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkerPool` <a name="ResetWorkerPool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.resetWorkerPool"></a>

```go
func ResetWorkerPool()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleConfigDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

googleconfigdeployment.GoogleConfigDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

googleconfigdeployment.GoogleConfigDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

googleconfigdeployment.GoogleConfigDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

googleconfigdeployment.GoogleConfigDeployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleConfigDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleConfigDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleConfigDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleConfigDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.latestRevision">LatestRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprint">TerraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference">GoogleConfigDeploymentTerraformBlueprintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference">GoogleConfigDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucketInput">ArtifactsGcsBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResourcesInput">ImportExistingResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidationInput">QuotaValidationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprintInput">TerraformBlueprintInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraintInput">TfVersionConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPoolInput">WorkerPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucket">ArtifactsGcsBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResources">ImportExistingResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidation">QuotaValidation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraint">TfVersionConstraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPool">WorkerPool</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `LatestRevision`<sup>Required</sup> <a name="LatestRevision" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.latestRevision"></a>

```go
func LatestRevision() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformBlueprint`<sup>Required</sup> <a name="TerraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprint"></a>

```go
func TerraformBlueprint() GoogleConfigDeploymentTerraformBlueprintOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference">GoogleConfigDeploymentTerraformBlueprintOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeouts"></a>

```go
func Timeouts() GoogleConfigDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference">GoogleConfigDeploymentTimeoutsOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ArtifactsGcsBucketInput`<sup>Optional</sup> <a name="ArtifactsGcsBucketInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucketInput"></a>

```go
func ArtifactsGcsBucketInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportExistingResourcesInput`<sup>Optional</sup> <a name="ImportExistingResourcesInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResourcesInput"></a>

```go
func ImportExistingResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `QuotaValidationInput`<sup>Optional</sup> <a name="QuotaValidationInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidationInput"></a>

```go
func QuotaValidationInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TerraformBlueprintInput`<sup>Optional</sup> <a name="TerraformBlueprintInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.terraformBlueprintInput"></a>

```go
func TerraformBlueprintInput() GoogleConfigDeploymentTerraformBlueprint
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

---

##### `TfVersionConstraintInput`<sup>Optional</sup> <a name="TfVersionConstraintInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraintInput"></a>

```go
func TfVersionConstraintInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkerPoolInput`<sup>Optional</sup> <a name="WorkerPoolInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPoolInput"></a>

```go
func WorkerPoolInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ArtifactsGcsBucket`<sup>Required</sup> <a name="ArtifactsGcsBucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.artifactsGcsBucket"></a>

```go
func ArtifactsGcsBucket() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportExistingResources`<sup>Required</sup> <a name="ImportExistingResources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.importExistingResources"></a>

```go
func ImportExistingResources() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `QuotaValidation`<sup>Required</sup> <a name="QuotaValidation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.quotaValidation"></a>

```go
func QuotaValidation() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `TfVersionConstraint`<sup>Required</sup> <a name="TfVersionConstraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfVersionConstraint"></a>

```go
func TfVersionConstraint() *string
```

- *Type:* *string

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.workerPool"></a>

```go
func WorkerPool() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleConfigDeploymentConfig <a name="GoogleConfigDeploymentConfig" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

&googleconfigdeployment.GoogleConfigDeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ServiceAccount: *string,
	TerraformBlueprint: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint,
	Annotations: *map[string]*string,
	ArtifactsGcsBucket: *string,
	DeletionPolicy: *string,
	ForceDestroy: interface{},
	Id: *string,
	ImportExistingResources: interface{},
	Labels: *map[string]*string,
	Project: *string,
	QuotaValidation: *string,
	TfVersionConstraint: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleConfigDeployment.GoogleConfigDeploymentTimeouts,
	WorkerPool: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.name">Name</a></code> | <code>*string</code> | The user-specified ID of the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Required. User-specified Service Account (SA) credentials to be used when actuating resources. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.terraformBlueprint">TerraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | terraform_blueprint block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. Arbitrary key-value metadata storage. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.artifactsGcsBucket">ArtifactsGcsBucket</a></code> | <code>*string</code> | Location for Cloud Build logs and artifacts. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | If true, deletes the deployment and its nested resources. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#id GoogleConfigDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.importExistingResources">ImportExistingResources</a></code> | <code>interface{}</code> | If true, attempts to automatically import resources on 409 conflict. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. User-defined metadata for the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#project GoogleConfigDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.quotaValidation">QuotaValidation</a></code> | <code>*string</code> | Controls quota checks. Possible values: ["ENABLED", "ENFORCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.tfVersionConstraint">TfVersionConstraint</a></code> | <code>*string</code> | Optional constraint on the Terraform version. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.workerPool">WorkerPool</a></code> | <code>*string</code> | Custom Cloud Build worker pool resource name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#location GoogleConfigDeployment#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The user-specified ID of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#name GoogleConfigDeployment#name}

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Required. User-specified Service Account (SA) credentials to be used when actuating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#service_account GoogleConfigDeployment#service_account}

---

##### `TerraformBlueprint`<sup>Required</sup> <a name="TerraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.terraformBlueprint"></a>

```go
TerraformBlueprint GoogleConfigDeploymentTerraformBlueprint
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

terraform_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#terraform_blueprint GoogleConfigDeployment#terraform_blueprint}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional. Arbitrary key-value metadata storage.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#annotations GoogleConfigDeployment#annotations}

---

##### `ArtifactsGcsBucket`<sup>Optional</sup> <a name="ArtifactsGcsBucket" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.artifactsGcsBucket"></a>

```go
ArtifactsGcsBucket *string
```

- *Type:* *string

Location for Cloud Build logs and artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#artifacts_gcs_bucket GoogleConfigDeployment#artifacts_gcs_bucket}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#deletion_policy GoogleConfigDeployment#deletion_policy}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

If true, deletes the deployment and its nested resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#force_destroy GoogleConfigDeployment#force_destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#id GoogleConfigDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportExistingResources`<sup>Optional</sup> <a name="ImportExistingResources" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.importExistingResources"></a>

```go
ImportExistingResources interface{}
```

- *Type:* interface{}

If true, attempts to automatically import resources on 409 conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#import_existing_resources GoogleConfigDeployment#import_existing_resources}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. User-defined metadata for the deployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#labels GoogleConfigDeployment#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#project GoogleConfigDeployment#project}.

---

##### `QuotaValidation`<sup>Optional</sup> <a name="QuotaValidation" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.quotaValidation"></a>

```go
QuotaValidation *string
```

- *Type:* *string

Controls quota checks. Possible values: ["ENABLED", "ENFORCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#quota_validation GoogleConfigDeployment#quota_validation}

---

##### `TfVersionConstraint`<sup>Optional</sup> <a name="TfVersionConstraint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.tfVersionConstraint"></a>

```go
TfVersionConstraint *string
```

- *Type:* *string

Optional constraint on the Terraform version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#tf_version_constraint GoogleConfigDeployment#tf_version_constraint}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.timeouts"></a>

```go
Timeouts GoogleConfigDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts">GoogleConfigDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#timeouts GoogleConfigDeployment#timeouts}

---

##### `WorkerPool`<sup>Optional</sup> <a name="WorkerPool" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentConfig.property.workerPool"></a>

```go
WorkerPool *string
```

- *Type:* *string

Custom Cloud Build worker pool resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#worker_pool GoogleConfigDeployment#worker_pool}

---

### GoogleConfigDeploymentTerraformBlueprint <a name="GoogleConfigDeploymentTerraformBlueprint" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

&googleconfigdeployment.GoogleConfigDeploymentTerraformBlueprint {
	GcsSource: *string,
	GitSource: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource,
	InputValues: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gcsSource">GcsSource</a></code> | <code>*string</code> | URI of a GCS object containing the zipped Terraform blueprint. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a></code> | git_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.inputValues">InputValues</a></code> | <code>interface{}</code> | input_values block. |

---

##### `GcsSource`<sup>Optional</sup> <a name="GcsSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gcsSource"></a>

```go
GcsSource *string
```

- *Type:* *string

URI of a GCS object containing the zipped Terraform blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#gcs_source GoogleConfigDeployment#gcs_source}

---

##### `GitSource`<sup>Optional</sup> <a name="GitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.gitSource"></a>

```go
GitSource GoogleConfigDeploymentTerraformBlueprintGitSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

git_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#git_source GoogleConfigDeployment#git_source}

---

##### `InputValues`<sup>Optional</sup> <a name="InputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint.property.inputValues"></a>

```go
InputValues interface{}
```

- *Type:* interface{}

input_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#input_values GoogleConfigDeployment#input_values}

---

### GoogleConfigDeploymentTerraformBlueprintGitSource <a name="GoogleConfigDeploymentTerraformBlueprintGitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

&googleconfigdeployment.GoogleConfigDeploymentTerraformBlueprintGitSource {
	Repo: *string,
	Directory: *string,
	Ref: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.repo">Repo</a></code> | <code>*string</code> | Repository URL. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.directory">Directory</a></code> | <code>*string</code> | Subdirectory within the repo. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.ref">Ref</a></code> | <code>*string</code> | Git reference (branch or tag). |

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Repository URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#repo GoogleConfigDeployment#repo}

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.directory"></a>

```go
Directory *string
```

- *Type:* *string

Subdirectory within the repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#directory GoogleConfigDeployment#directory}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource.property.ref"></a>

```go
Ref *string
```

- *Type:* *string

Git reference (branch or tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#ref GoogleConfigDeployment#ref}

---

### GoogleConfigDeploymentTerraformBlueprintInputValues <a name="GoogleConfigDeploymentTerraformBlueprintInputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

&googleconfigdeployment.GoogleConfigDeploymentTerraformBlueprintInputValues {
	InputValue: *string,
	VariableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.inputValue">InputValue</a></code> | <code>*string</code> | The value of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.variableName">VariableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#variable_name GoogleConfigDeployment#variable_name}. |

---

##### `InputValue`<sup>Required</sup> <a name="InputValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.inputValue"></a>

```go
InputValue *string
```

- *Type:* *string

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#input_value GoogleConfigDeployment#input_value}

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValues.property.variableName"></a>

```go
VariableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#variable_name GoogleConfigDeployment#variable_name}.

---

### GoogleConfigDeploymentTimeouts <a name="GoogleConfigDeploymentTimeouts" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

&googleconfigdeployment.GoogleConfigDeploymentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#create GoogleConfigDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#delete GoogleConfigDeployment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#update GoogleConfigDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#create GoogleConfigDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#delete GoogleConfigDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_config_deployment#update GoogleConfigDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference <a name="GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

googleconfigdeployment.NewGoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef">ResetRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory"></a>

```go
func ResetDirectory()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef"></a>

```go
func ResetRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput">RefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory">Directory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput"></a>

```go
func DirectoryInput() *string
```

- *Type:* *string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput"></a>

```go
func RefInput() *string
```

- *Type:* *string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory"></a>

```go
func Directory() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleConfigDeploymentTerraformBlueprintGitSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

---


### GoogleConfigDeploymentTerraformBlueprintInputValuesList <a name="GoogleConfigDeploymentTerraformBlueprintInputValuesList" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

googleconfigdeployment.NewGoogleConfigDeploymentTerraformBlueprintInputValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleConfigDeploymentTerraformBlueprintInputValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.get"></a>

```go
func Get(index *f64) GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference <a name="GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

googleconfigdeployment.NewGoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput">InputValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput">VariableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue">InputValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName">VariableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputValueInput`<sup>Optional</sup> <a name="InputValueInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput"></a>

```go
func InputValueInput() *string
```

- *Type:* *string

---

##### `VariableNameInput`<sup>Optional</sup> <a name="VariableNameInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput"></a>

```go
func VariableNameInput() *string
```

- *Type:* *string

---

##### `InputValue`<sup>Required</sup> <a name="InputValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue"></a>

```go
func InputValue() *string
```

- *Type:* *string

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName"></a>

```go
func VariableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleConfigDeploymentTerraformBlueprintOutputReference <a name="GoogleConfigDeploymentTerraformBlueprintOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

googleconfigdeployment.NewGoogleConfigDeploymentTerraformBlueprintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleConfigDeploymentTerraformBlueprintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource">PutGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putInputValues">PutInputValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource">ResetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGitSource">ResetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetInputValues">ResetInputValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGitSource` <a name="PutGitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource"></a>

```go
func PutGitSource(value GoogleConfigDeploymentTerraformBlueprintGitSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `PutInputValues` <a name="PutInputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putInputValues"></a>

```go
func PutInputValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.putInputValues.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGcsSource` <a name="ResetGcsSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource"></a>

```go
func ResetGcsSource()
```

##### `ResetGitSource` <a name="ResetGitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetGitSource"></a>

```go
func ResetGitSource()
```

##### `ResetInputValues` <a name="ResetInputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.resetInputValues"></a>

```go
func ResetInputValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSource">GitSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference">GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValues">InputValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList">GoogleConfigDeploymentTerraformBlueprintInputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput">GcsSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput">GitSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput">InputValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource">GcsSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GitSource`<sup>Required</sup> <a name="GitSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSource"></a>

```go
func GitSource() GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference">GoogleConfigDeploymentTerraformBlueprintGitSourceOutputReference</a>

---

##### `InputValues`<sup>Required</sup> <a name="InputValues" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValues"></a>

```go
func InputValues() GoogleConfigDeploymentTerraformBlueprintInputValuesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintInputValuesList">GoogleConfigDeploymentTerraformBlueprintInputValuesList</a>

---

##### `GcsSourceInput`<sup>Optional</sup> <a name="GcsSourceInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput"></a>

```go
func GcsSourceInput() *string
```

- *Type:* *string

---

##### `GitSourceInput`<sup>Optional</sup> <a name="GitSourceInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput"></a>

```go
func GitSourceInput() GoogleConfigDeploymentTerraformBlueprintGitSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintGitSource">GoogleConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `InputValuesInput`<sup>Optional</sup> <a name="InputValuesInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput"></a>

```go
func InputValuesInput() interface{}
```

- *Type:* interface{}

---

##### `GcsSource`<sup>Required</sup> <a name="GcsSource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource"></a>

```go
func GcsSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprintOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleConfigDeploymentTerraformBlueprint
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTerraformBlueprint">GoogleConfigDeploymentTerraformBlueprint</a>

---


### GoogleConfigDeploymentTimeoutsOutputReference <a name="GoogleConfigDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleconfigdeployment"

googleconfigdeployment.NewGoogleConfigDeploymentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleConfigDeploymentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleConfigDeployment.GoogleConfigDeploymentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



