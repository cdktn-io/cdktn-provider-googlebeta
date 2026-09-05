# `googleComputeGlobalVmExtensionPolicy` Submodule <a name="`googleComputeGlobalVmExtensionPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeGlobalVmExtensionPolicy <a name="GoogleComputeGlobalVmExtensionPolicy" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy google_compute_global_vm_extension_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicy(scope Construct, id *string, config GoogleComputeGlobalVmExtensionPolicyConfig) GoogleComputeGlobalVmExtensionPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig">GoogleComputeGlobalVmExtensionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig">GoogleComputeGlobalVmExtensionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putExtensionPolicies">PutExtensionPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putInstanceSelectors">PutInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putRolloutOperation">PutRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetInstanceSelectors">ResetInstanceSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtensionPolicies` <a name="PutExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putExtensionPolicies"></a>

```go
func PutExtensionPolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putExtensionPolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInstanceSelectors` <a name="PutInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putInstanceSelectors"></a>

```go
func PutInstanceSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putInstanceSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRolloutOperation` <a name="PutRolloutOperation" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putRolloutOperation"></a>

```go
func PutRolloutOperation(value GoogleComputeGlobalVmExtensionPolicyRolloutOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putRolloutOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeGlobalVmExtensionPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInstanceSelectors` <a name="ResetInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetInstanceSelectors"></a>

```go
func ResetInstanceSelectors()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeGlobalVmExtensionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleComputeGlobalVmExtensionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeGlobalVmExtensionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeGlobalVmExtensionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeGlobalVmExtensionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.extensionPolicies">ExtensionPolicies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList">GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.instanceSelectors">InstanceSelectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.rolloutOperation">RolloutOperation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference">GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.scopedResourceStatus">ScopedResourceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference">GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.updateTimestamp">UpdateTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.extensionPoliciesInput">ExtensionPoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.instanceSelectorsInput">InstanceSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.rolloutOperationInput">RolloutOperationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `ExtensionPolicies`<sup>Required</sup> <a name="ExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.extensionPolicies"></a>

```go
func ExtensionPolicies() GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList">GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceSelectors`<sup>Required</sup> <a name="InstanceSelectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.instanceSelectors"></a>

```go
func InstanceSelectors() GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `RolloutOperation`<sup>Required</sup> <a name="RolloutOperation" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.rolloutOperation"></a>

```go
func RolloutOperation() GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference">GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference</a>

---

##### `ScopedResourceStatus`<sup>Required</sup> <a name="ScopedResourceStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.scopedResourceStatus"></a>

```go
func ScopedResourceStatus() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference">GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference</a>

---

##### `UpdateTimestamp`<sup>Required</sup> <a name="UpdateTimestamp" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.updateTimestamp"></a>

```go
func UpdateTimestamp() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExtensionPoliciesInput`<sup>Optional</sup> <a name="ExtensionPoliciesInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.extensionPoliciesInput"></a>

```go
func ExtensionPoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceSelectorsInput`<sup>Optional</sup> <a name="InstanceSelectorsInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.instanceSelectorsInput"></a>

```go
func InstanceSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RolloutOperationInput`<sup>Optional</sup> <a name="RolloutOperationInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.rolloutOperationInput"></a>

```go
func RolloutOperationInput() GoogleComputeGlobalVmExtensionPolicyRolloutOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeGlobalVmExtensionPolicyConfig <a name="GoogleComputeGlobalVmExtensionPolicyConfig" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

&googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExtensionPolicies: interface{},
	Name: *string,
	RolloutOperation: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation,
	DeletionPolicy: *string,
	Description: *string,
	InstanceSelectors: interface{},
	Priority: *f64,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.extensionPolicies">ExtensionPolicies</a></code> | <code>interface{}</code> | extension_policies block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.rolloutOperation">RolloutOperation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a></code> | rollout_operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.instanceSelectors">InstanceSelectors</a></code> | <code>interface{}</code> | instance_selectors block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.priority">Priority</a></code> | <code>*f64</code> | Used to resolve conflicts when multiple policies are active. Defaults to 0. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#project GoogleComputeGlobalVmExtensionPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExtensionPolicies`<sup>Required</sup> <a name="ExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.extensionPolicies"></a>

```go
ExtensionPolicies interface{}
```

- *Type:* interface{}

extension_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#extension_policies GoogleComputeGlobalVmExtensionPolicy#extension_policies}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long and match the regular expression '^[a-z](%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?$' to comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#name GoogleComputeGlobalVmExtensionPolicy#name}

---

##### `RolloutOperation`<sup>Required</sup> <a name="RolloutOperation" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.rolloutOperation"></a>

```go
RolloutOperation GoogleComputeGlobalVmExtensionPolicyRolloutOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a>

rollout_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#rollout_operation GoogleComputeGlobalVmExtensionPolicy#rollout_operation}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#deletion_policy GoogleComputeGlobalVmExtensionPolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#description GoogleComputeGlobalVmExtensionPolicy#description}

---

##### `InstanceSelectors`<sup>Optional</sup> <a name="InstanceSelectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.instanceSelectors"></a>

```go
InstanceSelectors interface{}
```

- *Type:* interface{}

instance_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#instance_selectors GoogleComputeGlobalVmExtensionPolicy#instance_selectors}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Used to resolve conflicts when multiple policies are active. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#priority GoogleComputeGlobalVmExtensionPolicy#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#project GoogleComputeGlobalVmExtensionPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeGlobalVmExtensionPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts">GoogleComputeGlobalVmExtensionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#timeouts GoogleComputeGlobalVmExtensionPolicy#timeouts}

---

### GoogleComputeGlobalVmExtensionPolicyExtensionPolicies <a name="GoogleComputeGlobalVmExtensionPolicyExtensionPolicies" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

&googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies {
	ExtensionName: *string,
	PinnedVersion: *string,
	StringConfig: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.extensionName">ExtensionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#extension_name GoogleComputeGlobalVmExtensionPolicy#extension_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.pinnedVersion">PinnedVersion</a></code> | <code>*string</code> | The version pinning for the extension. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.stringConfig">StringConfig</a></code> | <code>*string</code> | String configuration payload. |

---

##### `ExtensionName`<sup>Required</sup> <a name="ExtensionName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.extensionName"></a>

```go
ExtensionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#extension_name GoogleComputeGlobalVmExtensionPolicy#extension_name}.

---

##### `PinnedVersion`<sup>Optional</sup> <a name="PinnedVersion" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.pinnedVersion"></a>

```go
PinnedVersion *string
```

- *Type:* *string

The version pinning for the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#pinned_version GoogleComputeGlobalVmExtensionPolicy#pinned_version}

---

##### `StringConfig`<sup>Optional</sup> <a name="StringConfig" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPolicies.property.stringConfig"></a>

```go
StringConfig *string
```

- *Type:* *string

String configuration payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#string_config GoogleComputeGlobalVmExtensionPolicy#string_config}

---

### GoogleComputeGlobalVmExtensionPolicyInstanceSelectors <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectors" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

&googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors {
	LabelSelector: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors.property.labelSelector">LabelSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | label_selector block. |

---

##### `LabelSelector`<sup>Optional</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectors.property.labelSelector"></a>

```go
LabelSelector GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

label_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#label_selector GoogleComputeGlobalVmExtensionPolicy#label_selector}

---

### GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

&googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector {
	InclusionLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels">InclusionLabels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |

---

##### `InclusionLabels`<sup>Optional</sup> <a name="InclusionLabels" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector.property.inclusionLabels"></a>

```go
InclusionLabels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#inclusion_labels GoogleComputeGlobalVmExtensionPolicy#inclusion_labels}

---

### GoogleComputeGlobalVmExtensionPolicyRolloutOperation <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperation" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

&googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation {
	RolloutInput: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a></code> | rollout_input block. |

---

##### `RolloutInput`<sup>Required</sup> <a name="RolloutInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation.property.rolloutInput"></a>

```go
RolloutInput GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

rollout_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#rollout_input GoogleComputeGlobalVmExtensionPolicy#rollout_input}

---

### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

&googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput {
	ConflictBehavior: *string,
	Name: *string,
	PredefinedRolloutPlan: *string,
	RetryUuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.conflictBehavior">ConflictBehavior</a></code> | <code>*string</code> | Specifies the behavior of the rollout if a conflict is detected. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.name">Name</a></code> | <code>*string</code> | The name of the rollout plan. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.predefinedRolloutPlan">PredefinedRolloutPlan</a></code> | <code>*string</code> | Specifies the predefined rollout plan for the policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.retryUuid">RetryUuid</a></code> | <code>*string</code> | The UUID that identifies a policy rollout retry attempt. |

---

##### `ConflictBehavior`<sup>Optional</sup> <a name="ConflictBehavior" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.conflictBehavior"></a>

```go
ConflictBehavior *string
```

- *Type:* *string

Specifies the behavior of the rollout if a conflict is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#conflict_behavior GoogleComputeGlobalVmExtensionPolicy#conflict_behavior}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the rollout plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#name GoogleComputeGlobalVmExtensionPolicy#name}

---

##### `PredefinedRolloutPlan`<sup>Optional</sup> <a name="PredefinedRolloutPlan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.predefinedRolloutPlan"></a>

```go
PredefinedRolloutPlan *string
```

- *Type:* *string

Specifies the predefined rollout plan for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#predefined_rollout_plan GoogleComputeGlobalVmExtensionPolicy#predefined_rollout_plan}

---

##### `RetryUuid`<sup>Optional</sup> <a name="RetryUuid" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput.property.retryUuid"></a>

```go
RetryUuid *string
```

- *Type:* *string

The UUID that identifies a policy rollout retry attempt.

It should only be set when retrying an existing rollout. Updating this field along with other policy fields (description, extension_policies, instance_selectors, priority) in the same plan will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#retry_uuid GoogleComputeGlobalVmExtensionPolicy#retry_uuid}

---

### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

&googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus {

}
```


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

&googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts {

}
```


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

&googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus {

}
```


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

&googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout {

}
```


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

&googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus {

}
```


### GoogleComputeGlobalVmExtensionPolicyTimeouts <a name="GoogleComputeGlobalVmExtensionPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

&googlecomputeglobalvmextensionpolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#create GoogleComputeGlobalVmExtensionPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#delete GoogleComputeGlobalVmExtensionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#update GoogleComputeGlobalVmExtensionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#create GoogleComputeGlobalVmExtensionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#delete GoogleComputeGlobalVmExtensionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_compute_global_vm_extension_policy#update GoogleComputeGlobalVmExtensionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList <a name="GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.get"></a>

```go
func Get(index *f64) GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion">ResetPinnedVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig">ResetStringConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPinnedVersion` <a name="ResetPinnedVersion" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetPinnedVersion"></a>

```go
func ResetPinnedVersion()
```

##### `ResetStringConfig` <a name="ResetStringConfig" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.resetStringConfig"></a>

```go
func ResetStringConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput">ExtensionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput">PinnedVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput">StringConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName">ExtensionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion">PinnedVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig">StringConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtensionNameInput`<sup>Optional</sup> <a name="ExtensionNameInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionNameInput"></a>

```go
func ExtensionNameInput() *string
```

- *Type:* *string

---

##### `PinnedVersionInput`<sup>Optional</sup> <a name="PinnedVersionInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersionInput"></a>

```go
func PinnedVersionInput() *string
```

- *Type:* *string

---

##### `StringConfigInput`<sup>Optional</sup> <a name="StringConfigInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfigInput"></a>

```go
func StringConfigInput() *string
```

- *Type:* *string

---

##### `ExtensionName`<sup>Required</sup> <a name="ExtensionName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.extensionName"></a>

```go
func ExtensionName() *string
```

- *Type:* *string

---

##### `PinnedVersion`<sup>Required</sup> <a name="PinnedVersion" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.pinnedVersion"></a>

```go
func PinnedVersion() *string
```

- *Type:* *string

---

##### `StringConfig`<sup>Required</sup> <a name="StringConfig" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.stringConfig"></a>

```go
func StringConfig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyExtensionPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels">ResetInclusionLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInclusionLabels` <a name="ResetInclusionLabels" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.resetInclusionLabels"></a>

```go
func ResetInclusionLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput">InclusionLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels">InclusionLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InclusionLabelsInput`<sup>Optional</sup> <a name="InclusionLabelsInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabelsInput"></a>

```go
func InclusionLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InclusionLabels`<sup>Required</sup> <a name="InclusionLabels" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.inclusionLabels"></a>

```go
func InclusionLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---


### GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.get"></a>

```go
func Get(index *f64) GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector">PutLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector">ResetLabelSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabelSelector` <a name="PutLabelSelector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector"></a>

```go
func PutLabelSelector(value GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.putLabelSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `ResetLabelSelector` <a name="ResetLabelSelector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.resetLabelSelector"></a>

```go
func ResetLabelSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector">LabelSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput">LabelSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelector"></a>

```go
func LabelSelector() GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelectorOutputReference</a>

---

##### `LabelSelectorInput`<sup>Optional</sup> <a name="LabelSelectorInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.labelSelectorInput"></a>

```go
func LabelSelectorInput() GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector">GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsLabelSelector</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyInstanceSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput">PutRolloutInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRolloutInput` <a name="PutRolloutInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput"></a>

```go
func PutRolloutInput(value GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.putRolloutInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutStatus">RolloutStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInputInput">RolloutInputInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RolloutInput`<sup>Required</sup> <a name="RolloutInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInput"></a>

```go
func RolloutInput() GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference</a>

---

##### `RolloutStatus`<sup>Required</sup> <a name="RolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutStatus"></a>

```go
func RolloutStatus() GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList</a>

---

##### `RolloutInputInput`<sup>Optional</sup> <a name="RolloutInputInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.rolloutInputInput"></a>

```go
func RolloutInputInput() GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeGlobalVmExtensionPolicyRolloutOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperation">GoogleComputeGlobalVmExtensionPolicyRolloutOperation</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetConflictBehavior">ResetConflictBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetPredefinedRolloutPlan">ResetPredefinedRolloutPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetRetryUuid">ResetRetryUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConflictBehavior` <a name="ResetConflictBehavior" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetConflictBehavior"></a>

```go
func ResetConflictBehavior()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPredefinedRolloutPlan` <a name="ResetPredefinedRolloutPlan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetPredefinedRolloutPlan"></a>

```go
func ResetPredefinedRolloutPlan()
```

##### `ResetRetryUuid` <a name="ResetRetryUuid" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.resetRetryUuid"></a>

```go
func ResetRetryUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehaviorInput">ConflictBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput">PredefinedRolloutPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuidInput">RetryUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehavior">ConflictBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan">PredefinedRolloutPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuid">RetryUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConflictBehaviorInput`<sup>Optional</sup> <a name="ConflictBehaviorInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehaviorInput"></a>

```go
func ConflictBehaviorInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PredefinedRolloutPlanInput`<sup>Optional</sup> <a name="PredefinedRolloutPlanInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput"></a>

```go
func PredefinedRolloutPlanInput() *string
```

- *Type:* *string

---

##### `RetryUuidInput`<sup>Optional</sup> <a name="RetryUuidInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuidInput"></a>

```go
func RetryUuidInput() *string
```

- *Type:* *string

---

##### `ConflictBehavior`<sup>Required</sup> <a name="ConflictBehavior" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.conflictBehavior"></a>

```go
func ConflictBehavior() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PredefinedRolloutPlan`<sup>Required</sup> <a name="PredefinedRolloutPlan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan"></a>

```go
func PredefinedRolloutPlan() *string
```

- *Type:* *string

---

##### `RetryUuid`<sup>Required</sup> <a name="RetryUuid" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.retryUuid"></a>

```go
func RetryUuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInputOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutInput</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.get"></a>

```go
func Get(index *f64) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.get"></a>

```go
func Get(index *f64) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.locationName">LocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.locationName"></a>

```go
func LocationName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatus</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.locationRolloutStatus">LocationRolloutStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rollout">Rollout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rolloutPlan">RolloutPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationRolloutStatus`<sup>Required</sup> <a name="LocationRolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.locationRolloutStatus"></a>

```go
func LocationRolloutStatus() GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsLocationRolloutStatusList</a>

---

##### `Rollout`<sup>Required</sup> <a name="Rollout" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rollout"></a>

```go
func Rollout() *string
```

- *Type:* *string

---

##### `RolloutPlan`<sup>Required</sup> <a name="RolloutPlan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.rolloutPlan"></a>

```go
func RolloutPlan() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRollouts</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.get"></a>

```go
func Get(index *f64) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.currentRollouts">CurrentRollouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.previousRollout">PreviousRollout</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentRollouts`<sup>Required</sup> <a name="CurrentRollouts" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.currentRollouts"></a>

```go
func CurrentRollouts() GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusCurrentRolloutsList</a>

---

##### `PreviousRollout`<sup>Required</sup> <a name="PreviousRollout" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.previousRollout"></a>

```go
func PreviousRollout() GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatus</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.get"></a>

```go
func Get(index *f64) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.get"></a>

```go
func Get(index *f64) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.locationName">LocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.locationName"></a>

```go
func LocationName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatus</a>

---


### GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.locationRolloutStatus">LocationRolloutStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rollout">Rollout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rolloutPlan">RolloutPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationRolloutStatus`<sup>Required</sup> <a name="LocationRolloutStatus" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.locationRolloutStatus"></a>

```go
func LocationRolloutStatus() GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutLocationRolloutStatusList</a>

---

##### `Rollout`<sup>Required</sup> <a name="Rollout" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rollout"></a>

```go
func Rollout() *string
```

- *Type:* *string

---

##### `RolloutPlan`<sup>Required</sup> <a name="RolloutPlan" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.rolloutPlan"></a>

```go
func RolloutPlan() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRolloutOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout">GoogleComputeGlobalVmExtensionPolicyRolloutOperationRolloutStatusPreviousRollout</a>

---


### GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference <a name="GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeglobalvmextensionpolicy"

googlecomputeglobalvmextensionpolicy.NewGoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeGlobalVmExtensionPolicy.GoogleComputeGlobalVmExtensionPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



