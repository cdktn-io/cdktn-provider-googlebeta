# `googleBackupDrAutoProtectionPolicyBinding` Submodule <a name="`googleBackupDrAutoProtectionPolicyBinding` Submodule" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBackupDrAutoProtectionPolicyBinding <a name="GoogleBackupDrAutoProtectionPolicyBinding" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding google_backup_dr_auto_protection_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicybinding"

googlebackupdrautoprotectionpolicybinding.NewGoogleBackupDrAutoProtectionPolicyBinding(scope Construct, id *string, config GoogleBackupDrAutoProtectionPolicyBindingConfig) GoogleBackupDrAutoProtectionPolicyBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig">GoogleBackupDrAutoProtectionPolicyBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig">GoogleBackupDrAutoProtectionPolicyBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetWaitForDelete">ResetWaitForDelete</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBackupDrAutoProtectionPolicyBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWaitForDelete` <a name="ResetWaitForDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.resetWaitForDelete"></a>

```go
func ResetWaitForDelete()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBackupDrAutoProtectionPolicyBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicybinding"

googlebackupdrautoprotectionpolicybinding.GoogleBackupDrAutoProtectionPolicyBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicybinding"

googlebackupdrautoprotectionpolicybinding.GoogleBackupDrAutoProtectionPolicyBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicybinding"

googlebackupdrautoprotectionpolicybinding.GoogleBackupDrAutoProtectionPolicyBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicybinding"

googlebackupdrautoprotectionpolicybinding.GoogleBackupDrAutoProtectionPolicyBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleBackupDrAutoProtectionPolicyBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBackupDrAutoProtectionPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBackupDrAutoProtectionPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBackupDrAutoProtectionPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.bindingEvaluationSummary">BindingEvaluationSummary</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList">GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference">GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingIdInput">AutoProtectionPolicyBindingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyIdInput">AutoProtectionPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.waitForDeleteInput">WaitForDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingId">AutoProtectionPolicyBindingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyId">AutoProtectionPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.waitForDelete">WaitForDelete</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BindingEvaluationSummary`<sup>Required</sup> <a name="BindingEvaluationSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.bindingEvaluationSummary"></a>

```go
func BindingEvaluationSummary() GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList">GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.timeouts"></a>

```go
func Timeouts() GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference">GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AutoProtectionPolicyBindingIdInput`<sup>Optional</sup> <a name="AutoProtectionPolicyBindingIdInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingIdInput"></a>

```go
func AutoProtectionPolicyBindingIdInput() *string
```

- *Type:* *string

---

##### `AutoProtectionPolicyIdInput`<sup>Optional</sup> <a name="AutoProtectionPolicyIdInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyIdInput"></a>

```go
func AutoProtectionPolicyIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForDeleteInput`<sup>Optional</sup> <a name="WaitForDeleteInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.waitForDeleteInput"></a>

```go
func WaitForDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `AutoProtectionPolicyBindingId`<sup>Required</sup> <a name="AutoProtectionPolicyBindingId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyBindingId"></a>

```go
func AutoProtectionPolicyBindingId() *string
```

- *Type:* *string

---

##### `AutoProtectionPolicyId`<sup>Required</sup> <a name="AutoProtectionPolicyId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.autoProtectionPolicyId"></a>

```go
func AutoProtectionPolicyId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `WaitForDelete`<sup>Required</sup> <a name="WaitForDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.waitForDelete"></a>

```go
func WaitForDelete() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary <a name="GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicybinding"

&googlebackupdrautoprotectionpolicybinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary {

}
```


### GoogleBackupDrAutoProtectionPolicyBindingConfig <a name="GoogleBackupDrAutoProtectionPolicyBindingConfig" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicybinding"

&googlebackupdrautoprotectionpolicybinding.GoogleBackupDrAutoProtectionPolicyBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AutoProtectionPolicyBindingId: *string,
	AutoProtectionPolicyId: *string,
	Location: *string,
	Scope: *string,
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts,
	WaitForDelete: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyBindingId">AutoProtectionPolicyBindingId</a></code> | <code>*string</code> | The ID of the binding. This becomes the final component of the binding's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyId">AutoProtectionPolicyId</a></code> | <code>*string</code> | The ID of the auto protection policy to bind. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.location">Location</a></code> | <code>*string</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.scope">Scope</a></code> | <code>*string</code> | The container that the policy is applied to, in the format 'projects/{project}'. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#id GoogleBackupDrAutoProtectionPolicyBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#project GoogleBackupDrAutoProtectionPolicyBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.waitForDelete">WaitForDelete</a></code> | <code>interface{}</code> | Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoProtectionPolicyBindingId`<sup>Required</sup> <a name="AutoProtectionPolicyBindingId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyBindingId"></a>

```go
AutoProtectionPolicyBindingId *string
```

- *Type:* *string

The ID of the binding. This becomes the final component of the binding's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#auto_protection_policy_binding_id GoogleBackupDrAutoProtectionPolicyBinding#auto_protection_policy_binding_id}

---

##### `AutoProtectionPolicyId`<sup>Required</sup> <a name="AutoProtectionPolicyId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.autoProtectionPolicyId"></a>

```go
AutoProtectionPolicyId *string
```

- *Type:* *string

The ID of the auto protection policy to bind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#auto_protection_policy_id GoogleBackupDrAutoProtectionPolicyBinding#auto_protection_policy_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#location GoogleBackupDrAutoProtectionPolicyBinding#location}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The container that the policy is applied to, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#scope GoogleBackupDrAutoProtectionPolicyBinding#scope}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#deletion_policy GoogleBackupDrAutoProtectionPolicyBinding#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#id GoogleBackupDrAutoProtectionPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#project GoogleBackupDrAutoProtectionPolicyBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.timeouts"></a>

```go
Timeouts GoogleBackupDrAutoProtectionPolicyBindingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts">GoogleBackupDrAutoProtectionPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#timeouts GoogleBackupDrAutoProtectionPolicyBinding#timeouts}

---

##### `WaitForDelete`<sup>Optional</sup> <a name="WaitForDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingConfig.property.waitForDelete"></a>

```go
WaitForDelete interface{}
```

- *Type:* interface{}

Whether Terraform should wait for the binding and all associated background resource unprotection operations to be completely deleted before returning.

Setting
'wait_for_delete = true' will block the Terraform script/execution until all resources
are unprotected and the binding is fully removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#wait_for_delete GoogleBackupDrAutoProtectionPolicyBinding#wait_for_delete}

---

### GoogleBackupDrAutoProtectionPolicyBindingTimeouts <a name="GoogleBackupDrAutoProtectionPolicyBindingTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicybinding"

&googlebackupdrautoprotectionpolicybinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#create GoogleBackupDrAutoProtectionPolicyBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#delete GoogleBackupDrAutoProtectionPolicyBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#update GoogleBackupDrAutoProtectionPolicyBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#create GoogleBackupDrAutoProtectionPolicyBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#delete GoogleBackupDrAutoProtectionPolicyBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_backup_dr_auto_protection_policy_binding#update GoogleBackupDrAutoProtectionPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList <a name="GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicybinding"

googlebackupdrautoprotectionpolicybinding.NewGoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get"></a>

```go
func Get(index *f64) GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference <a name="GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicybinding"

googlebackupdrautoprotectionpolicybinding.NewGoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.failedResourceCount">FailedResourceCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.matchingResourceCount">MatchingResourceCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.protectedResourceCount">ProtectedResourceCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary">GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailedResourceCount`<sup>Required</sup> <a name="FailedResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.failedResourceCount"></a>

```go
func FailedResourceCount() *string
```

- *Type:* *string

---

##### `MatchingResourceCount`<sup>Required</sup> <a name="MatchingResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.matchingResourceCount"></a>

```go
func MatchingResourceCount() *string
```

- *Type:* *string

---

##### `ProtectedResourceCount`<sup>Required</sup> <a name="ProtectedResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.protectedResourceCount"></a>

```go
func ProtectedResourceCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary">GoogleBackupDrAutoProtectionPolicyBindingBindingEvaluationSummary</a>

---


### GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference <a name="GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicybinding"

googlebackupdrautoprotectionpolicybinding.NewGoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicyBinding.GoogleBackupDrAutoProtectionPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



