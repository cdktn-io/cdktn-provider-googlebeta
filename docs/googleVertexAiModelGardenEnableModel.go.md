# `googleVertexAiModelGardenEnableModel` Submodule <a name="`googleVertexAiModelGardenEnableModel` Submodule" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiModelGardenEnableModel <a name="GoogleVertexAiModelGardenEnableModel" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_model_garden_enable_model google_vertex_ai_model_garden_enable_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaimodelgardenenablemodel"

googlevertexaimodelgardenenablemodel.NewGoogleVertexAiModelGardenEnableModel(scope Construct, id *string, config GoogleVertexAiModelGardenEnableModelConfig) GoogleVertexAiModelGardenEnableModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig">GoogleVertexAiModelGardenEnableModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig">GoogleVertexAiModelGardenEnableModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVertexAiModelGardenEnableModelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiModelGardenEnableModel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaimodelgardenenablemodel"

googlevertexaimodelgardenenablemodel.GoogleVertexAiModelGardenEnableModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaimodelgardenenablemodel"

googlevertexaimodelgardenenablemodel.GoogleVertexAiModelGardenEnableModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaimodelgardenenablemodel"

googlevertexaimodelgardenenablemodel.GoogleVertexAiModelGardenEnableModel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaimodelgardenenablemodel"

googlevertexaimodelgardenenablemodel.GoogleVertexAiModelGardenEnableModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleVertexAiModelGardenEnableModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVertexAiModelGardenEnableModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVertexAiModelGardenEnableModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_model_garden_enable_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiModelGardenEnableModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.enablementState">EnablementState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherEndpoint">PublisherEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference">GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherModelNameInput">PublisherModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherModelName">PublisherModelName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.enablementState"></a>

```go
func EnablementState() *string
```

- *Type:* *string

---

##### `PublisherEndpoint`<sup>Required</sup> <a name="PublisherEndpoint" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherEndpoint"></a>

```go
func PublisherEndpoint() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.timeouts"></a>

```go
func Timeouts() GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference">GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PublisherModelNameInput`<sup>Optional</sup> <a name="PublisherModelNameInput" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherModelNameInput"></a>

```go
func PublisherModelNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PublisherModelName`<sup>Required</sup> <a name="PublisherModelName" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.publisherModelName"></a>

```go
func PublisherModelName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiModelGardenEnableModelConfig <a name="GoogleVertexAiModelGardenEnableModelConfig" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaimodelgardenenablemodel"

&googlevertexaimodelgardenenablemodel.GoogleVertexAiModelGardenEnableModelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PublisherModelName: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.publisherModelName">PublisherModelName</a></code> | <code>*string</code> | The resource name of the Model Garden publisher model to enable. Format: 'publishers/{publisher}/models/{publisher_model}', optionally with a version suffix, for example 'publishers/google/models/paligemma@paligemma-224-float32'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_model_garden_enable_model#id GoogleVertexAiModelGardenEnableModel#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_model_garden_enable_model#project GoogleVertexAiModelGardenEnableModel#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PublisherModelName`<sup>Required</sup> <a name="PublisherModelName" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.publisherModelName"></a>

```go
PublisherModelName *string
```

- *Type:* *string

The resource name of the Model Garden publisher model to enable. Format: 'publishers/{publisher}/models/{publisher_model}', optionally with a version suffix, for example 'publishers/google/models/paligemma@paligemma-224-float32'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_model_garden_enable_model#publisher_model_name GoogleVertexAiModelGardenEnableModel#publisher_model_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_model_garden_enable_model#id GoogleVertexAiModelGardenEnableModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_model_garden_enable_model#project GoogleVertexAiModelGardenEnableModel#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelConfig.property.timeouts"></a>

```go
Timeouts GoogleVertexAiModelGardenEnableModelTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts">GoogleVertexAiModelGardenEnableModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_model_garden_enable_model#timeouts GoogleVertexAiModelGardenEnableModel#timeouts}

---

### GoogleVertexAiModelGardenEnableModelTimeouts <a name="GoogleVertexAiModelGardenEnableModelTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaimodelgardenenablemodel"

&googlevertexaimodelgardenenablemodel.GoogleVertexAiModelGardenEnableModelTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_model_garden_enable_model#create GoogleVertexAiModelGardenEnableModel#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_model_garden_enable_model#delete GoogleVertexAiModelGardenEnableModel#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_model_garden_enable_model#create GoogleVertexAiModelGardenEnableModel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_model_garden_enable_model#delete GoogleVertexAiModelGardenEnableModel#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference <a name="GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaimodelgardenenablemodel"

googlevertexaimodelgardenenablemodel.NewGoogleVertexAiModelGardenEnableModelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelGardenEnableModel.GoogleVertexAiModelGardenEnableModelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



