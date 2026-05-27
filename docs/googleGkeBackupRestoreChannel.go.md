# `googleGkeBackupRestoreChannel` Submodule <a name="`googleGkeBackupRestoreChannel` Submodule" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeBackupRestoreChannel <a name="GoogleGkeBackupRestoreChannel" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel google_gke_backup_restore_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkebackuprestorechannel"

googlegkebackuprestorechannel.NewGoogleGkeBackupRestoreChannel(scope Construct, id *string, config GoogleGkeBackupRestoreChannelConfig) GoogleGkeBackupRestoreChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig">GoogleGkeBackupRestoreChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig">GoogleGkeBackupRestoreChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGkeBackupRestoreChannelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts">GoogleGkeBackupRestoreChannelTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGkeBackupRestoreChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkebackuprestorechannel"

googlegkebackuprestorechannel.GoogleGkeBackupRestoreChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkebackuprestorechannel"

googlegkebackuprestorechannel.GoogleGkeBackupRestoreChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkebackuprestorechannel"

googlegkebackuprestorechannel.GoogleGkeBackupRestoreChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkebackuprestorechannel"

googlegkebackuprestorechannel.GoogleGkeBackupRestoreChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleGkeBackupRestoreChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGkeBackupRestoreChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGkeBackupRestoreChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGkeBackupRestoreChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.destinationProjectId">DestinationProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference">GoogleGkeBackupRestoreChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.destinationProjectInput">DestinationProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.destinationProject">DestinationProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationProjectId`<sup>Required</sup> <a name="DestinationProjectId" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.destinationProjectId"></a>

```go
func DestinationProjectId() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.timeouts"></a>

```go
func Timeouts() GoogleGkeBackupRestoreChannelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference">GoogleGkeBackupRestoreChannelTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationProjectInput`<sup>Optional</sup> <a name="DestinationProjectInput" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.destinationProjectInput"></a>

```go
func DestinationProjectInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationProject`<sup>Required</sup> <a name="DestinationProject" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.destinationProject"></a>

```go
func DestinationProject() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeBackupRestoreChannelConfig <a name="GoogleGkeBackupRestoreChannelConfig" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkebackuprestorechannel"

&googlegkebackuprestorechannel.GoogleGkeBackupRestoreChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationProject: *string,
	Location: *string,
	Name: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.destinationProject">DestinationProject</a></code> | <code>*string</code> | The project where Backups will be restored. The format is 'projects/{project}'. {project} can be project number or project id. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.location">Location</a></code> | <code>*string</code> | The region of the Restore Channel. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.name">Name</a></code> | <code>*string</code> | The full name of the RestoreChannel Resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.description">Description</a></code> | <code>*string</code> | User specified descriptive string for this RestoreChannel. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#id GoogleGkeBackupRestoreChannel#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#project GoogleGkeBackupRestoreChannel#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts">GoogleGkeBackupRestoreChannelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationProject`<sup>Required</sup> <a name="DestinationProject" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.destinationProject"></a>

```go
DestinationProject *string
```

- *Type:* *string

The project where Backups will be restored. The format is 'projects/{project}'. {project} can be project number or project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#destination_project GoogleGkeBackupRestoreChannel#destination_project}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The region of the Restore Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#location GoogleGkeBackupRestoreChannel#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The full name of the RestoreChannel Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#name GoogleGkeBackupRestoreChannel#name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#deletion_policy GoogleGkeBackupRestoreChannel#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User specified descriptive string for this RestoreChannel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#description GoogleGkeBackupRestoreChannel#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#id GoogleGkeBackupRestoreChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#labels GoogleGkeBackupRestoreChannel#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#project GoogleGkeBackupRestoreChannel#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelConfig.property.timeouts"></a>

```go
Timeouts GoogleGkeBackupRestoreChannelTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts">GoogleGkeBackupRestoreChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#timeouts GoogleGkeBackupRestoreChannel#timeouts}

---

### GoogleGkeBackupRestoreChannelTimeouts <a name="GoogleGkeBackupRestoreChannelTimeouts" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkebackuprestorechannel"

&googlegkebackuprestorechannel.GoogleGkeBackupRestoreChannelTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#create GoogleGkeBackupRestoreChannel#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#delete GoogleGkeBackupRestoreChannel#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#update GoogleGkeBackupRestoreChannel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#create GoogleGkeBackupRestoreChannel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#delete GoogleGkeBackupRestoreChannel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_backup_restore_channel#update GoogleGkeBackupRestoreChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeBackupRestoreChannelTimeoutsOutputReference <a name="GoogleGkeBackupRestoreChannelTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkebackuprestorechannel"

googlegkebackuprestorechannel.NewGoogleGkeBackupRestoreChannelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeBackupRestoreChannelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeBackupRestoreChannel.GoogleGkeBackupRestoreChannelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



