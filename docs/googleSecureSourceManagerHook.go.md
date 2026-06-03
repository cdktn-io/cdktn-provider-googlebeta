# `googleSecureSourceManagerHook` Submodule <a name="`googleSecureSourceManagerHook` Submodule" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecureSourceManagerHook <a name="GoogleSecureSourceManagerHook" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook google_secure_source_manager_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesecuresourcemanagerhook"

googlesecuresourcemanagerhook.NewGoogleSecureSourceManagerHook(scope Construct, id *string, config GoogleSecureSourceManagerHookConfig) GoogleSecureSourceManagerHook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig">GoogleSecureSourceManagerHookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig">GoogleSecureSourceManagerHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putPushOption">PutPushOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetEvents">ResetEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetPushOption">ResetPushOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetSensitiveQueryString">ResetSensitiveQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPushOption` <a name="PutPushOption" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putPushOption"></a>

```go
func PutPushOption(value GoogleSecureSourceManagerHookPushOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putPushOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putTimeouts"></a>

```go
func PutTimeouts(value GoogleSecureSourceManagerHookTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetEvents` <a name="ResetEvents" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetEvents"></a>

```go
func ResetEvents()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPushOption` <a name="ResetPushOption" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetPushOption"></a>

```go
func ResetPushOption()
```

##### `ResetSensitiveQueryString` <a name="ResetSensitiveQueryString" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetSensitiveQueryString"></a>

```go
func ResetSensitiveQueryString()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSecureSourceManagerHook resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesecuresourcemanagerhook"

googlesecuresourcemanagerhook.GoogleSecureSourceManagerHook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesecuresourcemanagerhook"

googlesecuresourcemanagerhook.GoogleSecureSourceManagerHook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesecuresourcemanagerhook"

googlesecuresourcemanagerhook.GoogleSecureSourceManagerHook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesecuresourcemanagerhook"

googlesecuresourcemanagerhook.GoogleSecureSourceManagerHook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleSecureSourceManagerHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSecureSourceManagerHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSecureSourceManagerHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSecureSourceManagerHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.pushOption">PushOption</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference">GoogleSecureSourceManagerHookPushOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference">GoogleSecureSourceManagerHookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.eventsInput">EventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.hookIdInput">HookIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.pushOptionInput">PushOptionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.sensitiveQueryStringInput">SensitiveQueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.targetUriInput">TargetUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.hookId">HookId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.sensitiveQueryString">SensitiveQueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.targetUri">TargetUri</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PushOption`<sup>Required</sup> <a name="PushOption" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.pushOption"></a>

```go
func PushOption() GoogleSecureSourceManagerHookPushOptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference">GoogleSecureSourceManagerHookPushOptionOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.timeouts"></a>

```go
func Timeouts() GoogleSecureSourceManagerHookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference">GoogleSecureSourceManagerHookTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.eventsInput"></a>

```go
func EventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HookIdInput`<sup>Optional</sup> <a name="HookIdInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.hookIdInput"></a>

```go
func HookIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PushOptionInput`<sup>Optional</sup> <a name="PushOptionInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.pushOptionInput"></a>

```go
func PushOptionInput() GoogleSecureSourceManagerHookPushOption
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a>

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `SensitiveQueryStringInput`<sup>Optional</sup> <a name="SensitiveQueryStringInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.sensitiveQueryStringInput"></a>

```go
func SensitiveQueryStringInput() *string
```

- *Type:* *string

---

##### `TargetUriInput`<sup>Optional</sup> <a name="TargetUriInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.targetUriInput"></a>

```go
func TargetUriInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `HookId`<sup>Required</sup> <a name="HookId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.hookId"></a>

```go
func HookId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `SensitiveQueryString`<sup>Required</sup> <a name="SensitiveQueryString" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.sensitiveQueryString"></a>

```go
func SensitiveQueryString() *string
```

- *Type:* *string

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.targetUri"></a>

```go
func TargetUri() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecureSourceManagerHookConfig <a name="GoogleSecureSourceManagerHookConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesecuresourcemanagerhook"

&googlesecuresourcemanagerhook.GoogleSecureSourceManagerHookConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	HookId: *string,
	Location: *string,
	RepositoryId: *string,
	TargetUri: *string,
	DeletionPolicy: *string,
	Disabled: interface{},
	Events: *[]*string,
	Id: *string,
	Project: *string,
	PushOption: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption,
	SensitiveQueryString: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.hookId">HookId</a></code> | <code>*string</code> | The ID for the Hook. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.location">Location</a></code> | <code>*string</code> | The location for the Repository. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | The ID for the Repository. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.targetUri">TargetUri</a></code> | <code>*string</code> | The target URI to which the payloads will be delivered. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Determines if the hook disabled or not. Set to true to stop sending traffic. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.events">Events</a></code> | <code>*[]*string</code> | The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"]. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#id GoogleSecureSourceManagerHook#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#project GoogleSecureSourceManagerHook#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.pushOption">PushOption</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a></code> | push_option block. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.sensitiveQueryString">SensitiveQueryString</a></code> | <code>*string</code> | The sensitive query string to be appended to the target URI. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HookId`<sup>Required</sup> <a name="HookId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.hookId"></a>

```go
HookId *string
```

- *Type:* *string

The ID for the Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#hook_id GoogleSecureSourceManagerHook#hook_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#location GoogleSecureSourceManagerHook#location}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#repository_id GoogleSecureSourceManagerHook#repository_id}

---

##### `TargetUri`<sup>Required</sup> <a name="TargetUri" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.targetUri"></a>

```go
TargetUri *string
```

- *Type:* *string

The target URI to which the payloads will be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#target_uri GoogleSecureSourceManagerHook#target_uri}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#deletion_policy GoogleSecureSourceManagerHook#deletion_policy}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Determines if the hook disabled or not. Set to true to stop sending traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#disabled GoogleSecureSourceManagerHook#disabled}

---

##### `Events`<sup>Optional</sup> <a name="Events" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.events"></a>

```go
Events *[]*string
```

- *Type:* *[]*string

The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#events GoogleSecureSourceManagerHook#events}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#id GoogleSecureSourceManagerHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#project GoogleSecureSourceManagerHook#project}.

---

##### `PushOption`<sup>Optional</sup> <a name="PushOption" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.pushOption"></a>

```go
PushOption GoogleSecureSourceManagerHookPushOption
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a>

push_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#push_option GoogleSecureSourceManagerHook#push_option}

---

##### `SensitiveQueryString`<sup>Optional</sup> <a name="SensitiveQueryString" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.sensitiveQueryString"></a>

```go
SensitiveQueryString *string
```

- *Type:* *string

The sensitive query string to be appended to the target URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#sensitive_query_string GoogleSecureSourceManagerHook#sensitive_query_string}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.timeouts"></a>

```go
Timeouts GoogleSecureSourceManagerHookTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#timeouts GoogleSecureSourceManagerHook#timeouts}

---

### GoogleSecureSourceManagerHookPushOption <a name="GoogleSecureSourceManagerHookPushOption" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesecuresourcemanagerhook"

&googlesecuresourcemanagerhook.GoogleSecureSourceManagerHookPushOption {
	BranchFilter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption.property.branchFilter">BranchFilter</a></code> | <code>*string</code> | Trigger hook for matching branches only. |

---

##### `BranchFilter`<sup>Optional</sup> <a name="BranchFilter" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption.property.branchFilter"></a>

```go
BranchFilter *string
```

- *Type:* *string

Trigger hook for matching branches only.

Specified as glob pattern. If empty or *, events for all branches are
reported. Examples: main, {main,release*}.
See https://pkg.go.dev/github.com/gobwas/glob documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#branch_filter GoogleSecureSourceManagerHook#branch_filter}

---

### GoogleSecureSourceManagerHookTimeouts <a name="GoogleSecureSourceManagerHookTimeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesecuresourcemanagerhook"

&googlesecuresourcemanagerhook.GoogleSecureSourceManagerHookTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#create GoogleSecureSourceManagerHook#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#delete GoogleSecureSourceManagerHook#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#update GoogleSecureSourceManagerHook#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#create GoogleSecureSourceManagerHook#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#delete GoogleSecureSourceManagerHook#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#update GoogleSecureSourceManagerHook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecureSourceManagerHookPushOptionOutputReference <a name="GoogleSecureSourceManagerHookPushOptionOutputReference" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesecuresourcemanagerhook"

googlesecuresourcemanagerhook.NewGoogleSecureSourceManagerHookPushOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSecureSourceManagerHookPushOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resetBranchFilter">ResetBranchFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchFilter` <a name="ResetBranchFilter" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resetBranchFilter"></a>

```go
func ResetBranchFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.branchFilterInput">BranchFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.branchFilter">BranchFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchFilterInput`<sup>Optional</sup> <a name="BranchFilterInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.branchFilterInput"></a>

```go
func BranchFilterInput() *string
```

- *Type:* *string

---

##### `BranchFilter`<sup>Required</sup> <a name="BranchFilter" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.branchFilter"></a>

```go
func BranchFilter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleSecureSourceManagerHookPushOption
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a>

---


### GoogleSecureSourceManagerHookTimeoutsOutputReference <a name="GoogleSecureSourceManagerHookTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesecuresourcemanagerhook"

googlesecuresourcemanagerhook.NewGoogleSecureSourceManagerHookTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSecureSourceManagerHookTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



