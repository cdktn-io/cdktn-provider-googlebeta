# `googleResourceManagerBoundaryConfig` Submodule <a name="`googleResourceManagerBoundaryConfig` Submodule" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleResourceManagerBoundaryConfigA <a name="GoogleResourceManagerBoundaryConfigA" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config google_resource_manager_boundary_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleresourcemanagerboundaryconfig"

googleresourcemanagerboundaryconfig.NewGoogleResourceManagerBoundaryConfigA(scope Construct, id *string, config GoogleResourceManagerBoundaryConfigAConfig) GoogleResourceManagerBoundaryConfigA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig">GoogleResourceManagerBoundaryConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig">GoogleResourceManagerBoundaryConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.putTimeouts"></a>

```go
func PutTimeouts(value GoogleResourceManagerBoundaryConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleResourceManagerBoundaryConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleresourcemanagerboundaryconfig"

googleresourcemanagerboundaryconfig.GoogleResourceManagerBoundaryConfigA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleresourcemanagerboundaryconfig"

googleresourcemanagerboundaryconfig.GoogleResourceManagerBoundaryConfigA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleresourcemanagerboundaryconfig"

googleresourcemanagerboundaryconfig.GoogleResourceManagerBoundaryConfigA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleresourcemanagerboundaryconfig"

googleresourcemanagerboundaryconfig.GoogleResourceManagerBoundaryConfigA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleResourceManagerBoundaryConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleResourceManagerBoundaryConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleResourceManagerBoundaryConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleResourceManagerBoundaryConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference">GoogleResourceManagerBoundaryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.timeouts"></a>

```go
func Timeouts() GoogleResourceManagerBoundaryConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference">GoogleResourceManagerBoundaryConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleResourceManagerBoundaryConfigAConfig <a name="GoogleResourceManagerBoundaryConfigAConfig" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleresourcemanagerboundaryconfig"

&googleresourcemanagerboundaryconfig.GoogleResourceManagerBoundaryConfigAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	TagKey: *string,
	DeletionPolicy: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.tagKey">TagKey</a></code> | <code>*string</code> | The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#id GoogleResourceManagerBoundaryConfigA#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#parent GoogleResourceManagerBoundaryConfigA#parent}

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'.

Boundaries under this parent filter projects on this tag key.

The service also accepts the 'tagKeys/{numeric_id}' form here, but
Boundaries accept only the namespaced form and are validated against this
value verbatim. Storing the 'tagKeys/{numeric_id}' form therefore makes
every subsequent Boundary create fail with 'FAILED_PRECONDITION'. Always
use the namespaced form, for example
'google_tags_tag_key.example.namespaced_name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#tag_key GoogleResourceManagerBoundaryConfigA#tag_key}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#deletion_policy GoogleResourceManagerBoundaryConfigA#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#id GoogleResourceManagerBoundaryConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigAConfig.property.timeouts"></a>

```go
Timeouts GoogleResourceManagerBoundaryConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts">GoogleResourceManagerBoundaryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#timeouts GoogleResourceManagerBoundaryConfigA#timeouts}

---

### GoogleResourceManagerBoundaryConfigTimeouts <a name="GoogleResourceManagerBoundaryConfigTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleresourcemanagerboundaryconfig"

&googleresourcemanagerboundaryconfig.GoogleResourceManagerBoundaryConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#create GoogleResourceManagerBoundaryConfigA#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#delete GoogleResourceManagerBoundaryConfigA#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#update GoogleResourceManagerBoundaryConfigA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#create GoogleResourceManagerBoundaryConfigA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#delete GoogleResourceManagerBoundaryConfigA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary_config#update GoogleResourceManagerBoundaryConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleResourceManagerBoundaryConfigTimeoutsOutputReference <a name="GoogleResourceManagerBoundaryConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googleresourcemanagerboundaryconfig"

googleresourcemanagerboundaryconfig.NewGoogleResourceManagerBoundaryConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleResourceManagerBoundaryConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundaryConfig.GoogleResourceManagerBoundaryConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



