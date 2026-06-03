# `googleDialogflowCxToolVersion` Submodule <a name="`googleDialogflowCxToolVersion` Submodule" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxToolVersion <a name="GoogleDialogflowCxToolVersion" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version google_dialogflow_cx_tool_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersion(scope Construct, id *string, config GoogleDialogflowCxToolVersionConfig) GoogleDialogflowCxToolVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig">GoogleDialogflowCxToolVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig">GoogleDialogflowCxToolVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool">PutTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDialogflowCxToolVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a>

---

##### `PutTool` <a name="PutTool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool"></a>

```go
func PutTool(value GoogleDialogflowCxToolVersionTool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.putTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowCxToolVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.GoogleDialogflowCxToolVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.GoogleDialogflowCxToolVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.GoogleDialogflowCxToolVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.GoogleDialogflowCxToolVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleDialogflowCxToolVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDialogflowCxToolVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDialogflowCxToolVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxToolVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference">GoogleDialogflowCxToolVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.tool">Tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference">GoogleDialogflowCxToolVersionToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.toolInput">ToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.timeouts"></a>

```go
func Timeouts() GoogleDialogflowCxToolVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference">GoogleDialogflowCxToolVersionTimeoutsOutputReference</a>

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.tool"></a>

```go
func Tool() GoogleDialogflowCxToolVersionToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference">GoogleDialogflowCxToolVersionToolOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.toolInput"></a>

```go
func ToolInput() GoogleDialogflowCxToolVersionTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxToolVersionConfig <a name="GoogleDialogflowCxToolVersionConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Parent: *string,
	Tool: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool,
	DeletionPolicy: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the tool version. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.parent">Parent</a></code> | <code>*string</code> | The tool to create a Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.tool">Tool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a></code> | tool block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#id GoogleDialogflowCxToolVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the tool version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The tool to create a Version for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/tools/<Tool ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#parent GoogleDialogflowCxToolVersion#parent}

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.tool"></a>

```go
Tool GoogleDialogflowCxToolVersionTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a>

tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#tool GoogleDialogflowCxToolVersion#tool}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#deletion_policy GoogleDialogflowCxToolVersion#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#id GoogleDialogflowCxToolVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionConfig.property.timeouts"></a>

```go
Timeouts GoogleDialogflowCxToolVersionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts">GoogleDialogflowCxToolVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#timeouts GoogleDialogflowCxToolVersion#timeouts}

---

### GoogleDialogflowCxToolVersionTimeouts <a name="GoogleDialogflowCxToolVersionTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#create GoogleDialogflowCxToolVersion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#delete GoogleDialogflowCxToolVersion#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#create GoogleDialogflowCxToolVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#delete GoogleDialogflowCxToolVersion#delete}.

---

### GoogleDialogflowCxToolVersionTool <a name="GoogleDialogflowCxToolVersionTool" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionTool {
	Description: *string,
	DisplayName: *string,
	ConnectorSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec,
	DataStoreSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec,
	FunctionSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec,
	OpenApiSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.description">Description</a></code> | <code>*string</code> | High level description of the Tool and its usage. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the tool, unique within the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.connectorSpec">ConnectorSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.dataStoreSpec">DataStoreSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a></code> | data_store_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.functionSpec">FunctionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.openApiSpec">OpenApiSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a></code> | open_api_spec block. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.description"></a>

```go
Description *string
```

- *Type:* *string

High level description of the Tool and its usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#description GoogleDialogflowCxToolVersion#description}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the tool, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}

---

##### `ConnectorSpec`<sup>Optional</sup> <a name="ConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.connectorSpec"></a>

```go
ConnectorSpec GoogleDialogflowCxToolVersionToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#connector_spec GoogleDialogflowCxToolVersion#connector_spec}

---

##### `DataStoreSpec`<sup>Optional</sup> <a name="DataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.dataStoreSpec"></a>

```go
DataStoreSpec GoogleDialogflowCxToolVersionToolDataStoreSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a>

data_store_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#data_store_spec GoogleDialogflowCxToolVersion#data_store_spec}

---

##### `FunctionSpec`<sup>Optional</sup> <a name="FunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.functionSpec"></a>

```go
FunctionSpec GoogleDialogflowCxToolVersionToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#function_spec GoogleDialogflowCxToolVersion#function_spec}

---

##### `OpenApiSpec`<sup>Optional</sup> <a name="OpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool.property.openApiSpec"></a>

```go
OpenApiSpec GoogleDialogflowCxToolVersionToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#open_api_spec GoogleDialogflowCxToolVersion#open_api_spec}

---

### GoogleDialogflowCxToolVersionToolConnectorSpec <a name="GoogleDialogflowCxToolVersionToolConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolConnectorSpec {
	Actions: interface{},
	Name: *string,
	EndUserAuthConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.actions">Actions</a></code> | <code>interface{}</code> | actions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.name">Name</a></code> | <code>*string</code> | The full resource name of the referenced Integration Connectors Connection. Format: projects/* /locations/* /connections/*. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.endUserAuthConfig">EndUserAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a></code> | end_user_auth_config block. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.actions"></a>

```go
Actions interface{}
```

- *Type:* interface{}

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#actions GoogleDialogflowCxToolVersion#actions}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.name"></a>

```go
Name *string
```

- *Type:* *string

The full resource name of the referenced Integration Connectors Connection. Format: projects/* /locations/* /connections/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#name GoogleDialogflowCxToolVersion#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `EndUserAuthConfig`<sup>Optional</sup> <a name="EndUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec.property.endUserAuthConfig"></a>

```go
EndUserAuthConfig GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a>

end_user_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#end_user_auth_config GoogleDialogflowCxToolVersion#end_user_auth_config}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecActions <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActions" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolConnectorSpecActions {
	ConnectionActionId: *string,
	EntityOperation: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation,
	InputFields: *[]*string,
	OutputFields: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.connectionActionId">ConnectionActionId</a></code> | <code>*string</code> | ID of a Connection action for the tool to use. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.entityOperation">EntityOperation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a></code> | entity_operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.inputFields">InputFields</a></code> | <code>*[]*string</code> | Entity fields to use as inputs for the operation. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.outputFields">OutputFields</a></code> | <code>*[]*string</code> | Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. |

---

##### `ConnectionActionId`<sup>Optional</sup> <a name="ConnectionActionId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.connectionActionId"></a>

```go
ConnectionActionId *string
```

- *Type:* *string

ID of a Connection action for the tool to use.

This field is part of a required union field 'action_spec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#connection_action_id GoogleDialogflowCxToolVersion#connection_action_id}

---

##### `EntityOperation`<sup>Optional</sup> <a name="EntityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.entityOperation"></a>

```go
EntityOperation GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a>

entity_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#entity_operation GoogleDialogflowCxToolVersion#entity_operation}

---

##### `InputFields`<sup>Optional</sup> <a name="InputFields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.inputFields"></a>

```go
InputFields *[]*string
```

- *Type:* *[]*string

Entity fields to use as inputs for the operation.

If no fields are specified, all fields of the Entity will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#input_fields GoogleDialogflowCxToolVersion#input_fields}

---

##### `OutputFields`<sup>Optional</sup> <a name="OutputFields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActions.property.outputFields"></a>

```go
OutputFields *[]*string
```

- *Type:* *[]*string

Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#output_fields GoogleDialogflowCxToolVersion#output_fields}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation {
	EntityId: *string,
	Operation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.property.entityId">EntityId</a></code> | <code>*string</code> | ID of the entity. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.property.operation">Operation</a></code> | <code>*string</code> | The operation to perform on the entity. Possible values: ["LIST", "CREATE", "UPDATE", "DELETE", "GET"]. |

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.property.entityId"></a>

```go
EntityId *string
```

- *Type:* *string

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#entity_id GoogleDialogflowCxToolVersion#entity_id}

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation.property.operation"></a>

```go
Operation *string
```

- *Type:* *string

The operation to perform on the entity. Possible values: ["LIST", "CREATE", "UPDATE", "DELETE", "GET"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#operation GoogleDialogflowCxToolVersion#operation}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig {
	Oauth2AuthCodeConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig,
	Oauth2JwtBearerConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.property.oauth2AuthCodeConfig">Oauth2AuthCodeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a></code> | oauth2_auth_code_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.property.oauth2JwtBearerConfig">Oauth2JwtBearerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a></code> | oauth2_jwt_bearer_config block. |

---

##### `Oauth2AuthCodeConfig`<sup>Optional</sup> <a name="Oauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.property.oauth2AuthCodeConfig"></a>

```go
Oauth2AuthCodeConfig GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

oauth2_auth_code_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#oauth2_auth_code_config GoogleDialogflowCxToolVersion#oauth2_auth_code_config}

---

##### `Oauth2JwtBearerConfig`<sup>Optional</sup> <a name="Oauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig.property.oauth2JwtBearerConfig"></a>

```go
Oauth2JwtBearerConfig GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

oauth2_jwt_bearer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#oauth2_jwt_bearer_config GoogleDialogflowCxToolVersion#oauth2_jwt_bearer_config}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig {
	OauthToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig.property.oauthToken">OauthToken</a></code> | <code>*string</code> | Oauth token value or parameter name to pass it through. |

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig.property.oauthToken"></a>

```go
OauthToken *string
```

- *Type:* *string

Oauth token value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#oauth_token GoogleDialogflowCxToolVersion#oauth_token}

---

### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig {
	ClientKey: *string,
	Issuer: *string,
	Subject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.clientKey">ClientKey</a></code> | <code>*string</code> | Client key value or parameter name to pass it through. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.issuer">Issuer</a></code> | <code>*string</code> | Issuer value or parameter name to pass it through. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.subject">Subject</a></code> | <code>*string</code> | Subject value or parameter name to pass it through. |

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

Client key value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#client_key GoogleDialogflowCxToolVersion#client_key}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Issuer value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#issuer GoogleDialogflowCxToolVersion#issuer}

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig.property.subject"></a>

```go
Subject *string
```

- *Type:* *string

Subject value or parameter name to pass it through.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#subject GoogleDialogflowCxToolVersion#subject}

---

### GoogleDialogflowCxToolVersionToolDataStoreSpec <a name="GoogleDialogflowCxToolVersionToolDataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolDataStoreSpec {
	DataStoreConnections: interface{},
	FallbackPrompt: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.property.dataStoreConnections">DataStoreConnections</a></code> | <code>interface{}</code> | data_store_connections block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.property.fallbackPrompt">FallbackPrompt</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a></code> | fallback_prompt block. |

---

##### `DataStoreConnections`<sup>Required</sup> <a name="DataStoreConnections" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.property.dataStoreConnections"></a>

```go
DataStoreConnections interface{}
```

- *Type:* interface{}

data_store_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#data_store_connections GoogleDialogflowCxToolVersion#data_store_connections}

---

##### `FallbackPrompt`<sup>Required</sup> <a name="FallbackPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec.property.fallbackPrompt"></a>

```go
FallbackPrompt GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

fallback_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#fallback_prompt GoogleDialogflowCxToolVersion#fallback_prompt}

---

### GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections {
	DataStore: *string,
	DataStoreType: *string,
	DocumentProcessingMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStore">DataStore</a></code> | <code>*string</code> | The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStoreType">DataStoreType</a></code> | <code>*string</code> | The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.documentProcessingMode">DocumentProcessingMode</a></code> | <code>*string</code> | The document processing mode for the data store connection. |

---

##### `DataStore`<sup>Optional</sup> <a name="DataStore" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStore"></a>

```go
DataStore *string
```

- *Type:* *string

The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#data_store GoogleDialogflowCxToolVersion#data_store}

---

##### `DataStoreType`<sup>Optional</sup> <a name="DataStoreType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.dataStoreType"></a>

```go
DataStoreType *string
```

- *Type:* *string

The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#data_store_type GoogleDialogflowCxToolVersion#data_store_type}

---

##### `DocumentProcessingMode`<sup>Optional</sup> <a name="DocumentProcessingMode" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnections.property.documentProcessingMode"></a>

```go
DocumentProcessingMode *string
```

- *Type:* *string

The document processing mode for the data store connection.

Should only be set for PUBLIC_WEB and UNSTRUCTURED data stores. If not set it is considered as DOCUMENTS, as this is the legacy mode.
See [DocumentProcessingMode](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#documentprocessingmode) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#document_processing_mode GoogleDialogflowCxToolVersion#document_processing_mode}

---

### GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt {

}
```


### GoogleDialogflowCxToolVersionToolFunctionSpec <a name="GoogleDialogflowCxToolVersionToolFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolFunctionSpec {
	InputSchema: *string,
	OutputSchema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.property.inputSchema">InputSchema</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.property.outputSchema">OutputSchema</a></code> | <code>*string</code> | Optional. |

---

##### `InputSchema`<sup>Optional</sup> <a name="InputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.property.inputSchema"></a>

```go
InputSchema *string
```

- *Type:* *string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#input_schema GoogleDialogflowCxToolVersion#input_schema}

---

##### `OutputSchema`<sup>Optional</sup> <a name="OutputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec.property.outputSchema"></a>

```go
OutputSchema *string
```

- *Type:* *string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#output_schema GoogleDialogflowCxToolVersion#output_schema}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpec <a name="GoogleDialogflowCxToolVersionToolOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolOpenApiSpec {
	TextSchema: *string,
	Authentication: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication,
	ServiceDirectoryConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig,
	TlsConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.textSchema">TextSchema</a></code> | <code>*string</code> | The OpenAPI schema specified as a text. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `TextSchema`<sup>Required</sup> <a name="TextSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.textSchema"></a>

```go
TextSchema *string
```

- *Type:* *string

The OpenAPI schema specified as a text.

This field is part of a union field 'schema': only one of 'textSchema' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#text_schema GoogleDialogflowCxToolVersion#text_schema}

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.authentication"></a>

```go
Authentication GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#authentication GoogleDialogflowCxToolVersion#authentication}

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```go
ServiceDirectoryConfig GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#service_directory_config GoogleDialogflowCxToolVersion#service_directory_config}

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec.property.tlsConfig"></a>

```go
TlsConfig GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#tls_config GoogleDialogflowCxToolVersion#tls_config}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication {
	ApiKeyConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig,
	BearerTokenConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig,
	OauthConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig,
	ServiceAgentAuthConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">ServiceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```go
ApiKeyConfig GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#api_key_config GoogleDialogflowCxToolVersion#api_key_config}

---

##### `BearerTokenConfig`<sup>Optional</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```go
BearerTokenConfig GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#bearer_token_config GoogleDialogflowCxToolVersion#bearer_token_config}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```go
OauthConfig GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#oauth_config GoogleDialogflowCxToolVersion#oauth_config}

---

##### `ServiceAgentAuthConfig`<sup>Optional</sup> <a name="ServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```go
ServiceAgentAuthConfig GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#service_agent_auth_config GoogleDialogflowCxToolVersion#service_agent_auth_config}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig {
	KeyName: *string,
	RequestLocation: *string,
	ApiKey: *string,
	SecretVersionForApiKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">KeyName</a></code> | <code>*string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">RequestLocation</a></code> | <code>*string</code> | Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">ApiKey</a></code> | <code>*string</code> | Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">SecretVersionForApiKey</a></code> | <code>*string</code> | Optional. |

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#key_name GoogleDialogflowCxToolVersion#key_name}

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```go
RequestLocation *string
```

- *Type:* *string

Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#request_location GoogleDialogflowCxToolVersion#request_location}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#api_key GoogleDialogflowCxToolVersion#api_key}

---

##### `SecretVersionForApiKey`<sup>Optional</sup> <a name="SecretVersionForApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```go
SecretVersionForApiKey *string
```

- *Type:* *string

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the apiKey field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_api_key GoogleDialogflowCxToolVersion#secret_version_for_api_key}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig {
	SecretVersionForToken: *string,
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">SecretVersionForToken</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">Token</a></code> | <code>*string</code> | Optional. |

---

##### `SecretVersionForToken`<sup>Optional</sup> <a name="SecretVersionForToken" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```go
SecretVersionForToken *string
```

- *Type:* *string

Optional.

The name of the SecretManager secret version resource storing the Bearer token. If this field is set, the 'token' field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_token GoogleDialogflowCxToolVersion#secret_version_for_token}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Optional.

The text token appended to the text Bearer to the request Authorization header.
[Session parameters reference](https://cloud.google.com/dialogflow/cx/docs/concept/parameter#session-ref) can be used to pass the token dynamically, e.g. '$session.params.parameter-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#token GoogleDialogflowCxToolVersion#token}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig {
	ClientId: *string,
	OauthGrantType: *string,
	TokenEndpoint: *string,
	ClientSecret: *string,
	Scopes: *[]*string,
	SecretVersionForClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">OauthGrantType</a></code> | <code>*string</code> | OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>*string</code> | Optional. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#client_id GoogleDialogflowCxToolVersion#client_id}

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```go
OauthGrantType *string
```

- *Type:* *string

OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#oauth_grant_type GoogleDialogflowCxToolVersion#oauth_grant_type}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#token_endpoint GoogleDialogflowCxToolVersion#token_endpoint}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#client_secret GoogleDialogflowCxToolVersion#client_secret}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#scopes GoogleDialogflowCxToolVersion#scopes}

---

##### `SecretVersionForClientSecret`<sup>Optional</sup> <a name="SecretVersionForClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```go
SecretVersionForClientSecret *string
```

- *Type:* *string

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the clientSecret field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#secret_version_for_client_secret GoogleDialogflowCxToolVersion#secret_version_for_client_secret}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig {
	ServiceAgentAuth: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>*string</code> | Optional. |

---

##### `ServiceAgentAuth`<sup>Optional</sup> <a name="ServiceAgentAuth" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```go
ServiceAgentAuth *string
```

- *Type:* *string

Optional.

Indicate the auth token type generated from the Diglogflow service agent.
The generated token is sent in the Authorization header.
See [ServiceAgentAuth](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#serviceagentauth) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#service_agent_auth GoogleDialogflowCxToolVersion#service_agent_auth}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig {
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig.property.service">Service</a></code> | <code>*string</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#service GoogleDialogflowCxToolVersion#service}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig {
	CaCerts: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig.property.caCerts">CaCerts</a></code> | <code>interface{}</code> | ca_certs block. |

---

##### `CaCerts`<sup>Required</sup> <a name="CaCerts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig.property.caCerts"></a>

```go
CaCerts interface{}
```

- *Type:* interface{}

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#ca_certs GoogleDialogflowCxToolVersion#ca_certs}

---

### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

&googledialogflowcxtoolversion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts {
	Cert: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.cert">Cert</a></code> | <code>*string</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.displayName">DisplayName</a></code> | <code>*string</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```go
Cert *string
```

- *Type:* *string

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
For instance a certificate can be self-signed using the following command:

```
  openssl x509 -req -days 200 -in example.com.csr \
    -signkey example.com.key \
    -out example.com.crt \
    -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
```

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#cert GoogleDialogflowCxToolVersion#cert}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_tool_version#display_name GoogleDialogflowCxToolVersion#display_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxToolVersionTimeoutsOutputReference <a name="GoogleDialogflowCxToolVersionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput">OperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput"></a>

```go
func EntityIdInput() *string
```

- *Type:* *string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput"></a>

```go
func OperationInput() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecActionsList <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActionsList" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolConnectorSpecActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxToolVersionToolConnectorSpecActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.putEntityOperation">PutEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetConnectionActionId">ResetConnectionActionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetEntityOperation">ResetEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetInputFields">ResetInputFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetOutputFields">ResetOutputFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntityOperation` <a name="PutEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.putEntityOperation"></a>

```go
func PutEntityOperation(value GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a>

---

##### `ResetConnectionActionId` <a name="ResetConnectionActionId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetConnectionActionId"></a>

```go
func ResetConnectionActionId()
```

##### `ResetEntityOperation` <a name="ResetEntityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetEntityOperation"></a>

```go
func ResetEntityOperation()
```

##### `ResetInputFields` <a name="ResetInputFields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetInputFields"></a>

```go
func ResetInputFields()
```

##### `ResetOutputFields` <a name="ResetOutputFields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.resetOutputFields"></a>

```go
func ResetOutputFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.entityOperation">EntityOperation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.connectionActionIdInput">ConnectionActionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.entityOperationInput">EntityOperationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.inputFieldsInput">InputFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.outputFieldsInput">OutputFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.connectionActionId">ConnectionActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.inputFields">InputFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.outputFields">OutputFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityOperation`<sup>Required</sup> <a name="EntityOperation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.entityOperation"></a>

```go
func EntityOperation() GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperationOutputReference</a>

---

##### `ConnectionActionIdInput`<sup>Optional</sup> <a name="ConnectionActionIdInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.connectionActionIdInput"></a>

```go
func ConnectionActionIdInput() *string
```

- *Type:* *string

---

##### `EntityOperationInput`<sup>Optional</sup> <a name="EntityOperationInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.entityOperationInput"></a>

```go
func EntityOperationInput() GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation">GoogleDialogflowCxToolVersionToolConnectorSpecActionsEntityOperation</a>

---

##### `InputFieldsInput`<sup>Optional</sup> <a name="InputFieldsInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.inputFieldsInput"></a>

```go
func InputFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OutputFieldsInput`<sup>Optional</sup> <a name="OutputFieldsInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.outputFieldsInput"></a>

```go
func OutputFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionActionId`<sup>Required</sup> <a name="ConnectionActionId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.connectionActionId"></a>

```go
func ConnectionActionId() *string
```

- *Type:* *string

---

##### `InputFields`<sup>Required</sup> <a name="InputFields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.inputFields"></a>

```go
func InputFields() *[]*string
```

- *Type:* *[]*string

---

##### `OutputFields`<sup>Required</sup> <a name="OutputFields" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.outputFields"></a>

```go
func OutputFields() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthTokenInput">OauthTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthToken">OauthToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthTokenInput"></a>

```go
func OauthTokenInput() *string
```

- *Type:* *string

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.oauthToken"></a>

```go
func OauthToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subjectInput">SubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subjectInput"></a>

```go
func SubjectInput() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2AuthCodeConfig">PutOauth2AuthCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig">PutOauth2JwtBearerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2AuthCodeConfig">ResetOauth2AuthCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2JwtBearerConfig">ResetOauth2JwtBearerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauth2AuthCodeConfig` <a name="PutOauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2AuthCodeConfig"></a>

```go
func PutOauth2AuthCodeConfig(value GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2AuthCodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

---

##### `PutOauth2JwtBearerConfig` <a name="PutOauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig"></a>

```go
func PutOauth2JwtBearerConfig(value GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.putOauth2JwtBearerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

---

##### `ResetOauth2AuthCodeConfig` <a name="ResetOauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2AuthCodeConfig"></a>

```go
func ResetOauth2AuthCodeConfig()
```

##### `ResetOauth2JwtBearerConfig` <a name="ResetOauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.resetOauth2JwtBearerConfig"></a>

```go
func ResetOauth2JwtBearerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfig">Oauth2AuthCodeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfig">Oauth2JwtBearerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfigInput">Oauth2AuthCodeConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfigInput">Oauth2JwtBearerConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Oauth2AuthCodeConfig`<sup>Required</sup> <a name="Oauth2AuthCodeConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfig"></a>

```go
func Oauth2AuthCodeConfig() GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfigOutputReference</a>

---

##### `Oauth2JwtBearerConfig`<sup>Required</sup> <a name="Oauth2JwtBearerConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfig"></a>

```go
func Oauth2JwtBearerConfig() GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfigOutputReference</a>

---

##### `Oauth2AuthCodeConfigInput`<sup>Optional</sup> <a name="Oauth2AuthCodeConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2AuthCodeConfigInput"></a>

```go
func Oauth2AuthCodeConfigInput() GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2AuthCodeConfig</a>

---

##### `Oauth2JwtBearerConfigInput`<sup>Optional</sup> <a name="Oauth2JwtBearerConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.oauth2JwtBearerConfigInput"></a>

```go
func Oauth2JwtBearerConfigInput() GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOauth2JwtBearerConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a>

---


### GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference <a name="GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolConnectorSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putEndUserAuthConfig">PutEndUserAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resetEndUserAuthConfig">ResetEndUserAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putActions"></a>

```go
func PutActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEndUserAuthConfig` <a name="PutEndUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putEndUserAuthConfig"></a>

```go
func PutEndUserAuthConfig(value GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.putEndUserAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a>

---

##### `ResetEndUserAuthConfig` <a name="ResetEndUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.resetEndUserAuthConfig"></a>

```go
func ResetEndUserAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList">GoogleDialogflowCxToolVersionToolConnectorSpecActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.endUserAuthConfig">EndUserAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.endUserAuthConfigInput">EndUserAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.actions"></a>

```go
func Actions() GoogleDialogflowCxToolVersionToolConnectorSpecActionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecActionsList">GoogleDialogflowCxToolVersionToolConnectorSpecActionsList</a>

---

##### `EndUserAuthConfig`<sup>Required</sup> <a name="EndUserAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.endUserAuthConfig"></a>

```go
func EndUserAuthConfig() GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfigOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `EndUserAuthConfigInput`<sup>Optional</sup> <a name="EndUserAuthConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.endUserAuthConfigInput"></a>

```go
func EndUserAuthConfigInput() GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig">GoogleDialogflowCxToolVersionToolConnectorSpecEndUserAuthConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a>

---


### GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore">ResetDataStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType">ResetDataStoreType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode">ResetDocumentProcessingMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataStore` <a name="ResetDataStore" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore"></a>

```go
func ResetDataStore()
```

##### `ResetDataStoreType` <a name="ResetDataStoreType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType"></a>

```go
func ResetDataStoreType()
```

##### `ResetDocumentProcessingMode` <a name="ResetDocumentProcessingMode" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode"></a>

```go
func ResetDocumentProcessingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput">DataStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput">DataStoreTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput">DocumentProcessingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore">DataStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType">DataStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode">DocumentProcessingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput"></a>

```go
func DataStoreInput() *string
```

- *Type:* *string

---

##### `DataStoreTypeInput`<sup>Optional</sup> <a name="DataStoreTypeInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput"></a>

```go
func DataStoreTypeInput() *string
```

- *Type:* *string

---

##### `DocumentProcessingModeInput`<sup>Optional</sup> <a name="DocumentProcessingModeInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput"></a>

```go
func DocumentProcessingModeInput() *string
```

- *Type:* *string

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore"></a>

```go
func DataStore() *string
```

- *Type:* *string

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType"></a>

```go
func DataStoreType() *string
```

- *Type:* *string

---

##### `DocumentProcessingMode`<sup>Required</sup> <a name="DocumentProcessingMode" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode"></a>

```go
func DocumentProcessingMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

---


### GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference <a name="GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putDataStoreConnections">PutDataStoreConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putFallbackPrompt">PutFallbackPrompt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataStoreConnections` <a name="PutDataStoreConnections" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putDataStoreConnections"></a>

```go
func PutDataStoreConnections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putDataStoreConnections.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFallbackPrompt` <a name="PutFallbackPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putFallbackPrompt"></a>

```go
func PutFallbackPrompt(value GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.putFallbackPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnections">DataStoreConnections</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPrompt">FallbackPrompt</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput">DataStoreConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPromptInput">FallbackPromptInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataStoreConnections`<sup>Required</sup> <a name="DataStoreConnections" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnections"></a>

```go
func DataStoreConnections() GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolVersionToolDataStoreSpecDataStoreConnectionsList</a>

---

##### `FallbackPrompt`<sup>Required</sup> <a name="FallbackPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPrompt"></a>

```go
func FallbackPrompt() GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPromptOutputReference</a>

---

##### `DataStoreConnectionsInput`<sup>Optional</sup> <a name="DataStoreConnectionsInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput"></a>

```go
func DataStoreConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `FallbackPromptInput`<sup>Optional</sup> <a name="FallbackPromptInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.fallbackPromptInput"></a>

```go
func FallbackPromptInput() GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolVersionToolDataStoreSpecFallbackPrompt</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolDataStoreSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a>

---


### GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference <a name="GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolFunctionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resetInputSchema">ResetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resetOutputSchema">ResetOutputSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputSchema` <a name="ResetInputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resetInputSchema"></a>

```go
func ResetInputSchema()
```

##### `ResetOutputSchema` <a name="ResetOutputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.resetOutputSchema"></a>

```go
func ResetOutputSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchemaInput">InputSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchemaInput">OutputSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchema">InputSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchema">OutputSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputSchemaInput`<sup>Optional</sup> <a name="InputSchemaInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```go
func InputSchemaInput() *string
```

- *Type:* *string

---

##### `OutputSchemaInput`<sup>Optional</sup> <a name="OutputSchemaInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```go
func OutputSchemaInput() *string
```

- *Type:* *string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.inputSchema"></a>

```go
func InputSchema() *string
```

- *Type:* *string

---

##### `OutputSchema`<sup>Required</sup> <a name="OutputSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.outputSchema"></a>

```go
func OutputSchema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">ResetSecretVersionForApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetSecretVersionForApiKey` <a name="ResetSecretVersionForApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```go
func ResetSecretVersionForApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">RequestLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">SecretVersionForApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">RequestLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">SecretVersionForApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `RequestLocationInput`<sup>Optional</sup> <a name="RequestLocationInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```go
func RequestLocationInput() *string
```

- *Type:* *string

---

##### `SecretVersionForApiKeyInput`<sup>Optional</sup> <a name="SecretVersionForApiKeyInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```go
func SecretVersionForApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```go
func RequestLocation() *string
```

- *Type:* *string

---

##### `SecretVersionForApiKey`<sup>Required</sup> <a name="SecretVersionForApiKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```go
func SecretVersionForApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">ResetSecretVersionForToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretVersionForToken` <a name="ResetSecretVersionForToken" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```go
func ResetSecretVersionForToken()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```go
func ResetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">SecretVersionForTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">SecretVersionForToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretVersionForTokenInput`<sup>Optional</sup> <a name="SecretVersionForTokenInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```go
func SecretVersionForTokenInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `SecretVersionForToken`<sup>Required</sup> <a name="SecretVersionForToken" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```go
func SecretVersionForToken() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">ResetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetSecretVersionForClientSecret` <a name="ResetSecretVersionForClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```go
func ResetSecretVersionForClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">OauthGrantTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">SecretVersionForClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">OauthGrantType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `OauthGrantTypeInput`<sup>Optional</sup> <a name="OauthGrantTypeInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```go
func OauthGrantTypeInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecretVersionForClientSecretInput`<sup>Optional</sup> <a name="SecretVersionForClientSecretInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```go
func SecretVersionForClientSecretInput() *string
```

- *Type:* *string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```go
func OauthGrantType() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SecretVersionForClientSecret`<sup>Required</sup> <a name="SecretVersionForClientSecret" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```go
func SecretVersionForClientSecret() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">PutBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">PutServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">ResetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">ResetServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```go
func PutApiKeyConfig(value GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `PutBearerTokenConfig` <a name="PutBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```go
func PutBearerTokenConfig(value GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```go
func PutOauthConfig(value GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `PutServiceAgentAuthConfig` <a name="PutServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```go
func PutServiceAgentAuthConfig(value GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```go
func ResetApiKeyConfig()
```

##### `ResetBearerTokenConfig` <a name="ResetBearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```go
func ResetBearerTokenConfig()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```go
func ResetOauthConfig()
```

##### `ResetServiceAgentAuthConfig` <a name="ResetServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```go
func ResetServiceAgentAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">ServiceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">BearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">ServiceAgentAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```go
func ApiKeyConfig() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `BearerTokenConfig`<sup>Required</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```go
func BearerTokenConfig() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```go
func OauthConfig() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `ServiceAgentAuthConfig`<sup>Required</sup> <a name="ServiceAgentAuthConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```go
func ServiceAgentAuthConfig() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```go
func ApiKeyConfigInput() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `BearerTokenConfigInput`<sup>Optional</sup> <a name="BearerTokenConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```go
func BearerTokenConfigInput() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```go
func OauthConfigInput() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `ServiceAgentAuthConfigInput`<sup>Optional</sup> <a name="ServiceAgentAuthConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```go
func ServiceAgentAuthConfigInput() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">ResetServiceAgentAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAgentAuth` <a name="ResetServiceAgentAuth" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```go
func ResetServiceAgentAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">ServiceAgentAuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAgentAuthInput`<sup>Optional</sup> <a name="ServiceAgentAuthInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```go
func ServiceAgentAuthInput() *string
```

- *Type:* *string

---

##### `ServiceAgentAuth`<sup>Required</sup> <a name="ServiceAgentAuth" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```go
func ServiceAgentAuth() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication"></a>

```go
func PutAuthentication(value GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```go
func PutServiceDirectoryConfig(value GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putTlsConfig"></a>

```go
func PutTlsConfig(value GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetAuthentication"></a>

```go
func ResetAuthentication()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```go
func ResetServiceDirectoryConfig()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```go
func ResetTlsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchemaInput">TextSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchema">TextSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authentication"></a>

```go
func Authentication() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```go
func ServiceDirectoryConfig() GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```go
func TlsConfig() GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```go
func AuthenticationInput() GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication">GoogleDialogflowCxToolVersionToolOpenApiSpecAuthentication</a>

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```go
func ServiceDirectoryConfigInput() GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `TextSchemaInput`<sup>Optional</sup> <a name="TextSchemaInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```go
func TextSchemaInput() *string
```

- *Type:* *string

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```go
func TlsConfigInput() GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

---

##### `TextSchema`<sup>Required</sup> <a name="TextSchema" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.textSchema"></a>

```go
func TextSchema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecServiceDirectoryConfig</a>

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">CertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">Cert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```go
func CertInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```go
func Cert() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference <a name="GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.putCaCerts">PutCaCerts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaCerts` <a name="PutCaCerts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```go
func PutCaCerts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCerts">CaCerts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">CaCertsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCerts`<sup>Required</sup> <a name="CaCerts" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```go
func CaCerts() GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `CaCertsInput`<sup>Optional</sup> <a name="CaCertsInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```go
func CaCertsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolVersionToolOpenApiSpecTlsConfig</a>

---


### GoogleDialogflowCxToolVersionToolOutputReference <a name="GoogleDialogflowCxToolVersionToolOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowcxtoolversion"

googledialogflowcxtoolversion.NewGoogleDialogflowCxToolVersionToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowCxToolVersionToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putConnectorSpec">PutConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putDataStoreSpec">PutDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putFunctionSpec">PutFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putOpenApiSpec">PutOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetConnectorSpec">ResetConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetDataStoreSpec">ResetDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetFunctionSpec">ResetFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetOpenApiSpec">ResetOpenApiSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectorSpec` <a name="PutConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putConnectorSpec"></a>

```go
func PutConnectorSpec(value GoogleDialogflowCxToolVersionToolConnectorSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putConnectorSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a>

---

##### `PutDataStoreSpec` <a name="PutDataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putDataStoreSpec"></a>

```go
func PutDataStoreSpec(value GoogleDialogflowCxToolVersionToolDataStoreSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putDataStoreSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a>

---

##### `PutFunctionSpec` <a name="PutFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putFunctionSpec"></a>

```go
func PutFunctionSpec(value GoogleDialogflowCxToolVersionToolFunctionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putFunctionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a>

---

##### `PutOpenApiSpec` <a name="PutOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putOpenApiSpec"></a>

```go
func PutOpenApiSpec(value GoogleDialogflowCxToolVersionToolOpenApiSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.putOpenApiSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a>

---

##### `ResetConnectorSpec` <a name="ResetConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetConnectorSpec"></a>

```go
func ResetConnectorSpec()
```

##### `ResetDataStoreSpec` <a name="ResetDataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetDataStoreSpec"></a>

```go
func ResetDataStoreSpec()
```

##### `ResetFunctionSpec` <a name="ResetFunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetFunctionSpec"></a>

```go
func ResetFunctionSpec()
```

##### `ResetOpenApiSpec` <a name="ResetOpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.resetOpenApiSpec"></a>

```go
func ResetOpenApiSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.connectorSpec">ConnectorSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.dataStoreSpec">DataStoreSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference">GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.functionSpec">FunctionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference">GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.openApiSpec">OpenApiSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.toolType">ToolType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.connectorSpecInput">ConnectorSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.dataStoreSpecInput">DataStoreSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.functionSpecInput">FunctionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.openApiSpecInput">OpenApiSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorSpec`<sup>Required</sup> <a name="ConnectorSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.connectorSpec"></a>

```go
func ConnectorSpec() GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference">GoogleDialogflowCxToolVersionToolConnectorSpecOutputReference</a>

---

##### `DataStoreSpec`<sup>Required</sup> <a name="DataStoreSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.dataStoreSpec"></a>

```go
func DataStoreSpec() GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference">GoogleDialogflowCxToolVersionToolDataStoreSpecOutputReference</a>

---

##### `FunctionSpec`<sup>Required</sup> <a name="FunctionSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.functionSpec"></a>

```go
func FunctionSpec() GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference">GoogleDialogflowCxToolVersionToolFunctionSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpenApiSpec`<sup>Required</sup> <a name="OpenApiSpec" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.openApiSpec"></a>

```go
func OpenApiSpec() GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference">GoogleDialogflowCxToolVersionToolOpenApiSpecOutputReference</a>

---

##### `ToolType`<sup>Required</sup> <a name="ToolType" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.toolType"></a>

```go
func ToolType() *string
```

- *Type:* *string

---

##### `ConnectorSpecInput`<sup>Optional</sup> <a name="ConnectorSpecInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.connectorSpecInput"></a>

```go
func ConnectorSpecInput() GoogleDialogflowCxToolVersionToolConnectorSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolConnectorSpec">GoogleDialogflowCxToolVersionToolConnectorSpec</a>

---

##### `DataStoreSpecInput`<sup>Optional</sup> <a name="DataStoreSpecInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.dataStoreSpecInput"></a>

```go
func DataStoreSpecInput() GoogleDialogflowCxToolVersionToolDataStoreSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolDataStoreSpec">GoogleDialogflowCxToolVersionToolDataStoreSpec</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FunctionSpecInput`<sup>Optional</sup> <a name="FunctionSpecInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.functionSpecInput"></a>

```go
func FunctionSpecInput() GoogleDialogflowCxToolVersionToolFunctionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolFunctionSpec">GoogleDialogflowCxToolVersionToolFunctionSpec</a>

---

##### `OpenApiSpecInput`<sup>Optional</sup> <a name="OpenApiSpecInput" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.openApiSpecInput"></a>

```go
func OpenApiSpecInput() GoogleDialogflowCxToolVersionToolOpenApiSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOpenApiSpec">GoogleDialogflowCxToolVersionToolOpenApiSpec</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionToolOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowCxToolVersionTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxToolVersion.GoogleDialogflowCxToolVersionTool">GoogleDialogflowCxToolVersionTool</a>

---



