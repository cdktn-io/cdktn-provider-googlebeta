# `googleFirestoreChangeStream` Submodule <a name="`googleFirestoreChangeStream` Submodule" id="@cdktn/provider-google-beta.googleFirestoreChangeStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreChangeStream <a name="GoogleFirestoreChangeStream" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream google_firestore_change_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlefirestorechangestream"

googlefirestorechangestream.NewGoogleFirestoreChangeStream(scope Construct, id *string, config GoogleFirestoreChangeStreamConfig) GoogleFirestoreChangeStream
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig">GoogleFirestoreChangeStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig">GoogleFirestoreChangeStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putCollectionGroupScope">PutCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putDatabaseScope">PutDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetCollectionGroupScope">ResetCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabaseScope">ResetDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCollectionGroupScope` <a name="PutCollectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putCollectionGroupScope"></a>

```go
func PutCollectionGroupScope(value GoogleFirestoreChangeStreamCollectionGroupScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putCollectionGroupScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

---

##### `PutDatabaseScope` <a name="PutDatabaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putDatabaseScope"></a>

```go
func PutDatabaseScope(value GoogleFirestoreChangeStreamDatabaseScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putDatabaseScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirestoreChangeStreamTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

---

##### `ResetCollectionGroupScope` <a name="ResetCollectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetCollectionGroupScope"></a>

```go
func ResetCollectionGroupScope()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDatabaseScope` <a name="ResetDatabaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabaseScope"></a>

```go
func ResetDatabaseScope()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirestoreChangeStream resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlefirestorechangestream"

googlefirestorechangestream.GoogleFirestoreChangeStream_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlefirestorechangestream"

googlefirestorechangestream.GoogleFirestoreChangeStream_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlefirestorechangestream"

googlefirestorechangestream.GoogleFirestoreChangeStream_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlefirestorechangestream"

googlefirestorechangestream.GoogleFirestoreChangeStream_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleFirestoreChangeStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirestoreChangeStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirestoreChangeStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreChangeStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScope">CollectionGroupScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference">GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScope">DatabaseScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference">GoogleFirestoreChangeStreamDatabaseScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference">GoogleFirestoreChangeStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScopeInput">CollectionGroupScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScopeInput">DatabaseScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriod">RetentionPeriod</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollectionGroupScope`<sup>Required</sup> <a name="CollectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScope"></a>

```go
func CollectionGroupScope() GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference">GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DatabaseScope`<sup>Required</sup> <a name="DatabaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScope"></a>

```go
func DatabaseScope() GoogleFirestoreChangeStreamDatabaseScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference">GoogleFirestoreChangeStreamDatabaseScopeOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeouts"></a>

```go
func Timeouts() GoogleFirestoreChangeStreamTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference">GoogleFirestoreChangeStreamTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CollectionGroupScopeInput`<sup>Optional</sup> <a name="CollectionGroupScopeInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScopeInput"></a>

```go
func CollectionGroupScopeInput() GoogleFirestoreChangeStreamCollectionGroupScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DatabaseScopeInput`<sup>Optional</sup> <a name="DatabaseScopeInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScopeInput"></a>

```go
func DatabaseScopeInput() GoogleFirestoreChangeStreamDatabaseScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriodInput"></a>

```go
func RetentionPeriodInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriod"></a>

```go
func RetentionPeriod() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreChangeStreamCollectionGroupScope <a name="GoogleFirestoreChangeStreamCollectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlefirestorechangestream"

&googlefirestorechangestream.GoogleFirestoreChangeStreamCollectionGroupScope {
	CollectionGroupId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope.property.collectionGroupId">CollectionGroupId</a></code> | <code>*string</code> | The ID of the collection group to track. |

---

##### `CollectionGroupId`<sup>Required</sup> <a name="CollectionGroupId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope.property.collectionGroupId"></a>

```go
CollectionGroupId *string
```

- *Type:* *string

The ID of the collection group to track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#collection_group_id GoogleFirestoreChangeStream#collection_group_id}

---

### GoogleFirestoreChangeStreamConfig <a name="GoogleFirestoreChangeStreamConfig" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlefirestorechangestream"

&googlefirestorechangestream.GoogleFirestoreChangeStreamConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RetentionPeriod: *string,
	CollectionGroupScope: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope,
	Database: *string,
	DatabaseScope: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope,
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.name">Name</a></code> | <code>*string</code> | The ID to use for the change stream, which will become the final component of the change stream's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.retentionPeriod">RetentionPeriod</a></code> | <code>*string</code> | The duration for which change stream data is retained. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.collectionGroupScope">CollectionGroupScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | collection_group_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.database">Database</a></code> | <code>*string</code> | The Firestore database ID. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.databaseScope">DatabaseScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | database_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#id GoogleFirestoreChangeStream#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#project GoogleFirestoreChangeStream#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID to use for the change stream, which will become the final component of the change stream's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#name GoogleFirestoreChangeStream#name}

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.retentionPeriod"></a>

```go
RetentionPeriod *string
```

- *Type:* *string

The duration for which change stream data is retained.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "86400s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#retention_period GoogleFirestoreChangeStream#retention_period}

---

##### `CollectionGroupScope`<sup>Optional</sup> <a name="CollectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.collectionGroupScope"></a>

```go
CollectionGroupScope GoogleFirestoreChangeStreamCollectionGroupScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

collection_group_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#collection_group_scope GoogleFirestoreChangeStream#collection_group_scope}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The Firestore database ID. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#database GoogleFirestoreChangeStream#database}

---

##### `DatabaseScope`<sup>Optional</sup> <a name="DatabaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.databaseScope"></a>

```go
DatabaseScope GoogleFirestoreChangeStreamDatabaseScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

database_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#database_scope GoogleFirestoreChangeStream#database_scope}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#deletion_policy GoogleFirestoreChangeStream#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#id GoogleFirestoreChangeStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#project GoogleFirestoreChangeStream#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.timeouts"></a>

```go
Timeouts GoogleFirestoreChangeStreamTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#timeouts GoogleFirestoreChangeStream#timeouts}

---

### GoogleFirestoreChangeStreamDatabaseScope <a name="GoogleFirestoreChangeStreamDatabaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlefirestorechangestream"

&googlefirestorechangestream.GoogleFirestoreChangeStreamDatabaseScope {

}
```


### GoogleFirestoreChangeStreamTimeouts <a name="GoogleFirestoreChangeStreamTimeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlefirestorechangestream"

&googlefirestorechangestream.GoogleFirestoreChangeStreamTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#create GoogleFirestoreChangeStream#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#delete GoogleFirestoreChangeStream#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#update GoogleFirestoreChangeStream#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#create GoogleFirestoreChangeStream#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#delete GoogleFirestoreChangeStream#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_firestore_change_stream#update GoogleFirestoreChangeStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference <a name="GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlefirestorechangestream"

googlefirestorechangestream.NewGoogleFirestoreChangeStreamCollectionGroupScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput">CollectionGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId">CollectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollectionGroupIdInput`<sup>Optional</sup> <a name="CollectionGroupIdInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput"></a>

```go
func CollectionGroupIdInput() *string
```

- *Type:* *string

---

##### `CollectionGroupId`<sup>Required</sup> <a name="CollectionGroupId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId"></a>

```go
func CollectionGroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirestoreChangeStreamCollectionGroupScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

---


### GoogleFirestoreChangeStreamDatabaseScopeOutputReference <a name="GoogleFirestoreChangeStreamDatabaseScopeOutputReference" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlefirestorechangestream"

googlefirestorechangestream.NewGoogleFirestoreChangeStreamDatabaseScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirestoreChangeStreamDatabaseScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFirestoreChangeStreamDatabaseScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

---


### GoogleFirestoreChangeStreamTimeoutsOutputReference <a name="GoogleFirestoreChangeStreamTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlefirestorechangestream"

googlefirestorechangestream.NewGoogleFirestoreChangeStreamTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirestoreChangeStreamTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



