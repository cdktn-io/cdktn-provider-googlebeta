# `googleCesEvaluation` Submodule <a name="`googleCesEvaluation` Submodule" id="@cdktn/provider-google-beta.googleCesEvaluation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesEvaluation <a name="GoogleCesEvaluation" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation google_ces_evaluation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluation(scope Construct, id *string, config GoogleCesEvaluationConfig) GoogleCesEvaluation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig">GoogleCesEvaluationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig">GoogleCesEvaluationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.putGolden">PutGolden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetGolden">ResetGolden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGolden` <a name="PutGolden" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.putGolden"></a>

```go
func PutGolden(value GoogleCesEvaluationGolden)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.putGolden.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCesEvaluationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts">GoogleCesEvaluationTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGolden` <a name="ResetGolden" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetGolden"></a>

```go
func ResetGolden()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesEvaluation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.GoogleCesEvaluation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.GoogleCesEvaluation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.GoogleCesEvaluation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.GoogleCesEvaluation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleCesEvaluation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCesEvaluation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCesEvaluation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesEvaluation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationDatasets">EvaluationDatasets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationRuns">EvaluationRuns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.golden">Golden</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference">GoogleCesEvaluationGoldenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.invalid">Invalid</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference">GoogleCesEvaluationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.appInput">AppInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationIdInput">EvaluationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.goldenInput">GoldenInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.app">App</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationId">EvaluationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `EvaluationDatasets`<sup>Required</sup> <a name="EvaluationDatasets" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationDatasets"></a>

```go
func EvaluationDatasets() *[]*string
```

- *Type:* *[]*string

---

##### `EvaluationRuns`<sup>Required</sup> <a name="EvaluationRuns" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationRuns"></a>

```go
func EvaluationRuns() *[]*string
```

- *Type:* *[]*string

---

##### `Golden`<sup>Required</sup> <a name="Golden" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.golden"></a>

```go
func Golden() GoogleCesEvaluationGoldenOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference">GoogleCesEvaluationGoldenOutputReference</a>

---

##### `Invalid`<sup>Required</sup> <a name="Invalid" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.invalid"></a>

```go
func Invalid() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.lastUpdatedBy"></a>

```go
func LastUpdatedBy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.timeouts"></a>

```go
func Timeouts() GoogleCesEvaluationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference">GoogleCesEvaluationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.appInput"></a>

```go
func AppInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EvaluationIdInput`<sup>Optional</sup> <a name="EvaluationIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationIdInput"></a>

```go
func EvaluationIdInput() *string
```

- *Type:* *string

---

##### `GoldenInput`<sup>Optional</sup> <a name="GoldenInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.goldenInput"></a>

```go
func GoldenInput() GoogleCesEvaluationGolden
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.app"></a>

```go
func App() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EvaluationId`<sup>Required</sup> <a name="EvaluationId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.evaluationId"></a>

```go
func EvaluationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesEvaluationConfig <a name="GoogleCesEvaluationConfig" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	App: *string,
	DisplayName: *string,
	EvaluationId: *string,
	Location: *string,
	Description: *string,
	Golden: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGolden,
	Id: *string,
	Project: *string,
	Tags: *[]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.app">App</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#app GoogleCesEvaluation#app}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-defined display name of the evaluation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.evaluationId">EvaluationId</a></code> | <code>*string</code> | The ID to use for the evaluation, which will become the final component of the evaluation's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#location GoogleCesEvaluation#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.description">Description</a></code> | <code>*string</code> | User-defined description of the evaluation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.golden">Golden</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a></code> | golden block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#project GoogleCesEvaluation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | User defined tags to categorize the evaluation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts">GoogleCesEvaluationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.app"></a>

```go
App *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#app GoogleCesEvaluation#app}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-defined display name of the evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#display_name GoogleCesEvaluation#display_name}

---

##### `EvaluationId`<sup>Required</sup> <a name="EvaluationId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.evaluationId"></a>

```go
EvaluationId *string
```

- *Type:* *string

The ID to use for the evaluation, which will become the final component of the evaluation's resource name.

If not provided, a unique ID will be
automatically assigned for the evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#evaluation_id GoogleCesEvaluation#evaluation_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#location GoogleCesEvaluation#location}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-defined description of the evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#description GoogleCesEvaluation#description}

---

##### `Golden`<sup>Optional</sup> <a name="Golden" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.golden"></a>

```go
Golden GoogleCesEvaluationGolden
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a>

golden block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#golden GoogleCesEvaluation#golden}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#project GoogleCesEvaluation#project}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

User defined tags to categorize the evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tags GoogleCesEvaluation#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationConfig.property.timeouts"></a>

```go
Timeouts GoogleCesEvaluationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts">GoogleCesEvaluationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#timeouts GoogleCesEvaluation#timeouts}

---

### GoogleCesEvaluationGolden <a name="GoogleCesEvaluationGolden" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGolden {
	Turns: interface{},
	EvaluationExpectations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden.property.turns">Turns</a></code> | <code>interface{}</code> | turns block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden.property.evaluationExpectations">EvaluationExpectations</a></code> | <code>*[]*string</code> | The evaluation expectations to evaluate the replayed conversation against. Format: projects/{project}/locations/{location}/apps/{app}/evaluationExpectations/{evaluationExpectation}. |

---

##### `Turns`<sup>Required</sup> <a name="Turns" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden.property.turns"></a>

```go
Turns interface{}
```

- *Type:* interface{}

turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#turns GoogleCesEvaluation#turns}

---

##### `EvaluationExpectations`<sup>Optional</sup> <a name="EvaluationExpectations" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden.property.evaluationExpectations"></a>

```go
EvaluationExpectations *[]*string
```

- *Type:* *[]*string

The evaluation expectations to evaluate the replayed conversation against. Format: projects/{project}/locations/{location}/apps/{app}/evaluationExpectations/{evaluationExpectation}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#evaluation_expectations GoogleCesEvaluation#evaluation_expectations}

---

### GoogleCesEvaluationGoldenTurns <a name="GoogleCesEvaluationGoldenTurns" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurns {
	Steps: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns.property.steps">Steps</a></code> | <code>interface{}</code> | steps block. |

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurns.property.steps"></a>

```go
Steps interface{}
```

- *Type:* interface{}

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#steps GoogleCesEvaluation#steps}

---

### GoogleCesEvaluationGoldenTurnsRootSpan <a name="GoogleCesEvaluationGoldenTurnsRootSpan" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsRootSpan {

}
```


### GoogleCesEvaluationGoldenTurnsSteps <a name="GoogleCesEvaluationGoldenTurnsSteps" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsSteps {
	AgentTransfer: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer,
	Expectation: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation,
	UserInput: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.property.expectation">Expectation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a></code> | expectation block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.property.userInput">UserInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a></code> | user_input block. |

---

##### `AgentTransfer`<sup>Optional</sup> <a name="AgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.property.agentTransfer"></a>

```go
AgentTransfer GoogleCesEvaluationGoldenTurnsStepsAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#agent_transfer GoogleCesEvaluation#agent_transfer}

---

##### `Expectation`<sup>Optional</sup> <a name="Expectation" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.property.expectation"></a>

```go
Expectation GoogleCesEvaluationGoldenTurnsStepsExpectation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a>

expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#expectation GoogleCesEvaluation#expectation}

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsSteps.property.userInput"></a>

```go
UserInput GoogleCesEvaluationGoldenTurnsStepsUserInput
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a>

user_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#user_input GoogleCesEvaluation#user_input}

---

### GoogleCesEvaluationGoldenTurnsStepsAgentTransfer <a name="GoogleCesEvaluationGoldenTurnsStepsAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer {
	TargetAgent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer.property.targetAgent">TargetAgent</a></code> | <code>*string</code> | The resource name of the target agent. |

---

##### `TargetAgent`<sup>Required</sup> <a name="TargetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer.property.targetAgent"></a>

```go
TargetAgent *string
```

- *Type:* *string

The resource name of the target agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#target_agent GoogleCesEvaluation#target_agent}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectation <a name="GoogleCesEvaluationGoldenTurnsStepsExpectation" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation {
	AgentResponse: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse,
	AgentTransfer: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer,
	MockToolResponse: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse,
	Note: *string,
	ToolCall: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall,
	ToolResponse: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse,
	UpdatedVariables: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.agentResponse">AgentResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a></code> | agent_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.mockToolResponse">MockToolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a></code> | mock_tool_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.note">Note</a></code> | <code>*string</code> | A note describing the expectation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.toolCall">ToolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a></code> | tool_call block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.toolResponse">ToolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a></code> | tool_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.updatedVariables">UpdatedVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a></code> | updated_variables block. |

---

##### `AgentResponse`<sup>Optional</sup> <a name="AgentResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.agentResponse"></a>

```go
AgentResponse GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a>

agent_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#agent_response GoogleCesEvaluation#agent_response}

---

##### `AgentTransfer`<sup>Optional</sup> <a name="AgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.agentTransfer"></a>

```go
AgentTransfer GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#agent_transfer GoogleCesEvaluation#agent_transfer}

---

##### `MockToolResponse`<sup>Optional</sup> <a name="MockToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.mockToolResponse"></a>

```go
MockToolResponse GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a>

mock_tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#mock_tool_response GoogleCesEvaluation#mock_tool_response}

---

##### `Note`<sup>Optional</sup> <a name="Note" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.note"></a>

```go
Note *string
```

- *Type:* *string

A note describing the expectation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#note GoogleCesEvaluation#note}

---

##### `ToolCall`<sup>Optional</sup> <a name="ToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.toolCall"></a>

```go
ToolCall GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a>

tool_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_call GoogleCesEvaluation#tool_call}

---

##### `ToolResponse`<sup>Optional</sup> <a name="ToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.toolResponse"></a>

```go
ToolResponse GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a>

tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_response GoogleCesEvaluation#tool_response}

---

##### `UpdatedVariables`<sup>Optional</sup> <a name="UpdatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation.property.updatedVariables"></a>

```go
UpdatedVariables GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a>

updated_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#updated_variables GoogleCesEvaluation#updated_variables}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse {
	Chunks: interface{},
	Role: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse.property.chunks">Chunks</a></code> | <code>interface{}</code> | chunks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse.property.role">Role</a></code> | <code>*string</code> | The role within the conversation, e.g., user, agent. |

---

##### `Chunks`<sup>Optional</sup> <a name="Chunks" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse.property.chunks"></a>

```go
Chunks interface{}
```

- *Type:* interface{}

chunks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#chunks GoogleCesEvaluation#chunks}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse.property.role"></a>

```go
Role *string
```

- *Type:* *string

The role within the conversation, e.g., user, agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#role GoogleCesEvaluation#role}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks {
	AgentTransfer: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer,
	Blob: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob,
	Image: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage,
	Text: *string,
	ToolCall: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall,
	ToolResponse: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse,
	UpdatedVariables: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.blob">Blob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a></code> | blob block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.image">Image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a></code> | image block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.text">Text</a></code> | <code>*string</code> | Text data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.toolCall">ToolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a></code> | tool_call block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.toolResponse">ToolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a></code> | tool_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.updatedVariables">UpdatedVariables</a></code> | <code>*map[string]*string</code> | Updated variables in JSON object format. |

---

##### `AgentTransfer`<sup>Optional</sup> <a name="AgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.agentTransfer"></a>

```go
AgentTransfer GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#agent_transfer GoogleCesEvaluation#agent_transfer}

---

##### `Blob`<sup>Optional</sup> <a name="Blob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.blob"></a>

```go
Blob GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a>

blob block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#blob GoogleCesEvaluation#blob}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.image"></a>

```go
Image GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#image GoogleCesEvaluation#image}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.text"></a>

```go
Text *string
```

- *Type:* *string

Text data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#text GoogleCesEvaluation#text}

---

##### `ToolCall`<sup>Optional</sup> <a name="ToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.toolCall"></a>

```go
ToolCall GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a>

tool_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_call GoogleCesEvaluation#tool_call}

---

##### `ToolResponse`<sup>Optional</sup> <a name="ToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.toolResponse"></a>

```go
ToolResponse GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a>

tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_response GoogleCesEvaluation#tool_response}

---

##### `UpdatedVariables`<sup>Optional</sup> <a name="UpdatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunks.property.updatedVariables"></a>

```go
UpdatedVariables *map[string]*string
```

- *Type:* *map[string]*string

Updated variables in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#updated_variables GoogleCesEvaluation#updated_variables}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer {
	TargetAgent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer.property.targetAgent">TargetAgent</a></code> | <code>*string</code> | The agent to which the conversation is being transferred. |

---

##### `TargetAgent`<sup>Required</sup> <a name="TargetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer.property.targetAgent"></a>

```go
TargetAgent *string
```

- *Type:* *string

The agent to which the conversation is being transferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#target_agent GoogleCesEvaluation#target_agent}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob {
	Data: *string,
	MimeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob.property.data">Data</a></code> | <code>*string</code> | Raw bytes of the blob. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob.property.mimeType">MimeType</a></code> | <code>*string</code> | The IANA standard MIME type of the source data. |

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob.property.data"></a>

```go
Data *string
```

- *Type:* *string

Raw bytes of the blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob.property.mimeType"></a>

```go
MimeType *string
```

- *Type:* *string

The IANA standard MIME type of the source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage {
	Data: *string,
	MimeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage.property.data">Data</a></code> | <code>*string</code> | Raw bytes of the image. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage.property.mimeType">MimeType</a></code> | <code>*string</code> | The IANA standard MIME type of the source data. |

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage.property.data"></a>

```go
Data *string
```

- *Type:* *string

Raw bytes of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage.property.mimeType"></a>

```go
MimeType *string
```

- *Type:* *string

The IANA standard MIME type of the source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall {
	Args: *map[string]*string,
	Id: *string,
	Tool: *string,
	ToolsetTool: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.args">Args</a></code> | <code>*map[string]*string</code> | The input parameters and values for the tool in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.id">Id</a></code> | <code>*string</code> | The unique identifier of the tool call. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.tool">Tool</a></code> | <code>*string</code> | The resource name of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a></code> | toolset_tool block. |

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.args"></a>

```go
Args *map[string]*string
```

- *Type:* *map[string]*string

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#args GoogleCesEvaluation#args}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique identifier of the tool call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.tool"></a>

```go
Tool *string
```

- *Type:* *string

The resource name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall.property.toolsetTool"></a>

```go
ToolsetTool GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool {
	Toolset: *string,
	ToolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool.property.toolset">Toolset</a></code> | <code>*string</code> | The resource name of the Toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool.property.toolId">ToolId</a></code> | <code>*string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool.property.toolset"></a>

```go
Toolset *string
```

- *Type:* *string

The resource name of the Toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool.property.toolId"></a>

```go
ToolId *string
```

- *Type:* *string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse {
	Id: *string,
	Response: *map[string]*string,
	Tool: *string,
	ToolsetTool: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.id">Id</a></code> | <code>*string</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.response">Response</a></code> | <code>*map[string]*string</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.tool">Tool</a></code> | <code>*string</code> | The resource name of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.id"></a>

```go
Id *string
```

- *Type:* *string

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.response"></a>

```go
Response *map[string]*string
```

- *Type:* *map[string]*string

The tool execution result in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.tool"></a>

```go
Tool *string
```

- *Type:* *string

The resource name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse.property.toolsetTool"></a>

```go
ToolsetTool GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool {
	Toolset: *string,
	ToolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool.property.toolset">Toolset</a></code> | <code>*string</code> | The resource name of the Toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool.property.toolId">ToolId</a></code> | <code>*string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool.property.toolset"></a>

```go
Toolset *string
```

- *Type:* *string

The resource name of the Toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool.property.toolId"></a>

```go
ToolId *string
```

- *Type:* *string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer {
	DisplayName: *string,
	TargetAgent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the target agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer.property.targetAgent">TargetAgent</a></code> | <code>*string</code> | The resource name of the target agent. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the target agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#display_name GoogleCesEvaluation#display_name}

---

##### `TargetAgent`<sup>Optional</sup> <a name="TargetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer.property.targetAgent"></a>

```go
TargetAgent *string
```

- *Type:* *string

The resource name of the target agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#target_agent GoogleCesEvaluation#target_agent}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse {
	Id: *string,
	Response: *map[string]*string,
	Tool: *string,
	ToolsetTool: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.id">Id</a></code> | <code>*string</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.response">Response</a></code> | <code>*map[string]*string</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.tool">Tool</a></code> | <code>*string</code> | The resource name of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.id"></a>

```go
Id *string
```

- *Type:* *string

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.response"></a>

```go
Response *map[string]*string
```

- *Type:* *map[string]*string

The tool execution result in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.tool"></a>

```go
Tool *string
```

- *Type:* *string

The resource name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse.property.toolsetTool"></a>

```go
ToolsetTool GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool {
	Toolset: *string,
	ToolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool.property.toolset">Toolset</a></code> | <code>*string</code> | The resource name of the Toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool.property.toolId">ToolId</a></code> | <code>*string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool.property.toolset"></a>

```go
Toolset *string
```

- *Type:* *string

The resource name of the Toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool.property.toolId"></a>

```go
ToolId *string
```

- *Type:* *string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall {
	Args: *map[string]*string,
	Id: *string,
	Tool: *string,
	ToolsetTool: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.args">Args</a></code> | <code>*map[string]*string</code> | The input parameters and values for the tool in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.id">Id</a></code> | <code>*string</code> | The unique identifier of the tool call. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.tool">Tool</a></code> | <code>*string</code> | The resource name of the tool. Note: 'tool' and 'toolset_tool' are mutually exclusive. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a></code> | toolset_tool block. |

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.args"></a>

```go
Args *map[string]*string
```

- *Type:* *map[string]*string

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#args GoogleCesEvaluation#args}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique identifier of the tool call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.tool"></a>

```go
Tool *string
```

- *Type:* *string

The resource name of the tool. Note: 'tool' and 'toolset_tool' are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall.property.toolsetTool"></a>

```go
ToolsetTool GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool {
	Toolset: *string,
	ToolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool.property.toolset">Toolset</a></code> | <code>*string</code> | The resource name of the Toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool.property.toolId">ToolId</a></code> | <code>*string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool.property.toolset"></a>

```go
Toolset *string
```

- *Type:* *string

The resource name of the Toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool.property.toolId"></a>

```go
ToolId *string
```

- *Type:* *string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse {
	Id: *string,
	Response: *map[string]*string,
	Tool: *string,
	ToolsetTool: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.id">Id</a></code> | <code>*string</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.response">Response</a></code> | <code>*map[string]*string</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.tool">Tool</a></code> | <code>*string</code> | The resource name of the tool. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.id"></a>

```go
Id *string
```

- *Type:* *string

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.response"></a>

```go
Response *map[string]*string
```

- *Type:* *map[string]*string

The tool execution result in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.tool"></a>

```go
Tool *string
```

- *Type:* *string

The resource name of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse.property.toolsetTool"></a>

```go
ToolsetTool GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool {
	Toolset: *string,
	ToolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool.property.toolset">Toolset</a></code> | <code>*string</code> | The resource name of the Toolset. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool.property.toolId">ToolId</a></code> | <code>*string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool.property.toolset"></a>

```go
Toolset *string
```

- *Type:* *string

The resource name of the Toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool.property.toolId"></a>

```go
ToolId *string
```

- *Type:* *string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}

---

### GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables {
	Notes: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables.property.notes">Notes</a></code> | <code>*string</code> | Dummy property. |

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

Dummy property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#notes GoogleCesEvaluation#notes}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInput <a name="GoogleCesEvaluationGoldenTurnsStepsUserInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput {
	Audio: *string,
	Blob: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob,
	Dtmf: *string,
	Event: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent,
	Image: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage,
	Text: *string,
	ToolResponses: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses,
	Variables: *map[string]*string,
	WillContinue: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.audio">Audio</a></code> | <code>*string</code> | Audio data from the end user. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.blob">Blob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a></code> | blob block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.dtmf">Dtmf</a></code> | <code>*string</code> | DTMF digits from the end user. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.event">Event</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a></code> | event block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.image">Image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a></code> | image block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.text">Text</a></code> | <code>*string</code> | Natural language query. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.toolResponses">ToolResponses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a></code> | tool_responses block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.variables">Variables</a></code> | <code>*map[string]*string</code> | Map of variables to set. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.willContinue">WillContinue</a></code> | <code>interface{}</code> | Whether the session should continue. |

---

##### `Audio`<sup>Optional</sup> <a name="Audio" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.audio"></a>

```go
Audio *string
```

- *Type:* *string

Audio data from the end user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#audio GoogleCesEvaluation#audio}

---

##### `Blob`<sup>Optional</sup> <a name="Blob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.blob"></a>

```go
Blob GoogleCesEvaluationGoldenTurnsStepsUserInputBlob
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a>

blob block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#blob GoogleCesEvaluation#blob}

---

##### `Dtmf`<sup>Optional</sup> <a name="Dtmf" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.dtmf"></a>

```go
Dtmf *string
```

- *Type:* *string

DTMF digits from the end user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#dtmf GoogleCesEvaluation#dtmf}

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.event"></a>

```go
Event GoogleCesEvaluationGoldenTurnsStepsUserInputEvent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a>

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#event GoogleCesEvaluation#event}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.image"></a>

```go
Image GoogleCesEvaluationGoldenTurnsStepsUserInputImage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#image GoogleCesEvaluation#image}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.text"></a>

```go
Text *string
```

- *Type:* *string

Natural language query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#text GoogleCesEvaluation#text}

---

##### `ToolResponses`<sup>Optional</sup> <a name="ToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.toolResponses"></a>

```go
ToolResponses GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a>

tool_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_responses GoogleCesEvaluation#tool_responses}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.variables"></a>

```go
Variables *map[string]*string
```

- *Type:* *map[string]*string

Map of variables to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#variables GoogleCesEvaluation#variables}

---

##### `WillContinue`<sup>Optional</sup> <a name="WillContinue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput.property.willContinue"></a>

```go
WillContinue interface{}
```

- *Type:* interface{}

Whether the session should continue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#will_continue GoogleCesEvaluation#will_continue}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInputBlob <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputBlob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob {
	Data: *string,
	MimeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob.property.data">Data</a></code> | <code>*string</code> | Raw bytes of the blob, base64-encoded. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob.property.mimeType">MimeType</a></code> | <code>*string</code> | The IANA standard MIME type of the source data. |

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob.property.data"></a>

```go
Data *string
```

- *Type:* *string

Raw bytes of the blob, base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob.property.mimeType"></a>

```go
MimeType *string
```

- *Type:* *string

The IANA standard MIME type of the source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInputEvent <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputEvent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent {
	Event: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent.property.event">Event</a></code> | <code>*string</code> | Event name. |

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent.property.event"></a>

```go
Event *string
```

- *Type:* *string

Event name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#event GoogleCesEvaluation#event}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInputImage <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputImage" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage {
	Data: *string,
	MimeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage.property.data">Data</a></code> | <code>*string</code> | Raw bytes of the image, base64-encoded. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage.property.mimeType">MimeType</a></code> | <code>*string</code> | The IANA standard MIME type of the source data. |

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage.property.data"></a>

```go
Data *string
```

- *Type:* *string

Raw bytes of the image, base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#data GoogleCesEvaluation#data}

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage.property.mimeType"></a>

```go
MimeType *string
```

- *Type:* *string

The IANA standard MIME type of the source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#mime_type GoogleCesEvaluation#mime_type}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses {
	ToolResponses: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses.property.toolResponses">ToolResponses</a></code> | <code>interface{}</code> | tool_responses block. |

---

##### `ToolResponses`<sup>Optional</sup> <a name="ToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses.property.toolResponses"></a>

```go
ToolResponses interface{}
```

- *Type:* interface{}

tool_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_responses GoogleCesEvaluation#tool_responses}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses {
	Response: *map[string]*string,
	Id: *string,
	Tool: *string,
	ToolsetTool: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.response">Response</a></code> | <code>*map[string]*string</code> | Required. The tool execution result in JSON. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.id">Id</a></code> | <code>*string</code> | Optional. Matching ID of the tool call. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.tool">Tool</a></code> | <code>*string</code> | Name of the tool to execute. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a></code> | toolset_tool block. |

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.response"></a>

```go
Response *map[string]*string
```

- *Type:* *map[string]*string

Required. The tool execution result in JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#response GoogleCesEvaluation#response}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.id"></a>

```go
Id *string
```

- *Type:* *string

Optional. Matching ID of the tool call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#id GoogleCesEvaluation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.tool"></a>

```go
Tool *string
```

- *Type:* *string

Name of the tool to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool GoogleCesEvaluation#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponses.property.toolsetTool"></a>

```go
ToolsetTool GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset_tool GoogleCesEvaluation#toolset_tool}

---

### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool {
	Toolset: *string,
	ToolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool.property.toolset">Toolset</a></code> | <code>*string</code> | The toolset name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool.property.toolId">ToolId</a></code> | <code>*string</code> | The tool ID. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool.property.toolset"></a>

```go
Toolset *string
```

- *Type:* *string

The toolset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#toolset GoogleCesEvaluation#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool.property.toolId"></a>

```go
ToolId *string
```

- *Type:* *string

The tool ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#tool_id GoogleCesEvaluation#tool_id}

---

### GoogleCesEvaluationTimeouts <a name="GoogleCesEvaluationTimeouts" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

&googlecesevaluation.GoogleCesEvaluationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#create GoogleCesEvaluation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#delete GoogleCesEvaluation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#update GoogleCesEvaluation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#create GoogleCesEvaluation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#delete GoogleCesEvaluation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.31.0/docs/resources/google_ces_evaluation#update GoogleCesEvaluation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesEvaluationGoldenOutputReference <a name="GoogleCesEvaluationGoldenOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.putTurns">PutTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.resetEvaluationExpectations">ResetEvaluationExpectations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTurns` <a name="PutTurns" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.putTurns"></a>

```go
func PutTurns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.putTurns.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEvaluationExpectations` <a name="ResetEvaluationExpectations" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.resetEvaluationExpectations"></a>

```go
func ResetEvaluationExpectations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.turns">Turns</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList">GoogleCesEvaluationGoldenTurnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.evaluationExpectationsInput">EvaluationExpectationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.turnsInput">TurnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.evaluationExpectations">EvaluationExpectations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Turns`<sup>Required</sup> <a name="Turns" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.turns"></a>

```go
func Turns() GoogleCesEvaluationGoldenTurnsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList">GoogleCesEvaluationGoldenTurnsList</a>

---

##### `EvaluationExpectationsInput`<sup>Optional</sup> <a name="EvaluationExpectationsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.evaluationExpectationsInput"></a>

```go
func EvaluationExpectationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TurnsInput`<sup>Optional</sup> <a name="TurnsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.turnsInput"></a>

```go
func TurnsInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluationExpectations`<sup>Required</sup> <a name="EvaluationExpectations" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.evaluationExpectations"></a>

```go
func EvaluationExpectations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGolden
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGolden">GoogleCesEvaluationGolden</a>

---


### GoogleCesEvaluationGoldenTurnsList <a name="GoogleCesEvaluationGoldenTurnsList" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCesEvaluationGoldenTurnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.get"></a>

```go
func Get(index *f64) GoogleCesEvaluationGoldenTurnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesEvaluationGoldenTurnsOutputReference <a name="GoogleCesEvaluationGoldenTurnsOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCesEvaluationGoldenTurnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.putSteps">PutSteps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSteps` <a name="PutSteps" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.putSteps"></a>

```go
func PutSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.putSteps.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.rootSpan">RootSpan</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList">GoogleCesEvaluationGoldenTurnsRootSpanList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList">GoogleCesEvaluationGoldenTurnsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.stepsInput">StepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RootSpan`<sup>Required</sup> <a name="RootSpan" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.rootSpan"></a>

```go
func RootSpan() GoogleCesEvaluationGoldenTurnsRootSpanList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList">GoogleCesEvaluationGoldenTurnsRootSpanList</a>

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.steps"></a>

```go
func Steps() GoogleCesEvaluationGoldenTurnsStepsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList">GoogleCesEvaluationGoldenTurnsStepsList</a>

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.stepsInput"></a>

```go
func StepsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesEvaluationGoldenTurnsRootSpanList <a name="GoogleCesEvaluationGoldenTurnsRootSpanList" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsRootSpanList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCesEvaluationGoldenTurnsRootSpanList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.get"></a>

```go
func Get(index *f64) GoogleCesEvaluationGoldenTurnsRootSpanOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCesEvaluationGoldenTurnsRootSpanOutputReference <a name="GoogleCesEvaluationGoldenTurnsRootSpanOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsRootSpanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCesEvaluationGoldenTurnsRootSpanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.childSpans">ChildSpans</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpan">GoogleCesEvaluationGoldenTurnsRootSpan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `ChildSpans`<sup>Required</sup> <a name="ChildSpans" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.childSpans"></a>

```go
func ChildSpans() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpanOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsRootSpan
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsRootSpan">GoogleCesEvaluationGoldenTurnsRootSpan</a>

---


### GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.targetAgentInput">TargetAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.targetAgent">TargetAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `TargetAgentInput`<sup>Optional</sup> <a name="TargetAgentInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.targetAgentInput"></a>

```go
func TargetAgentInput() *string
```

- *Type:* *string

---

##### `TargetAgent`<sup>Required</sup> <a name="TargetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.targetAgent"></a>

```go
func TargetAgent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.targetAgentInput">TargetAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.targetAgent">TargetAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `TargetAgentInput`<sup>Optional</sup> <a name="TargetAgentInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.targetAgentInput"></a>

```go
func TargetAgentInput() *string
```

- *Type:* *string

---

##### `TargetAgent`<sup>Required</sup> <a name="TargetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.targetAgent"></a>

```go
func TargetAgent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.mimeTypeInput"></a>

```go
func MimeTypeInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.mimeTypeInput"></a>

```go
func MimeTypeInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.get"></a>

```go
func Get(index *f64) GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putAgentTransfer">PutAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putBlob">PutBlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putToolCall">PutToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putToolResponse">PutToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetAgentTransfer">ResetAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetBlob">ResetBlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetToolCall">ResetToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetToolResponse">ResetToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetUpdatedVariables">ResetUpdatedVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentTransfer` <a name="PutAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putAgentTransfer"></a>

```go
func PutAgentTransfer(value GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putAgentTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a>

---

##### `PutBlob` <a name="PutBlob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putBlob"></a>

```go
func PutBlob(value GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putBlob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a>

---

##### `PutImage` <a name="PutImage" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putImage"></a>

```go
func PutImage(value GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a>

---

##### `PutToolCall` <a name="PutToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putToolCall"></a>

```go
func PutToolCall(value GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putToolCall.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a>

---

##### `PutToolResponse` <a name="PutToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putToolResponse"></a>

```go
func PutToolResponse(value GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.putToolResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a>

---

##### `ResetAgentTransfer` <a name="ResetAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetAgentTransfer"></a>

```go
func ResetAgentTransfer()
```

##### `ResetBlob` <a name="ResetBlob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetBlob"></a>

```go
func ResetBlob()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetToolCall` <a name="ResetToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetToolCall"></a>

```go
func ResetToolCall()
```

##### `ResetToolResponse` <a name="ResetToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetToolResponse"></a>

```go
func ResetToolResponse()
```

##### `ResetUpdatedVariables` <a name="ResetUpdatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.resetUpdatedVariables"></a>

```go
func ResetUpdatedVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.blob">Blob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.image">Image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolCall">ToolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolResponse">ToolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.agentTransferInput">AgentTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.blobInput">BlobInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolCallInput">ToolCallInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolResponseInput">ToolResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.updatedVariablesInput">UpdatedVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.updatedVariables">UpdatedVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentTransfer`<sup>Required</sup> <a name="AgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.agentTransfer"></a>

```go
func AgentTransfer() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransferOutputReference</a>

---

##### `Blob`<sup>Required</sup> <a name="Blob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.blob"></a>

```go
func Blob() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlobOutputReference</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.image"></a>

```go
func Image() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImageOutputReference</a>

---

##### `ToolCall`<sup>Required</sup> <a name="ToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolCall"></a>

```go
func ToolCall() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference</a>

---

##### `ToolResponse`<sup>Required</sup> <a name="ToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolResponse"></a>

```go
func ToolResponse() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference</a>

---

##### `AgentTransferInput`<sup>Optional</sup> <a name="AgentTransferInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.agentTransferInput"></a>

```go
func AgentTransferInput() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksAgentTransfer</a>

---

##### `BlobInput`<sup>Optional</sup> <a name="BlobInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.blobInput"></a>

```go
func BlobInput() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksBlob</a>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.imageInput"></a>

```go
func ImageInput() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksImage</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `ToolCallInput`<sup>Optional</sup> <a name="ToolCallInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolCallInput"></a>

```go
func ToolCallInput() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a>

---

##### `ToolResponseInput`<sup>Optional</sup> <a name="ToolResponseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.toolResponseInput"></a>

```go
func ToolResponseInput() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a>

---

##### `UpdatedVariablesInput`<sup>Optional</sup> <a name="UpdatedVariablesInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.updatedVariablesInput"></a>

```go
func UpdatedVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `UpdatedVariables`<sup>Required</sup> <a name="UpdatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.updatedVariables"></a>

```go
func UpdatedVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.putToolsetTool"></a>

```go
func PutToolsetTool(value GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a>

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetTool"></a>

```go
func ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.resetToolsetTool"></a>

```go
func ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.argsInput">ArgsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.toolInput">ToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.args">Args</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.tool">Tool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.toolsetTool"></a>

```go
func ToolsetTool() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.argsInput"></a>

```go
func ArgsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.toolInput"></a>

```go
func ToolInput() *string
```

- *Type:* *string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.toolsetToolInput"></a>

```go
func ToolsetToolInput() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a>

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.args"></a>

```go
func Args() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.tool"></a>

```go
func Tool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCall</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.resetToolId"></a>

```go
func ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolIdInput"></a>

```go
func ToolIdInput() *string
```

- *Type:* *string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolsetInput"></a>

```go
func ToolsetInput() *string
```

- *Type:* *string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolId"></a>

```go
func ToolId() *string
```

- *Type:* *string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.toolset"></a>

```go
func Toolset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetToolOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolCallToolsetTool</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.putToolsetTool"></a>

```go
func PutToolsetTool(value GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetResponse"></a>

```go
func ResetResponse()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetTool"></a>

```go
func ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.resetToolsetTool"></a>

```go
func ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.responseInput">ResponseInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.toolInput">ToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.response">Response</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.tool">Tool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.toolsetTool"></a>

```go
func ToolsetTool() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.responseInput"></a>

```go
func ResponseInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.toolInput"></a>

```go
func ToolInput() *string
```

- *Type:* *string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.toolsetToolInput"></a>

```go
func ToolsetToolInput() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.response"></a>

```go
func Response() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.tool"></a>

```go
func Tool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponse</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.resetToolId"></a>

```go
func ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```go
func ToolIdInput() *string
```

- *Type:* *string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```go
func ToolsetInput() *string
```

- *Type:* *string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolId"></a>

```go
func ToolId() *string
```

- *Type:* *string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.toolset"></a>

```go
func Toolset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetToolOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksToolResponseToolsetTool</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.putChunks">PutChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resetChunks">ResetChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChunks` <a name="PutChunks" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.putChunks"></a>

```go
func PutChunks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.putChunks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetChunks` <a name="ResetChunks" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resetChunks"></a>

```go
func ResetChunks()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.resetRole"></a>

```go
func ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.chunks">Chunks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.chunksInput">ChunksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Chunks`<sup>Required</sup> <a name="Chunks" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.chunks"></a>

```go
func Chunks() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseChunksList</a>

---

##### `ChunksInput`<sup>Optional</sup> <a name="ChunksInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.chunksInput"></a>

```go
func ChunksInput() interface{}
```

- *Type:* interface{}

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resetTargetAgent">ResetTargetAgent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetTargetAgent` <a name="ResetTargetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.resetTargetAgent"></a>

```go
func ResetTargetAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.targetAgentInput">TargetAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.targetAgent">TargetAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `TargetAgentInput`<sup>Optional</sup> <a name="TargetAgentInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.targetAgentInput"></a>

```go
func TargetAgentInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `TargetAgent`<sup>Required</sup> <a name="TargetAgent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.targetAgent"></a>

```go
func TargetAgent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.putToolsetTool"></a>

```go
func PutToolsetTool(value GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetResponse"></a>

```go
func ResetResponse()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetTool"></a>

```go
func ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.resetToolsetTool"></a>

```go
func ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.responseInput">ResponseInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.toolInput">ToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.response">Response</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.tool">Tool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.toolsetTool"></a>

```go
func ToolsetTool() GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.responseInput"></a>

```go
func ResponseInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.toolInput"></a>

```go
func ToolInput() *string
```

- *Type:* *string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.toolsetToolInput"></a>

```go
func ToolsetToolInput() GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.response"></a>

```go
func Response() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.tool"></a>

```go
func Tool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.resetToolId"></a>

```go
func ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```go
func ToolIdInput() *string
```

- *Type:* *string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```go
func ToolsetInput() *string
```

- *Type:* *string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolId"></a>

```go
func ToolId() *string
```

- *Type:* *string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.toolset"></a>

```go
func Toolset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetToolOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseToolsetTool</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putAgentResponse">PutAgentResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putAgentTransfer">PutAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putMockToolResponse">PutMockToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putToolCall">PutToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putToolResponse">PutToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putUpdatedVariables">PutUpdatedVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetAgentResponse">ResetAgentResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetAgentTransfer">ResetAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetMockToolResponse">ResetMockToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetNote">ResetNote</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetToolCall">ResetToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetToolResponse">ResetToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetUpdatedVariables">ResetUpdatedVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentResponse` <a name="PutAgentResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putAgentResponse"></a>

```go
func PutAgentResponse(value GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putAgentResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a>

---

##### `PutAgentTransfer` <a name="PutAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putAgentTransfer"></a>

```go
func PutAgentTransfer(value GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putAgentTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a>

---

##### `PutMockToolResponse` <a name="PutMockToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putMockToolResponse"></a>

```go
func PutMockToolResponse(value GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putMockToolResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a>

---

##### `PutToolCall` <a name="PutToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putToolCall"></a>

```go
func PutToolCall(value GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putToolCall.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a>

---

##### `PutToolResponse` <a name="PutToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putToolResponse"></a>

```go
func PutToolResponse(value GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putToolResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a>

---

##### `PutUpdatedVariables` <a name="PutUpdatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putUpdatedVariables"></a>

```go
func PutUpdatedVariables(value GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.putUpdatedVariables.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a>

---

##### `ResetAgentResponse` <a name="ResetAgentResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetAgentResponse"></a>

```go
func ResetAgentResponse()
```

##### `ResetAgentTransfer` <a name="ResetAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetAgentTransfer"></a>

```go
func ResetAgentTransfer()
```

##### `ResetMockToolResponse` <a name="ResetMockToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetMockToolResponse"></a>

```go
func ResetMockToolResponse()
```

##### `ResetNote` <a name="ResetNote" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetNote"></a>

```go
func ResetNote()
```

##### `ResetToolCall` <a name="ResetToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetToolCall"></a>

```go
func ResetToolCall()
```

##### `ResetToolResponse` <a name="ResetToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetToolResponse"></a>

```go
func ResetToolResponse()
```

##### `ResetUpdatedVariables` <a name="ResetUpdatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.resetUpdatedVariables"></a>

```go
func ResetUpdatedVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentResponse">AgentResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.mockToolResponse">MockToolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolCall">ToolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolResponse">ToolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.updatedVariables">UpdatedVariables</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentResponseInput">AgentResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentTransferInput">AgentTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.mockToolResponseInput">MockToolResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.noteInput">NoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolCallInput">ToolCallInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolResponseInput">ToolResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.updatedVariablesInput">UpdatedVariablesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.note">Note</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentResponse`<sup>Required</sup> <a name="AgentResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentResponse"></a>

```go
func AgentResponse() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponseOutputReference</a>

---

##### `AgentTransfer`<sup>Required</sup> <a name="AgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentTransfer"></a>

```go
func AgentTransfer() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransferOutputReference</a>

---

##### `MockToolResponse`<sup>Required</sup> <a name="MockToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.mockToolResponse"></a>

```go
func MockToolResponse() GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponseOutputReference</a>

---

##### `ToolCall`<sup>Required</sup> <a name="ToolCall" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolCall"></a>

```go
func ToolCall() GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference</a>

---

##### `ToolResponse`<sup>Required</sup> <a name="ToolResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolResponse"></a>

```go
func ToolResponse() GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference</a>

---

##### `UpdatedVariables`<sup>Required</sup> <a name="UpdatedVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.updatedVariables"></a>

```go
func UpdatedVariables() GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference</a>

---

##### `AgentResponseInput`<sup>Optional</sup> <a name="AgentResponseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentResponseInput"></a>

```go
func AgentResponseInput() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentResponse</a>

---

##### `AgentTransferInput`<sup>Optional</sup> <a name="AgentTransferInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.agentTransferInput"></a>

```go
func AgentTransferInput() GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsExpectationAgentTransfer</a>

---

##### `MockToolResponseInput`<sup>Optional</sup> <a name="MockToolResponseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.mockToolResponseInput"></a>

```go
func MockToolResponseInput() GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationMockToolResponse</a>

---

##### `NoteInput`<sup>Optional</sup> <a name="NoteInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.noteInput"></a>

```go
func NoteInput() *string
```

- *Type:* *string

---

##### `ToolCallInput`<sup>Optional</sup> <a name="ToolCallInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolCallInput"></a>

```go
func ToolCallInput() GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a>

---

##### `ToolResponseInput`<sup>Optional</sup> <a name="ToolResponseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.toolResponseInput"></a>

```go
func ToolResponseInput() GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a>

---

##### `UpdatedVariablesInput`<sup>Optional</sup> <a name="UpdatedVariablesInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.updatedVariablesInput"></a>

```go
func UpdatedVariablesInput() GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a>

---

##### `Note`<sup>Required</sup> <a name="Note" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.note"></a>

```go
func Note() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.putToolsetTool"></a>

```go
func PutToolsetTool(value GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a>

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetTool"></a>

```go
func ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.resetToolsetTool"></a>

```go
func ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.argsInput">ArgsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.toolInput">ToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.args">Args</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.tool">Tool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.toolsetTool"></a>

```go
func ToolsetTool() GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.argsInput"></a>

```go
func ArgsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.toolInput"></a>

```go
func ToolInput() *string
```

- *Type:* *string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.toolsetToolInput"></a>

```go
func ToolsetToolInput() GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a>

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.args"></a>

```go
func Args() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.tool"></a>

```go
func Tool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCall</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.resetToolId"></a>

```go
func ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolIdInput"></a>

```go
func ToolIdInput() *string
```

- *Type:* *string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolsetInput"></a>

```go
func ToolsetInput() *string
```

- *Type:* *string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolId"></a>

```go
func ToolId() *string
```

- *Type:* *string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.toolset"></a>

```go
func Toolset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetToolOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolCallToolsetTool</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.putToolsetTool"></a>

```go
func PutToolsetTool(value GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetResponse"></a>

```go
func ResetResponse()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetTool"></a>

```go
func ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.resetToolsetTool"></a>

```go
func ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.responseInput">ResponseInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.toolInput">ToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.response">Response</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.tool">Tool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.toolsetTool"></a>

```go
func ToolsetTool() GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.responseInput"></a>

```go
func ResponseInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.toolInput"></a>

```go
func ToolInput() *string
```

- *Type:* *string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.toolsetToolInput"></a>

```go
func ToolsetToolInput() GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.response"></a>

```go
func Response() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.tool"></a>

```go
func Tool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponse</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.resetToolId"></a>

```go
func ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```go
func ToolIdInput() *string
```

- *Type:* *string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```go
func ToolsetInput() *string
```

- *Type:* *string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolId"></a>

```go
func ToolId() *string
```

- *Type:* *string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.toolset"></a>

```go
func Toolset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetToolOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool">GoogleCesEvaluationGoldenTurnsStepsExpectationToolResponseToolsetTool</a>

---


### GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.resetNotes">ResetNotes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotes` <a name="ResetNotes" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.resetNotes"></a>

```go
func ResetNotes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables">GoogleCesEvaluationGoldenTurnsStepsExpectationUpdatedVariables</a>

---


### GoogleCesEvaluationGoldenTurnsStepsList <a name="GoogleCesEvaluationGoldenTurnsStepsList" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCesEvaluationGoldenTurnsStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.get"></a>

```go
func Get(index *f64) GoogleCesEvaluationGoldenTurnsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesEvaluationGoldenTurnsStepsOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCesEvaluationGoldenTurnsStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putAgentTransfer">PutAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putExpectation">PutExpectation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putUserInput">PutUserInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resetAgentTransfer">ResetAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resetExpectation">ResetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resetUserInput">ResetUserInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentTransfer` <a name="PutAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putAgentTransfer"></a>

```go
func PutAgentTransfer(value GoogleCesEvaluationGoldenTurnsStepsAgentTransfer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putAgentTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a>

---

##### `PutExpectation` <a name="PutExpectation" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putExpectation"></a>

```go
func PutExpectation(value GoogleCesEvaluationGoldenTurnsStepsExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a>

---

##### `PutUserInput` <a name="PutUserInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putUserInput"></a>

```go
func PutUserInput(value GoogleCesEvaluationGoldenTurnsStepsUserInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.putUserInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a>

---

##### `ResetAgentTransfer` <a name="ResetAgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resetAgentTransfer"></a>

```go
func ResetAgentTransfer()
```

##### `ResetExpectation` <a name="ResetExpectation" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resetExpectation"></a>

```go
func ResetExpectation()
```

##### `ResetUserInput` <a name="ResetUserInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.resetUserInput"></a>

```go
func ResetUserInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference">GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.expectation">Expectation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.userInput">UserInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.agentTransferInput">AgentTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.expectationInput">ExpectationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.userInputInput">UserInputInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentTransfer`<sup>Required</sup> <a name="AgentTransfer" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.agentTransfer"></a>

```go
func AgentTransfer() GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference">GoogleCesEvaluationGoldenTurnsStepsAgentTransferOutputReference</a>

---

##### `Expectation`<sup>Required</sup> <a name="Expectation" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.expectation"></a>

```go
func Expectation() GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference">GoogleCesEvaluationGoldenTurnsStepsExpectationOutputReference</a>

---

##### `UserInput`<sup>Required</sup> <a name="UserInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.userInput"></a>

```go
func UserInput() GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference</a>

---

##### `AgentTransferInput`<sup>Optional</sup> <a name="AgentTransferInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.agentTransferInput"></a>

```go
func AgentTransferInput() GoogleCesEvaluationGoldenTurnsStepsAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsAgentTransfer">GoogleCesEvaluationGoldenTurnsStepsAgentTransfer</a>

---

##### `ExpectationInput`<sup>Optional</sup> <a name="ExpectationInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.expectationInput"></a>

```go
func ExpectationInput() GoogleCesEvaluationGoldenTurnsStepsExpectation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsExpectation">GoogleCesEvaluationGoldenTurnsStepsExpectation</a>

---

##### `UserInputInput`<sup>Optional</sup> <a name="UserInputInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.userInputInput"></a>

```go
func UserInputInput() GoogleCesEvaluationGoldenTurnsStepsUserInput
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.mimeTypeInput"></a>

```go
func MimeTypeInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsUserInputBlob
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a>

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.eventInput">EventInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.event">Event</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.eventInput"></a>

```go
func EventInput() *string
```

- *Type:* *string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.event"></a>

```go
func Event() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsUserInputEvent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a>

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.mimeTypeInput"></a>

```go
func MimeTypeInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsUserInputImage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a>

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putBlob">PutBlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putEvent">PutEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putToolResponses">PutToolResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetAudio">ResetAudio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetBlob">ResetBlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetDtmf">ResetDtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetEvent">ResetEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetToolResponses">ResetToolResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetWillContinue">ResetWillContinue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlob` <a name="PutBlob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putBlob"></a>

```go
func PutBlob(value GoogleCesEvaluationGoldenTurnsStepsUserInputBlob)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putBlob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a>

---

##### `PutEvent` <a name="PutEvent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putEvent"></a>

```go
func PutEvent(value GoogleCesEvaluationGoldenTurnsStepsUserInputEvent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putEvent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a>

---

##### `PutImage` <a name="PutImage" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putImage"></a>

```go
func PutImage(value GoogleCesEvaluationGoldenTurnsStepsUserInputImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a>

---

##### `PutToolResponses` <a name="PutToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putToolResponses"></a>

```go
func PutToolResponses(value GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.putToolResponses.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a>

---

##### `ResetAudio` <a name="ResetAudio" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetAudio"></a>

```go
func ResetAudio()
```

##### `ResetBlob` <a name="ResetBlob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetBlob"></a>

```go
func ResetBlob()
```

##### `ResetDtmf` <a name="ResetDtmf" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetDtmf"></a>

```go
func ResetDtmf()
```

##### `ResetEvent` <a name="ResetEvent" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetEvent"></a>

```go
func ResetEvent()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetToolResponses` <a name="ResetToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetToolResponses"></a>

```go
func ResetToolResponses()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetVariables"></a>

```go
func ResetVariables()
```

##### `ResetWillContinue` <a name="ResetWillContinue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.resetWillContinue"></a>

```go
func ResetWillContinue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.blob">Blob</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.event">Event</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.image">Image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.toolResponses">ToolResponses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.audioInput">AudioInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.blobInput">BlobInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.dtmfInput">DtmfInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.eventInput">EventInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.toolResponsesInput">ToolResponsesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.variablesInput">VariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.willContinueInput">WillContinueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.audio">Audio</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.dtmf">Dtmf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.variables">Variables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.willContinue">WillContinue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Blob`<sup>Required</sup> <a name="Blob" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.blob"></a>

```go
func Blob() GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputBlobOutputReference</a>

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.event"></a>

```go
func Event() GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputEventOutputReference</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.image"></a>

```go
func Image() GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputImageOutputReference</a>

---

##### `ToolResponses`<sup>Required</sup> <a name="ToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.toolResponses"></a>

```go
func ToolResponses() GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference</a>

---

##### `AudioInput`<sup>Optional</sup> <a name="AudioInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.audioInput"></a>

```go
func AudioInput() *string
```

- *Type:* *string

---

##### `BlobInput`<sup>Optional</sup> <a name="BlobInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.blobInput"></a>

```go
func BlobInput() GoogleCesEvaluationGoldenTurnsStepsUserInputBlob
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputBlob">GoogleCesEvaluationGoldenTurnsStepsUserInputBlob</a>

---

##### `DtmfInput`<sup>Optional</sup> <a name="DtmfInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.dtmfInput"></a>

```go
func DtmfInput() *string
```

- *Type:* *string

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.eventInput"></a>

```go
func EventInput() GoogleCesEvaluationGoldenTurnsStepsUserInputEvent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputEvent">GoogleCesEvaluationGoldenTurnsStepsUserInputEvent</a>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.imageInput"></a>

```go
func ImageInput() GoogleCesEvaluationGoldenTurnsStepsUserInputImage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputImage">GoogleCesEvaluationGoldenTurnsStepsUserInputImage</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `ToolResponsesInput`<sup>Optional</sup> <a name="ToolResponsesInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.toolResponsesInput"></a>

```go
func ToolResponsesInput() GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a>

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.variablesInput"></a>

```go
func VariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WillContinueInput`<sup>Optional</sup> <a name="WillContinueInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.willContinueInput"></a>

```go
func WillContinueInput() interface{}
```

- *Type:* interface{}

---

##### `Audio`<sup>Required</sup> <a name="Audio" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.audio"></a>

```go
func Audio() *string
```

- *Type:* *string

---

##### `Dtmf`<sup>Required</sup> <a name="Dtmf" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.dtmf"></a>

```go
func Dtmf() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.variables"></a>

```go
func Variables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WillContinue`<sup>Required</sup> <a name="WillContinue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.willContinue"></a>

```go
func WillContinue() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsUserInput
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInput">GoogleCesEvaluationGoldenTurnsStepsUserInput</a>

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.putToolResponses">PutToolResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.resetToolResponses">ResetToolResponses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolResponses` <a name="PutToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.putToolResponses"></a>

```go
func PutToolResponses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.putToolResponses.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetToolResponses` <a name="ResetToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.resetToolResponses"></a>

```go
func ResetToolResponses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.toolResponses">ToolResponses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.toolResponsesInput">ToolResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolResponses`<sup>Required</sup> <a name="ToolResponses" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.toolResponses"></a>

```go
func ToolResponses() GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList</a>

---

##### `ToolResponsesInput`<sup>Optional</sup> <a name="ToolResponsesInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.toolResponsesInput"></a>

```go
func ToolResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponses</a>

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.get"></a>

```go
func Get(index *f64) GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.putToolsetTool"></a>

```go
func PutToolsetTool(value GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resetTool"></a>

```go
func ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.resetToolsetTool"></a>

```go
func ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.responseInput">ResponseInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.toolInput">ToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.response">Response</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.tool">Tool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.toolsetTool"></a>

```go
func ToolsetTool() GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.responseInput"></a>

```go
func ResponseInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.toolInput"></a>

```go
func ToolInput() *string
```

- *Type:* *string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.toolsetToolInput"></a>

```go
func ToolsetToolInput() GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.response"></a>

```go
func Response() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.tool"></a>

```go
func Tool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference <a name="GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.resetToolId"></a>

```go
func ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolIdInput"></a>

```go
func ToolIdInput() *string
```

- *Type:* *string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolsetInput"></a>

```go
func ToolsetInput() *string
```

- *Type:* *string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolId"></a>

```go
func ToolId() *string
```

- *Type:* *string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.toolset"></a>

```go
func Toolset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetToolOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool">GoogleCesEvaluationGoldenTurnsStepsUserInputToolResponsesToolResponsesToolsetTool</a>

---


### GoogleCesEvaluationTimeoutsOutputReference <a name="GoogleCesEvaluationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesevaluation"

googlecesevaluation.NewGoogleCesEvaluationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesEvaluationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesEvaluation.GoogleCesEvaluationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



