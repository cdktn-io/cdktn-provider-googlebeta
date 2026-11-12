# `googleDataLineageOpenLineageJob` Submodule <a name="`googleDataLineageOpenLineageJob` Submodule" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataLineageOpenLineageJob <a name="GoogleDataLineageOpenLineageJob" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job google_data_lineage_open_lineage_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJob(scope Construct, id *string, config GoogleDataLineageOpenLineageJobConfig) GoogleDataLineageOpenLineageJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig">GoogleDataLineageOpenLineageJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig">GoogleDataLineageOpenLineageJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInput` <a name="PutInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput"></a>

```go
func PutInput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOutput` <a name="PutOutput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput"></a>

```go
func PutOutput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataLineageOpenLineageJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetId"></a>

```go
func ResetId()
```

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetInput"></a>

```go
func ResetInput()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOutput"></a>

```go
func ResetOutput()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleDataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDataLineageOpenLineageJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDataLineageOpenLineageJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataLineageOpenLineageJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.input">Input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList">GoogleDataLineageOpenLineageJobInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.output">Output</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList">GoogleDataLineageOpenLineageJobOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.process">Process</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.run">Run</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference">GoogleDataLineageOpenLineageJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.inputInput">InputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.outputInput">OutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.input"></a>

```go
func Input() GoogleDataLineageOpenLineageJobInputList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList">GoogleDataLineageOpenLineageJobInputList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.output"></a>

```go
func Output() GoogleDataLineageOpenLineageJobOutputList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList">GoogleDataLineageOpenLineageJobOutputList</a>

---

##### `Process`<sup>Required</sup> <a name="Process" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.process"></a>

```go
func Process() *string
```

- *Type:* *string

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.run"></a>

```go
func Run() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeouts"></a>

```go
func Timeouts() GoogleDataLineageOpenLineageJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference">GoogleDataLineageOpenLineageJobTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.inputInput"></a>

```go
func InputInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.outputInput"></a>

```go
func OutputInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataLineageOpenLineageJobConfig <a name="GoogleDataLineageOpenLineageJobConfig" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Namespace: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Input: interface{},
	Output: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.name">Name</a></code> | <code>*string</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.description">Description</a></code> | <code>*string</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.input">Input</a></code> | <code>interface{}</code> | input block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.output">Output</a></code> | <code>interface{}</code> | output block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#deletion_policy GoogleDataLineageOpenLineageJob#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#description GoogleDataLineageOpenLineageJob#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.input"></a>

```go
Input interface{}
```

- *Type:* interface{}

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.output"></a>

```go
Output interface{}
```

- *Type:* interface{}

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#output GoogleDataLineageOpenLineageJob#output}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.timeouts"></a>

```go
Timeouts GoogleDataLineageOpenLineageJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#timeouts GoogleDataLineageOpenLineageJob#timeouts}

---

### GoogleDataLineageOpenLineageJobInput <a name="GoogleDataLineageOpenLineageJobInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobInput {
	Name: *string,
	Namespace: *string,
	Catalog: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog,
	Symlink: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.name">Name</a></code> | <code>*string</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.symlink">Symlink</a></code> | <code>interface{}</code> | symlink block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.catalog"></a>

```go
Catalog GoogleDataLineageOpenLineageJobInputCatalog
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#catalog GoogleDataLineageOpenLineageJob#catalog}

---

##### `Symlink`<sup>Optional</sup> <a name="Symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.symlink"></a>

```go
Symlink interface{}
```

- *Type:* interface{}

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#symlink GoogleDataLineageOpenLineageJob#symlink}

---

### GoogleDataLineageOpenLineageJobInputCatalog <a name="GoogleDataLineageOpenLineageJobInputCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobInputCatalog {
	Framework: *string,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.framework">Framework</a></code> | <code>*string</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.name">Name</a></code> | <code>*string</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.type">Type</a></code> | <code>*string</code> | Catalog entity type. |

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.framework"></a>

```go
Framework *string
```

- *Type:* *string

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.name"></a>

```go
Name *string
```

- *Type:* *string

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.type"></a>

```go
Type *string
```

- *Type:* *string

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobInputSymlink <a name="GoogleDataLineageOpenLineageJobInputSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobInputSymlink {
	Name: *string,
	Namespace: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.name">Name</a></code> | <code>*string</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.type">Type</a></code> | <code>*string</code> | Type of the symlink target. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobOutput <a name="GoogleDataLineageOpenLineageJobOutput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobOutput {
	Name: *string,
	Namespace: *string,
	Catalog: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog,
	ColumnLineage: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage,
	Symlink: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.name">Name</a></code> | <code>*string</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.columnLineage">ColumnLineage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | column_lineage block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.symlink">Symlink</a></code> | <code>interface{}</code> | symlink block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.catalog"></a>

```go
Catalog GoogleDataLineageOpenLineageJobOutputCatalog
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#catalog GoogleDataLineageOpenLineageJob#catalog}

---

##### `ColumnLineage`<sup>Optional</sup> <a name="ColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.columnLineage"></a>

```go
ColumnLineage GoogleDataLineageOpenLineageJobOutputColumnLineage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

column_lineage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#column_lineage GoogleDataLineageOpenLineageJob#column_lineage}

---

##### `Symlink`<sup>Optional</sup> <a name="Symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.symlink"></a>

```go
Symlink interface{}
```

- *Type:* interface{}

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#symlink GoogleDataLineageOpenLineageJob#symlink}

---

### GoogleDataLineageOpenLineageJobOutputCatalog <a name="GoogleDataLineageOpenLineageJobOutputCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobOutputCatalog {
	Framework: *string,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.framework">Framework</a></code> | <code>*string</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.name">Name</a></code> | <code>*string</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.type">Type</a></code> | <code>*string</code> | Catalog entity type. |

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.framework"></a>

```go
Framework *string
```

- *Type:* *string

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.name"></a>

```go
Name *string
```

- *Type:* *string

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.type"></a>

```go
Type *string
```

- *Type:* *string

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineage <a name="GoogleDataLineageOpenLineageJobOutputColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobOutputColumnLineage {
	Field: interface{},
	DatasetInput: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.field">Field</a></code> | <code>interface{}</code> | field block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.datasetInput">DatasetInput</a></code> | <code>interface{}</code> | dataset_input block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.field"></a>

```go
Field interface{}
```

- *Type:* interface{}

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.datasetInput"></a>

```go
DatasetInput interface{}
```

- *Type:* interface{}

dataset_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#dataset_input GoogleDataLineageOpenLineageJob#dataset_input}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput {
	Field: *string,
	Name: *string,
	Namespace: *string,
	Transformation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field">Field</a></code> | <code>*string</code> | Source field name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name">Name</a></code> | <code>*string</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation">Transformation</a></code> | <code>interface{}</code> | transformation block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field"></a>

```go
Field *string
```

- *Type:* *string

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation"></a>

```go
Transformation interface{}
```

- *Type:* interface{}

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#transformation GoogleDataLineageOpenLineageJob#transformation}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation {
	Type: *string,
	Subtype: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type">Type</a></code> | <code>*string</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype">Subtype</a></code> | <code>*string</code> | Transformation subtype. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type"></a>

```go
Type *string
```

- *Type:* *string

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype"></a>

```go
Subtype *string
```

- *Type:* *string

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#subtype GoogleDataLineageOpenLineageJob#subtype}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageField <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageField" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobOutputColumnLineageField {
	Input: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.input">Input</a></code> | <code>interface{}</code> | input block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.name">Name</a></code> | <code>*string</code> | Output field name. |

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.input"></a>

```go
Input interface{}
```

- *Type:* interface{}

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.name"></a>

```go
Name *string
```

- *Type:* *string

Output field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput {
	Field: *string,
	Name: *string,
	Namespace: *string,
	Transformation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field">Field</a></code> | <code>*string</code> | Source field name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name">Name</a></code> | <code>*string</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation">Transformation</a></code> | <code>interface{}</code> | transformation block. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field"></a>

```go
Field *string
```

- *Type:* *string

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation"></a>

```go
Transformation interface{}
```

- *Type:* interface{}

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#transformation GoogleDataLineageOpenLineageJob#transformation}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation {
	Type: *string,
	Subtype: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type">Type</a></code> | <code>*string</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype">Subtype</a></code> | <code>*string</code> | Transformation subtype. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type"></a>

```go
Type *string
```

- *Type:* *string

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype"></a>

```go
Subtype *string
```

- *Type:* *string

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#subtype GoogleDataLineageOpenLineageJob#subtype}

---

### GoogleDataLineageOpenLineageJobOutputSymlink <a name="GoogleDataLineageOpenLineageJobOutputSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobOutputSymlink {
	Name: *string,
	Namespace: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.name">Name</a></code> | <code>*string</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.type">Type</a></code> | <code>*string</code> | Type of the symlink target. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobTimeouts <a name="GoogleDataLineageOpenLineageJobTimeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

&googledatalineageopenlineagejob.GoogleDataLineageOpenLineageJobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#create GoogleDataLineageOpenLineageJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#delete GoogleDataLineageOpenLineageJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#update GoogleDataLineageOpenLineageJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#create GoogleDataLineageOpenLineageJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#delete GoogleDataLineageOpenLineageJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#update GoogleDataLineageOpenLineageJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataLineageOpenLineageJobInputCatalogOutputReference <a name="GoogleDataLineageOpenLineageJobInputCatalogOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobInputCatalogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLineageOpenLineageJobInputCatalogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput">FrameworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.framework">Framework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput"></a>

```go
func FrameworkInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.framework"></a>

```go
func Framework() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLineageOpenLineageJobInputCatalog
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---


### GoogleDataLineageOpenLineageJobInputList <a name="GoogleDataLineageOpenLineageJobInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLineageOpenLineageJobInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get"></a>

```go
func Get(index *f64) GoogleDataLineageOpenLineageJobInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobInputOutputReference <a name="GoogleDataLineageOpenLineageJobInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLineageOpenLineageJobInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog">PutCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink">PutSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetSymlink">ResetSymlink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalog` <a name="PutCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog"></a>

```go
func PutCatalog(value GoogleDataLineageOpenLineageJobInputCatalog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---

##### `PutSymlink` <a name="PutSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink"></a>

```go
func PutSymlink(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetSymlink` <a name="ResetSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetSymlink"></a>

```go
func ResetSymlink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference">GoogleDataLineageOpenLineageJobInputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlink">Symlink</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList">GoogleDataLineageOpenLineageJobInputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalogInput">CatalogInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlinkInput">SymlinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalog"></a>

```go
func Catalog() GoogleDataLineageOpenLineageJobInputCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference">GoogleDataLineageOpenLineageJobInputCatalogOutputReference</a>

---

##### `Symlink`<sup>Required</sup> <a name="Symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlink"></a>

```go
func Symlink() GoogleDataLineageOpenLineageJobInputSymlinkList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList">GoogleDataLineageOpenLineageJobInputSymlinkList</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalogInput"></a>

```go
func CatalogInput() GoogleDataLineageOpenLineageJobInputCatalog
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SymlinkInput`<sup>Optional</sup> <a name="SymlinkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlinkInput"></a>

```go
func SymlinkInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobInputSymlinkList <a name="GoogleDataLineageOpenLineageJobInputSymlinkList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobInputSymlinkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLineageOpenLineageJobInputSymlinkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get"></a>

```go
func Get(index *f64) GoogleDataLineageOpenLineageJobInputSymlinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobInputSymlinkOutputReference <a name="GoogleDataLineageOpenLineageJobInputSymlinkOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobInputSymlinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLineageOpenLineageJobInputSymlinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputCatalogOutputReference <a name="GoogleDataLineageOpenLineageJobOutputCatalogOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputCatalogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLineageOpenLineageJobOutputCatalogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput">FrameworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.framework">Framework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput"></a>

```go
func FrameworkInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.framework"></a>

```go
func Framework() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLineageOpenLineageJobOutputCatalog
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get"></a>

```go
func Get(index *f64) GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation">ResetTransformation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransformation` <a name="PutTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation"></a>

```go
func PutTransformation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation"></a>

```go
func ResetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation">Transformation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput">TransformationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation"></a>

```go
func Transformation() GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput"></a>

```go
func TransformationInput() interface{}
```

- *Type:* interface{}

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get"></a>

```go
func Get(index *f64) GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype">ResetSubtype</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype"></a>

```go
func ResetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput">SubtypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype">Subtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput"></a>

```go
func SubtypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype"></a>

```go
func Subtype() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get"></a>

```go
func Get(index *f64) GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation">ResetTransformation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransformation` <a name="PutTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation"></a>

```go
func PutTransformation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation"></a>

```go
func ResetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation">Transformation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput">TransformationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation"></a>

```go
func Transformation() GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput"></a>

```go
func TransformationInput() interface{}
```

- *Type:* interface{}

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get"></a>

```go
func Get(index *f64) GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype">ResetSubtype</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype"></a>

```go
func ResetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput">SubtypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype">Subtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput"></a>

```go
func SubtypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype"></a>

```go
func Subtype() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputColumnLineageFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get"></a>

```go
func Get(index *f64) GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput">PutInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInput` <a name="PutInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput"></a>

```go
func PutInput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input">Input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput">InputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input"></a>

```go
func Input() GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList</a>

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput"></a>

```go
func InputInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput">PutDatasetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField">PutField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput">ResetDatasetInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetInput` <a name="PutDatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput"></a>

```go
func PutDatasetInput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput.parameter.value"></a>

- *Type:* interface{}

---

##### `PutField` <a name="PutField" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField"></a>

```go
func PutField(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatasetInput` <a name="ResetDatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput"></a>

```go
func ResetDatasetInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field">Field</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput">DatasetInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput">FieldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Required</sup> <a name="DatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput"></a>

```go
func DatasetInput() GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a>

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field"></a>

```go
func Field() GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList</a>

---

##### `DatasetInputInput`<sup>Optional</sup> <a name="DatasetInputInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput"></a>

```go
func DatasetInputInput() interface{}
```

- *Type:* interface{}

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput"></a>

```go
func FieldInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLineageOpenLineageJobOutputColumnLineage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---


### GoogleDataLineageOpenLineageJobOutputList <a name="GoogleDataLineageOpenLineageJobOutputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLineageOpenLineageJobOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get"></a>

```go
func Get(index *f64) GoogleDataLineageOpenLineageJobOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLineageOpenLineageJobOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog">PutCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage">PutColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink">PutSymlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetColumnLineage">ResetColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetSymlink">ResetSymlink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalog` <a name="PutCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog"></a>

```go
func PutCatalog(value GoogleDataLineageOpenLineageJobOutputCatalog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---

##### `PutColumnLineage` <a name="PutColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage"></a>

```go
func PutColumnLineage(value GoogleDataLineageOpenLineageJobOutputColumnLineage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `PutSymlink` <a name="PutSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink"></a>

```go
func PutSymlink(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetColumnLineage` <a name="ResetColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetColumnLineage"></a>

```go
func ResetColumnLineage()
```

##### `ResetSymlink` <a name="ResetSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetSymlink"></a>

```go
func ResetSymlink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference">GoogleDataLineageOpenLineageJobOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineage">ColumnLineage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference">GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlink">Symlink</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList">GoogleDataLineageOpenLineageJobOutputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalogInput">CatalogInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput">ColumnLineageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlinkInput">SymlinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalog"></a>

```go
func Catalog() GoogleDataLineageOpenLineageJobOutputCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference">GoogleDataLineageOpenLineageJobOutputCatalogOutputReference</a>

---

##### `ColumnLineage`<sup>Required</sup> <a name="ColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineage"></a>

```go
func ColumnLineage() GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference">GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference</a>

---

##### `Symlink`<sup>Required</sup> <a name="Symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlink"></a>

```go
func Symlink() GoogleDataLineageOpenLineageJobOutputSymlinkList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList">GoogleDataLineageOpenLineageJobOutputSymlinkList</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalogInput"></a>

```go
func CatalogInput() GoogleDataLineageOpenLineageJobOutputCatalog
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---

##### `ColumnLineageInput`<sup>Optional</sup> <a name="ColumnLineageInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput"></a>

```go
func ColumnLineageInput() GoogleDataLineageOpenLineageJobOutputColumnLineage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SymlinkInput`<sup>Optional</sup> <a name="SymlinkInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlinkInput"></a>

```go
func SymlinkInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputSymlinkList <a name="GoogleDataLineageOpenLineageJobOutputSymlinkList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputSymlinkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLineageOpenLineageJobOutputSymlinkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get"></a>

```go
func Get(index *f64) GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference <a name="GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobOutputSymlinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLineageOpenLineageJobTimeoutsOutputReference <a name="GoogleDataLineageOpenLineageJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledatalineageopenlineagejob"

googledatalineageopenlineagejob.NewGoogleDataLineageOpenLineageJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLineageOpenLineageJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



