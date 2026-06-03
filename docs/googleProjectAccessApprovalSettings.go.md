# `googleProjectAccessApprovalSettings` Submodule <a name="`googleProjectAccessApprovalSettings` Submodule" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProjectAccessApprovalSettings <a name="GoogleProjectAccessApprovalSettings" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings google_project_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprojectaccessapprovalsettings"

googleprojectaccessapprovalsettings.NewGoogleProjectAccessApprovalSettings(scope Construct, id *string, config GoogleProjectAccessApprovalSettingsConfig) GoogleProjectAccessApprovalSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig">GoogleProjectAccessApprovalSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig">GoogleProjectAccessApprovalSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putEnrolledServices">PutEnrolledServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetActiveKeyVersion">ResetActiveKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetNotificationEmails">ResetNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnrolledServices` <a name="PutEnrolledServices" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putEnrolledServices"></a>

```go
func PutEnrolledServices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putTimeouts"></a>

```go
func PutTimeouts(value GoogleProjectAccessApprovalSettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a>

---

##### `ResetActiveKeyVersion` <a name="ResetActiveKeyVersion" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetActiveKeyVersion"></a>

```go
func ResetActiveKeyVersion()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetNotificationEmails` <a name="ResetNotificationEmails" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetNotificationEmails"></a>

```go
func ResetNotificationEmails()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleProjectAccessApprovalSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprojectaccessapprovalsettings"

googleprojectaccessapprovalsettings.GoogleProjectAccessApprovalSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprojectaccessapprovalsettings"

googleprojectaccessapprovalsettings.GoogleProjectAccessApprovalSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprojectaccessapprovalsettings"

googleprojectaccessapprovalsettings.GoogleProjectAccessApprovalSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprojectaccessapprovalsettings"

googleprojectaccessapprovalsettings.GoogleProjectAccessApprovalSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleProjectAccessApprovalSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleProjectAccessApprovalSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleProjectAccessApprovalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleProjectAccessApprovalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.ancestorHasActiveKeyVersion">AncestorHasActiveKeyVersion</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledAncestor">EnrolledAncestor</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledServices">EnrolledServices</a></code> | <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList">GoogleProjectAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.invalidKeyVersion">InvalidKeyVersion</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference">GoogleProjectAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.activeKeyVersionInput">ActiveKeyVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledServicesInput">EnrolledServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.notificationEmailsInput">NotificationEmailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.notificationEmails">NotificationEmails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AncestorHasActiveKeyVersion`<sup>Required</sup> <a name="AncestorHasActiveKeyVersion" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```go
func AncestorHasActiveKeyVersion() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnrolledAncestor`<sup>Required</sup> <a name="EnrolledAncestor" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledAncestor"></a>

```go
func EnrolledAncestor() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnrolledServices`<sup>Required</sup> <a name="EnrolledServices" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledServices"></a>

```go
func EnrolledServices() GoogleProjectAccessApprovalSettingsEnrolledServicesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList">GoogleProjectAccessApprovalSettingsEnrolledServicesList</a>

---

##### `InvalidKeyVersion`<sup>Required</sup> <a name="InvalidKeyVersion" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.invalidKeyVersion"></a>

```go
func InvalidKeyVersion() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.timeouts"></a>

```go
func Timeouts() GoogleProjectAccessApprovalSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference">GoogleProjectAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `ActiveKeyVersionInput`<sup>Optional</sup> <a name="ActiveKeyVersionInput" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.activeKeyVersionInput"></a>

```go
func ActiveKeyVersionInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EnrolledServicesInput`<sup>Optional</sup> <a name="EnrolledServicesInput" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.enrolledServicesInput"></a>

```go
func EnrolledServicesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NotificationEmailsInput`<sup>Optional</sup> <a name="NotificationEmailsInput" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.notificationEmailsInput"></a>

```go
func NotificationEmailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ActiveKeyVersion`<sup>Required</sup> <a name="ActiveKeyVersion" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.activeKeyVersion"></a>

```go
func ActiveKeyVersion() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotificationEmails`<sup>Required</sup> <a name="NotificationEmails" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.notificationEmails"></a>

```go
func NotificationEmails() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProjectAccessApprovalSettingsConfig <a name="GoogleProjectAccessApprovalSettingsConfig" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprojectaccessapprovalsettings"

&googleprojectaccessapprovalsettings.GoogleProjectAccessApprovalSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EnrolledServices: interface{},
	ProjectId: *string,
	ActiveKeyVersion: *string,
	DeletionPolicy: *string,
	Id: *string,
	NotificationEmails: *[]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.enrolledServices">EnrolledServices</a></code> | <code>interface{}</code> | enrolled_services block. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | ID of the project of the access approval settings. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>*string</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#id GoogleProjectAccessApprovalSettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.notificationEmails">NotificationEmails</a></code> | <code>*[]*string</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.project">Project</a></code> | <code>*string</code> | Project id. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnrolledServices`<sup>Required</sup> <a name="EnrolledServices" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.enrolledServices"></a>

```go
EnrolledServices interface{}
```

- *Type:* interface{}

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#enrolled_services GoogleProjectAccessApprovalSettings#enrolled_services}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

ID of the project of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#project_id GoogleProjectAccessApprovalSettings#project_id}

---

##### `ActiveKeyVersion`<sup>Optional</sup> <a name="ActiveKeyVersion" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```go
ActiveKeyVersion *string
```

- *Type:* *string

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#active_key_version GoogleProjectAccessApprovalSettings#active_key_version}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#deletion_policy GoogleProjectAccessApprovalSettings#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#id GoogleProjectAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationEmails`<sup>Optional</sup> <a name="NotificationEmails" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.notificationEmails"></a>

```go
NotificationEmails *[]*string
```

- *Type:* *[]*string

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#notification_emails GoogleProjectAccessApprovalSettings#notification_emails}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#project GoogleProjectAccessApprovalSettings#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsConfig.property.timeouts"></a>

```go
Timeouts GoogleProjectAccessApprovalSettingsTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts">GoogleProjectAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#timeouts GoogleProjectAccessApprovalSettings#timeouts}

---

### GoogleProjectAccessApprovalSettingsEnrolledServices <a name="GoogleProjectAccessApprovalSettingsEnrolledServices" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprojectaccessapprovalsettings"

&googleprojectaccessapprovalsettings.GoogleProjectAccessApprovalSettingsEnrolledServices {
	CloudProduct: *string,
	EnrollmentLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.property.cloudProduct">CloudProduct</a></code> | <code>*string</code> | The product for which Access Approval will be enrolled. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">EnrollmentLevel</a></code> | <code>*string</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `CloudProduct`<sup>Required</sup> <a name="CloudProduct" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

```go
CloudProduct *string
```

- *Type:* *string

The product for which Access Approval will be enrolled.

Allowed values are listed (case-sensitive):
all
appengine.googleapis.com
bigquery.googleapis.com
bigtable.googleapis.com
cloudkms.googleapis.com
compute.googleapis.com
dataflow.googleapis.com
iam.googleapis.com
pubsub.googleapis.com
storage.googleapis.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#cloud_product GoogleProjectAccessApprovalSettings#cloud_product}

---

##### `EnrollmentLevel`<sup>Optional</sup> <a name="EnrollmentLevel" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```go
EnrollmentLevel *string
```

- *Type:* *string

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#enrollment_level GoogleProjectAccessApprovalSettings#enrollment_level}

---

### GoogleProjectAccessApprovalSettingsTimeouts <a name="GoogleProjectAccessApprovalSettingsTimeouts" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprojectaccessapprovalsettings"

&googleprojectaccessapprovalsettings.GoogleProjectAccessApprovalSettingsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#create GoogleProjectAccessApprovalSettings#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#delete GoogleProjectAccessApprovalSettings#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#update GoogleProjectAccessApprovalSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#create GoogleProjectAccessApprovalSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#delete GoogleProjectAccessApprovalSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_project_access_approval_settings#update GoogleProjectAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleProjectAccessApprovalSettingsEnrolledServicesList <a name="GoogleProjectAccessApprovalSettingsEnrolledServicesList" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprojectaccessapprovalsettings"

googleprojectaccessapprovalsettings.NewGoogleProjectAccessApprovalSettingsEnrolledServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleProjectAccessApprovalSettingsEnrolledServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.get"></a>

```go
func Get(index *f64) GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference <a name="GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprojectaccessapprovalsettings"

googleprojectaccessapprovalsettings.NewGoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">ResetEnrollmentLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnrollmentLevel` <a name="ResetEnrollmentLevel" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```go
func ResetEnrollmentLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">CloudProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">EnrollmentLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">CloudProduct</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">EnrollmentLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudProductInput`<sup>Optional</sup> <a name="CloudProductInput" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```go
func CloudProductInput() *string
```

- *Type:* *string

---

##### `EnrollmentLevelInput`<sup>Optional</sup> <a name="EnrollmentLevelInput" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```go
func EnrollmentLevelInput() *string
```

- *Type:* *string

---

##### `CloudProduct`<sup>Required</sup> <a name="CloudProduct" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```go
func CloudProduct() *string
```

- *Type:* *string

---

##### `EnrollmentLevel`<sup>Required</sup> <a name="EnrollmentLevel" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```go
func EnrollmentLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleProjectAccessApprovalSettingsTimeoutsOutputReference <a name="GoogleProjectAccessApprovalSettingsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprojectaccessapprovalsettings"

googleprojectaccessapprovalsettings.NewGoogleProjectAccessApprovalSettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleProjectAccessApprovalSettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleProjectAccessApprovalSettings.GoogleProjectAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



