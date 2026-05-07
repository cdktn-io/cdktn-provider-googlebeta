# `googleCloudRunServiceIamBinding` Submodule <a name="`googleCloudRunServiceIamBinding` Submodule" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunServiceIamBinding <a name="GoogleCloudRunServiceIamBinding" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding google_cloud_run_service_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v18/googlecloudrunserviceiambinding"

googlecloudrunserviceiambinding.NewGoogleCloudRunServiceIamBinding(scope Construct, id *string, config GoogleCloudRunServiceIamBindingConfig) GoogleCloudRunServiceIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig">GoogleCloudRunServiceIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig">GoogleCloudRunServiceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.putCondition"></a>

```go
func PutCondition(value GoogleCloudRunServiceIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition">GoogleCloudRunServiceIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudRunServiceIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v18/googlecloudrunserviceiambinding"

googlecloudrunserviceiambinding.GoogleCloudRunServiceIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v18/googlecloudrunserviceiambinding"

googlecloudrunserviceiambinding.GoogleCloudRunServiceIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v18/googlecloudrunserviceiambinding"

googlecloudrunserviceiambinding.GoogleCloudRunServiceIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v18/googlecloudrunserviceiambinding"

googlecloudrunserviceiambinding.GoogleCloudRunServiceIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleCloudRunServiceIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudRunServiceIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudRunServiceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudRunServiceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference">GoogleCloudRunServiceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition">GoogleCloudRunServiceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.condition"></a>

```go
func Condition() GoogleCloudRunServiceIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference">GoogleCloudRunServiceIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.conditionInput"></a>

```go
func ConditionInput() GoogleCloudRunServiceIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition">GoogleCloudRunServiceIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunServiceIamBindingCondition <a name="GoogleCloudRunServiceIamBindingCondition" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v18/googlecloudrunserviceiambinding"

&googlecloudrunserviceiambinding.GoogleCloudRunServiceIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#expression GoogleCloudRunServiceIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#title GoogleCloudRunServiceIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#description GoogleCloudRunServiceIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#expression GoogleCloudRunServiceIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#title GoogleCloudRunServiceIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#description GoogleCloudRunServiceIamBinding#description}.

---

### GoogleCloudRunServiceIamBindingConfig <a name="GoogleCloudRunServiceIamBindingConfig" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v18/googlecloudrunserviceiambinding"

&googlecloudrunserviceiambinding.GoogleCloudRunServiceIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	Role: *string,
	Service: *string,
	Condition: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v18.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#members GoogleCloudRunServiceIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#role GoogleCloudRunServiceIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#service GoogleCloudRunServiceIamBinding#service}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition">GoogleCloudRunServiceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#id GoogleCloudRunServiceIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#location GoogleCloudRunServiceIamBinding#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#project GoogleCloudRunServiceIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#members GoogleCloudRunServiceIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#role GoogleCloudRunServiceIamBinding#role}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#service GoogleCloudRunServiceIamBinding#service}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.condition"></a>

```go
Condition GoogleCloudRunServiceIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition">GoogleCloudRunServiceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#condition GoogleCloudRunServiceIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#id GoogleCloudRunServiceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#location GoogleCloudRunServiceIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_cloud_run_service_iam_binding#project GoogleCloudRunServiceIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunServiceIamBindingConditionOutputReference <a name="GoogleCloudRunServiceIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v18/googlecloudrunserviceiambinding"

googlecloudrunserviceiambinding.NewGoogleCloudRunServiceIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunServiceIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition">GoogleCloudRunServiceIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunServiceIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunServiceIamBinding.GoogleCloudRunServiceIamBindingCondition">GoogleCloudRunServiceIamBindingCondition</a>

---



