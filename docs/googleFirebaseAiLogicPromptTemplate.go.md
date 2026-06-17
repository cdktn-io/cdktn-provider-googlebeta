# `googleFirebaseAiLogicPromptTemplate` Submodule <a name="`googleFirebaseAiLogicPromptTemplate` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAiLogicPromptTemplate <a name="GoogleFirebaseAiLogicPromptTemplate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template google_firebase_ai_logic_prompt_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicprompttemplate"

googlefirebaseailogicprompttemplate.NewGoogleFirebaseAiLogicPromptTemplate(scope Construct, id *string, config GoogleFirebaseAiLogicPromptTemplateConfig) GoogleFirebaseAiLogicPromptTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig">GoogleFirebaseAiLogicPromptTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig">GoogleFirebaseAiLogicPromptTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetRegionalPropagationDisabled">ResetRegionalPropagationDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirebaseAiLogicPromptTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts">GoogleFirebaseAiLogicPromptTemplateTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegionalPropagationDisabled` <a name="ResetRegionalPropagationDisabled" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetRegionalPropagationDisabled"></a>

```go
func ResetRegionalPropagationDisabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseAiLogicPromptTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicprompttemplate"

googlefirebaseailogicprompttemplate.GoogleFirebaseAiLogicPromptTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicprompttemplate"

googlefirebaseailogicprompttemplate.GoogleFirebaseAiLogicPromptTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicprompttemplate"

googlefirebaseailogicprompttemplate.GoogleFirebaseAiLogicPromptTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicprompttemplate"

googlefirebaseailogicprompttemplate.GoogleFirebaseAiLogicPromptTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleFirebaseAiLogicPromptTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirebaseAiLogicPromptTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirebaseAiLogicPromptTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAiLogicPromptTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.locked">Locked</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.stateChangeTime">StateChangeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference">GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.regionalPropagationDisabledInput">RegionalPropagationDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateIdInput">TemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateStringInput">TemplateStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.regionalPropagationDisabled">RegionalPropagationDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateId">TemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateString">TemplateString</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.locked"></a>

```go
func Locked() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StateChangeTime`<sup>Required</sup> <a name="StateChangeTime" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.stateChangeTime"></a>

```go
func StateChangeTime() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.timeouts"></a>

```go
func Timeouts() GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference">GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionalPropagationDisabledInput`<sup>Optional</sup> <a name="RegionalPropagationDisabledInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.regionalPropagationDisabledInput"></a>

```go
func RegionalPropagationDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `TemplateIdInput`<sup>Optional</sup> <a name="TemplateIdInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateIdInput"></a>

```go
func TemplateIdInput() *string
```

- *Type:* *string

---

##### `TemplateStringInput`<sup>Optional</sup> <a name="TemplateStringInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateStringInput"></a>

```go
func TemplateStringInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RegionalPropagationDisabled`<sup>Required</sup> <a name="RegionalPropagationDisabled" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.regionalPropagationDisabled"></a>

```go
func RegionalPropagationDisabled() interface{}
```

- *Type:* interface{}

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateId"></a>

```go
func TemplateId() *string
```

- *Type:* *string

---

##### `TemplateString`<sup>Required</sup> <a name="TemplateString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.templateString"></a>

```go
func TemplateString() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAiLogicPromptTemplateConfig <a name="GoogleFirebaseAiLogicPromptTemplateConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicprompttemplate"

&googlefirebaseailogicprompttemplate.GoogleFirebaseAiLogicPromptTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	TemplateId: *string,
	TemplateString: *string,
	DeletionPolicy: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	RegionalPropagationDisabled: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.templateId">TemplateId</a></code> | <code>*string</code> | The unique ID of the PromptTemplate, which is the final component of the PromptTemplate's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.templateString">TemplateString</a></code> | <code>*string</code> | The [Dotprompt](https://google.github.io/dotprompt/getting-started) raw template string. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the PromptTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#id GoogleFirebaseAiLogicPromptTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#project GoogleFirebaseAiLogicPromptTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.regionalPropagationDisabled">RegionalPropagationDisabled</a></code> | <code>interface{}</code> | For the 'global' location only. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts">GoogleFirebaseAiLogicPromptTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#location GoogleFirebaseAiLogicPromptTemplate#location}

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.templateId"></a>

```go
TemplateId *string
```

- *Type:* *string

The unique ID of the PromptTemplate, which is the final component of the PromptTemplate's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#template_id GoogleFirebaseAiLogicPromptTemplate#template_id}

---

##### `TemplateString`<sup>Required</sup> <a name="TemplateString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.templateString"></a>

```go
TemplateString *string
```

- *Type:* *string

The [Dotprompt](https://google.github.io/dotprompt/getting-started) raw template string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#template_string GoogleFirebaseAiLogicPromptTemplate#template_string}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#deletion_policy GoogleFirebaseAiLogicPromptTemplate#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the PromptTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#display_name GoogleFirebaseAiLogicPromptTemplate#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#id GoogleFirebaseAiLogicPromptTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#project GoogleFirebaseAiLogicPromptTemplate#project}.

---

##### `RegionalPropagationDisabled`<sup>Optional</sup> <a name="RegionalPropagationDisabled" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.regionalPropagationDisabled"></a>

```go
RegionalPropagationDisabled interface{}
```

- *Type:* interface{}

For the 'global' location only.

If true, the write operation (create,
update, or delete) will apply to the global region only. Otherwise, the
operation will also propagate to all applicable regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#regional_propagation_disabled GoogleFirebaseAiLogicPromptTemplate#regional_propagation_disabled}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateConfig.property.timeouts"></a>

```go
Timeouts GoogleFirebaseAiLogicPromptTemplateTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts">GoogleFirebaseAiLogicPromptTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#timeouts GoogleFirebaseAiLogicPromptTemplate#timeouts}

---

### GoogleFirebaseAiLogicPromptTemplateTimeouts <a name="GoogleFirebaseAiLogicPromptTemplateTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicprompttemplate"

&googlefirebaseailogicprompttemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#create GoogleFirebaseAiLogicPromptTemplate#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#delete GoogleFirebaseAiLogicPromptTemplate#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#update GoogleFirebaseAiLogicPromptTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#create GoogleFirebaseAiLogicPromptTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#delete GoogleFirebaseAiLogicPromptTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template#update GoogleFirebaseAiLogicPromptTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference <a name="GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebaseailogicprompttemplate"

googlefirebaseailogicprompttemplate.NewGoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplate.GoogleFirebaseAiLogicPromptTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



