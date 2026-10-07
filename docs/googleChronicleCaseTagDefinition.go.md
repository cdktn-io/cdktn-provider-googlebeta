# `googleChronicleCaseTagDefinition` Submodule <a name="`googleChronicleCaseTagDefinition` Submodule" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleCaseTagDefinition <a name="GoogleChronicleCaseTagDefinition" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition google_chronicle_case_tag_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlechroniclecasetagdefinition"

googlechroniclecasetagdefinition.NewGoogleChronicleCaseTagDefinition(scope Construct, id *string, config GoogleChronicleCaseTagDefinitionConfig) GoogleChronicleCaseTagDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig">GoogleChronicleCaseTagDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig">GoogleChronicleCaseTagDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetPropertyName">ResetPropertyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.putTimeouts"></a>

```go
func PutTimeouts(value GoogleChronicleCaseTagDefinitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts">GoogleChronicleCaseTagDefinitionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPropertyName` <a name="ResetPropertyName" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetPropertyName"></a>

```go
func ResetPropertyName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleCaseTagDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlechroniclecasetagdefinition"

googlechroniclecasetagdefinition.GoogleChronicleCaseTagDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlechroniclecasetagdefinition"

googlechroniclecasetagdefinition.GoogleChronicleCaseTagDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlechroniclecasetagdefinition"

googlechroniclecasetagdefinition.GoogleChronicleCaseTagDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlechroniclecasetagdefinition"

googlechroniclecasetagdefinition.GoogleChronicleCaseTagDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleChronicleCaseTagDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleChronicleCaseTagDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleChronicleCaseTagDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleCaseTagDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.caseTagDefinitionId">CaseTagDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference">GoogleChronicleCaseTagDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.canBeCaseTitleInput">CanBeCaseTitleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.comparisonTypeInput">ComparisonTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.matchCriteriaInput">MatchCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.propertyNameInput">PropertyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.canBeCaseTitle">CanBeCaseTitle</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.comparisonType">ComparisonType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.matchCriteria">MatchCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.propertyName">PropertyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.value">Value</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaseTagDefinitionId`<sup>Required</sup> <a name="CaseTagDefinitionId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.caseTagDefinitionId"></a>

```go
func CaseTagDefinitionId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.timeouts"></a>

```go
func Timeouts() GoogleChronicleCaseTagDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference">GoogleChronicleCaseTagDefinitionTimeoutsOutputReference</a>

---

##### `CanBeCaseTitleInput`<sup>Optional</sup> <a name="CanBeCaseTitleInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.canBeCaseTitleInput"></a>

```go
func CanBeCaseTitleInput() interface{}
```

- *Type:* interface{}

---

##### `ComparisonTypeInput`<sup>Optional</sup> <a name="ComparisonTypeInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.comparisonTypeInput"></a>

```go
func ComparisonTypeInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MatchCriteriaInput`<sup>Optional</sup> <a name="MatchCriteriaInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.matchCriteriaInput"></a>

```go
func MatchCriteriaInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PropertyNameInput`<sup>Optional</sup> <a name="PropertyNameInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.propertyNameInput"></a>

```go
func PropertyNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `CanBeCaseTitle`<sup>Required</sup> <a name="CanBeCaseTitle" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.canBeCaseTitle"></a>

```go
func CanBeCaseTitle() interface{}
```

- *Type:* interface{}

---

##### `ComparisonType`<sup>Required</sup> <a name="ComparisonType" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.comparisonType"></a>

```go
func ComparisonType() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.matchCriteria"></a>

```go
func MatchCriteria() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PropertyName`<sup>Required</sup> <a name="PropertyName" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.propertyName"></a>

```go
func PropertyName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleCaseTagDefinitionConfig <a name="GoogleChronicleCaseTagDefinitionConfig" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlechroniclecasetagdefinition"

&googlechroniclecasetagdefinition.GoogleChronicleCaseTagDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CanBeCaseTitle: interface{},
	ComparisonType: *string,
	DisplayName: *string,
	Instance: *string,
	Location: *string,
	MatchCriteria: *string,
	Priority: *f64,
	Value: *string,
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	PropertyName: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.canBeCaseTitle">CanBeCaseTitle</a></code> | <code>interface{}</code> | When checked, the tag will be assigned as the title of the case if it meets the conditions. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.comparisonType">ComparisonType</a></code> | <code>*string</code> | The type of comparison to be used when comparing the value to the case. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | This is the name of the tag that will be applied to the case. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.instance">Instance</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.matchCriteria">MatchCriteria</a></code> | <code>*string</code> | The criteria to match the case against. Possible values: ["BY_VENDOR", "BY_PRODUCT", "BY_RULE_GENERATOR", "BY_ENTITY_PROPERTY_NAME", "DATA_DRIVEN", "SYSTEM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.priority">Priority</a></code> | <code>*f64</code> | Note that Google Security Operations merges priority with other alerts and entities and events so that the priority here is not absolute. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.value">Value</a></code> | <code>*string</code> | Specific value to search in case - in addition to SearchIn property. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#id GoogleChronicleCaseTagDefinition#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#project GoogleChronicleCaseTagDefinition#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.propertyName">PropertyName</a></code> | <code>*string</code> | Specific Entity property name to search in case. This is relevant only when a SearchIn of type BY_ENTITY_PROPERTY_NAME was chosen. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts">GoogleChronicleCaseTagDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CanBeCaseTitle`<sup>Required</sup> <a name="CanBeCaseTitle" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.canBeCaseTitle"></a>

```go
CanBeCaseTitle interface{}
```

- *Type:* interface{}

When checked, the tag will be assigned as the title of the case if it meets the conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#can_be_case_title GoogleChronicleCaseTagDefinition#can_be_case_title}

---

##### `ComparisonType`<sup>Required</sup> <a name="ComparisonType" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.comparisonType"></a>

```go
ComparisonType *string
```

- *Type:* *string

The type of comparison to be used when comparing the value to the case.

Possible values: ["EXACT", "START_WITH", "CONTAIN", "ENDS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#comparison_type GoogleChronicleCaseTagDefinition#comparison_type}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

This is the name of the tag that will be applied to the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#display_name GoogleChronicleCaseTagDefinition#display_name}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#instance GoogleChronicleCaseTagDefinition#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#location GoogleChronicleCaseTagDefinition#location}

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.matchCriteria"></a>

```go
MatchCriteria *string
```

- *Type:* *string

The criteria to match the case against. Possible values: ["BY_VENDOR", "BY_PRODUCT", "BY_RULE_GENERATOR", "BY_ENTITY_PROPERTY_NAME", "DATA_DRIVEN", "SYSTEM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#match_criteria GoogleChronicleCaseTagDefinition#match_criteria}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Note that Google Security Operations merges priority with other alerts and entities and events so that the priority here is not absolute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#priority GoogleChronicleCaseTagDefinition#priority}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Specific value to search in case - in addition to SearchIn property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#value GoogleChronicleCaseTagDefinition#value}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#deletion_policy GoogleChronicleCaseTagDefinition#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#id GoogleChronicleCaseTagDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#project GoogleChronicleCaseTagDefinition#project}.

---

##### `PropertyName`<sup>Optional</sup> <a name="PropertyName" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.propertyName"></a>

```go
PropertyName *string
```

- *Type:* *string

Specific Entity property name to search in case. This is relevant only when a SearchIn of type BY_ENTITY_PROPERTY_NAME was chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#property_name GoogleChronicleCaseTagDefinition#property_name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.timeouts"></a>

```go
Timeouts GoogleChronicleCaseTagDefinitionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts">GoogleChronicleCaseTagDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#timeouts GoogleChronicleCaseTagDefinition#timeouts}

---

### GoogleChronicleCaseTagDefinitionTimeouts <a name="GoogleChronicleCaseTagDefinitionTimeouts" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlechroniclecasetagdefinition"

&googlechroniclecasetagdefinition.GoogleChronicleCaseTagDefinitionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#create GoogleChronicleCaseTagDefinition#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#delete GoogleChronicleCaseTagDefinition#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#update GoogleChronicleCaseTagDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#create GoogleChronicleCaseTagDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#delete GoogleChronicleCaseTagDefinition#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#update GoogleChronicleCaseTagDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleCaseTagDefinitionTimeoutsOutputReference <a name="GoogleChronicleCaseTagDefinitionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlechroniclecasetagdefinition"

googlechroniclecasetagdefinition.NewGoogleChronicleCaseTagDefinitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleChronicleCaseTagDefinitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



