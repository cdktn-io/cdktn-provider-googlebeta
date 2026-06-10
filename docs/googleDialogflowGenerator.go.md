# `googleDialogflowGenerator` Submodule <a name="`googleDialogflowGenerator` Submodule" id="@cdktn/provider-google-beta.googleDialogflowGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowGenerator <a name="GoogleDialogflowGenerator" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator google_dialogflow_generator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGenerator(scope Construct, id *string, config GoogleDialogflowGeneratorConfig) GoogleDialogflowGenerator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig">GoogleDialogflowGeneratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig">GoogleDialogflowGeneratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putInferenceParameter">PutInferenceParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putSummarizationContext">PutSummarizationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetGeneratorId">ResetGeneratorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetInferenceParameter">ResetInferenceParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetPublishedModel">ResetPublishedModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetTriggerEvent">ResetTriggerEvent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInferenceParameter` <a name="PutInferenceParameter" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putInferenceParameter"></a>

```go
func PutInferenceParameter(value GoogleDialogflowGeneratorInferenceParameter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putInferenceParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a>

---

##### `PutSummarizationContext` <a name="PutSummarizationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putSummarizationContext"></a>

```go
func PutSummarizationContext(value GoogleDialogflowGeneratorSummarizationContext)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putSummarizationContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDialogflowGeneratorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts">GoogleDialogflowGeneratorTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGeneratorId` <a name="ResetGeneratorId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetGeneratorId"></a>

```go
func ResetGeneratorId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetId"></a>

```go
func ResetId()
```

##### `ResetInferenceParameter` <a name="ResetInferenceParameter" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetInferenceParameter"></a>

```go
func ResetInferenceParameter()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPublishedModel` <a name="ResetPublishedModel" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetPublishedModel"></a>

```go
func ResetPublishedModel()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTriggerEvent` <a name="ResetTriggerEvent" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.resetTriggerEvent"></a>

```go
func ResetTriggerEvent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowGenerator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.GoogleDialogflowGenerator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.GoogleDialogflowGenerator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.GoogleDialogflowGenerator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.GoogleDialogflowGenerator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleDialogflowGenerator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDialogflowGenerator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDialogflowGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.inferenceParameter">InferenceParameter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference">GoogleDialogflowGeneratorInferenceParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.summarizationContext">SummarizationContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference">GoogleDialogflowGeneratorSummarizationContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference">GoogleDialogflowGeneratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.generatorIdInput">GeneratorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.inferenceParameterInput">InferenceParameterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.publishedModelInput">PublishedModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.summarizationContextInput">SummarizationContextInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.triggerEventInput">TriggerEventInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.generatorId">GeneratorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.publishedModel">PublishedModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.triggerEvent">TriggerEvent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InferenceParameter`<sup>Required</sup> <a name="InferenceParameter" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.inferenceParameter"></a>

```go
func InferenceParameter() GoogleDialogflowGeneratorInferenceParameterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference">GoogleDialogflowGeneratorInferenceParameterOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SummarizationContext`<sup>Required</sup> <a name="SummarizationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.summarizationContext"></a>

```go
func SummarizationContext() GoogleDialogflowGeneratorSummarizationContextOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference">GoogleDialogflowGeneratorSummarizationContextOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.timeouts"></a>

```go
func Timeouts() GoogleDialogflowGeneratorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference">GoogleDialogflowGeneratorTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GeneratorIdInput`<sup>Optional</sup> <a name="GeneratorIdInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.generatorIdInput"></a>

```go
func GeneratorIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InferenceParameterInput`<sup>Optional</sup> <a name="InferenceParameterInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.inferenceParameterInput"></a>

```go
func InferenceParameterInput() GoogleDialogflowGeneratorInferenceParameter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PublishedModelInput`<sup>Optional</sup> <a name="PublishedModelInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.publishedModelInput"></a>

```go
func PublishedModelInput() *string
```

- *Type:* *string

---

##### `SummarizationContextInput`<sup>Optional</sup> <a name="SummarizationContextInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.summarizationContextInput"></a>

```go
func SummarizationContextInput() GoogleDialogflowGeneratorSummarizationContext
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerEventInput`<sup>Optional</sup> <a name="TriggerEventInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.triggerEventInput"></a>

```go
func TriggerEventInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GeneratorId`<sup>Required</sup> <a name="GeneratorId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.generatorId"></a>

```go
func GeneratorId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PublishedModel`<sup>Required</sup> <a name="PublishedModel" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.publishedModel"></a>

```go
func PublishedModel() *string
```

- *Type:* *string

---

##### `TriggerEvent`<sup>Required</sup> <a name="TriggerEvent" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.triggerEvent"></a>

```go
func TriggerEvent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGenerator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowGeneratorConfig <a name="GoogleDialogflowGeneratorConfig" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

&googledialogflowgenerator.GoogleDialogflowGeneratorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	SummarizationContext: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext,
	DeletionPolicy: *string,
	Description: *string,
	GeneratorId: *string,
	Id: *string,
	InferenceParameter: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter,
	Project: *string,
	PublishedModel: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts,
	TriggerEvent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.location">Location</a></code> | <code>*string</code> | desc. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.summarizationContext">SummarizationContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a></code> | summarization_context block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.description">Description</a></code> | <code>*string</code> | Optional. Human readable description of the generator. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.generatorId">GeneratorId</a></code> | <code>*string</code> | Optional. The ID to use for the generator, which will become the final component of the generator's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#id GoogleDialogflowGenerator#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.inferenceParameter">InferenceParameter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a></code> | inference_parameter block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#project GoogleDialogflowGenerator#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.publishedModel">PublishedModel</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts">GoogleDialogflowGeneratorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.triggerEvent">TriggerEvent</a></code> | <code>*string</code> | Optional. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

desc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#location GoogleDialogflowGenerator#location}

---

##### `SummarizationContext`<sup>Required</sup> <a name="SummarizationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.summarizationContext"></a>

```go
SummarizationContext GoogleDialogflowGeneratorSummarizationContext
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a>

summarization_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#summarization_context GoogleDialogflowGenerator#summarization_context}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#deletion_policy GoogleDialogflowGenerator#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Human readable description of the generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#description GoogleDialogflowGenerator#description}

---

##### `GeneratorId`<sup>Optional</sup> <a name="GeneratorId" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.generatorId"></a>

```go
GeneratorId *string
```

- *Type:* *string

Optional. The ID to use for the generator, which will become the final component of the generator's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#generator_id GoogleDialogflowGenerator#generator_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#id GoogleDialogflowGenerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InferenceParameter`<sup>Optional</sup> <a name="InferenceParameter" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.inferenceParameter"></a>

```go
InferenceParameter GoogleDialogflowGeneratorInferenceParameter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a>

inference_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#inference_parameter GoogleDialogflowGenerator#inference_parameter}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#project GoogleDialogflowGenerator#project}.

---

##### `PublishedModel`<sup>Optional</sup> <a name="PublishedModel" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.publishedModel"></a>

```go
PublishedModel *string
```

- *Type:* *string

Optional.

The published Large Language Model name. * To use the latest model version, specify the model name without version number. Example: text-bison * To use a stable model version, specify the version number as well. Example: text-bison@002.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#published_model GoogleDialogflowGenerator#published_model}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.timeouts"></a>

```go
Timeouts GoogleDialogflowGeneratorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts">GoogleDialogflowGeneratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#timeouts GoogleDialogflowGenerator#timeouts}

---

##### `TriggerEvent`<sup>Optional</sup> <a name="TriggerEvent" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorConfig.property.triggerEvent"></a>

```go
TriggerEvent *string
```

- *Type:* *string

Optional.

The trigger event of the generator. It defines when the generator is triggered in a conversation. Possible values: ["END_OF_UTTERANCE", "MANUAL_CALL", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#trigger_event GoogleDialogflowGenerator#trigger_event}

---

### GoogleDialogflowGeneratorInferenceParameter <a name="GoogleDialogflowGeneratorInferenceParameter" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

&googledialogflowgenerator.GoogleDialogflowGeneratorInferenceParameter {
	MaxOutputTokens: *f64,
	Temperature: *f64,
	TopK: *f64,
	TopP: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.maxOutputTokens">MaxOutputTokens</a></code> | <code>*f64</code> | Optional. Maximum number of the output tokens for the generator. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.temperature">Temperature</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.topK">TopK</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.topP">TopP</a></code> | <code>*f64</code> | Optional. |

---

##### `MaxOutputTokens`<sup>Optional</sup> <a name="MaxOutputTokens" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.maxOutputTokens"></a>

```go
MaxOutputTokens *f64
```

- *Type:* *f64

Optional. Maximum number of the output tokens for the generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#max_output_tokens GoogleDialogflowGenerator#max_output_tokens}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

Optional.

Controls the randomness of LLM predictions. Low temperature = less random. High temperature = more random. If unset (or 0), uses a default value of 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#temperature GoogleDialogflowGenerator#temperature}

---

##### `TopK`<sup>Optional</sup> <a name="TopK" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.topK"></a>

```go
TopK *f64
```

- *Type:* *f64

Optional.

Top-k changes how the model selects tokens for output. A top-k of 1 means the selected token is the most probable among all tokens in the model's vocabulary (also called greedy decoding), while a top-k of 3 means that the next token is selected from among the 3 most probable tokens (using temperature). For each token selection step, the top K tokens with the highest probabilities are sampled. Then tokens are further filtered based on topP with the final token selected using temperature sampling. Specify a lower value for less random responses and a higher value for more random responses. Acceptable value is [1, 40], default to 40.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#top_k GoogleDialogflowGenerator#top_k}

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter.property.topP"></a>

```go
TopP *f64
```

- *Type:* *f64

Optional.

Top-p changes how the model selects tokens for output. Tokens are selected from most K (see topK parameter) probable to least until the sum of their probabilities equals the top-p value. For example, if tokens A, B, and C have a probability of 0.3, 0.2, and 0.1 and the top-p value is 0.5, then the model will select either A or B as the next token (using temperature) and doesn't consider C. The default top-p value is 0.95. Specify a lower value for less random responses and a higher value for more random responses. Acceptable value is [0.0, 1.0], default to 0.95.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#top_p GoogleDialogflowGenerator#top_p}

---

### GoogleDialogflowGeneratorSummarizationContext <a name="GoogleDialogflowGeneratorSummarizationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

&googledialogflowgenerator.GoogleDialogflowGeneratorSummarizationContext {
	FewShotExamples: interface{},
	OutputLanguageCode: *string,
	SummarizationSections: interface{},
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.fewShotExamples">FewShotExamples</a></code> | <code>interface{}</code> | few_shot_examples block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.outputLanguageCode">OutputLanguageCode</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.summarizationSections">SummarizationSections</a></code> | <code>interface{}</code> | summarization_sections block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.version">Version</a></code> | <code>*string</code> | Optional. Version of the feature. If not set, default to latest version. Current candidates are ["1.0"]. |

---

##### `FewShotExamples`<sup>Optional</sup> <a name="FewShotExamples" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.fewShotExamples"></a>

```go
FewShotExamples interface{}
```

- *Type:* interface{}

few_shot_examples block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#few_shot_examples GoogleDialogflowGenerator#few_shot_examples}

---

##### `OutputLanguageCode`<sup>Optional</sup> <a name="OutputLanguageCode" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.outputLanguageCode"></a>

```go
OutputLanguageCode *string
```

- *Type:* *string

Optional.

The target language of the generated summary. The language code for conversation will be used if this field is empty. Supported 2.0 and later versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#output_language_code GoogleDialogflowGenerator#output_language_code}

---

##### `SummarizationSections`<sup>Optional</sup> <a name="SummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.summarizationSections"></a>

```go
SummarizationSections interface{}
```

- *Type:* interface{}

summarization_sections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#summarization_sections GoogleDialogflowGenerator#summarization_sections}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext.property.version"></a>

```go
Version *string
```

- *Type:* *string

Optional. Version of the feature. If not set, default to latest version. Current candidates are ["1.0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#version GoogleDialogflowGenerator#version}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamples <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamples" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

&googledialogflowgenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples {
	Output: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput,
	ConversationContext: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext,
	ExtraInfo: *map[string]*string,
	SummarizationSectionList: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.output">Output</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a></code> | output block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.conversationContext">ConversationContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a></code> | conversation_context block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.extraInfo">ExtraInfo</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.summarizationSectionList">SummarizationSectionList</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a></code> | summarization_section_list block. |

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.output"></a>

```go
Output GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#output GoogleDialogflowGenerator#output}

---

##### `ConversationContext`<sup>Optional</sup> <a name="ConversationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.conversationContext"></a>

```go
ConversationContext GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

conversation_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#conversation_context GoogleDialogflowGenerator#conversation_context}

---

##### `ExtraInfo`<sup>Optional</sup> <a name="ExtraInfo" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.extraInfo"></a>

```go
ExtraInfo *map[string]*string
```

- *Type:* *map[string]*string

Optional.

Key is the placeholder field name in input, value is the value of the placeholder. E.g. instruction contains "@price", and ingested data has <"price", "10">

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#extra_info GoogleDialogflowGenerator#extra_info}

---

##### `SummarizationSectionList`<sup>Optional</sup> <a name="SummarizationSectionList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamples.property.summarizationSectionList"></a>

```go
SummarizationSectionList GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

summarization_section_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#summarization_section_list GoogleDialogflowGenerator#summarization_section_list}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

&googledialogflowgenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext {
	MessageEntries: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext.property.messageEntries">MessageEntries</a></code> | <code>interface{}</code> | message_entries block. |

---

##### `MessageEntries`<sup>Optional</sup> <a name="MessageEntries" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext.property.messageEntries"></a>

```go
MessageEntries interface{}
```

- *Type:* interface{}

message_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#message_entries GoogleDialogflowGenerator#message_entries}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

&googledialogflowgenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries {
	CreateTime: *string,
	LanguageCode: *string,
	Role: *string,
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.createTime">CreateTime</a></code> | <code>*string</code> | Optional. Create time of the message entry. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.languageCode">LanguageCode</a></code> | <code>*string</code> | Optional. The language of the text. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.role">Role</a></code> | <code>*string</code> | Optional. Participant role of the message. Possible values: ["HUMAN_AGENT", "AUTOMATED_AGENT", "END_USER"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.text">Text</a></code> | <code>*string</code> | Optional. Transcript content of the message. |

---

##### `CreateTime`<sup>Optional</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.createTime"></a>

```go
CreateTime *string
```

- *Type:* *string

Optional. Create time of the message entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#create_time GoogleDialogflowGenerator#create_time}

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

Optional. The language of the text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#language_code GoogleDialogflowGenerator#language_code}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.role"></a>

```go
Role *string
```

- *Type:* *string

Optional. Participant role of the message. Possible values: ["HUMAN_AGENT", "AUTOMATED_AGENT", "END_USER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#role GoogleDialogflowGenerator#role}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.text"></a>

```go
Text *string
```

- *Type:* *string

Optional. Transcript content of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#text GoogleDialogflowGenerator#text}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

&googledialogflowgenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput {
	SummarySuggestion: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput.property.summarySuggestion">SummarySuggestion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a></code> | summary_suggestion block. |

---

##### `SummarySuggestion`<sup>Optional</sup> <a name="SummarySuggestion" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput.property.summarySuggestion"></a>

```go
SummarySuggestion GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

summary_suggestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#summary_suggestion GoogleDialogflowGenerator#summary_suggestion}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

&googledialogflowgenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion {
	SummarySections: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion.property.summarySections">SummarySections</a></code> | <code>interface{}</code> | summary_sections block. |

---

##### `SummarySections`<sup>Required</sup> <a name="SummarySections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion.property.summarySections"></a>

```go
SummarySections interface{}
```

- *Type:* interface{}

summary_sections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#summary_sections GoogleDialogflowGenerator#summary_sections}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

&googledialogflowgenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections {
	Section: *string,
	Summary: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.section">Section</a></code> | <code>*string</code> | Required. Name of the section. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.summary">Summary</a></code> | <code>*string</code> | Required. Summary text for the section. |

---

##### `Section`<sup>Required</sup> <a name="Section" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.section"></a>

```go
Section *string
```

- *Type:* *string

Required. Name of the section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#section GoogleDialogflowGenerator#section}

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Required. Summary text for the section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#summary GoogleDialogflowGenerator#summary}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

&googledialogflowgenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct {
	SummarizationSections: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct.property.summarizationSections">SummarizationSections</a></code> | <code>interface{}</code> | summarization_sections block. |

---

##### `SummarizationSections`<sup>Optional</sup> <a name="SummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct.property.summarizationSections"></a>

```go
SummarizationSections interface{}
```

- *Type:* interface{}

summarization_sections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#summarization_sections GoogleDialogflowGenerator#summarization_sections}

---

### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

&googledialogflowgenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections {
	Definition: *string,
	Key: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.definition">Definition</a></code> | <code>*string</code> | Optional. Definition of the section, for example, "what the customer needs help with or has question about.". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.key">Key</a></code> | <code>*string</code> | Optional. Name of the section, for example, "situation". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.type">Type</a></code> | <code>*string</code> | Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"]. |

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Optional. Definition of the section, for example, "what the customer needs help with or has question about.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#definition GoogleDialogflowGenerator#definition}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.key"></a>

```go
Key *string
```

- *Type:* *string

Optional. Name of the section, for example, "situation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#key GoogleDialogflowGenerator#key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.type"></a>

```go
Type *string
```

- *Type:* *string

Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#type GoogleDialogflowGenerator#type}

---

### GoogleDialogflowGeneratorSummarizationContextSummarizationSections <a name="GoogleDialogflowGeneratorSummarizationContextSummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

&googledialogflowgenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections {
	Definition: *string,
	Key: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.property.definition">Definition</a></code> | <code>*string</code> | Optional. Definition of the section, for example, "what the customer needs help with or has question about.". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.property.key">Key</a></code> | <code>*string</code> | Optional. Name of the section, for example, "situation". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.property.type">Type</a></code> | <code>*string</code> | Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"]. |

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Optional. Definition of the section, for example, "what the customer needs help with or has question about.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#definition GoogleDialogflowGenerator#definition}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.property.key"></a>

```go
Key *string
```

- *Type:* *string

Optional. Name of the section, for example, "situation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#key GoogleDialogflowGenerator#key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSections.property.type"></a>

```go
Type *string
```

- *Type:* *string

Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#type GoogleDialogflowGenerator#type}

---

### GoogleDialogflowGeneratorTimeouts <a name="GoogleDialogflowGeneratorTimeouts" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

&googledialogflowgenerator.GoogleDialogflowGeneratorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#create GoogleDialogflowGenerator#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#delete GoogleDialogflowGenerator#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#update GoogleDialogflowGenerator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#create GoogleDialogflowGenerator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#delete GoogleDialogflowGenerator#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dialogflow_generator#update GoogleDialogflowGenerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowGeneratorInferenceParameterOutputReference <a name="GoogleDialogflowGeneratorInferenceParameterOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorInferenceParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowGeneratorInferenceParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetMaxOutputTokens">ResetMaxOutputTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetTopK">ResetTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxOutputTokens` <a name="ResetMaxOutputTokens" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetMaxOutputTokens"></a>

```go
func ResetMaxOutputTokens()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```

##### `ResetTopK` <a name="ResetTopK" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetTopK"></a>

```go
func ResetTopK()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.resetTopP"></a>

```go
func ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokensInput">MaxOutputTokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topKInput">TopKInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topPInput">TopPInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokens">MaxOutputTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topK">TopK</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topP">TopP</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxOutputTokensInput`<sup>Optional</sup> <a name="MaxOutputTokensInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokensInput"></a>

```go
func MaxOutputTokensInput() *f64
```

- *Type:* *f64

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `TopKInput`<sup>Optional</sup> <a name="TopKInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topKInput"></a>

```go
func TopKInput() *f64
```

- *Type:* *f64

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topPInput"></a>

```go
func TopPInput() *f64
```

- *Type:* *f64

---

##### `MaxOutputTokens`<sup>Required</sup> <a name="MaxOutputTokens" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokens"></a>

```go
func MaxOutputTokens() *f64
```

- *Type:* *f64

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `TopK`<sup>Required</sup> <a name="TopK" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topK"></a>

```go
func TopK() *f64
```

- *Type:* *f64

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.topP"></a>

```go
func TopP() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowGeneratorInferenceParameter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorInferenceParameter">GoogleDialogflowGeneratorInferenceParameter</a>

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.get"></a>

```go
func Get(index *f64) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetCreateTime">ResetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreateTime` <a name="ResetCreateTime" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetCreateTime"></a>

```go
func ResetCreateTime()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetRole"></a>

```go
func ResetRole()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTimeInput">CreateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTimeInput`<sup>Optional</sup> <a name="CreateTimeInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTimeInput"></a>

```go
func CreateTimeInput() *string
```

- *Type:* *string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.putMessageEntries">PutMessageEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resetMessageEntries">ResetMessageEntries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessageEntries` <a name="PutMessageEntries" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.putMessageEntries"></a>

```go
func PutMessageEntries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.putMessageEntries.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMessageEntries` <a name="ResetMessageEntries" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resetMessageEntries"></a>

```go
func ResetMessageEntries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntries">MessageEntries</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntriesInput">MessageEntriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageEntries`<sup>Required</sup> <a name="MessageEntries" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntries"></a>

```go
func MessageEntries() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList</a>

---

##### `MessageEntriesInput`<sup>Optional</sup> <a name="MessageEntriesInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntriesInput"></a>

```go
func MessageEntriesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextFewShotExamplesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.get"></a>

```go
func Get(index *f64) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.putSummarySuggestion">PutSummarySuggestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resetSummarySuggestion">ResetSummarySuggestion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSummarySuggestion` <a name="PutSummarySuggestion" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.putSummarySuggestion"></a>

```go
func PutSummarySuggestion(value GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.putSummarySuggestion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

---

##### `ResetSummarySuggestion` <a name="ResetSummarySuggestion" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resetSummarySuggestion"></a>

```go
func ResetSummarySuggestion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestion">SummarySuggestion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestionInput">SummarySuggestionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SummarySuggestion`<sup>Required</sup> <a name="SummarySuggestion" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestion"></a>

```go
func SummarySuggestion() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference</a>

---

##### `SummarySuggestionInput`<sup>Optional</sup> <a name="SummarySuggestionInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestionInput"></a>

```go
func SummarySuggestionInput() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putConversationContext">PutConversationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putSummarizationSectionList">PutSummarizationSectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetConversationContext">ResetConversationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetExtraInfo">ResetExtraInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetSummarizationSectionList">ResetSummarizationSectionList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConversationContext` <a name="PutConversationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putConversationContext"></a>

```go
func PutConversationContext(value GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putConversationContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

---

##### `PutOutput` <a name="PutOutput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putOutput"></a>

```go
func PutOutput(value GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

---

##### `PutSummarizationSectionList` <a name="PutSummarizationSectionList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putSummarizationSectionList"></a>

```go
func PutSummarizationSectionList(value GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putSummarizationSectionList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

---

##### `ResetConversationContext` <a name="ResetConversationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetConversationContext"></a>

```go
func ResetConversationContext()
```

##### `ResetExtraInfo` <a name="ResetExtraInfo" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetExtraInfo"></a>

```go
func ResetExtraInfo()
```

##### `ResetSummarizationSectionList` <a name="ResetSummarizationSectionList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetSummarizationSectionList"></a>

```go
func ResetSummarizationSectionList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContext">ConversationContext</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.output">Output</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionList">SummarizationSectionList</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContextInput">ConversationContextInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfoInput">ExtraInfoInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.outputInput">OutputInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionListInput">SummarizationSectionListInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfo">ExtraInfo</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConversationContext`<sup>Required</sup> <a name="ConversationContext" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContext"></a>

```go
func ConversationContext() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.output"></a>

```go
func Output() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference</a>

---

##### `SummarizationSectionList`<sup>Required</sup> <a name="SummarizationSectionList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionList"></a>

```go
func SummarizationSectionList() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference</a>

---

##### `ConversationContextInput`<sup>Optional</sup> <a name="ConversationContextInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContextInput"></a>

```go
func ConversationContextInput() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

---

##### `ExtraInfoInput`<sup>Optional</sup> <a name="ExtraInfoInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfoInput"></a>

```go
func ExtraInfoInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.outputInput"></a>

```go
func OutputInput() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

---

##### `SummarizationSectionListInput`<sup>Optional</sup> <a name="SummarizationSectionListInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionListInput"></a>

```go
func SummarizationSectionListInput() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

---

##### `ExtraInfo`<sup>Required</sup> <a name="ExtraInfo" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfo"></a>

```go
func ExtraInfo() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.putSummarySections">PutSummarySections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSummarySections` <a name="PutSummarySections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.putSummarySections"></a>

```go
func PutSummarySections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.putSummarySections.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySections">SummarySections</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySectionsInput">SummarySectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SummarySections`<sup>Required</sup> <a name="SummarySections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySections"></a>

```go
func SummarySections() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList</a>

---

##### `SummarySectionsInput`<sup>Optional</sup> <a name="SummarySectionsInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySectionsInput"></a>

```go
func SummarySectionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.sectionInput">SectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.section">Section</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SectionInput`<sup>Optional</sup> <a name="SectionInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.sectionInput"></a>

```go
func SectionInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `Section`<sup>Required</sup> <a name="Section" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.section"></a>

```go
func Section() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.putSummarizationSections">PutSummarizationSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resetSummarizationSections">ResetSummarizationSections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSummarizationSections` <a name="PutSummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.putSummarizationSections"></a>

```go
func PutSummarizationSections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.putSummarizationSections.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSummarizationSections` <a name="ResetSummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resetSummarizationSections"></a>

```go
func ResetSummarizationSections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSections">SummarizationSections</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSectionsInput">SummarizationSectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SummarizationSections`<sup>Required</sup> <a name="SummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSections"></a>

```go
func SummarizationSections() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList</a>

---

##### `SummarizationSectionsInput`<sup>Optional</sup> <a name="SummarizationSectionsInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSectionsInput"></a>

```go
func SummarizationSectionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetDefinition"></a>

```go
func ResetDefinition()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowGeneratorSummarizationContextOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowGeneratorSummarizationContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.putFewShotExamples">PutFewShotExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.putSummarizationSections">PutSummarizationSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetFewShotExamples">ResetFewShotExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetOutputLanguageCode">ResetOutputLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetSummarizationSections">ResetSummarizationSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFewShotExamples` <a name="PutFewShotExamples" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.putFewShotExamples"></a>

```go
func PutFewShotExamples(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.putFewShotExamples.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSummarizationSections` <a name="PutSummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.putSummarizationSections"></a>

```go
func PutSummarizationSections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.putSummarizationSections.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFewShotExamples` <a name="ResetFewShotExamples" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetFewShotExamples"></a>

```go
func ResetFewShotExamples()
```

##### `ResetOutputLanguageCode` <a name="ResetOutputLanguageCode" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetOutputLanguageCode"></a>

```go
func ResetOutputLanguageCode()
```

##### `ResetSummarizationSections` <a name="ResetSummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetSummarizationSections"></a>

```go
func ResetSummarizationSections()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamples">FewShotExamples</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.summarizationSections">SummarizationSections</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList">GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamplesInput">FewShotExamplesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCodeInput">OutputLanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.summarizationSectionsInput">SummarizationSectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCode">OutputLanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FewShotExamples`<sup>Required</sup> <a name="FewShotExamples" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamples"></a>

```go
func FewShotExamples() GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList">GoogleDialogflowGeneratorSummarizationContextFewShotExamplesList</a>

---

##### `SummarizationSections`<sup>Required</sup> <a name="SummarizationSections" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.summarizationSections"></a>

```go
func SummarizationSections() GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList">GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList</a>

---

##### `FewShotExamplesInput`<sup>Optional</sup> <a name="FewShotExamplesInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamplesInput"></a>

```go
func FewShotExamplesInput() interface{}
```

- *Type:* interface{}

---

##### `OutputLanguageCodeInput`<sup>Optional</sup> <a name="OutputLanguageCodeInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCodeInput"></a>

```go
func OutputLanguageCodeInput() *string
```

- *Type:* *string

---

##### `SummarizationSectionsInput`<sup>Optional</sup> <a name="SummarizationSectionsInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.summarizationSectionsInput"></a>

```go
func SummarizationSectionsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `OutputLanguageCode`<sup>Required</sup> <a name="OutputLanguageCode" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCode"></a>

```go
func OutputLanguageCode() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDialogflowGeneratorSummarizationContext
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContext">GoogleDialogflowGeneratorSummarizationContext</a>

---


### GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList <a name="GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.get"></a>

```go
func Get(index *f64) GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference <a name="GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetDefinition"></a>

```go
func ResetDefinition()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDialogflowGeneratorTimeoutsOutputReference <a name="GoogleDialogflowGeneratorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googledialogflowgenerator"

googledialogflowgenerator.NewGoogleDialogflowGeneratorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDialogflowGeneratorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDialogflowGenerator.GoogleDialogflowGeneratorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



