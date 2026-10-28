# `googleBackupDrAutoProtectionPolicy` Submodule <a name="`googleBackupDrAutoProtectionPolicy` Submodule" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBackupDrAutoProtectionPolicy <a name="GoogleBackupDrAutoProtectionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy google_backup_dr_auto_protection_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.NewGoogleBackupDrAutoProtectionPolicy(scope Construct, id *string, config GoogleBackupDrAutoProtectionPolicyConfig) GoogleBackupDrAutoProtectionPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig">GoogleBackupDrAutoProtectionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig">GoogleBackupDrAutoProtectionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putBackupPlanDetails">PutBackupPlanDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupPlanDetails` <a name="PutBackupPlanDetails" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putBackupPlanDetails"></a>

```go
func PutBackupPlanDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putBackupPlanDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putCriteria"></a>

```go
func PutCriteria(value GoogleBackupDrAutoProtectionPolicyCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBackupDrAutoProtectionPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.GoogleBackupDrAutoProtectionPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.GoogleBackupDrAutoProtectionPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.GoogleBackupDrAutoProtectionPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.GoogleBackupDrAutoProtectionPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleBackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBackupDrAutoProtectionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBackupDrAutoProtectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBackupDrAutoProtectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.backupPlanDetails">BackupPlanDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList">GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.bindingSummary">BindingSummary</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList">GoogleBackupDrAutoProtectionPolicyBindingSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference">GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.policyEvaluationSummary">PolicyEvaluationSummary</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference">GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput">AutoProtectionPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.backupPlanDetailsInput">BackupPlanDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.autoProtectionPolicyId">AutoProtectionPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPlanDetails`<sup>Required</sup> <a name="BackupPlanDetails" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.backupPlanDetails"></a>

```go
func BackupPlanDetails() GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList">GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList</a>

---

##### `BindingSummary`<sup>Required</sup> <a name="BindingSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.bindingSummary"></a>

```go
func BindingSummary() GoogleBackupDrAutoProtectionPolicyBindingSummaryList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList">GoogleBackupDrAutoProtectionPolicyBindingSummaryList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.criteria"></a>

```go
func Criteria() GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference">GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyEvaluationSummary`<sup>Required</sup> <a name="PolicyEvaluationSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.policyEvaluationSummary"></a>

```go
func PolicyEvaluationSummary() GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference">GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AutoProtectionPolicyIdInput`<sup>Optional</sup> <a name="AutoProtectionPolicyIdInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput"></a>

```go
func AutoProtectionPolicyIdInput() *string
```

- *Type:* *string

---

##### `BackupPlanDetailsInput`<sup>Optional</sup> <a name="BackupPlanDetailsInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.backupPlanDetailsInput"></a>

```go
func BackupPlanDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.criteriaInput"></a>

```go
func CriteriaInput() GoogleBackupDrAutoProtectionPolicyCriteria
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoProtectionPolicyId`<sup>Required</sup> <a name="AutoProtectionPolicyId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.autoProtectionPolicyId"></a>

```go
func AutoProtectionPolicyId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBackupDrAutoProtectionPolicyBackupPlanDetails <a name="GoogleBackupDrAutoProtectionPolicyBackupPlanDetails" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

&googlebackupdrautoprotectionpolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails {
	BackupPlan: *string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType">ResourceType</a></code> | <code>*string</code> | The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'. |

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan"></a>

```go
BackupPlan *string
```

- *Type:* *string

The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'.

The backup plan
must be in the same location as the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#backup_plan GoogleBackupDrAutoProtectionPolicy#backup_plan}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#resource_type GoogleBackupDrAutoProtectionPolicy#resource_type}

---

### GoogleBackupDrAutoProtectionPolicyBindingSummary <a name="GoogleBackupDrAutoProtectionPolicyBindingSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

&googlebackupdrautoprotectionpolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary {

}
```


### GoogleBackupDrAutoProtectionPolicyConfig <a name="GoogleBackupDrAutoProtectionPolicyConfig" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

&googlebackupdrautoprotectionpolicy.GoogleBackupDrAutoProtectionPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AutoProtectionPolicyId: *string,
	BackupPlanDetails: interface{},
	Criteria: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria,
	Location: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId">AutoProtectionPolicyId</a></code> | <code>*string</code> | The ID of the auto protection policy. This becomes the final component of the policy's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.backupPlanDetails">BackupPlanDetails</a></code> | <code>interface{}</code> | backup_plan_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A description of the auto protection policy. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#id GoogleBackupDrAutoProtectionPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#project GoogleBackupDrAutoProtectionPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoProtectionPolicyId`<sup>Required</sup> <a name="AutoProtectionPolicyId" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId"></a>

```go
AutoProtectionPolicyId *string
```

- *Type:* *string

The ID of the auto protection policy. This becomes the final component of the policy's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#auto_protection_policy_id GoogleBackupDrAutoProtectionPolicy#auto_protection_policy_id}

---

##### `BackupPlanDetails`<sup>Required</sup> <a name="BackupPlanDetails" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.backupPlanDetails"></a>

```go
BackupPlanDetails interface{}
```

- *Type:* interface{}

backup_plan_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#backup_plan_details GoogleBackupDrAutoProtectionPolicy#backup_plan_details}

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.criteria"></a>

```go
Criteria GoogleBackupDrAutoProtectionPolicyCriteria
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#criteria GoogleBackupDrAutoProtectionPolicy#criteria}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#location GoogleBackupDrAutoProtectionPolicy#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#deletion_policy GoogleBackupDrAutoProtectionPolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#description GoogleBackupDrAutoProtectionPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#id GoogleBackupDrAutoProtectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#project GoogleBackupDrAutoProtectionPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleBackupDrAutoProtectionPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts">GoogleBackupDrAutoProtectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#timeouts GoogleBackupDrAutoProtectionPolicy#timeouts}

---

### GoogleBackupDrAutoProtectionPolicyCriteria <a name="GoogleBackupDrAutoProtectionPolicyCriteria" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

&googlebackupdrautoprotectionpolicy.GoogleBackupDrAutoProtectionPolicyCriteria {
	MatchingConditions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria.property.matchingConditions">MatchingConditions</a></code> | <code>interface{}</code> | matching_conditions block. |

---

##### `MatchingConditions`<sup>Required</sup> <a name="MatchingConditions" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria.property.matchingConditions"></a>

```go
MatchingConditions interface{}
```

- *Type:* interface{}

matching_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#matching_conditions GoogleBackupDrAutoProtectionPolicy#matching_conditions}

---

### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

&googlebackupdrautoprotectionpolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions {
	LabelCondition: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition">LabelCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | label_condition block. |

---

##### `LabelCondition`<sup>Optional</sup> <a name="LabelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition"></a>

```go
LabelCondition GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

label_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#label_condition GoogleBackupDrAutoProtectionPolicy#label_condition}

---

### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

&googlebackupdrautoprotectionpolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key">Key</a></code> | <code>*string</code> | The key of the label to match. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values">Values</a></code> | <code>*[]*string</code> | The values of the label to match. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the label to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#key GoogleBackupDrAutoProtectionPolicy#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The values of the label to match.

A resource matches the condition if its label
value is equal to any of the listed values. Currently, only one value is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#values GoogleBackupDrAutoProtectionPolicy#values}

---

### GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary <a name="GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

&googlebackupdrautoprotectionpolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary {

}
```


### GoogleBackupDrAutoProtectionPolicyTimeouts <a name="GoogleBackupDrAutoProtectionPolicyTimeouts" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

&googlebackupdrautoprotectionpolicy.GoogleBackupDrAutoProtectionPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#create GoogleBackupDrAutoProtectionPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#delete GoogleBackupDrAutoProtectionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#update GoogleBackupDrAutoProtectionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#create GoogleBackupDrAutoProtectionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#delete GoogleBackupDrAutoProtectionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_backup_dr_auto_protection_policy#update GoogleBackupDrAutoProtectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList <a name="GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.NewGoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.get"></a>

```go
func Get(index *f64) GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference <a name="GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.NewGoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput">BackupPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupPlanInput`<sup>Optional</sup> <a name="BackupPlanInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput"></a>

```go
func BackupPlanInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan"></a>

```go
func BackupPlan() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBackupDrAutoProtectionPolicyBindingSummaryList <a name="GoogleBackupDrAutoProtectionPolicyBindingSummaryList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.NewGoogleBackupDrAutoProtectionPolicyBindingSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBackupDrAutoProtectionPolicyBindingSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.get"></a>

```go
func Get(index *f64) GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference <a name="GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.NewGoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount">ProjectCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary">GoogleBackupDrAutoProtectionPolicyBindingSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectCount`<sup>Required</sup> <a name="ProjectCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount"></a>

```go
func ProjectCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBackupDrAutoProtectionPolicyBindingSummary
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyBindingSummary">GoogleBackupDrAutoProtectionPolicyBindingSummary</a>

---


### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.NewGoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---


### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.NewGoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get"></a>

```go
func Get(index *f64) GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference <a name="GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.NewGoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition">PutLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition">ResetLabelCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabelCondition` <a name="PutLabelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition"></a>

```go
func PutLabelCondition(value GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `ResetLabelCondition` <a name="ResetLabelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition"></a>

```go
func ResetLabelCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition">LabelCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput">LabelConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelCondition`<sup>Required</sup> <a name="LabelCondition" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition"></a>

```go
func LabelCondition() GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a>

---

##### `LabelConditionInput`<sup>Optional</sup> <a name="LabelConditionInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput"></a>

```go
func LabelConditionInput() GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference <a name="GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.NewGoogleBackupDrAutoProtectionPolicyCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions">PutMatchingConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchingConditions` <a name="PutMatchingConditions" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions"></a>

```go
func PutMatchingConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions">MatchingConditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput">MatchingConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingConditions`<sup>Required</sup> <a name="MatchingConditions" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions"></a>

```go
func MatchingConditions() GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">GoogleBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a>

---

##### `MatchingConditionsInput`<sup>Optional</sup> <a name="MatchingConditionsInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput"></a>

```go
func MatchingConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBackupDrAutoProtectionPolicyCriteria
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyCriteria">GoogleBackupDrAutoProtectionPolicyCriteria</a>

---


### GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList <a name="GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.NewGoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get"></a>

```go
func Get(index *f64) GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference <a name="GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.NewGoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount">FailedResourceCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount">MatchingResourceCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount">ProtectedResourceCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary">GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailedResourceCount`<sup>Required</sup> <a name="FailedResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount"></a>

```go
func FailedResourceCount() *string
```

- *Type:* *string

---

##### `MatchingResourceCount`<sup>Required</sup> <a name="MatchingResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount"></a>

```go
func MatchingResourceCount() *string
```

- *Type:* *string

---

##### `ProtectedResourceCount`<sup>Required</sup> <a name="ProtectedResourceCount" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount"></a>

```go
func ProtectedResourceCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary">GoogleBackupDrAutoProtectionPolicyPolicyEvaluationSummary</a>

---


### GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference <a name="GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlebackupdrautoprotectionpolicy"

googlebackupdrautoprotectionpolicy.NewGoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBackupDrAutoProtectionPolicy.GoogleBackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



