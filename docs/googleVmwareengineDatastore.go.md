# `googleVmwareengineDatastore` Submodule <a name="`googleVmwareengineDatastore` Submodule" id="@cdktn/provider-google-beta.googleVmwareengineDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareengineDatastore <a name="GoogleVmwareengineDatastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore google_vmwareengine_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

googlevmwareenginedatastore.NewGoogleVmwareengineDatastore(scope Construct, id *string, config GoogleVmwareengineDatastoreConfig) GoogleVmwareengineDatastore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig">GoogleVmwareengineDatastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig">GoogleVmwareengineDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putNfsDatastore">PutNfsDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNfsDatastore` <a name="PutNfsDatastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putNfsDatastore"></a>

```go
func PutNfsDatastore(value GoogleVmwareengineDatastoreNfsDatastore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putNfsDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVmwareengineDatastoreTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVmwareengineDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

googlevmwareenginedatastore.GoogleVmwareengineDatastore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

googlevmwareenginedatastore.GoogleVmwareengineDatastore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

googlevmwareenginedatastore.GoogleVmwareengineDatastore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

googlevmwareenginedatastore.GoogleVmwareengineDatastore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleVmwareengineDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVmwareengineDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVmwareengineDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVmwareengineDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.clusters">Clusters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nfsDatastore">NfsDatastore</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference">GoogleVmwareengineDatastoreNfsDatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference">GoogleVmwareengineDatastoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nfsDatastoreInput">NfsDatastoreInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Clusters`<sup>Required</sup> <a name="Clusters" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.clusters"></a>

```go
func Clusters() *[]*string
```

- *Type:* *[]*string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `NfsDatastore`<sup>Required</sup> <a name="NfsDatastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nfsDatastore"></a>

```go
func NfsDatastore() GoogleVmwareengineDatastoreNfsDatastoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference">GoogleVmwareengineDatastoreNfsDatastoreOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.timeouts"></a>

```go
func Timeouts() GoogleVmwareengineDatastoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference">GoogleVmwareengineDatastoreTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NfsDatastoreInput`<sup>Optional</sup> <a name="NfsDatastoreInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.nfsDatastoreInput"></a>

```go
func NfsDatastoreInput() GoogleVmwareengineDatastoreNfsDatastore
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareengineDatastoreConfig <a name="GoogleVmwareengineDatastoreConfig" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

&googlevmwareenginedatastore.GoogleVmwareengineDatastoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	NfsDatastore: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.name">Name</a></code> | <code>*string</code> | The user-provided identifier of the datastore to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.nfsDatastore">NfsDatastore</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a></code> | nfs_datastore block. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description for this datastore. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#id GoogleVmwareengineDatastore#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#project GoogleVmwareengineDatastore#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#location GoogleVmwareengineDatastore#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The user-provided identifier of the datastore to be created.

This identifier must be unique among each 'Datastore' within the parent
and becomes the final token in the name URI.
The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
  (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#name GoogleVmwareengineDatastore#name}

---

##### `NfsDatastore`<sup>Required</sup> <a name="NfsDatastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.nfsDatastore"></a>

```go
NfsDatastore GoogleVmwareengineDatastoreNfsDatastore
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a>

nfs_datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#nfs_datastore GoogleVmwareengineDatastore#nfs_datastore}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#deletion_policy GoogleVmwareengineDatastore#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description for this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#description GoogleVmwareengineDatastore#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#id GoogleVmwareengineDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#project GoogleVmwareengineDatastore#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreConfig.property.timeouts"></a>

```go
Timeouts GoogleVmwareengineDatastoreTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts">GoogleVmwareengineDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#timeouts GoogleVmwareengineDatastore#timeouts}

---

### GoogleVmwareengineDatastoreNfsDatastore <a name="GoogleVmwareengineDatastoreNfsDatastore" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

&googlevmwareenginedatastore.GoogleVmwareengineDatastoreNfsDatastore {
	GoogleFileService: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService,
	ThirdPartyFileService: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.property.googleFileService">GoogleFileService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | google_file_service block. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.property.thirdPartyFileService">ThirdPartyFileService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | third_party_file_service block. |

---

##### `GoogleFileService`<sup>Optional</sup> <a name="GoogleFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.property.googleFileService"></a>

```go
GoogleFileService GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

google_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#google_file_service GoogleVmwareengineDatastore#google_file_service}

---

##### `ThirdPartyFileService`<sup>Optional</sup> <a name="ThirdPartyFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore.property.thirdPartyFileService"></a>

```go
ThirdPartyFileService GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

third_party_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#third_party_file_service GoogleVmwareengineDatastore#third_party_file_service}

---

### GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService <a name="GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

&googlevmwareenginedatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService {
	FilestoreInstance: *string,
	NetappVolume: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance">FilestoreInstance</a></code> | <code>*string</code> | Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume">NetappVolume</a></code> | <code>*string</code> | Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume. |

---

##### `FilestoreInstance`<sup>Optional</sup> <a name="FilestoreInstance" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance"></a>

```go
FilestoreInstance *string
```

- *Type:* *string

Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#filestore_instance GoogleVmwareengineDatastore#filestore_instance}

---

##### `NetappVolume`<sup>Optional</sup> <a name="NetappVolume" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume"></a>

```go
NetappVolume *string
```

- *Type:* *string

Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#netapp_volume GoogleVmwareengineDatastore#netapp_volume}

---

### GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService <a name="GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

&googlevmwareenginedatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService {
	FileShare: *string,
	Network: *string,
	Servers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare">FileShare</a></code> | <code>*string</code> | Required Mount Folder name. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network">Network</a></code> | <code>*string</code> | Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers">Servers</a></code> | <code>*[]*string</code> | Server IP addresses of the NFS file service. |

---

##### `FileShare`<sup>Required</sup> <a name="FileShare" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare"></a>

```go
FileShare *string
```

- *Type:* *string

Required Mount Folder name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#file_share GoogleVmwareengineDatastore#file_share}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network"></a>

```go
Network *string
```

- *Type:* *string

Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#network GoogleVmwareengineDatastore#network}

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers"></a>

```go
Servers *[]*string
```

- *Type:* *[]*string

Server IP addresses of the NFS file service.

NFS v3, provide a single IP address or DNS name.
Multiple servers can be supported in future when NFS 4.1 protocol support
is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#servers GoogleVmwareengineDatastore#servers}

---

### GoogleVmwareengineDatastoreTimeouts <a name="GoogleVmwareengineDatastoreTimeouts" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

&googlevmwareenginedatastore.GoogleVmwareengineDatastoreTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#create GoogleVmwareengineDatastore#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#delete GoogleVmwareengineDatastore#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#update GoogleVmwareengineDatastore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#create GoogleVmwareengineDatastore#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#delete GoogleVmwareengineDatastore#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_vmwareengine_datastore#update GoogleVmwareengineDatastore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference <a name="GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

googlevmwareenginedatastore.NewGoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance">ResetFilestoreInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume">ResetNetappVolume</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilestoreInstance` <a name="ResetFilestoreInstance" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance"></a>

```go
func ResetFilestoreInstance()
```

##### `ResetNetappVolume` <a name="ResetNetappVolume" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume"></a>

```go
func ResetNetappVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput">FilestoreInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput">NetappVolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance">FilestoreInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume">NetappVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilestoreInstanceInput`<sup>Optional</sup> <a name="FilestoreInstanceInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput"></a>

```go
func FilestoreInstanceInput() *string
```

- *Type:* *string

---

##### `NetappVolumeInput`<sup>Optional</sup> <a name="NetappVolumeInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput"></a>

```go
func NetappVolumeInput() *string
```

- *Type:* *string

---

##### `FilestoreInstance`<sup>Required</sup> <a name="FilestoreInstance" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance"></a>

```go
func FilestoreInstance() *string
```

- *Type:* *string

---

##### `NetappVolume`<sup>Required</sup> <a name="NetappVolume" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume"></a>

```go
func NetappVolume() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---


### GoogleVmwareengineDatastoreNfsDatastoreOutputReference <a name="GoogleVmwareengineDatastoreNfsDatastoreOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

googlevmwareenginedatastore.NewGoogleVmwareengineDatastoreNfsDatastoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVmwareengineDatastoreNfsDatastoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService">PutGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService">PutThirdPartyFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService">ResetGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService">ResetThirdPartyFileService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGoogleFileService` <a name="PutGoogleFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService"></a>

```go
func PutGoogleFileService(value GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---

##### `PutThirdPartyFileService` <a name="PutThirdPartyFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService"></a>

```go
func PutThirdPartyFileService(value GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---

##### `ResetGoogleFileService` <a name="ResetGoogleFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService"></a>

```go
func ResetGoogleFileService()
```

##### `ResetThirdPartyFileService` <a name="ResetThirdPartyFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService"></a>

```go
func ResetThirdPartyFileService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService">GoogleFileService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService">ThirdPartyFileService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput">GoogleFileServiceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput">ThirdPartyFileServiceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GoogleFileService`<sup>Required</sup> <a name="GoogleFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService"></a>

```go
func GoogleFileService() GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a>

---

##### `ThirdPartyFileService`<sup>Required</sup> <a name="ThirdPartyFileService" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService"></a>

```go
func ThirdPartyFileService() GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a>

---

##### `GoogleFileServiceInput`<sup>Optional</sup> <a name="GoogleFileServiceInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput"></a>

```go
func GoogleFileServiceInput() GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService">GoogleVmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---

##### `ThirdPartyFileServiceInput`<sup>Optional</sup> <a name="ThirdPartyFileServiceInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput"></a>

```go
func ThirdPartyFileServiceInput() GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVmwareengineDatastoreNfsDatastore
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastore">GoogleVmwareengineDatastoreNfsDatastore</a>

---


### GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference <a name="GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

googlevmwareenginedatastore.NewGoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput">FileShareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput">ServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare">FileShare</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers">Servers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileShareInput`<sup>Optional</sup> <a name="FileShareInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput"></a>

```go
func FileShareInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ServersInput`<sup>Optional</sup> <a name="ServersInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput"></a>

```go
func ServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `FileShare`<sup>Required</sup> <a name="FileShare" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare"></a>

```go
func FileShare() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers"></a>

```go
func Servers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService">GoogleVmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---


### GoogleVmwareengineDatastoreTimeoutsOutputReference <a name="GoogleVmwareengineDatastoreTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevmwareenginedatastore"

googlevmwareenginedatastore.NewGoogleVmwareengineDatastoreTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVmwareengineDatastoreTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVmwareengineDatastore.GoogleVmwareengineDatastoreTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



