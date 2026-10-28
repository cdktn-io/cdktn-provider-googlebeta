# `googleComputeOrganizationSnapshotRecycleBinPolicy` Submodule <a name="`googleComputeOrganizationSnapshotRecycleBinPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicy <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy google_compute_organization_snapshot_recycle_bin_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

googlecomputeorganizationsnapshotrecyclebinpolicy.NewGoogleComputeOrganizationSnapshotRecycleBinPolicy(scope Construct, id *string, config GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig) GoogleComputeOrganizationSnapshotRecycleBinPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig">GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig">GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetRules"></a>

```go
func ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeOrganizationSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

googlecomputeorganizationsnapshotrecyclebinpolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

googlecomputeorganizationsnapshotrecyclebinpolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

googlecomputeorganizationsnapshotrecyclebinpolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

googlecomputeorganizationsnapshotrecyclebinpolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleComputeOrganizationSnapshotRecycleBinPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeOrganizationSnapshotRecycleBinPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeOrganizationSnapshotRecycleBinPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeOrganizationSnapshotRecycleBinPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.systemRules">SystemRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rules"></a>

```go
func Rules() GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList</a>

---

##### `SystemRules`<sup>Required</sup> <a name="SystemRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.systemRules"></a>

```go
func SystemRules() GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

&googlecomputeorganizationsnapshotrecyclebinpolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Organization: *string,
	Id: *string,
	Rules: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.organization">Organization</a></code> | <code>*string</code> | The organization ID for this request (e.g., "organizations/1234"). |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The organization ID for this request (e.g., "organizations/1234").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#organization GoogleComputeOrganizationSnapshotRecycleBinPolicy#organization}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#id GoogleComputeOrganizationSnapshotRecycleBinPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#rules GoogleComputeOrganizationSnapshotRecycleBinPolicy#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts">GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#timeouts GoogleComputeOrganizationSnapshotRecycleBinPolicy#timeouts}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRules <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

&googlecomputeorganizationsnapshotrecyclebinpolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules {
	Name: *string,
	StandardSnapshots: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#name GoogleComputeOrganizationSnapshotRecycleBinPolicy#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.standardSnapshots">StandardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | standard_snapshots block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#name GoogleComputeOrganizationSnapshotRecycleBinPolicy#name}.

---

##### `StandardSnapshots`<sup>Optional</sup> <a name="StandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRules.property.standardSnapshots"></a>

```go
StandardSnapshots GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

standard_snapshots block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#standard_snapshots GoogleComputeOrganizationSnapshotRecycleBinPolicy#standard_snapshots}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

&googlecomputeorganizationsnapshotrecyclebinpolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots {
	RetentionDurationDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>*f64</code> | The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin. |

---

##### `RetentionDurationDays`<sup>Optional</sup> <a name="RetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots.property.retentionDurationDays"></a>

```go
RetentionDurationDays *f64
```

- *Type:* *f64

The retention duration for snapshots in the recycle bin after which the snapshots are automatically deleted from recycle bin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#retention_duration_days GoogleComputeOrganizationSnapshotRecycleBinPolicy#retention_duration_days}

---

### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

&googlecomputeorganizationsnapshotrecyclebinpolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules {

}
```


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

&googlecomputeorganizationsnapshotrecyclebinpolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots {

}
```


### GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

&googlecomputeorganizationsnapshotrecyclebinpolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#create GoogleComputeOrganizationSnapshotRecycleBinPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#delete GoogleComputeOrganizationSnapshotRecycleBinPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#update GoogleComputeOrganizationSnapshotRecycleBinPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#create GoogleComputeOrganizationSnapshotRecycleBinPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#delete GoogleComputeOrganizationSnapshotRecycleBinPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_compute_organization_snapshot_recycle_bin_policy#update GoogleComputeOrganizationSnapshotRecycleBinPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

googlecomputeorganizationsnapshotrecyclebinpolicy.NewGoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get"></a>

```go
func Get(index *f64) GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

googlecomputeorganizationsnapshotrecyclebinpolicy.NewGoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots">PutStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots">ResetStandardSnapshots</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStandardSnapshots` <a name="PutStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots"></a>

```go
func PutStandardSnapshots(value GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.putStandardSnapshots.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `ResetStandardSnapshots` <a name="ResetStandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.resetStandardSnapshots"></a>

```go
func ResetStandardSnapshots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots">StandardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput">StandardSnapshotsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StandardSnapshots`<sup>Required</sup> <a name="StandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshots"></a>

```go
func StandardSnapshots() GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StandardSnapshotsInput`<sup>Optional</sup> <a name="StandardSnapshotsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.standardSnapshotsInput"></a>

```go
func StandardSnapshotsInput() GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

googlecomputeorganizationsnapshotrecyclebinpolicy.NewGoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays">ResetRetentionDurationDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionDurationDays` <a name="ResetRetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.resetRetentionDurationDays"></a>

```go
func ResetRetentionDurationDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput">RetentionDurationDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionDurationDaysInput`<sup>Optional</sup> <a name="RetentionDurationDaysInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDaysInput"></a>

```go
func RetentionDurationDaysInput() *f64
```

- *Type:* *f64

---

##### `RetentionDurationDays`<sup>Required</sup> <a name="RetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```go
func RetentionDurationDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicyRulesStandardSnapshots</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

googlecomputeorganizationsnapshotrecyclebinpolicy.NewGoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get"></a>

```go
func Get(index *f64) GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

googlecomputeorganizationsnapshotrecyclebinpolicy.NewGoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots">StandardSnapshots</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StandardSnapshots`<sup>Required</sup> <a name="StandardSnapshots" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.standardSnapshots"></a>

```go
func StandardSnapshots() GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRules</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

googlecomputeorganizationsnapshotrecyclebinpolicy.NewGoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get"></a>

```go
func Get(index *f64) GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

googlecomputeorganizationsnapshotrecyclebinpolicy.NewGoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionDurationDays`<sup>Required</sup> <a name="RetentionDurationDays" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.retentionDurationDays"></a>

```go
func RetentionDurationDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshotsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots">GoogleComputeOrganizationSnapshotRecycleBinPolicySystemRulesStandardSnapshots</a>

---


### GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference <a name="GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecomputeorganizationsnapshotrecyclebinpolicy"

googlecomputeorganizationsnapshotrecyclebinpolicy.NewGoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSnapshotRecycleBinPolicy.GoogleComputeOrganizationSnapshotRecycleBinPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



