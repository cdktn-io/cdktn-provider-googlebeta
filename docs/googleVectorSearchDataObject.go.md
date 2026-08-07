# `googleVectorSearchDataObject` Submodule <a name="`googleVectorSearchDataObject` Submodule" id="@cdktn/provider-google-beta.googleVectorSearchDataObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVectorSearchDataObject <a name="GoogleVectorSearchDataObject" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object google_vector_search_data_object}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

googlevectorsearchdataobject.NewGoogleVectorSearchDataObject(scope Construct, id *string, config GoogleVectorSearchDataObjectConfig) GoogleVectorSearchDataObject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig">GoogleVectorSearchDataObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig">GoogleVectorSearchDataObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putVectors">PutVectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetVectors">ResetVectors</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVectorSearchDataObjectTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

---

##### `PutVectors` <a name="PutVectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putVectors"></a>

```go
func PutVectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putVectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetData` <a name="ResetData" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetData"></a>

```go
func ResetData()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVectors` <a name="ResetVectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetVectors"></a>

```go
func ResetVectors()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVectorSearchDataObject resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

googlevectorsearchdataobject.GoogleVectorSearchDataObject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

googlevectorsearchdataobject.GoogleVectorSearchDataObject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

googlevectorsearchdataobject.GoogleVectorSearchDataObject_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

googlevectorsearchdataobject.GoogleVectorSearchDataObject_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleVectorSearchDataObject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVectorSearchDataObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVectorSearchDataObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVectorSearchDataObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference">GoogleVectorSearchDataObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectors">Vectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList">GoogleVectorSearchDataObjectVectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectIdInput">DataObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectorsInput">VectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectId">DataObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeouts"></a>

```go
func Timeouts() GoogleVectorSearchDataObjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference">GoogleVectorSearchDataObjectTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Vectors`<sup>Required</sup> <a name="Vectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectors"></a>

```go
func Vectors() GoogleVectorSearchDataObjectVectorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList">GoogleVectorSearchDataObjectVectorsList</a>

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `DataObjectIdInput`<sup>Optional</sup> <a name="DataObjectIdInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectIdInput"></a>

```go
func DataObjectIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VectorsInput`<sup>Optional</sup> <a name="VectorsInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectorsInput"></a>

```go
func VectorsInput() interface{}
```

- *Type:* interface{}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `DataObjectId`<sup>Required</sup> <a name="DataObjectId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectId"></a>

```go
func DataObjectId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVectorSearchDataObjectConfig <a name="GoogleVectorSearchDataObjectConfig" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

&googlevectorsearchdataobject.GoogleVectorSearchDataObjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CollectionId: *string,
	DataObjectId: *string,
	Location: *string,
	Data: *string,
	DeletionPolicy: *string,
	Etag: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts,
	Vectors: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dataObjectId">DataObjectId</a></code> | <code>*string</code> | ID of the DataObject to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.data">Data</a></code> | <code>*string</code> | The JSON data of the DataObject. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.etag">Etag</a></code> | <code>*string</code> | The etag of the DataObject, used for optimistic concurrency control on updates and deletes. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#id GoogleVectorSearchDataObject#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#project GoogleVectorSearchDataObject#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.vectors">Vectors</a></code> | <code>interface{}</code> | vectors block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#collection_id GoogleVectorSearchDataObject#collection_id}

---

##### `DataObjectId`<sup>Required</sup> <a name="DataObjectId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dataObjectId"></a>

```go
DataObjectId *string
```

- *Type:* *string

ID of the DataObject to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#data_object_id GoogleVectorSearchDataObject#data_object_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#location GoogleVectorSearchDataObject#location}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.data"></a>

```go
Data *string
```

- *Type:* *string

The JSON data of the DataObject.

Must be a JSON object whose field
names match the fields defined in the parent Collection's
'data_schema'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#data GoogleVectorSearchDataObject#data}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#deletion_policy GoogleVectorSearchDataObject#deletion_policy}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

The etag of the DataObject, used for optimistic concurrency control on updates and deletes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#etag GoogleVectorSearchDataObject#etag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#id GoogleVectorSearchDataObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#project GoogleVectorSearchDataObject#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.timeouts"></a>

```go
Timeouts GoogleVectorSearchDataObjectTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#timeouts GoogleVectorSearchDataObject#timeouts}

---

##### `Vectors`<sup>Optional</sup> <a name="Vectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.vectors"></a>

```go
Vectors interface{}
```

- *Type:* interface{}

vectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#vectors GoogleVectorSearchDataObject#vectors}

---

### GoogleVectorSearchDataObjectTimeouts <a name="GoogleVectorSearchDataObjectTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

&googlevectorsearchdataobject.GoogleVectorSearchDataObjectTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#create GoogleVectorSearchDataObject#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#delete GoogleVectorSearchDataObject#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#update GoogleVectorSearchDataObject#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#create GoogleVectorSearchDataObject#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#delete GoogleVectorSearchDataObject#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#update GoogleVectorSearchDataObject#update}.

---

### GoogleVectorSearchDataObjectVectors <a name="GoogleVectorSearchDataObjectVectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

&googlevectorsearchdataobject.GoogleVectorSearchDataObjectVectors {
	FieldName: *string,
	Dense: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense,
	Sparse: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.fieldName">FieldName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#field_name GoogleVectorSearchDataObject#field_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.dense">Dense</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a></code> | dense block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.sparse">Sparse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a></code> | sparse block. |

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.fieldName"></a>

```go
FieldName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#field_name GoogleVectorSearchDataObject#field_name}.

---

##### `Dense`<sup>Optional</sup> <a name="Dense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.dense"></a>

```go
Dense GoogleVectorSearchDataObjectVectorsDense
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

dense block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#dense GoogleVectorSearchDataObject#dense}

---

##### `Sparse`<sup>Optional</sup> <a name="Sparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.sparse"></a>

```go
Sparse GoogleVectorSearchDataObjectVectorsSparse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

sparse block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#sparse GoogleVectorSearchDataObject#sparse}

---

### GoogleVectorSearchDataObjectVectorsDense <a name="GoogleVectorSearchDataObjectVectorsDense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

&googlevectorsearchdataobject.GoogleVectorSearchDataObjectVectorsDense {
	Values: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense.property.values">Values</a></code> | <code>*[]*f64</code> | The float values of the dense vector. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense.property.values"></a>

```go
Values *[]*f64
```

- *Type:* *[]*f64

The float values of the dense vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#values GoogleVectorSearchDataObject#values}

---

### GoogleVectorSearchDataObjectVectorsSparse <a name="GoogleVectorSearchDataObjectVectorsSparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

&googlevectorsearchdataobject.GoogleVectorSearchDataObjectVectorsSparse {
	Indices: *[]*f64,
	Values: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.indices">Indices</a></code> | <code>*[]*f64</code> | The indices corresponding to the entries in 'values'. Must have the same length as 'values'. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.values">Values</a></code> | <code>*[]*f64</code> | The non-zero float values of the sparse vector. |

---

##### `Indices`<sup>Required</sup> <a name="Indices" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.indices"></a>

```go
Indices *[]*f64
```

- *Type:* *[]*f64

The indices corresponding to the entries in 'values'. Must have the same length as 'values'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#indices GoogleVectorSearchDataObject#indices}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.values"></a>

```go
Values *[]*f64
```

- *Type:* *[]*f64

The non-zero float values of the sparse vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#values GoogleVectorSearchDataObject#values}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVectorSearchDataObjectTimeoutsOutputReference <a name="GoogleVectorSearchDataObjectTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

googlevectorsearchdataobject.NewGoogleVectorSearchDataObjectTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVectorSearchDataObjectTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVectorSearchDataObjectVectorsDenseOutputReference <a name="GoogleVectorSearchDataObjectVectorsDenseOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

googlevectorsearchdataobject.NewGoogleVectorSearchDataObjectVectorsDenseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVectorSearchDataObjectVectorsDenseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVectorSearchDataObjectVectorsDense
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

---


### GoogleVectorSearchDataObjectVectorsList <a name="GoogleVectorSearchDataObjectVectorsList" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

googlevectorsearchdataobject.NewGoogleVectorSearchDataObjectVectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVectorSearchDataObjectVectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.get"></a>

```go
func Get(index *f64) GoogleVectorSearchDataObjectVectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVectorSearchDataObjectVectorsOutputReference <a name="GoogleVectorSearchDataObjectVectorsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

googlevectorsearchdataobject.NewGoogleVectorSearchDataObjectVectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVectorSearchDataObjectVectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putDense">PutDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putSparse">PutSparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetDense">ResetDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetSparse">ResetSparse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDense` <a name="PutDense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putDense"></a>

```go
func PutDense(value GoogleVectorSearchDataObjectVectorsDense)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putDense.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

---

##### `PutSparse` <a name="PutSparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putSparse"></a>

```go
func PutSparse(value GoogleVectorSearchDataObjectVectorsSparse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putSparse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

---

##### `ResetDense` <a name="ResetDense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetDense"></a>

```go
func ResetDense()
```

##### `ResetSparse` <a name="ResetSparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetSparse"></a>

```go
func ResetSparse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.dense">Dense</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference">GoogleVectorSearchDataObjectVectorsDenseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparse">Sparse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference">GoogleVectorSearchDataObjectVectorsSparseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.denseInput">DenseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparseInput">SparseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dense`<sup>Required</sup> <a name="Dense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.dense"></a>

```go
func Dense() GoogleVectorSearchDataObjectVectorsDenseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference">GoogleVectorSearchDataObjectVectorsDenseOutputReference</a>

---

##### `Sparse`<sup>Required</sup> <a name="Sparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparse"></a>

```go
func Sparse() GoogleVectorSearchDataObjectVectorsSparseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference">GoogleVectorSearchDataObjectVectorsSparseOutputReference</a>

---

##### `DenseInput`<sup>Optional</sup> <a name="DenseInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.denseInput"></a>

```go
func DenseInput() GoogleVectorSearchDataObjectVectorsDense
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldNameInput"></a>

```go
func FieldNameInput() *string
```

- *Type:* *string

---

##### `SparseInput`<sup>Optional</sup> <a name="SparseInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparseInput"></a>

```go
func SparseInput() GoogleVectorSearchDataObjectVectorsSparse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVectorSearchDataObjectVectorsSparseOutputReference <a name="GoogleVectorSearchDataObjectVectorsSparseOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevectorsearchdataobject"

googlevectorsearchdataobject.NewGoogleVectorSearchDataObjectVectorsSparseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVectorSearchDataObjectVectorsSparseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput">IndicesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indices">Indices</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndicesInput`<sup>Optional</sup> <a name="IndicesInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput"></a>

```go
func IndicesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Indices`<sup>Required</sup> <a name="Indices" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indices"></a>

```go
func Indices() *[]*f64
```

- *Type:* *[]*f64

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVectorSearchDataObjectVectorsSparse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

---



