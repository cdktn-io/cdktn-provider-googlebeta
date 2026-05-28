# `googlePrivilegedAccessManagerSettings` Submodule <a name="`googlePrivilegedAccessManagerSettings` Submodule" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivilegedAccessManagerSettings <a name="GooglePrivilegedAccessManagerSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings google_privileged_access_manager_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

googleprivilegedaccessmanagersettings.NewGooglePrivilegedAccessManagerSettings(scope Construct, id *string, config GooglePrivilegedAccessManagerSettingsConfig) GooglePrivilegedAccessManagerSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig">GooglePrivilegedAccessManagerSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig">GooglePrivilegedAccessManagerSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putEmailNotificationSettings">PutEmailNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putServiceAccountApproverSettings">PutServiceAccountApproverSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetEmailNotificationSettings">ResetEmailNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetServiceAccountApproverSettings">ResetServiceAccountApproverSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmailNotificationSettings` <a name="PutEmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putEmailNotificationSettings"></a>

```go
func PutEmailNotificationSettings(value GooglePrivilegedAccessManagerSettingsEmailNotificationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putEmailNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

---

##### `PutServiceAccountApproverSettings` <a name="PutServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putServiceAccountApproverSettings"></a>

```go
func PutServiceAccountApproverSettings(value GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putServiceAccountApproverSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putTimeouts"></a>

```go
func PutTimeouts(value GooglePrivilegedAccessManagerSettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

---

##### `ResetEmailNotificationSettings` <a name="ResetEmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetEmailNotificationSettings"></a>

```go
func ResetEmailNotificationSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetServiceAccountApproverSettings` <a name="ResetServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetServiceAccountApproverSettings"></a>

```go
func ResetServiceAccountApproverSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GooglePrivilegedAccessManagerSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

googleprivilegedaccessmanagersettings.GooglePrivilegedAccessManagerSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

googleprivilegedaccessmanagersettings.GooglePrivilegedAccessManagerSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

googleprivilegedaccessmanagersettings.GooglePrivilegedAccessManagerSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

googleprivilegedaccessmanagersettings.GooglePrivilegedAccessManagerSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GooglePrivilegedAccessManagerSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GooglePrivilegedAccessManagerSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GooglePrivilegedAccessManagerSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GooglePrivilegedAccessManagerSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettings">EmailNotificationSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettings">ServiceAccountApproverSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference">GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettingsInput">EmailNotificationSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettingsInput">ServiceAccountApproverSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EmailNotificationSettings`<sup>Required</sup> <a name="EmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettings"></a>

```go
func EmailNotificationSettings() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceAccountApproverSettings`<sup>Required</sup> <a name="ServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettings"></a>

```go
func ServiceAccountApproverSettings() GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeouts"></a>

```go
func Timeouts() GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference">GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `EmailNotificationSettingsInput`<sup>Optional</sup> <a name="EmailNotificationSettingsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettingsInput"></a>

```go
func EmailNotificationSettingsInput() GooglePrivilegedAccessManagerSettingsEmailNotificationSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ServiceAccountApproverSettingsInput`<sup>Optional</sup> <a name="ServiceAccountApproverSettingsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettingsInput"></a>

```go
func ServiceAccountApproverSettingsInput() GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivilegedAccessManagerSettingsConfig <a name="GooglePrivilegedAccessManagerSettingsConfig" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

&googleprivilegedaccessmanagersettings.GooglePrivilegedAccessManagerSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Parent: *string,
	EmailNotificationSettings: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings,
	Id: *string,
	ServiceAccountApproverSettings: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.location">Location</a></code> | <code>*string</code> | The region of the PAM settings resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.parent">Parent</a></code> | <code>*string</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.emailNotificationSettings">EmailNotificationSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a></code> | email_notification_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#id GooglePrivilegedAccessManagerSettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.serviceAccountApproverSettings">ServiceAccountApproverSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a></code> | service_account_approver_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The region of the PAM settings resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#location GooglePrivilegedAccessManagerSettings#location}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#parent GooglePrivilegedAccessManagerSettings#parent}

---

##### `EmailNotificationSettings`<sup>Optional</sup> <a name="EmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.emailNotificationSettings"></a>

```go
EmailNotificationSettings GooglePrivilegedAccessManagerSettingsEmailNotificationSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

email_notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#email_notification_settings GooglePrivilegedAccessManagerSettings#email_notification_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#id GooglePrivilegedAccessManagerSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceAccountApproverSettings`<sup>Optional</sup> <a name="ServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.serviceAccountApproverSettings"></a>

```go
ServiceAccountApproverSettings GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

service_account_approver_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#service_account_approver_settings GooglePrivilegedAccessManagerSettings#service_account_approver_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.timeouts"></a>

```go
Timeouts GooglePrivilegedAccessManagerSettingsTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#timeouts GooglePrivilegedAccessManagerSettings#timeouts}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettings <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

&googleprivilegedaccessmanagersettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings {
	CustomNotificationBehavior: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior,
	DisableAllNotifications: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.customNotificationBehavior">CustomNotificationBehavior</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a></code> | custom_notification_behavior block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.disableAllNotifications">DisableAllNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a></code> | disable_all_notifications block. |

---

##### `CustomNotificationBehavior`<sup>Optional</sup> <a name="CustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.customNotificationBehavior"></a>

```go
CustomNotificationBehavior GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

custom_notification_behavior block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#custom_notification_behavior GooglePrivilegedAccessManagerSettings#custom_notification_behavior}

---

##### `DisableAllNotifications`<sup>Optional</sup> <a name="DisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.disableAllNotifications"></a>

```go
DisableAllNotifications GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

disable_all_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#disable_all_notifications GooglePrivilegedAccessManagerSettings#disable_all_notifications}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

&googleprivilegedaccessmanagersettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior {
	AdminNotifications: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications,
	ApproverNotifications: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications,
	RequesterNotifications: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.requesterNotifications">RequesterNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a></code> | requester_notifications block. |

---

##### `AdminNotifications`<sup>Optional</sup> <a name="AdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.adminNotifications"></a>

```go
AdminNotifications GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#admin_notifications GooglePrivilegedAccessManagerSettings#admin_notifications}

---

##### `ApproverNotifications`<sup>Optional</sup> <a name="ApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.approverNotifications"></a>

```go
ApproverNotifications GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#approver_notifications GooglePrivilegedAccessManagerSettings#approver_notifications}

---

##### `RequesterNotifications`<sup>Optional</sup> <a name="RequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.requesterNotifications"></a>

```go
RequesterNotifications GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

requester_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#requester_notifications GooglePrivilegedAccessManagerSettings#requester_notifications}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

&googleprivilegedaccessmanagersettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications {
	GrantActivated: *string,
	GrantActivationFailed: *string,
	GrantEnded: *string,
	GrantExternallyModified: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivated">GrantActivated</a></code> | <code>*string</code> | Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivationFailed">GrantActivationFailed</a></code> | <code>*string</code> | Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantEnded">GrantEnded</a></code> | <code>*string</code> | Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantExternallyModified">GrantExternallyModified</a></code> | <code>*string</code> | Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `GrantActivated`<sup>Optional</sup> <a name="GrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivated"></a>

```go
GrantActivated *string
```

- *Type:* *string

Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#grant_activated GooglePrivilegedAccessManagerSettings#grant_activated}

---

##### `GrantActivationFailed`<sup>Optional</sup> <a name="GrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivationFailed"></a>

```go
GrantActivationFailed *string
```

- *Type:* *string

Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#grant_activation_failed GooglePrivilegedAccessManagerSettings#grant_activation_failed}

---

##### `GrantEnded`<sup>Optional</sup> <a name="GrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantEnded"></a>

```go
GrantEnded *string
```

- *Type:* *string

Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#grant_ended GooglePrivilegedAccessManagerSettings#grant_ended}

---

##### `GrantExternallyModified`<sup>Optional</sup> <a name="GrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantExternallyModified"></a>

```go
GrantExternallyModified *string
```

- *Type:* *string

Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#grant_externally_modified GooglePrivilegedAccessManagerSettings#grant_externally_modified}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

&googleprivilegedaccessmanagersettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications {
	PendingApproval: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications.property.pendingApproval">PendingApproval</a></code> | <code>*string</code> | Notification mode for pending approval. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `PendingApproval`<sup>Optional</sup> <a name="PendingApproval" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications.property.pendingApproval"></a>

```go
PendingApproval *string
```

- *Type:* *string

Notification mode for pending approval. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#pending_approval GooglePrivilegedAccessManagerSettings#pending_approval}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

&googleprivilegedaccessmanagersettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications {
	EntitlementAssigned: *string,
	GrantActivated: *string,
	GrantActivationFailed: *string,
	GrantDenied: *string,
	GrantEnded: *string,
	GrantExpired: *string,
	GrantExternallyModified: *string,
	GrantRevoked: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.entitlementAssigned">EntitlementAssigned</a></code> | <code>*string</code> | Notification mode for entitlement assigned. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivated">GrantActivated</a></code> | <code>*string</code> | Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivationFailed">GrantActivationFailed</a></code> | <code>*string</code> | Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantDenied">GrantDenied</a></code> | <code>*string</code> | Notification mode for grant denied. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantEnded">GrantEnded</a></code> | <code>*string</code> | Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExpired">GrantExpired</a></code> | <code>*string</code> | Notification mode for grant expired. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExternallyModified">GrantExternallyModified</a></code> | <code>*string</code> | Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantRevoked">GrantRevoked</a></code> | <code>*string</code> | Notification mode for grant revoked. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `EntitlementAssigned`<sup>Optional</sup> <a name="EntitlementAssigned" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.entitlementAssigned"></a>

```go
EntitlementAssigned *string
```

- *Type:* *string

Notification mode for entitlement assigned. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#entitlement_assigned GooglePrivilegedAccessManagerSettings#entitlement_assigned}

---

##### `GrantActivated`<sup>Optional</sup> <a name="GrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivated"></a>

```go
GrantActivated *string
```

- *Type:* *string

Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#grant_activated GooglePrivilegedAccessManagerSettings#grant_activated}

---

##### `GrantActivationFailed`<sup>Optional</sup> <a name="GrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivationFailed"></a>

```go
GrantActivationFailed *string
```

- *Type:* *string

Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#grant_activation_failed GooglePrivilegedAccessManagerSettings#grant_activation_failed}

---

##### `GrantDenied`<sup>Optional</sup> <a name="GrantDenied" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantDenied"></a>

```go
GrantDenied *string
```

- *Type:* *string

Notification mode for grant denied. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#grant_denied GooglePrivilegedAccessManagerSettings#grant_denied}

---

##### `GrantEnded`<sup>Optional</sup> <a name="GrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantEnded"></a>

```go
GrantEnded *string
```

- *Type:* *string

Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#grant_ended GooglePrivilegedAccessManagerSettings#grant_ended}

---

##### `GrantExpired`<sup>Optional</sup> <a name="GrantExpired" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExpired"></a>

```go
GrantExpired *string
```

- *Type:* *string

Notification mode for grant expired. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#grant_expired GooglePrivilegedAccessManagerSettings#grant_expired}

---

##### `GrantExternallyModified`<sup>Optional</sup> <a name="GrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExternallyModified"></a>

```go
GrantExternallyModified *string
```

- *Type:* *string

Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#grant_externally_modified GooglePrivilegedAccessManagerSettings#grant_externally_modified}

---

##### `GrantRevoked`<sup>Optional</sup> <a name="GrantRevoked" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantRevoked"></a>

```go
GrantRevoked *string
```

- *Type:* *string

Notification mode for grant revoked. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#grant_revoked GooglePrivilegedAccessManagerSettings#grant_revoked}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

&googleprivilegedaccessmanagersettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications {

}
```


### GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings <a name="GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

&googleprivilegedaccessmanagersettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether service account is allowed to grant approvals. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether service account is allowed to grant approvals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#enabled GooglePrivilegedAccessManagerSettings#enabled}

---

### GooglePrivilegedAccessManagerSettingsTimeouts <a name="GooglePrivilegedAccessManagerSettingsTimeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

&googleprivilegedaccessmanagersettings.GooglePrivilegedAccessManagerSettingsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#create GooglePrivilegedAccessManagerSettings#create}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#delete GooglePrivilegedAccessManagerSettings#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#update GooglePrivilegedAccessManagerSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#create GooglePrivilegedAccessManagerSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#delete GooglePrivilegedAccessManagerSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_privileged_access_manager_settings#update GooglePrivilegedAccessManagerSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

googleprivilegedaccessmanagersettings.NewGooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivated">ResetGrantActivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivationFailed">ResetGrantActivationFailed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantEnded">ResetGrantEnded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantExternallyModified">ResetGrantExternallyModified</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrantActivated` <a name="ResetGrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivated"></a>

```go
func ResetGrantActivated()
```

##### `ResetGrantActivationFailed` <a name="ResetGrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivationFailed"></a>

```go
func ResetGrantActivationFailed()
```

##### `ResetGrantEnded` <a name="ResetGrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantEnded"></a>

```go
func ResetGrantEnded()
```

##### `ResetGrantExternallyModified` <a name="ResetGrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantExternallyModified"></a>

```go
func ResetGrantExternallyModified()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivatedInput">GrantActivatedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailedInput">GrantActivationFailedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEndedInput">GrantEndedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModifiedInput">GrantExternallyModifiedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivated">GrantActivated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailed">GrantActivationFailed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEnded">GrantEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModified">GrantExternallyModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GrantActivatedInput`<sup>Optional</sup> <a name="GrantActivatedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivatedInput"></a>

```go
func GrantActivatedInput() *string
```

- *Type:* *string

---

##### `GrantActivationFailedInput`<sup>Optional</sup> <a name="GrantActivationFailedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailedInput"></a>

```go
func GrantActivationFailedInput() *string
```

- *Type:* *string

---

##### `GrantEndedInput`<sup>Optional</sup> <a name="GrantEndedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEndedInput"></a>

```go
func GrantEndedInput() *string
```

- *Type:* *string

---

##### `GrantExternallyModifiedInput`<sup>Optional</sup> <a name="GrantExternallyModifiedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModifiedInput"></a>

```go
func GrantExternallyModifiedInput() *string
```

- *Type:* *string

---

##### `GrantActivated`<sup>Required</sup> <a name="GrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivated"></a>

```go
func GrantActivated() *string
```

- *Type:* *string

---

##### `GrantActivationFailed`<sup>Required</sup> <a name="GrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailed"></a>

```go
func GrantActivationFailed() *string
```

- *Type:* *string

---

##### `GrantEnded`<sup>Required</sup> <a name="GrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEnded"></a>

```go
func GrantEnded() *string
```

- *Type:* *string

---

##### `GrantExternallyModified`<sup>Required</sup> <a name="GrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModified"></a>

```go
func GrantExternallyModified() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

googleprivilegedaccessmanagersettings.NewGooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resetPendingApproval">ResetPendingApproval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPendingApproval` <a name="ResetPendingApproval" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resetPendingApproval"></a>

```go
func ResetPendingApproval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApprovalInput">PendingApprovalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApproval">PendingApproval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PendingApprovalInput`<sup>Optional</sup> <a name="PendingApprovalInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApprovalInput"></a>

```go
func PendingApprovalInput() *string
```

- *Type:* *string

---

##### `PendingApproval`<sup>Required</sup> <a name="PendingApproval" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApproval"></a>

```go
func PendingApproval() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

googleprivilegedaccessmanagersettings.NewGooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putAdminNotifications">PutAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putApproverNotifications">PutApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putRequesterNotifications">PutRequesterNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetAdminNotifications">ResetAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetApproverNotifications">ResetApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetRequesterNotifications">ResetRequesterNotifications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminNotifications` <a name="PutAdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putAdminNotifications"></a>

```go
func PutAdminNotifications(value GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putAdminNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

---

##### `PutApproverNotifications` <a name="PutApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putApproverNotifications"></a>

```go
func PutApproverNotifications(value GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putApproverNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

---

##### `PutRequesterNotifications` <a name="PutRequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putRequesterNotifications"></a>

```go
func PutRequesterNotifications(value GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putRequesterNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

---

##### `ResetAdminNotifications` <a name="ResetAdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetAdminNotifications"></a>

```go
func ResetAdminNotifications()
```

##### `ResetApproverNotifications` <a name="ResetApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetApproverNotifications"></a>

```go
func ResetApproverNotifications()
```

##### `ResetRequesterNotifications` <a name="ResetRequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetRequesterNotifications"></a>

```go
func ResetRequesterNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotifications">AdminNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotifications">ApproverNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotifications">RequesterNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotificationsInput">AdminNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotificationsInput">ApproverNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotificationsInput">RequesterNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminNotifications`<sup>Required</sup> <a name="AdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotifications"></a>

```go
func AdminNotifications() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference</a>

---

##### `ApproverNotifications`<sup>Required</sup> <a name="ApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotifications"></a>

```go
func ApproverNotifications() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference</a>

---

##### `RequesterNotifications`<sup>Required</sup> <a name="RequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotifications"></a>

```go
func RequesterNotifications() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference</a>

---

##### `AdminNotificationsInput`<sup>Optional</sup> <a name="AdminNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotificationsInput"></a>

```go
func AdminNotificationsInput() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

---

##### `ApproverNotificationsInput`<sup>Optional</sup> <a name="ApproverNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotificationsInput"></a>

```go
func ApproverNotificationsInput() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

---

##### `RequesterNotificationsInput`<sup>Optional</sup> <a name="RequesterNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotificationsInput"></a>

```go
func RequesterNotificationsInput() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

googleprivilegedaccessmanagersettings.NewGooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetEntitlementAssigned">ResetEntitlementAssigned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivated">ResetGrantActivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivationFailed">ResetGrantActivationFailed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantDenied">ResetGrantDenied</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantEnded">ResetGrantEnded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExpired">ResetGrantExpired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExternallyModified">ResetGrantExternallyModified</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantRevoked">ResetGrantRevoked</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntitlementAssigned` <a name="ResetEntitlementAssigned" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetEntitlementAssigned"></a>

```go
func ResetEntitlementAssigned()
```

##### `ResetGrantActivated` <a name="ResetGrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivated"></a>

```go
func ResetGrantActivated()
```

##### `ResetGrantActivationFailed` <a name="ResetGrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivationFailed"></a>

```go
func ResetGrantActivationFailed()
```

##### `ResetGrantDenied` <a name="ResetGrantDenied" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantDenied"></a>

```go
func ResetGrantDenied()
```

##### `ResetGrantEnded` <a name="ResetGrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantEnded"></a>

```go
func ResetGrantEnded()
```

##### `ResetGrantExpired` <a name="ResetGrantExpired" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExpired"></a>

```go
func ResetGrantExpired()
```

##### `ResetGrantExternallyModified` <a name="ResetGrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExternallyModified"></a>

```go
func ResetGrantExternallyModified()
```

##### `ResetGrantRevoked` <a name="ResetGrantRevoked" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantRevoked"></a>

```go
func ResetGrantRevoked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssignedInput">EntitlementAssignedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivatedInput">GrantActivatedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailedInput">GrantActivationFailedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDeniedInput">GrantDeniedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEndedInput">GrantEndedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpiredInput">GrantExpiredInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModifiedInput">GrantExternallyModifiedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevokedInput">GrantRevokedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssigned">EntitlementAssigned</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivated">GrantActivated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailed">GrantActivationFailed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDenied">GrantDenied</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEnded">GrantEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpired">GrantExpired</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModified">GrantExternallyModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevoked">GrantRevoked</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntitlementAssignedInput`<sup>Optional</sup> <a name="EntitlementAssignedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssignedInput"></a>

```go
func EntitlementAssignedInput() *string
```

- *Type:* *string

---

##### `GrantActivatedInput`<sup>Optional</sup> <a name="GrantActivatedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivatedInput"></a>

```go
func GrantActivatedInput() *string
```

- *Type:* *string

---

##### `GrantActivationFailedInput`<sup>Optional</sup> <a name="GrantActivationFailedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailedInput"></a>

```go
func GrantActivationFailedInput() *string
```

- *Type:* *string

---

##### `GrantDeniedInput`<sup>Optional</sup> <a name="GrantDeniedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDeniedInput"></a>

```go
func GrantDeniedInput() *string
```

- *Type:* *string

---

##### `GrantEndedInput`<sup>Optional</sup> <a name="GrantEndedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEndedInput"></a>

```go
func GrantEndedInput() *string
```

- *Type:* *string

---

##### `GrantExpiredInput`<sup>Optional</sup> <a name="GrantExpiredInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpiredInput"></a>

```go
func GrantExpiredInput() *string
```

- *Type:* *string

---

##### `GrantExternallyModifiedInput`<sup>Optional</sup> <a name="GrantExternallyModifiedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModifiedInput"></a>

```go
func GrantExternallyModifiedInput() *string
```

- *Type:* *string

---

##### `GrantRevokedInput`<sup>Optional</sup> <a name="GrantRevokedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevokedInput"></a>

```go
func GrantRevokedInput() *string
```

- *Type:* *string

---

##### `EntitlementAssigned`<sup>Required</sup> <a name="EntitlementAssigned" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssigned"></a>

```go
func EntitlementAssigned() *string
```

- *Type:* *string

---

##### `GrantActivated`<sup>Required</sup> <a name="GrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivated"></a>

```go
func GrantActivated() *string
```

- *Type:* *string

---

##### `GrantActivationFailed`<sup>Required</sup> <a name="GrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailed"></a>

```go
func GrantActivationFailed() *string
```

- *Type:* *string

---

##### `GrantDenied`<sup>Required</sup> <a name="GrantDenied" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDenied"></a>

```go
func GrantDenied() *string
```

- *Type:* *string

---

##### `GrantEnded`<sup>Required</sup> <a name="GrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEnded"></a>

```go
func GrantEnded() *string
```

- *Type:* *string

---

##### `GrantExpired`<sup>Required</sup> <a name="GrantExpired" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpired"></a>

```go
func GrantExpired() *string
```

- *Type:* *string

---

##### `GrantExternallyModified`<sup>Required</sup> <a name="GrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModified"></a>

```go
func GrantExternallyModified() *string
```

- *Type:* *string

---

##### `GrantRevoked`<sup>Required</sup> <a name="GrantRevoked" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevoked"></a>

```go
func GrantRevoked() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

googleprivilegedaccessmanagersettings.NewGooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

googleprivilegedaccessmanagersettings.NewGooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putCustomNotificationBehavior">PutCustomNotificationBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putDisableAllNotifications">PutDisableAllNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetCustomNotificationBehavior">ResetCustomNotificationBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetDisableAllNotifications">ResetDisableAllNotifications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomNotificationBehavior` <a name="PutCustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putCustomNotificationBehavior"></a>

```go
func PutCustomNotificationBehavior(value GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putCustomNotificationBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

---

##### `PutDisableAllNotifications` <a name="PutDisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putDisableAllNotifications"></a>

```go
func PutDisableAllNotifications(value GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putDisableAllNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

---

##### `ResetCustomNotificationBehavior` <a name="ResetCustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetCustomNotificationBehavior"></a>

```go
func ResetCustomNotificationBehavior()
```

##### `ResetDisableAllNotifications` <a name="ResetDisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetDisableAllNotifications"></a>

```go
func ResetDisableAllNotifications()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehavior">CustomNotificationBehavior</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotifications">DisableAllNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehaviorInput">CustomNotificationBehaviorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotificationsInput">DisableAllNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomNotificationBehavior`<sup>Required</sup> <a name="CustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehavior"></a>

```go
func CustomNotificationBehavior() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference</a>

---

##### `DisableAllNotifications`<sup>Required</sup> <a name="DisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotifications"></a>

```go
func DisableAllNotifications() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference</a>

---

##### `CustomNotificationBehaviorInput`<sup>Optional</sup> <a name="CustomNotificationBehaviorInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehaviorInput"></a>

```go
func CustomNotificationBehaviorInput() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

---

##### `DisableAllNotificationsInput`<sup>Optional</sup> <a name="DisableAllNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotificationsInput"></a>

```go
func DisableAllNotificationsInput() GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivilegedAccessManagerSettingsEmailNotificationSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

---


### GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference <a name="GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

googleprivilegedaccessmanagersettings.NewGooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

---


### GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference <a name="GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleprivilegedaccessmanagersettings"

googleprivilegedaccessmanagersettings.NewGooglePrivilegedAccessManagerSettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



