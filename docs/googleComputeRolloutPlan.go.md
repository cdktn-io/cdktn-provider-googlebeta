# `googleComputeRolloutPlan` Submodule <a name="`googleComputeRolloutPlan` Submodule" id="@cdktn/provider-google-beta.googleComputeRolloutPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRolloutPlan <a name="GoogleComputeRolloutPlan" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan google_compute_rollout_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.NewGoogleComputeRolloutPlan(scope Construct, id *string, config GoogleComputeRolloutPlanConfig) GoogleComputeRolloutPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig">GoogleComputeRolloutPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig">GoogleComputeRolloutPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putWaves">PutWaves</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetLocationScope">ResetLocationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeRolloutPlanTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

---

##### `PutWaves` <a name="PutWaves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putWaves"></a>

```go
func PutWaves(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.putWaves.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetId"></a>

```go
func ResetId()
```

##### `ResetLocationScope` <a name="ResetLocationScope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetLocationScope"></a>

```go
func ResetLocationScope()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeRolloutPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.GoogleComputeRolloutPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.GoogleComputeRolloutPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.GoogleComputeRolloutPlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.GoogleComputeRolloutPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleComputeRolloutPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeRolloutPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeRolloutPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRolloutPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference">GoogleComputeRolloutPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.waves">Waves</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList">GoogleComputeRolloutPlanWavesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScopeInput">LocationScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.wavesInput">WavesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScope">LocationScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeouts"></a>

```go
func Timeouts() GoogleComputeRolloutPlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference">GoogleComputeRolloutPlanTimeoutsOutputReference</a>

---

##### `Waves`<sup>Required</sup> <a name="Waves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.waves"></a>

```go
func Waves() GoogleComputeRolloutPlanWavesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList">GoogleComputeRolloutPlanWavesList</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationScopeInput`<sup>Optional</sup> <a name="LocationScopeInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScopeInput"></a>

```go
func LocationScopeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WavesInput`<sup>Optional</sup> <a name="WavesInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.wavesInput"></a>

```go
func WavesInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationScope`<sup>Required</sup> <a name="LocationScope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.locationScope"></a>

```go
func LocationScope() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRolloutPlanConfig <a name="GoogleComputeRolloutPlanConfig" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

&googlecomputerolloutplan.GoogleComputeRolloutPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Waves: interface{},
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	LocationScope: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.waves">Waves</a></code> | <code>interface{}</code> | waves block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#id GoogleComputeRolloutPlan#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.locationScope">LocationScope</a></code> | <code>*string</code> | The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#project GoogleComputeRolloutPlan#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#name GoogleComputeRolloutPlan#name}

---

##### `Waves`<sup>Required</sup> <a name="Waves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.waves"></a>

```go
Waves interface{}
```

- *Type:* interface{}

waves block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#waves GoogleComputeRolloutPlan#waves}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#deletion_policy GoogleComputeRolloutPlan#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#description GoogleComputeRolloutPlan#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#id GoogleComputeRolloutPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationScope`<sup>Optional</sup> <a name="LocationScope" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.locationScope"></a>

```go
LocationScope *string
```

- *Type:* *string

The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#location_scope GoogleComputeRolloutPlan#location_scope}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#project GoogleComputeRolloutPlan#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeRolloutPlanTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts">GoogleComputeRolloutPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#timeouts GoogleComputeRolloutPlan#timeouts}

---

### GoogleComputeRolloutPlanTimeouts <a name="GoogleComputeRolloutPlanTimeouts" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

&googlecomputerolloutplan.GoogleComputeRolloutPlanTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#create GoogleComputeRolloutPlan#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#delete GoogleComputeRolloutPlan#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#create GoogleComputeRolloutPlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#delete GoogleComputeRolloutPlan#delete}.

---

### GoogleComputeRolloutPlanWaves <a name="GoogleComputeRolloutPlanWaves" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

&googlecomputerolloutplan.GoogleComputeRolloutPlanWaves {
	Selectors: interface{},
	Validation: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation,
	DisplayName: *string,
	OrchestrationOptions: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.selectors">Selectors</a></code> | <code>interface{}</code> | selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.validation">Validation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a></code> | validation block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of this wave of the rollout plan. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.orchestrationOptions">OrchestrationOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a></code> | orchestration_options block. |

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.selectors"></a>

```go
Selectors interface{}
```

- *Type:* interface{}

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#selectors GoogleComputeRolloutPlan#selectors}

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.validation"></a>

```go
Validation GoogleComputeRolloutPlanWavesValidation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#validation GoogleComputeRolloutPlan#validation}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of this wave of the rollout plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#display_name GoogleComputeRolloutPlan#display_name}

---

##### `OrchestrationOptions`<sup>Optional</sup> <a name="OrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWaves.property.orchestrationOptions"></a>

```go
OrchestrationOptions GoogleComputeRolloutPlanWavesOrchestrationOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

orchestration_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#orchestration_options GoogleComputeRolloutPlan#orchestration_options}

---

### GoogleComputeRolloutPlanWavesOrchestrationOptions <a name="GoogleComputeRolloutPlanWavesOrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

&googlecomputerolloutplan.GoogleComputeRolloutPlanWavesOrchestrationOptions {
	Delays: interface{},
	MaxConcurrentLocations: *f64,
	MaxConcurrentResourcesPerLocation: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.delays">Delays</a></code> | <code>interface{}</code> | delays block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations">MaxConcurrentLocations</a></code> | <code>*f64</code> | Maximum number of locations to be orchestrated in parallel. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation">MaxConcurrentResourcesPerLocation</a></code> | <code>*f64</code> | Maximum number of resources to be orchestrated per location in parallel. |

---

##### `Delays`<sup>Optional</sup> <a name="Delays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.delays"></a>

```go
Delays interface{}
```

- *Type:* interface{}

delays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#delays GoogleComputeRolloutPlan#delays}

---

##### `MaxConcurrentLocations`<sup>Optional</sup> <a name="MaxConcurrentLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations"></a>

```go
MaxConcurrentLocations *f64
```

- *Type:* *f64

Maximum number of locations to be orchestrated in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#max_concurrent_locations GoogleComputeRolloutPlan#max_concurrent_locations}

---

##### `MaxConcurrentResourcesPerLocation`<sup>Optional</sup> <a name="MaxConcurrentResourcesPerLocation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation"></a>

```go
MaxConcurrentResourcesPerLocation *f64
```

- *Type:* *f64

Maximum number of resources to be orchestrated per location in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#max_concurrent_resources_per_location GoogleComputeRolloutPlan#max_concurrent_resources_per_location}

---

### GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

&googlecomputerolloutplan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays {
	Delimiter: *string,
	Duration: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter">Delimiter</a></code> | <code>*string</code> | Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration">Duration</a></code> | <code>*string</code> | The duration of the delay, if any, to be added between batches of projects. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type">Type</a></code> | <code>*string</code> | Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location.

Possible values: ["DELIMITER_UNSPECIFIED", "DELIMITER_LOCATION", "DELIMITER_BATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#delimiter GoogleComputeRolloutPlan#delimiter}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

The duration of the delay, if any, to be added between batches of projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#duration GoogleComputeRolloutPlan#duration}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type"></a>

```go
Type *string
```

- *Type:* *string

Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration.

Possible values: ["TYPE_UNSPECIFIED", "TYPE_OFFSET", "TYPE_MINIMUM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#type GoogleComputeRolloutPlan#type}

---

### GoogleComputeRolloutPlanWavesSelectors <a name="GoogleComputeRolloutPlanWavesSelectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

&googlecomputerolloutplan.GoogleComputeRolloutPlanWavesSelectors {
	LocationSelector: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector,
	ResourceHierarchySelector: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.locationSelector">LocationSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | location_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector">ResourceHierarchySelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | resource_hierarchy_selector block. |

---

##### `LocationSelector`<sup>Optional</sup> <a name="LocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.locationSelector"></a>

```go
LocationSelector GoogleComputeRolloutPlanWavesSelectorsLocationSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

location_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#location_selector GoogleComputeRolloutPlan#location_selector}

---

##### `ResourceHierarchySelector`<sup>Optional</sup> <a name="ResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector"></a>

```go
ResourceHierarchySelector GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

resource_hierarchy_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#resource_hierarchy_selector GoogleComputeRolloutPlan#resource_hierarchy_selector}

---

### GoogleComputeRolloutPlanWavesSelectorsLocationSelector <a name="GoogleComputeRolloutPlanWavesSelectorsLocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

&googlecomputerolloutplan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector {
	IncludedLocations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations">IncludedLocations</a></code> | <code>*[]*string</code> | Example: "us-central1-a". |

---

##### `IncludedLocations`<sup>Optional</sup> <a name="IncludedLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations"></a>

```go
IncludedLocations *[]*string
```

- *Type:* *[]*string

Example: "us-central1-a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#included_locations GoogleComputeRolloutPlan#included_locations}

---

### GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector <a name="GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

&googlecomputerolloutplan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector {
	IncludedFolders: *[]*string,
	IncludedOrganizations: *[]*string,
	IncludedProjects: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders">IncludedFolders</a></code> | <code>*[]*string</code> | Format: "folders/{folder_id}". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations">IncludedOrganizations</a></code> | <code>*[]*string</code> | Format: "organizations/{organization_id}". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects">IncludedProjects</a></code> | <code>*[]*string</code> | Format: "projects/{project_id}". |

---

##### `IncludedFolders`<sup>Optional</sup> <a name="IncludedFolders" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders"></a>

```go
IncludedFolders *[]*string
```

- *Type:* *[]*string

Format: "folders/{folder_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#included_folders GoogleComputeRolloutPlan#included_folders}

---

##### `IncludedOrganizations`<sup>Optional</sup> <a name="IncludedOrganizations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations"></a>

```go
IncludedOrganizations *[]*string
```

- *Type:* *[]*string

Format: "organizations/{organization_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#included_organizations GoogleComputeRolloutPlan#included_organizations}

---

##### `IncludedProjects`<sup>Optional</sup> <a name="IncludedProjects" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects"></a>

```go
IncludedProjects *[]*string
```

- *Type:* *[]*string

Format: "projects/{project_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#included_projects GoogleComputeRolloutPlan#included_projects}

---

### GoogleComputeRolloutPlanWavesValidation <a name="GoogleComputeRolloutPlanWavesValidation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

&googlecomputerolloutplan.GoogleComputeRolloutPlanWavesValidation {
	Type: *string,
	TimeBasedValidationMetadata: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.type">Type</a></code> | <code>*string</code> | The type of the validation. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata">TimeBasedValidationMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | time_based_validation_metadata block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the validation.

Possible values:
"manual": The system waits for an end-user approval API before progressing to the next wave.
"time": The system waits for a user specified duration before progressing to the next wave.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#type GoogleComputeRolloutPlan#type}

---

##### `TimeBasedValidationMetadata`<sup>Optional</sup> <a name="TimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata"></a>

```go
TimeBasedValidationMetadata GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

time_based_validation_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#time_based_validation_metadata GoogleComputeRolloutPlan#time_based_validation_metadata}

---

### GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata <a name="GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

&googlecomputerolloutplan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata {
	WaitDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration">WaitDuration</a></code> | <code>*string</code> | The duration that the system waits in between waves. |

---

##### `WaitDuration`<sup>Optional</sup> <a name="WaitDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration"></a>

```go
WaitDuration *string
```

- *Type:* *string

The duration that the system waits in between waves.

This wait starts
after all changes in the wave are rolled out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_rollout_plan#wait_duration GoogleComputeRolloutPlan#wait_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRolloutPlanTimeoutsOutputReference <a name="GoogleComputeRolloutPlanTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.NewGoogleComputeRolloutPlanTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRolloutPlanTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRolloutPlanWavesList <a name="GoogleComputeRolloutPlanWavesList" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.NewGoogleComputeRolloutPlanWavesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRolloutPlanWavesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.get"></a>

```go
func Get(index *f64) GoogleComputeRolloutPlanWavesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.NewGoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get"></a>

```go
func Get(index *f64) GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.NewGoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference <a name="GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.NewGoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays">PutDelays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays">ResetDelays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations">ResetMaxConcurrentLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation">ResetMaxConcurrentResourcesPerLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDelays` <a name="PutDelays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays"></a>

```go
func PutDelays(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDelays` <a name="ResetDelays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays"></a>

```go
func ResetDelays()
```

##### `ResetMaxConcurrentLocations` <a name="ResetMaxConcurrentLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations"></a>

```go
func ResetMaxConcurrentLocations()
```

##### `ResetMaxConcurrentResourcesPerLocation` <a name="ResetMaxConcurrentResourcesPerLocation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation"></a>

```go
func ResetMaxConcurrentResourcesPerLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays">Delays</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput">DelaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput">MaxConcurrentLocationsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput">MaxConcurrentResourcesPerLocationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations">MaxConcurrentLocations</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation">MaxConcurrentResourcesPerLocation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Delays`<sup>Required</sup> <a name="Delays" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays"></a>

```go
func Delays() GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList">GoogleComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a>

---

##### `DelaysInput`<sup>Optional</sup> <a name="DelaysInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput"></a>

```go
func DelaysInput() interface{}
```

- *Type:* interface{}

---

##### `MaxConcurrentLocationsInput`<sup>Optional</sup> <a name="MaxConcurrentLocationsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput"></a>

```go
func MaxConcurrentLocationsInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentResourcesPerLocationInput`<sup>Optional</sup> <a name="MaxConcurrentResourcesPerLocationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput"></a>

```go
func MaxConcurrentResourcesPerLocationInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentLocations`<sup>Required</sup> <a name="MaxConcurrentLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations"></a>

```go
func MaxConcurrentLocations() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentResourcesPerLocation`<sup>Required</sup> <a name="MaxConcurrentResourcesPerLocation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation"></a>

```go
func MaxConcurrentResourcesPerLocation() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRolloutPlanWavesOrchestrationOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

---


### GoogleComputeRolloutPlanWavesOutputReference <a name="GoogleComputeRolloutPlanWavesOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.NewGoogleComputeRolloutPlanWavesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRolloutPlanWavesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putOrchestrationOptions">PutOrchestrationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putSelectors">PutSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putValidation">PutValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions">ResetOrchestrationOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOrchestrationOptions` <a name="PutOrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putOrchestrationOptions"></a>

```go
func PutOrchestrationOptions(value GoogleComputeRolloutPlanWavesOrchestrationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putOrchestrationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

---

##### `PutSelectors` <a name="PutSelectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putSelectors"></a>

```go
func PutSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutValidation` <a name="PutValidation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putValidation"></a>

```go
func PutValidation(value GoogleComputeRolloutPlanWavesValidation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetOrchestrationOptions` <a name="ResetOrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions"></a>

```go
func ResetOrchestrationOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptions">OrchestrationOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference">GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectors">Selectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList">GoogleComputeRolloutPlanWavesSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validation">Validation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference">GoogleComputeRolloutPlanWavesValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput">OrchestrationOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validationInput">ValidationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `OrchestrationOptions`<sup>Required</sup> <a name="OrchestrationOptions" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptions"></a>

```go
func OrchestrationOptions() GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference">GoogleComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a>

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectors"></a>

```go
func Selectors() GoogleComputeRolloutPlanWavesSelectorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList">GoogleComputeRolloutPlanWavesSelectorsList</a>

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validation"></a>

```go
func Validation() GoogleComputeRolloutPlanWavesValidationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference">GoogleComputeRolloutPlanWavesValidationOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `OrchestrationOptionsInput`<sup>Optional</sup> <a name="OrchestrationOptionsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput"></a>

```go
func OrchestrationOptionsInput() GoogleComputeRolloutPlanWavesOrchestrationOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOrchestrationOptions">GoogleComputeRolloutPlanWavesOrchestrationOptions</a>

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.selectorsInput"></a>

```go
func SelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidationInput`<sup>Optional</sup> <a name="ValidationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.validationInput"></a>

```go
func ValidationInput() GoogleComputeRolloutPlanWavesValidation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRolloutPlanWavesSelectorsList <a name="GoogleComputeRolloutPlanWavesSelectorsList" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.NewGoogleComputeRolloutPlanWavesSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRolloutPlanWavesSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.get"></a>

```go
func Get(index *f64) GoogleComputeRolloutPlanWavesSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference <a name="GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.NewGoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations">ResetIncludedLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludedLocations` <a name="ResetIncludedLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations"></a>

```go
func ResetIncludedLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput">IncludedLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations">IncludedLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludedLocationsInput`<sup>Optional</sup> <a name="IncludedLocationsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput"></a>

```go
func IncludedLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedLocations`<sup>Required</sup> <a name="IncludedLocations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations"></a>

```go
func IncludedLocations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRolloutPlanWavesSelectorsLocationSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

---


### GoogleComputeRolloutPlanWavesSelectorsOutputReference <a name="GoogleComputeRolloutPlanWavesSelectorsOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.NewGoogleComputeRolloutPlanWavesSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRolloutPlanWavesSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector">PutLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector">PutResourceHierarchySelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector">ResetLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector">ResetResourceHierarchySelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocationSelector` <a name="PutLocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector"></a>

```go
func PutLocationSelector(value GoogleComputeRolloutPlanWavesSelectorsLocationSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

---

##### `PutResourceHierarchySelector` <a name="PutResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector"></a>

```go
func PutResourceHierarchySelector(value GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---

##### `ResetLocationSelector` <a name="ResetLocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector"></a>

```go
func ResetLocationSelector()
```

##### `ResetResourceHierarchySelector` <a name="ResetResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector"></a>

```go
func ResetResourceHierarchySelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector">LocationSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector">ResourceHierarchySelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput">LocationSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput">ResourceHierarchySelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationSelector`<sup>Required</sup> <a name="LocationSelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector"></a>

```go
func LocationSelector() GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a>

---

##### `ResourceHierarchySelector`<sup>Required</sup> <a name="ResourceHierarchySelector" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector"></a>

```go
func ResourceHierarchySelector() GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a>

---

##### `LocationSelectorInput`<sup>Optional</sup> <a name="LocationSelectorInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput"></a>

```go
func LocationSelectorInput() GoogleComputeRolloutPlanWavesSelectorsLocationSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsLocationSelector">GoogleComputeRolloutPlanWavesSelectorsLocationSelector</a>

---

##### `ResourceHierarchySelectorInput`<sup>Optional</sup> <a name="ResourceHierarchySelectorInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput"></a>

```go
func ResourceHierarchySelectorInput() GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference <a name="GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.NewGoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders">ResetIncludedFolders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations">ResetIncludedOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects">ResetIncludedProjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludedFolders` <a name="ResetIncludedFolders" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders"></a>

```go
func ResetIncludedFolders()
```

##### `ResetIncludedOrganizations` <a name="ResetIncludedOrganizations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations"></a>

```go
func ResetIncludedOrganizations()
```

##### `ResetIncludedProjects` <a name="ResetIncludedProjects" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects"></a>

```go
func ResetIncludedProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput">IncludedFoldersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput">IncludedOrganizationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput">IncludedProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders">IncludedFolders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations">IncludedOrganizations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects">IncludedProjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludedFoldersInput`<sup>Optional</sup> <a name="IncludedFoldersInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput"></a>

```go
func IncludedFoldersInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedOrganizationsInput`<sup>Optional</sup> <a name="IncludedOrganizationsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput"></a>

```go
func IncludedOrganizationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedProjectsInput`<sup>Optional</sup> <a name="IncludedProjectsInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput"></a>

```go
func IncludedProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedFolders`<sup>Required</sup> <a name="IncludedFolders" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders"></a>

```go
func IncludedFolders() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedOrganizations`<sup>Required</sup> <a name="IncludedOrganizations" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations"></a>

```go
func IncludedOrganizations() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedProjects`<sup>Required</sup> <a name="IncludedProjects" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects"></a>

```go
func IncludedProjects() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector">GoogleComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---


### GoogleComputeRolloutPlanWavesValidationOutputReference <a name="GoogleComputeRolloutPlanWavesValidationOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.NewGoogleComputeRolloutPlanWavesValidationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRolloutPlanWavesValidationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata">PutTimeBasedValidationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata">ResetTimeBasedValidationMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTimeBasedValidationMetadata` <a name="PutTimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata"></a>

```go
func PutTimeBasedValidationMetadata(value GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---

##### `ResetTimeBasedValidationMetadata` <a name="ResetTimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata"></a>

```go
func ResetTimeBasedValidationMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata">TimeBasedValidationMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput">TimeBasedValidationMetadataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeBasedValidationMetadata`<sup>Required</sup> <a name="TimeBasedValidationMetadata" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata"></a>

```go
func TimeBasedValidationMetadata() GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a>

---

##### `TimeBasedValidationMetadataInput`<sup>Optional</sup> <a name="TimeBasedValidationMetadataInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput"></a>

```go
func TimeBasedValidationMetadataInput() GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRolloutPlanWavesValidation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidation">GoogleComputeRolloutPlanWavesValidation</a>

---


### GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference <a name="GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputerolloutplan"

googlecomputerolloutplan.NewGoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration">ResetWaitDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWaitDuration` <a name="ResetWaitDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration"></a>

```go
func ResetWaitDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput">WaitDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration">WaitDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WaitDurationInput`<sup>Optional</sup> <a name="WaitDurationInput" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput"></a>

```go
func WaitDurationInput() *string
```

- *Type:* *string

---

##### `WaitDuration`<sup>Required</sup> <a name="WaitDuration" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration"></a>

```go
func WaitDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRolloutPlan.GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">GoogleComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---



