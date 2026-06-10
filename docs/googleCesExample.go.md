# `googleCesExample` Submodule <a name="`googleCesExample` Submodule" id="@cdktn/provider-google-beta.googleCesExample"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesExample <a name="GoogleCesExample" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example google_ces_example}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.NewGoogleCesExample(scope Construct, id *string, config GoogleCesExampleConfig) GoogleCesExample
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig">GoogleCesExampleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig">GoogleCesExampleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages">PutMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetEntryAgent">ResetEntryAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMessages` <a name="PutMessages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages"></a>

```go
func PutMessages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCesExampleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEntryAgent` <a name="ResetEntryAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetEntryAgent"></a>

```go
func ResetEntryAgent()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetId"></a>

```go
func ResetId()
```

##### `ResetMessages` <a name="ResetMessages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetMessages"></a>

```go
func ResetMessages()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesExample resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.GoogleCesExample_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.GoogleCesExample_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.GoogleCesExample_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.GoogleCesExample_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleCesExample resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCesExample to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCesExample that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesExample to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.invalid">Invalid</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messages">Messages</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList">GoogleCesExampleMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference">GoogleCesExampleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.appInput">AppInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgentInput">EntryAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleIdInput">ExampleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messagesInput">MessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.app">App</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgent">EntryAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleId">ExampleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Invalid`<sup>Required</sup> <a name="Invalid" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.invalid"></a>

```go
func Invalid() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messages"></a>

```go
func Messages() GoogleCesExampleMessagesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList">GoogleCesExampleMessagesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeouts"></a>

```go
func Timeouts() GoogleCesExampleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference">GoogleCesExampleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.appInput"></a>

```go
func AppInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EntryAgentInput`<sup>Optional</sup> <a name="EntryAgentInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgentInput"></a>

```go
func EntryAgentInput() *string
```

- *Type:* *string

---

##### `ExampleIdInput`<sup>Optional</sup> <a name="ExampleIdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleIdInput"></a>

```go
func ExampleIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messagesInput"></a>

```go
func MessagesInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.app"></a>

```go
func App() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntryAgent`<sup>Required</sup> <a name="EntryAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgent"></a>

```go
func EntryAgent() *string
```

- *Type:* *string

---

##### `ExampleId`<sup>Required</sup> <a name="ExampleId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleId"></a>

```go
func ExampleId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesExampleConfig <a name="GoogleCesExampleConfig" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

&googlecesexample.GoogleCesExampleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	App: *string,
	DisplayName: *string,
	ExampleId: *string,
	Location: *string,
	DeletionPolicy: *string,
	Description: *string,
	EntryAgent: *string,
	Id: *string,
	Messages: interface{},
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesExample.GoogleCesExampleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.app">App</a></code> | <code>*string</code> | Resource ID segment making up resource 'name', defining the app the example belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.exampleId">ExampleId</a></code> | <code>*string</code> | The ID to use for the example, which will become the final component of the example's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name', defining what region the parent app is in. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.entryAgent">EntryAgent</a></code> | <code>*string</code> | The agent that initially handles the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#id GoogleCesExample#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.messages">Messages</a></code> | <code>interface{}</code> | messages block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#project GoogleCesExample#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.app"></a>

```go
App *string
```

- *Type:* *string

Resource ID segment making up resource 'name', defining the app the example belongs to.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#app GoogleCesExample#app}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#display_name GoogleCesExample#display_name}

---

##### `ExampleId`<sup>Required</sup> <a name="ExampleId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.exampleId"></a>

```go
ExampleId *string
```

- *Type:* *string

The ID to use for the example, which will become the final component of the example's resource name.

In Terraform, this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#example_id GoogleCesExample#example_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name', defining what region the parent app is in.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#location GoogleCesExample#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#deletion_policy GoogleCesExample#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#description GoogleCesExample#description}

---

##### `EntryAgent`<sup>Optional</sup> <a name="EntryAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.entryAgent"></a>

```go
EntryAgent *string
```

- *Type:* *string

The agent that initially handles the conversation.

If not specified, the
example represents a conversation that is handled by the root agent.
Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#entry_agent GoogleCesExample#entry_agent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#id GoogleCesExample#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.messages"></a>

```go
Messages interface{}
```

- *Type:* interface{}

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#messages GoogleCesExample#messages}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#project GoogleCesExample#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.timeouts"></a>

```go
Timeouts GoogleCesExampleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#timeouts GoogleCesExample#timeouts}

---

### GoogleCesExampleMessages <a name="GoogleCesExampleMessages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

&googlecesexample.GoogleCesExampleMessages {
	Chunks: interface{},
	Role: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.chunks">Chunks</a></code> | <code>interface{}</code> | chunks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.role">Role</a></code> | <code>*string</code> | The role within the conversation, e.g., user, agent. |

---

##### `Chunks`<sup>Optional</sup> <a name="Chunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.chunks"></a>

```go
Chunks interface{}
```

- *Type:* interface{}

chunks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#chunks GoogleCesExample#chunks}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.role"></a>

```go
Role *string
```

- *Type:* *string

The role within the conversation, e.g., user, agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#role GoogleCesExample#role}

---

### GoogleCesExampleMessagesChunks <a name="GoogleCesExampleMessagesChunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

&googlecesexample.GoogleCesExampleMessagesChunks {
	AgentTransfer: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer,
	Image: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesExample.GoogleCesExampleMessagesChunksImage,
	Text: *string,
	ToolCall: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesExample.GoogleCesExampleMessagesChunksToolCall,
	ToolResponse: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesExample.GoogleCesExampleMessagesChunksToolResponse,
	UpdatedVariables: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.image">Image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | image block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.text">Text</a></code> | <code>*string</code> | Text data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolCall">ToolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | tool_call block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolResponse">ToolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | tool_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.updatedVariables">UpdatedVariables</a></code> | <code>*string</code> | A struct represents variables that were updated in the conversation, keyed by variable names. |

---

##### `AgentTransfer`<sup>Optional</sup> <a name="AgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.agentTransfer"></a>

```go
AgentTransfer GoogleCesExampleMessagesChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#agent_transfer GoogleCesExample#agent_transfer}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.image"></a>

```go
Image GoogleCesExampleMessagesChunksImage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#image GoogleCesExample#image}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.text"></a>

```go
Text *string
```

- *Type:* *string

Text data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#text GoogleCesExample#text}

---

##### `ToolCall`<sup>Optional</sup> <a name="ToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolCall"></a>

```go
ToolCall GoogleCesExampleMessagesChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

tool_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool_call GoogleCesExample#tool_call}

---

##### `ToolResponse`<sup>Optional</sup> <a name="ToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolResponse"></a>

```go
ToolResponse GoogleCesExampleMessagesChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool_response GoogleCesExample#tool_response}

---

##### `UpdatedVariables`<sup>Optional</sup> <a name="UpdatedVariables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.updatedVariables"></a>

```go
UpdatedVariables *string
```

- *Type:* *string

A struct represents variables that were updated in the conversation, keyed by variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#updated_variables GoogleCesExample#updated_variables}

---

### GoogleCesExampleMessagesChunksAgentTransfer <a name="GoogleCesExampleMessagesChunksAgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

&googlecesexample.GoogleCesExampleMessagesChunksAgentTransfer {
	TargetAgent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.property.targetAgent">TargetAgent</a></code> | <code>*string</code> | The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |

---

##### `TargetAgent`<sup>Required</sup> <a name="TargetAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.property.targetAgent"></a>

```go
TargetAgent *string
```

- *Type:* *string

The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#target_agent GoogleCesExample#target_agent}

---

### GoogleCesExampleMessagesChunksImage <a name="GoogleCesExampleMessagesChunksImage" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

&googlecesexample.GoogleCesExampleMessagesChunksImage {
	Data: *string,
	MimeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.data">Data</a></code> | <code>*string</code> | Raw bytes of the image. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.mimeType">MimeType</a></code> | <code>*string</code> | The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp. |

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.data"></a>

```go
Data *string
```

- *Type:* *string

Raw bytes of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#data GoogleCesExample#data}

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.mimeType"></a>

```go
MimeType *string
```

- *Type:* *string

The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#mime_type GoogleCesExample#mime_type}

---

### GoogleCesExampleMessagesChunksToolCall <a name="GoogleCesExampleMessagesChunksToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

&googlecesexample.GoogleCesExampleMessagesChunksToolCall {
	Args: *string,
	Id: *string,
	Tool: *string,
	ToolsetTool: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.args">Args</a></code> | <code>*string</code> | The input parameters and values for the tool in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.id">Id</a></code> | <code>*string</code> | The unique identifier of the tool call. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.tool">Tool</a></code> | <code>*string</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | toolset_tool block. |

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.args"></a>

```go
Args *string
```

- *Type:* *string

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#args GoogleCesExample#args}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique identifier of the tool call.

If populated, the client should
return the execution result with the matching ID in
ToolResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#id GoogleCesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.tool"></a>

```go
Tool *string
```

- *Type:* *string

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.toolsetTool"></a>

```go
ToolsetTool GoogleCesExampleMessagesChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}

---

### GoogleCesExampleMessagesChunksToolCallToolsetTool <a name="GoogleCesExampleMessagesChunksToolCallToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

&googlecesexample.GoogleCesExampleMessagesChunksToolCallToolsetTool {
	Toolset: *string,
	ToolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolset">Toolset</a></code> | <code>*string</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolId">ToolId</a></code> | <code>*string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolset"></a>

```go
Toolset *string
```

- *Type:* *string

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolId"></a>

```go
ToolId *string
```

- *Type:* *string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}

---

### GoogleCesExampleMessagesChunksToolResponse <a name="GoogleCesExampleMessagesChunksToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

&googlecesexample.GoogleCesExampleMessagesChunksToolResponse {
	Response: *string,
	Id: *string,
	Tool: *string,
	ToolsetTool: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.response">Response</a></code> | <code>*string</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.id">Id</a></code> | <code>*string</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.tool">Tool</a></code> | <code>*string</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.response"></a>

```go
Response *string
```

- *Type:* *string

The tool execution result in JSON object format.

Use "output" key to specify tool response and "error" key to specify
error details (if any). If "output" and "error" keys are not specified,
then whole "response" is treated as tool execution result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#response GoogleCesExample#response}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.id"></a>

```go
Id *string
```

- *Type:* *string

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#id GoogleCesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tool`<sup>Optional</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.tool"></a>

```go
Tool *string
```

- *Type:* *string

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}

---

##### `ToolsetTool`<sup>Optional</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.toolsetTool"></a>

```go
ToolsetTool GoogleCesExampleMessagesChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}

---

### GoogleCesExampleMessagesChunksToolResponseToolsetTool <a name="GoogleCesExampleMessagesChunksToolResponseToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

&googlecesexample.GoogleCesExampleMessagesChunksToolResponseToolsetTool {
	Toolset: *string,
	ToolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolset">Toolset</a></code> | <code>*string</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolId">ToolId</a></code> | <code>*string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolset"></a>

```go
Toolset *string
```

- *Type:* *string

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}

---

##### `ToolId`<sup>Optional</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolId"></a>

```go
ToolId *string
```

- *Type:* *string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}

---

### GoogleCesExampleTimeouts <a name="GoogleCesExampleTimeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

&googlecesexample.GoogleCesExampleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#create GoogleCesExample#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#delete GoogleCesExample#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#update GoogleCesExample#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#create GoogleCesExample#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#delete GoogleCesExample#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_example#update GoogleCesExample#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesExampleMessagesChunksAgentTransferOutputReference <a name="GoogleCesExampleMessagesChunksAgentTransferOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.NewGoogleCesExampleMessagesChunksAgentTransferOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesExampleMessagesChunksAgentTransferOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput">TargetAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent">TargetAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `TargetAgentInput`<sup>Optional</sup> <a name="TargetAgentInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput"></a>

```go
func TargetAgentInput() *string
```

- *Type:* *string

---

##### `TargetAgent`<sup>Required</sup> <a name="TargetAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent"></a>

```go
func TargetAgent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesExampleMessagesChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---


### GoogleCesExampleMessagesChunksImageOutputReference <a name="GoogleCesExampleMessagesChunksImageOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.NewGoogleCesExampleMessagesChunksImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesExampleMessagesChunksImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeTypeInput"></a>

```go
func MimeTypeInput() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesExampleMessagesChunksImage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---


### GoogleCesExampleMessagesChunksList <a name="GoogleCesExampleMessagesChunksList" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.NewGoogleCesExampleMessagesChunksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCesExampleMessagesChunksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get"></a>

```go
func Get(index *f64) GoogleCesExampleMessagesChunksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesExampleMessagesChunksOutputReference <a name="GoogleCesExampleMessagesChunksOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.NewGoogleCesExampleMessagesChunksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCesExampleMessagesChunksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer">PutAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall">PutToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse">PutToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetAgentTransfer">ResetAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolCall">ResetToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolResponse">ResetToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetUpdatedVariables">ResetUpdatedVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentTransfer` <a name="PutAgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer"></a>

```go
func PutAgentTransfer(value GoogleCesExampleMessagesChunksAgentTransfer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---

##### `PutImage` <a name="PutImage" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage"></a>

```go
func PutImage(value GoogleCesExampleMessagesChunksImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---

##### `PutToolCall` <a name="PutToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall"></a>

```go
func PutToolCall(value GoogleCesExampleMessagesChunksToolCall)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---

##### `PutToolResponse` <a name="PutToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse"></a>

```go
func PutToolResponse(value GoogleCesExampleMessagesChunksToolResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---

##### `ResetAgentTransfer` <a name="ResetAgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetAgentTransfer"></a>

```go
func ResetAgentTransfer()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetToolCall` <a name="ResetToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolCall"></a>

```go
func ResetToolCall()
```

##### `ResetToolResponse` <a name="ResetToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolResponse"></a>

```go
func ResetToolResponse()
```

##### `ResetUpdatedVariables` <a name="ResetUpdatedVariables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetUpdatedVariables"></a>

```go
func ResetUpdatedVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransfer">AgentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference">GoogleCesExampleMessagesChunksAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.image">Image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference">GoogleCesExampleMessagesChunksImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCall">ToolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference">GoogleCesExampleMessagesChunksToolCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponse">ToolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference">GoogleCesExampleMessagesChunksToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransferInput">AgentTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCallInput">ToolCallInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponseInput">ToolResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariablesInput">UpdatedVariablesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariables">UpdatedVariables</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentTransfer`<sup>Required</sup> <a name="AgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransfer"></a>

```go
func AgentTransfer() GoogleCesExampleMessagesChunksAgentTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference">GoogleCesExampleMessagesChunksAgentTransferOutputReference</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.image"></a>

```go
func Image() GoogleCesExampleMessagesChunksImageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference">GoogleCesExampleMessagesChunksImageOutputReference</a>

---

##### `ToolCall`<sup>Required</sup> <a name="ToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCall"></a>

```go
func ToolCall() GoogleCesExampleMessagesChunksToolCallOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference">GoogleCesExampleMessagesChunksToolCallOutputReference</a>

---

##### `ToolResponse`<sup>Required</sup> <a name="ToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponse"></a>

```go
func ToolResponse() GoogleCesExampleMessagesChunksToolResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference">GoogleCesExampleMessagesChunksToolResponseOutputReference</a>

---

##### `AgentTransferInput`<sup>Optional</sup> <a name="AgentTransferInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransferInput"></a>

```go
func AgentTransferInput() GoogleCesExampleMessagesChunksAgentTransfer
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.imageInput"></a>

```go
func ImageInput() GoogleCesExampleMessagesChunksImage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `ToolCallInput`<sup>Optional</sup> <a name="ToolCallInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCallInput"></a>

```go
func ToolCallInput() GoogleCesExampleMessagesChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---

##### `ToolResponseInput`<sup>Optional</sup> <a name="ToolResponseInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponseInput"></a>

```go
func ToolResponseInput() GoogleCesExampleMessagesChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---

##### `UpdatedVariablesInput`<sup>Optional</sup> <a name="UpdatedVariablesInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariablesInput"></a>

```go
func UpdatedVariablesInput() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `UpdatedVariables`<sup>Required</sup> <a name="UpdatedVariables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariables"></a>

```go
func UpdatedVariables() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesExampleMessagesChunksToolCallOutputReference <a name="GoogleCesExampleMessagesChunksToolCallOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.NewGoogleCesExampleMessagesChunksToolCallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesExampleMessagesChunksToolCallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool"></a>

```go
func PutToolsetTool(value GoogleCesExampleMessagesChunksToolCallToolsetTool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetTool"></a>

```go
func ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetToolsetTool"></a>

```go
func ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.argsInput">ArgsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolInput">ToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.args">Args</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.tool">Tool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetTool"></a>

```go
func ToolsetTool() GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.argsInput"></a>

```go
func ArgsInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolInput"></a>

```go
func ToolInput() *string
```

- *Type:* *string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput"></a>

```go
func ToolsetToolInput() GoogleCesExampleMessagesChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.args"></a>

```go
func Args() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.tool"></a>

```go
func Tool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesExampleMessagesChunksToolCall
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---


### GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference <a name="GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.NewGoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId"></a>

```go
func ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput"></a>

```go
func ToolIdInput() *string
```

- *Type:* *string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput"></a>

```go
func ToolsetInput() *string
```

- *Type:* *string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId"></a>

```go
func ToolId() *string
```

- *Type:* *string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset"></a>

```go
func Toolset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesExampleMessagesChunksToolCallToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---


### GoogleCesExampleMessagesChunksToolResponseOutputReference <a name="GoogleCesExampleMessagesChunksToolResponseOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.NewGoogleCesExampleMessagesChunksToolResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesExampleMessagesChunksToolResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool">PutToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetTool">ResetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool">ResetToolsetTool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutToolsetTool` <a name="PutToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool"></a>

```go
func PutToolsetTool(value GoogleCesExampleMessagesChunksToolResponseToolsetTool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetTool` <a name="ResetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetTool"></a>

```go
func ResetTool()
```

##### `ResetToolsetTool` <a name="ResetToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool"></a>

```go
func ResetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool">ToolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.responseInput">ResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolInput">ToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput">ToolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.response">Response</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.tool">Tool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ToolsetTool`<sup>Required</sup> <a name="ToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool"></a>

```go
func ToolsetTool() GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.responseInput"></a>

```go
func ResponseInput() *string
```

- *Type:* *string

---

##### `ToolInput`<sup>Optional</sup> <a name="ToolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolInput"></a>

```go
func ToolInput() *string
```

- *Type:* *string

---

##### `ToolsetToolInput`<sup>Optional</sup> <a name="ToolsetToolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput"></a>

```go
func ToolsetToolInput() GoogleCesExampleMessagesChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.response"></a>

```go
func Response() *string
```

- *Type:* *string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.tool"></a>

```go
func Tool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesExampleMessagesChunksToolResponse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---


### GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference <a name="GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.NewGoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId">ResetToolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolId` <a name="ResetToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId"></a>

```go
func ResetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput">ToolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId">ToolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset">Toolset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```go
func ToolIdInput() *string
```

- *Type:* *string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```go
func ToolsetInput() *string
```

- *Type:* *string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId"></a>

```go
func ToolId() *string
```

- *Type:* *string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset"></a>

```go
func Toolset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCesExampleMessagesChunksToolResponseToolsetTool
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---


### GoogleCesExampleMessagesList <a name="GoogleCesExampleMessagesList" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.NewGoogleCesExampleMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCesExampleMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get"></a>

```go
func Get(index *f64) GoogleCesExampleMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesExampleMessagesOutputReference <a name="GoogleCesExampleMessagesOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.NewGoogleCesExampleMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCesExampleMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks">PutChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetChunks">ResetChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChunks` <a name="PutChunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks"></a>

```go
func PutChunks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetChunks` <a name="ResetChunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetChunks"></a>

```go
func ResetChunks()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetRole"></a>

```go
func ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunks">Chunks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList">GoogleCesExampleMessagesChunksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunksInput">ChunksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Chunks`<sup>Required</sup> <a name="Chunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunks"></a>

```go
func Chunks() GoogleCesExampleMessagesChunksList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList">GoogleCesExampleMessagesChunksList</a>

---

##### `ChunksInput`<sup>Optional</sup> <a name="ChunksInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunksInput"></a>

```go
func ChunksInput() interface{}
```

- *Type:* interface{}

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCesExampleTimeoutsOutputReference <a name="GoogleCesExampleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecesexample"

googlecesexample.NewGoogleCesExampleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCesExampleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



