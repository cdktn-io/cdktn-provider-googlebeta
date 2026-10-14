# `googleComputeSnapshotRecycleBinPolicy` Submodule <a name="`googleComputeSnapshotRecycleBinPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeSnapshotRecycleBinPolicy <a name="GoogleComputeSnapshotRecycleBinPolicy" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy google_compute_snapshot_recycle_bin_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

googlecomputesnapshotrecyclebinpolicy.NewGoogleComputeSnapshotRecycleBinPolicy(scope Construct, id *string, config GoogleComputeSnapshotRecycleBinPolicyConfig) GoogleComputeSnapshotRecycleBinPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig">GoogleComputeSnapshotRecycleBinPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig">GoogleComputeSnapshotRecycleBinPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeSnapshotRecycleBinPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetRules"></a>

```go
func ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

googlecomputesnapshotrecyclebinpolicy.GoogleComputeSnapshotRecycleBinPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

googlecomputesnapshotrecyclebinpolicy.GoogleComputeSnapshotRecycleBinPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

googlecomputesnapshotrecyclebinpolicy.GoogleComputeSnapshotRecycleBinPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

googlecomputesnapshotrecyclebinpolicy.GoogleComputeSnapshotRecycleBinPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleComputeSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeSnapshotRecycleBinPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeSnapshotRecycleBinPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeSnapshotRecycleBinPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList">GoogleComputeSnapshotRecycleBinPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.systemRules">SystemRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList">GoogleComputeSnapshotRecycleBinPolicySystemRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rules"></a>

```go
func Rules() GoogleComputeSnapshotRecycleBinPolicyRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList">GoogleComputeSnapshotRecycleBinPolicyRulesList</a>

---

##### `SystemRules`<sup>Required</sup> <a name="SystemRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.systemRules"></a>

```go
func SystemRules() GoogleComputeSnapshotRecycleBinPolicySystemRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList">GoogleComputeSnapshotRecycleBinPolicySystemRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeSnapshotRecycleBinPolicyConfig <a name="GoogleComputeSnapshotRecycleBinPolicyConfig" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

&googlecomputesnapshotrecyclebinpolicy.GoogleComputeSnapshotRecycleBinPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Project: *string,
	Rules: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#id GoogleComputeSnapshotRecycleBinPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#project GoogleComputeSnapshotRecycleBinPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#id GoogleComputeSnapshotRecycleBinPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#project GoogleComputeSnapshotRecycleBinPolicy#project}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#rules GoogleComputeSnapshotRecycleBinPolicy#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeSnapshotRecycleBinPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts">GoogleComputeSnapshotRecycleBinPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#timeouts GoogleComputeSnapshotRecycleBinPolicy#timeouts}

---

### GoogleComputeSnapshotRecycleBinPolicyRules <a name="GoogleComputeSnapshotRecycleBinPolicyRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

&googlecomputesnapshotrecyclebinpolicy.GoogleComputeSnapshotRecycleBinPolicyRules {
	Name: *string,
	StandardSnapshots: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#name GoogleComputeSnapshotRecycleBinPolicy#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.standardSnapshots">StandardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | standard_snapshots block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#name GoogleComputeSnapshotRecycleBinPolicy#name}.

---

##### `StandardSnapshots`<sup>Optional</sup> <a name="StandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRules.property.standardSnapshots"></a>

```go
StandardSnapshots GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

standard_snapshots block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#standard_snapshots GoogleComputeSnapshotRecycleBinPolicy#standard_snapshots}

---

### GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots <a name="GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

&googlecomputesnapshotrecyclebinpolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots {
	RetentionDurationDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>*f64</code> | The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin. |

---

##### `RetentionDurationDays`<sup>Optional</sup> <a name="RetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays"></a>

```go
RetentionDurationDays *f64
```

- *Type:* *f64

The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#retention_duration_days GoogleComputeSnapshotRecycleBinPolicy#retention_duration_days}

---

### GoogleComputeSnapshotRecycleBinPolicySystemRules <a name="GoogleComputeSnapshotRecycleBinPolicySystemRules" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

&googlecomputesnapshotrecyclebinpolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules {

}
```


### GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

&googlecomputesnapshotrecyclebinpolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots {

}
```


### GoogleComputeSnapshotRecycleBinPolicyTimeouts <a name="GoogleComputeSnapshotRecycleBinPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

&googlecomputesnapshotrecyclebinpolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#create GoogleComputeSnapshotRecycleBinPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#delete GoogleComputeSnapshotRecycleBinPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#update GoogleComputeSnapshotRecycleBinPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#create GoogleComputeSnapshotRecycleBinPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#delete GoogleComputeSnapshotRecycleBinPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.7.0/docs/resources/google_compute_snapshot_recycle_bin_policy#update GoogleComputeSnapshotRecycleBinPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeSnapshotRecycleBinPolicyRulesList <a name="GoogleComputeSnapshotRecycleBinPolicyRulesList" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

googlecomputesnapshotrecyclebinpolicy.NewGoogleComputeSnapshotRecycleBinPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeSnapshotRecycleBinPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.get"></a>

```go
func Get(index *f64) GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

googlecomputesnapshotrecyclebinpolicy.NewGoogleComputeSnapshotRecycleBinPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots">PutStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots">ResetStandardSnapshots</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStandardSnapshots` <a name="PutStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots"></a>

```go
func PutStandardSnapshots(value GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `ResetStandardSnapshots` <a name="ResetStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots"></a>

```go
func ResetStandardSnapshots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots">StandardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput">StandardSnapshotsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StandardSnapshots`<sup>Required</sup> <a name="StandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots"></a>

```go
func StandardSnapshots() GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StandardSnapshotsInput`<sup>Optional</sup> <a name="StandardSnapshotsInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput"></a>

```go
func StandardSnapshotsInput() GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

googlecomputesnapshotrecyclebinpolicy.NewGoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays">ResetRetentionDurationDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionDurationDays` <a name="ResetRetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays"></a>

```go
func ResetRetentionDurationDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput">RetentionDurationDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionDurationDaysInput`<sup>Optional</sup> <a name="RetentionDurationDaysInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput"></a>

```go
func RetentionDurationDaysInput() *f64
```

- *Type:* *f64

---

##### `RetentionDurationDays`<sup>Required</sup> <a name="RetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```go
func RetentionDurationDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesList <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesList" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

googlecomputesnapshotrecyclebinpolicy.NewGoogleComputeSnapshotRecycleBinPolicySystemRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeSnapshotRecycleBinPolicySystemRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.get"></a>

```go
func Get(index *f64) GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

googlecomputesnapshotrecyclebinpolicy.NewGoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots">StandardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules">GoogleComputeSnapshotRecycleBinPolicySystemRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StandardSnapshots`<sup>Required</sup> <a name="StandardSnapshots" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots"></a>

```go
func StandardSnapshots() GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeSnapshotRecycleBinPolicySystemRules
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRules">GoogleComputeSnapshotRecycleBinPolicySystemRules</a>

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

googlecomputesnapshotrecyclebinpolicy.NewGoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get"></a>

```go
func Get(index *f64) GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

googlecomputesnapshotrecyclebinpolicy.NewGoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionDurationDays`<sup>Required</sup> <a name="RetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```go
func RetentionDurationDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a>

---


### GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference <a name="GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlecomputesnapshotrecyclebinpolicy"

googlecomputesnapshotrecyclebinpolicy.NewGoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeSnapshotRecycleBinPolicy.GoogleComputeSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



