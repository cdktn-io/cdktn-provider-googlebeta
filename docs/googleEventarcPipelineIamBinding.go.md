# `googleEventarcPipelineIamBinding` Submodule <a name="`googleEventarcPipelineIamBinding` Submodule" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEventarcPipelineIamBinding <a name="GoogleEventarcPipelineIamBinding" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding google_eventarc_pipeline_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleeventarcpipelineiambinding"

googleeventarcpipelineiambinding.NewGoogleEventarcPipelineIamBinding(scope Construct, id *string, config GoogleEventarcPipelineIamBindingConfig) GoogleEventarcPipelineIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig">GoogleEventarcPipelineIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig">GoogleEventarcPipelineIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.putCondition"></a>

```go
func PutCondition(value GoogleEventarcPipelineIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleEventarcPipelineIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleeventarcpipelineiambinding"

googleeventarcpipelineiambinding.GoogleEventarcPipelineIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleeventarcpipelineiambinding"

googleeventarcpipelineiambinding.GoogleEventarcPipelineIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleeventarcpipelineiambinding"

googleeventarcpipelineiambinding.GoogleEventarcPipelineIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleeventarcpipelineiambinding"

googleeventarcpipelineiambinding.GoogleEventarcPipelineIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleEventarcPipelineIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleEventarcPipelineIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleEventarcPipelineIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleEventarcPipelineIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference">GoogleEventarcPipelineIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.pipelineIdInput">PipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.condition"></a>

```go
func Condition() GoogleEventarcPipelineIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference">GoogleEventarcPipelineIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.conditionInput"></a>

```go
func ConditionInput() GoogleEventarcPipelineIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.pipelineIdInput"></a>

```go
func PipelineIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEventarcPipelineIamBindingCondition <a name="GoogleEventarcPipelineIamBindingCondition" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleeventarcpipelineiambinding"

&googleeventarcpipelineiambinding.GoogleEventarcPipelineIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#expression GoogleEventarcPipelineIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#title GoogleEventarcPipelineIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#description GoogleEventarcPipelineIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#expression GoogleEventarcPipelineIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#title GoogleEventarcPipelineIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#description GoogleEventarcPipelineIamBinding#description}.

---

### GoogleEventarcPipelineIamBindingConfig <a name="GoogleEventarcPipelineIamBindingConfig" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleeventarcpipelineiambinding"

&googleeventarcpipelineiambinding.GoogleEventarcPipelineIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	PipelineId: *string,
	Role: *string,
	Condition: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#members GoogleEventarcPipelineIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.pipelineId">PipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#pipeline_id GoogleEventarcPipelineIamBinding#pipeline_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#role GoogleEventarcPipelineIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#id GoogleEventarcPipelineIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#location GoogleEventarcPipelineIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#project GoogleEventarcPipelineIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#members GoogleEventarcPipelineIamBinding#members}.

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.pipelineId"></a>

```go
PipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#pipeline_id GoogleEventarcPipelineIamBinding#pipeline_id}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#role GoogleEventarcPipelineIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.condition"></a>

```go
Condition GoogleEventarcPipelineIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#condition GoogleEventarcPipelineIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#id GoogleEventarcPipelineIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#location GoogleEventarcPipelineIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_eventarc_pipeline_iam_binding#project GoogleEventarcPipelineIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEventarcPipelineIamBindingConditionOutputReference <a name="GoogleEventarcPipelineIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleeventarcpipelineiambinding"

googleeventarcpipelineiambinding.NewGoogleEventarcPipelineIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleEventarcPipelineIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleEventarcPipelineIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcPipelineIamBinding.GoogleEventarcPipelineIamBindingCondition">GoogleEventarcPipelineIamBindingCondition</a>

---



