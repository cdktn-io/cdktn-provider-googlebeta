# `googleSourcerepoRepository` Submodule <a name="`googleSourcerepoRepository` Submodule" id="@cdktn/provider-google-beta.googleSourcerepoRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSourcerepoRepository <a name="GoogleSourcerepoRepository" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository google_sourcerepo_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesourcereporepository"

googlesourcereporepository.NewGoogleSourcerepoRepository(scope Construct, id *string, config GoogleSourcerepoRepositoryConfig) GoogleSourcerepoRepository
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig">GoogleSourcerepoRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig">GoogleSourcerepoRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putPubsubConfigs">PutPubsubConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetCreateIgnoreAlreadyExists">ResetCreateIgnoreAlreadyExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetPubsubConfigs">ResetPubsubConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPubsubConfigs` <a name="PutPubsubConfigs" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putPubsubConfigs"></a>

```go
func PutPubsubConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putPubsubConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putTimeouts"></a>

```go
func PutTimeouts(value GoogleSourcerepoRepositoryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a>

---

##### `ResetCreateIgnoreAlreadyExists` <a name="ResetCreateIgnoreAlreadyExists" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetCreateIgnoreAlreadyExists"></a>

```go
func ResetCreateIgnoreAlreadyExists()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPubsubConfigs` <a name="ResetPubsubConfigs" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetPubsubConfigs"></a>

```go
func ResetPubsubConfigs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSourcerepoRepository resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesourcereporepository"

googlesourcereporepository.GoogleSourcerepoRepository_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesourcereporepository"

googlesourcereporepository.GoogleSourcerepoRepository_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesourcereporepository"

googlesourcereporepository.GoogleSourcerepoRepository_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesourcereporepository"

googlesourcereporepository.GoogleSourcerepoRepository_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleSourcerepoRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSourcerepoRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSourcerepoRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSourcerepoRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.pubsubConfigs">PubsubConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList">GoogleSourcerepoRepositoryPubsubConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference">GoogleSourcerepoRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.createIgnoreAlreadyExistsInput">CreateIgnoreAlreadyExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.pubsubConfigsInput">PubsubConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.createIgnoreAlreadyExists">CreateIgnoreAlreadyExists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PubsubConfigs`<sup>Required</sup> <a name="PubsubConfigs" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.pubsubConfigs"></a>

```go
func PubsubConfigs() GoogleSourcerepoRepositoryPubsubConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList">GoogleSourcerepoRepositoryPubsubConfigsList</a>

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.timeouts"></a>

```go
func Timeouts() GoogleSourcerepoRepositoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference">GoogleSourcerepoRepositoryTimeoutsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `CreateIgnoreAlreadyExistsInput`<sup>Optional</sup> <a name="CreateIgnoreAlreadyExistsInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.createIgnoreAlreadyExistsInput"></a>

```go
func CreateIgnoreAlreadyExistsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PubsubConfigsInput`<sup>Optional</sup> <a name="PubsubConfigsInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.pubsubConfigsInput"></a>

```go
func PubsubConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CreateIgnoreAlreadyExists`<sup>Required</sup> <a name="CreateIgnoreAlreadyExists" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.createIgnoreAlreadyExists"></a>

```go
func CreateIgnoreAlreadyExists() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSourcerepoRepositoryConfig <a name="GoogleSourcerepoRepositoryConfig" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesourcereporepository"

&googlesourcereporepository.GoogleSourcerepoRepositoryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CreateIgnoreAlreadyExists: interface{},
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	PubsubConfigs: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.name">Name</a></code> | <code>*string</code> | Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.createIgnoreAlreadyExists">CreateIgnoreAlreadyExists</a></code> | <code>interface{}</code> | If set to true, skip repository creation if a repository with the same name already exists. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#id GoogleSourcerepoRepository#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#project GoogleSourcerepoRepository#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.pubsubConfigs">PubsubConfigs</a></code> | <code>interface{}</code> | pubsub_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#name GoogleSourcerepoRepository#name}

---

##### `CreateIgnoreAlreadyExists`<sup>Optional</sup> <a name="CreateIgnoreAlreadyExists" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.createIgnoreAlreadyExists"></a>

```go
CreateIgnoreAlreadyExists interface{}
```

- *Type:* interface{}

If set to true, skip repository creation if a repository with the same name already exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#create_ignore_already_exists GoogleSourcerepoRepository#create_ignore_already_exists}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#deletion_policy GoogleSourcerepoRepository#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#id GoogleSourcerepoRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#project GoogleSourcerepoRepository#project}.

---

##### `PubsubConfigs`<sup>Optional</sup> <a name="PubsubConfigs" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.pubsubConfigs"></a>

```go
PubsubConfigs interface{}
```

- *Type:* interface{}

pubsub_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#pubsub_configs GoogleSourcerepoRepository#pubsub_configs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.timeouts"></a>

```go
Timeouts GoogleSourcerepoRepositoryTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#timeouts GoogleSourcerepoRepository#timeouts}

---

### GoogleSourcerepoRepositoryPubsubConfigs <a name="GoogleSourcerepoRepositoryPubsubConfigs" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesourcereporepository"

&googlesourcereporepository.GoogleSourcerepoRepositoryPubsubConfigs {
	MessageFormat: *string,
	Topic: *string,
	ServiceAccountEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.messageFormat">MessageFormat</a></code> | <code>*string</code> | The format of the Cloud Pub/Sub messages. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.topic">Topic</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#topic GoogleSourcerepoRepository#topic}. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Email address of the service account used for publishing Cloud Pub/Sub messages. |

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.messageFormat"></a>

```go
MessageFormat *string
```

- *Type:* *string

The format of the Cloud Pub/Sub messages.

* PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.
* JSON: The message payload is a JSON string of SourceRepoEvent. Possible values: ["PROTOBUF", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#message_format GoogleSourcerepoRepository#message_format}

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#topic GoogleSourcerepoRepository#topic}.

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Email address of the service account used for publishing Cloud Pub/Sub messages.

This service account needs to be in the same project as the PubsubConfig. When added,
the caller needs to have iam.serviceAccounts.actAs permission on this service account.
If unspecified, it defaults to the compute engine default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#service_account_email GoogleSourcerepoRepository#service_account_email}

---

### GoogleSourcerepoRepositoryTimeouts <a name="GoogleSourcerepoRepositoryTimeouts" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesourcereporepository"

&googlesourcereporepository.GoogleSourcerepoRepositoryTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#create GoogleSourcerepoRepository#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#delete GoogleSourcerepoRepository#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#update GoogleSourcerepoRepository#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#create GoogleSourcerepoRepository#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#delete GoogleSourcerepoRepository#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_sourcerepo_repository#update GoogleSourcerepoRepository#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSourcerepoRepositoryPubsubConfigsList <a name="GoogleSourcerepoRepositoryPubsubConfigsList" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesourcereporepository"

googlesourcereporepository.NewGoogleSourcerepoRepositoryPubsubConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleSourcerepoRepositoryPubsubConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.get"></a>

```go
func Get(index *f64) GoogleSourcerepoRepositoryPubsubConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSourcerepoRepositoryPubsubConfigsOutputReference <a name="GoogleSourcerepoRepositoryPubsubConfigsOutputReference" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesourcereporepository"

googlesourcereporepository.NewGoogleSourcerepoRepositoryPubsubConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleSourcerepoRepositoryPubsubConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormatInput">MessageFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageFormatInput`<sup>Optional</sup> <a name="MessageFormatInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormatInput"></a>

```go
func MessageFormatInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormat"></a>

```go
func MessageFormat() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleSourcerepoRepositoryTimeoutsOutputReference <a name="GoogleSourcerepoRepositoryTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlesourcereporepository"

googlesourcereporepository.NewGoogleSourcerepoRepositoryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSourcerepoRepositoryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



