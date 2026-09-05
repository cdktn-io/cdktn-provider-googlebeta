# `googleAgentRegistryBinding` Submodule <a name="`googleAgentRegistryBinding` Submodule" id="@cdktn/provider-google-beta.googleAgentRegistryBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAgentRegistryBinding <a name="GoogleAgentRegistryBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding google_agent_registry_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

googleagentregistrybinding.NewGoogleAgentRegistryBinding(scope Construct, id *string, config GoogleAgentRegistryBindingConfig) GoogleAgentRegistryBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig">GoogleAgentRegistryBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig">GoogleAgentRegistryBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding">PutAuthProviderBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthProviderBinding` <a name="PutAuthProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding"></a>

```go
func PutAuthProviderBinding(value GoogleAgentRegistryBindingAuthProviderBinding)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putSource"></a>

```go
func PutSource(value GoogleAgentRegistryBindingSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTarget"></a>

```go
func PutTarget(value GoogleAgentRegistryBindingTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAgentRegistryBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleAgentRegistryBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

googleagentregistrybinding.GoogleAgentRegistryBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

googleagentregistrybinding.GoogleAgentRegistryBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

googleagentregistrybinding.GoogleAgentRegistryBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

googleagentregistrybinding.GoogleAgentRegistryBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleAgentRegistryBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAgentRegistryBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAgentRegistryBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleAgentRegistryBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBinding">AuthProviderBinding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference">GoogleAgentRegistryBindingAuthProviderBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.source">Source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference">GoogleAgentRegistryBindingSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.target">Target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference">GoogleAgentRegistryBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference">GoogleAgentRegistryBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBindingInput">AuthProviderBindingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingIdInput">BindingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingId">BindingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthProviderBinding`<sup>Required</sup> <a name="AuthProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBinding"></a>

```go
func AuthProviderBinding() GoogleAgentRegistryBindingAuthProviderBindingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference">GoogleAgentRegistryBindingAuthProviderBindingOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.source"></a>

```go
func Source() GoogleAgentRegistryBindingSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference">GoogleAgentRegistryBindingSourceOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.target"></a>

```go
func Target() GoogleAgentRegistryBindingTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference">GoogleAgentRegistryBindingTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeouts"></a>

```go
func Timeouts() GoogleAgentRegistryBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference">GoogleAgentRegistryBindingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AuthProviderBindingInput`<sup>Optional</sup> <a name="AuthProviderBindingInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBindingInput"></a>

```go
func AuthProviderBindingInput() GoogleAgentRegistryBindingAuthProviderBinding
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

---

##### `BindingIdInput`<sup>Optional</sup> <a name="BindingIdInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingIdInput"></a>

```go
func BindingIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.sourceInput"></a>

```go
func SourceInput() GoogleAgentRegistryBindingSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.targetInput"></a>

```go
func TargetInput() GoogleAgentRegistryBindingTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BindingId`<sup>Required</sup> <a name="BindingId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingId"></a>

```go
func BindingId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAgentRegistryBindingAuthProviderBinding <a name="GoogleAgentRegistryBindingAuthProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

&googleagentregistrybinding.GoogleAgentRegistryBindingAuthProviderBinding {
	AuthProvider: *string,
	ContinueUri: *string,
	Scopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.authProvider">AuthProvider</a></code> | <code>*string</code> | The resource name of the target auth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.continueUri">ContinueUri</a></code> | <code>*string</code> | The continue URI of the auth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.scopes">Scopes</a></code> | <code>*[]*string</code> | The list of OAuth2 scopes of the auth provider. |

---

##### `AuthProvider`<sup>Required</sup> <a name="AuthProvider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.authProvider"></a>

```go
AuthProvider *string
```

- *Type:* *string

The resource name of the target auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#auth_provider GoogleAgentRegistryBinding#auth_provider}

---

##### `ContinueUri`<sup>Optional</sup> <a name="ContinueUri" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.continueUri"></a>

```go
ContinueUri *string
```

- *Type:* *string

The continue URI of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#continue_uri GoogleAgentRegistryBinding#continue_uri}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

The list of OAuth2 scopes of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#scopes GoogleAgentRegistryBinding#scopes}

---

### GoogleAgentRegistryBindingConfig <a name="GoogleAgentRegistryBindingConfig" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

&googleagentregistrybinding.GoogleAgentRegistryBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AuthProviderBinding: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding,
	BindingId: *string,
	Location: *string,
	Source: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource,
	Target: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget,
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.authProviderBinding">AuthProviderBinding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | auth_provider_binding block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.bindingId">BindingId</a></code> | <code>*string</code> | The name of the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.target">Target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.description">Description</a></code> | <code>*string</code> | The description of the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-defined display name for the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#id GoogleAgentRegistryBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#project GoogleAgentRegistryBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthProviderBinding`<sup>Required</sup> <a name="AuthProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.authProviderBinding"></a>

```go
AuthProviderBinding GoogleAgentRegistryBindingAuthProviderBinding
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

auth_provider_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#auth_provider_binding GoogleAgentRegistryBinding#auth_provider_binding}

---

##### `BindingId`<sup>Required</sup> <a name="BindingId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.bindingId"></a>

```go
BindingId *string
```

- *Type:* *string

The name of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#binding_id GoogleAgentRegistryBinding#binding_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#location GoogleAgentRegistryBinding#location}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.source"></a>

```go
Source GoogleAgentRegistryBindingSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#source GoogleAgentRegistryBinding#source}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.target"></a>

```go
Target GoogleAgentRegistryBindingTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#target GoogleAgentRegistryBinding#target}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#deletion_policy GoogleAgentRegistryBinding#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#description GoogleAgentRegistryBinding#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-defined display name for the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#display_name GoogleAgentRegistryBinding#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#id GoogleAgentRegistryBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#project GoogleAgentRegistryBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.timeouts"></a>

```go
Timeouts GoogleAgentRegistryBindingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#timeouts GoogleAgentRegistryBinding#timeouts}

---

### GoogleAgentRegistryBindingSource <a name="GoogleAgentRegistryBindingSource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

&googleagentregistrybinding.GoogleAgentRegistryBindingSource {
	Identifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource.property.identifier">Identifier</a></code> | <code>*string</code> | The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#identifier GoogleAgentRegistryBinding#identifier}

---

### GoogleAgentRegistryBindingTarget <a name="GoogleAgentRegistryBindingTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

&googleagentregistrybinding.GoogleAgentRegistryBindingTarget {
	Identifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget.property.identifier">Identifier</a></code> | <code>*string</code> | The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#identifier GoogleAgentRegistryBinding#identifier}

---

### GoogleAgentRegistryBindingTimeouts <a name="GoogleAgentRegistryBindingTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

&googleagentregistrybinding.GoogleAgentRegistryBindingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#create GoogleAgentRegistryBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#delete GoogleAgentRegistryBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#update GoogleAgentRegistryBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#create GoogleAgentRegistryBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#delete GoogleAgentRegistryBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_agent_registry_binding#update GoogleAgentRegistryBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAgentRegistryBindingAuthProviderBindingOutputReference <a name="GoogleAgentRegistryBindingAuthProviderBindingOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

googleagentregistrybinding.NewGoogleAgentRegistryBindingAuthProviderBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAgentRegistryBindingAuthProviderBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetContinueUri">ResetContinueUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContinueUri` <a name="ResetContinueUri" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetContinueUri"></a>

```go
func ResetContinueUri()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetScopes"></a>

```go
func ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProviderInput">AuthProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUriInput">ContinueUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProvider">AuthProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUri">ContinueUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthProviderInput`<sup>Optional</sup> <a name="AuthProviderInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProviderInput"></a>

```go
func AuthProviderInput() *string
```

- *Type:* *string

---

##### `ContinueUriInput`<sup>Optional</sup> <a name="ContinueUriInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUriInput"></a>

```go
func ContinueUriInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthProvider`<sup>Required</sup> <a name="AuthProvider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProvider"></a>

```go
func AuthProvider() *string
```

- *Type:* *string

---

##### `ContinueUri`<sup>Required</sup> <a name="ContinueUri" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUri"></a>

```go
func ContinueUri() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAgentRegistryBindingAuthProviderBinding
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

---


### GoogleAgentRegistryBindingSourceOutputReference <a name="GoogleAgentRegistryBindingSourceOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

googleagentregistrybinding.NewGoogleAgentRegistryBindingSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAgentRegistryBindingSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAgentRegistryBindingSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

---


### GoogleAgentRegistryBindingTargetOutputReference <a name="GoogleAgentRegistryBindingTargetOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

googleagentregistrybinding.NewGoogleAgentRegistryBindingTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAgentRegistryBindingTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAgentRegistryBindingTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

---


### GoogleAgentRegistryBindingTimeoutsOutputReference <a name="GoogleAgentRegistryBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googleagentregistrybinding"

googleagentregistrybinding.NewGoogleAgentRegistryBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAgentRegistryBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



