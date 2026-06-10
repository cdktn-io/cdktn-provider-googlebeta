# `googleFirebaseStorageDefaultBucket` Submodule <a name="`googleFirebaseStorageDefaultBucket` Submodule" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseStorageDefaultBucket <a name="GoogleFirebaseStorageDefaultBucket" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket google_firebase_storage_default_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebasestoragedefaultbucket"

googlefirebasestoragedefaultbucket.NewGoogleFirebaseStorageDefaultBucket(scope Construct, id *string, config GoogleFirebaseStorageDefaultBucketConfig) GoogleFirebaseStorageDefaultBucket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig">GoogleFirebaseStorageDefaultBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig">GoogleFirebaseStorageDefaultBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirebaseStorageDefaultBucketTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseStorageDefaultBucket resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebasestoragedefaultbucket"

googlefirebasestoragedefaultbucket.GoogleFirebaseStorageDefaultBucket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebasestoragedefaultbucket"

googlefirebasestoragedefaultbucket.GoogleFirebaseStorageDefaultBucket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebasestoragedefaultbucket"

googlefirebasestoragedefaultbucket.GoogleFirebaseStorageDefaultBucket_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebasestoragedefaultbucket"

googlefirebasestoragedefaultbucket.GoogleFirebaseStorageDefaultBucket_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleFirebaseStorageDefaultBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirebaseStorageDefaultBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirebaseStorageDefaultBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseStorageDefaultBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.bucket">Bucket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList">GoogleFirebaseStorageDefaultBucketBucketList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference">GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.bucket"></a>

```go
func Bucket() GoogleFirebaseStorageDefaultBucketBucketList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList">GoogleFirebaseStorageDefaultBucketBucketList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeouts"></a>

```go
func Timeouts() GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference">GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseStorageDefaultBucketBucket <a name="GoogleFirebaseStorageDefaultBucketBucket" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebasestoragedefaultbucket"

&googlefirebasestoragedefaultbucket.GoogleFirebaseStorageDefaultBucketBucket {

}
```


### GoogleFirebaseStorageDefaultBucketConfig <a name="GoogleFirebaseStorageDefaultBucketConfig" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebasestoragedefaultbucket"

&googlefirebasestoragedefaultbucket.GoogleFirebaseStorageDefaultBucketConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.location">Location</a></code> | <code>*string</code> | The ID of the location where the default Google Cloud Storage bucket will be created. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#id GoogleFirebaseStorageDefaultBucket#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#project GoogleFirebaseStorageDefaultBucket#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The ID of the location where the default Google Cloud Storage bucket will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#location GoogleFirebaseStorageDefaultBucket#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#deletion_policy GoogleFirebaseStorageDefaultBucket#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#id GoogleFirebaseStorageDefaultBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#project GoogleFirebaseStorageDefaultBucket#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketConfig.property.timeouts"></a>

```go
Timeouts GoogleFirebaseStorageDefaultBucketTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts">GoogleFirebaseStorageDefaultBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#timeouts GoogleFirebaseStorageDefaultBucket#timeouts}

---

### GoogleFirebaseStorageDefaultBucketTimeouts <a name="GoogleFirebaseStorageDefaultBucketTimeouts" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebasestoragedefaultbucket"

&googlefirebasestoragedefaultbucket.GoogleFirebaseStorageDefaultBucketTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#create GoogleFirebaseStorageDefaultBucket#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#delete GoogleFirebaseStorageDefaultBucket#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#create GoogleFirebaseStorageDefaultBucket#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_storage_default_bucket#delete GoogleFirebaseStorageDefaultBucket#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseStorageDefaultBucketBucketList <a name="GoogleFirebaseStorageDefaultBucketBucketList" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebasestoragedefaultbucket"

googlefirebasestoragedefaultbucket.NewGoogleFirebaseStorageDefaultBucketBucketList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleFirebaseStorageDefaultBucketBucketList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.get"></a>

```go
func Get(index *f64) GoogleFirebaseStorageDefaultBucketBucketOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleFirebaseStorageDefaultBucketBucketOutputReference <a name="GoogleFirebaseStorageDefaultBucketBucketOutputReference" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebasestoragedefaultbucket"

googlefirebasestoragedefaultbucket.NewGoogleFirebaseStorageDefaultBucketBucketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleFirebaseStorageDefaultBucketBucketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.bucketId">BucketId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket">GoogleFirebaseStorageDefaultBucketBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.bucketId"></a>

```go
func BucketId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucketOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirebaseStorageDefaultBucketBucket
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketBucket">GoogleFirebaseStorageDefaultBucketBucket</a>

---


### GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference <a name="GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlefirebasestoragedefaultbucket"

googlefirebasestoragedefaultbucket.NewGoogleFirebaseStorageDefaultBucketTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseStorageDefaultBucket.GoogleFirebaseStorageDefaultBucketTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



